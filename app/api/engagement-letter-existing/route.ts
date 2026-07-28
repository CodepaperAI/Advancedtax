  import { createEngagementLetterPdf } from "@/lib/createEngagementLetterPdf";
  import { NextResponse } from "next/server";
  import { Resend } from "resend";
  
  export const runtime = "nodejs";

  const MAX_FIELD_LENGTH = 2000;
  const MAX_SIGNATURE_LENGTH = 5_000_000;

  type EngagementLetterPayload = {
    printedName?: unknown;
    email?: unknown;
    fees?: unknown;
    signatureDate?: unknown;
  };

  type EngagementLetterFields = {
    printedName: string;
    email: string;
    fees: string;
  signatureDate: string;
  };

  function getText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
    return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
  }

  function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function escapeHtml(value: string) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getConfig() {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      return null;
    }

    return { apiKey, from };
  }

  function createEmailText(fields: EngagementLetterFields) {
    return [
      "Signed Engagement Letter",
      "",
      `Printed Name: ${fields.printedName}`,
      `Email: ${fields.email}`,
      `Fees: ${fields.fees}`,
      `Date Signed: ${fields.signatureDate}`,
      "",
      "The client's signature is included in the HTML version of this email."
    ].join("\n");
  }

function createEmailHtml(fields: EngagementLetterFields) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">

      <p>Dear ${escapeHtml(fields.printedName)},</p>

      <p>Thank you for choosing <strong>Advanced Accounting Taxation &amp; Business Services</strong>.</p>

      <p>Please find your Engagement Letter attached to this email.</p>

      <p>Kindly review the attached document. If you agree with the terms of engagement, please sign the designated signature section and reply to this email with the signed PDF attached.</p>

      <p>If you have any questions or require any clarification before signing, please feel free to reply to this email or contact our office.</p>

      <p>We look forward to assisting you.</p>

      <br>

      <p>
        Kind regards,<br><br>

        <strong>Advanced Accounting Taxation &amp; Business Services</strong><br>
        📞 (02) 9734 0777<br>
        🌐 https://www.advancedtax.com.au
      </p>

    </div>
  `;
}


  export async function POST(request: Request) {
    let payload: EngagementLetterPayload;

    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Please complete the form and try again." },
        { status: 400 }
      );
    }

    const fields: EngagementLetterFields = {
      printedName: getText(payload.printedName, 160),
      email: getText(payload.email, 320),
      fees: getText(payload.fees, 100),
      signatureDate: getText(payload.signatureDate, 40),
    };

  console.log("Received fields:", fields);

  console.log({
    printedName: fields.printedName,
    email: fields.email,
    emailValid: isEmail(fields.email),
    fees: fields.fees,
    signatureDate: fields.signatureDate,
  });

  if (!fields.printedName) {
    return NextResponse.json({ error: "printedName is empty" }, { status: 400 });
  }

  if (!isEmail(fields.email)) {
    return NextResponse.json({ error: "email is invalid" }, { status: 400 });
  }

  if (!fields.fees) {
    return NextResponse.json({ error: "fees is empty" }, { status: 400 });
  }

  if (!fields.signatureDate) {
    return NextResponse.json({ error: "signatureDate is empty" }, { status: 400 });
  }

    console.log("Config:", getConfig());
    const config = getConfig();

    if (!config) {
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(config.apiKey);

    try {
    console.log("About to send email");

    console.log({
      from: config.from,
      to: "egarcia@advancedtax.com.au",
      replyTo: fields.email,
    });

const pdfBuffer = await createEngagementLetterPdf({
  printedName: fields.printedName,
  email: fields.email,
  fees: fields.fees,
  signatureDate: fields.signatureDate,
});

console.log("3. Sending internal email");
    await resend.emails.send({
      from: config.from,
      to: "egarcia@advancedtax.com.au",
      replyTo:  "egarcia@advancedtax.com.au",
      subject: ` Engagement Letter - ${fields.printedName}`,
      text: createEmailText(fields),
      html: `
  <p>Dear ${escapeHtml(fields.printedName)},</p>

  <p>Please find your <strong>Engagement Letter</strong> attached.</p>

  <p>Please review the document, sign the attached PDF, and reply to this email with the signed copy.</p>

  <p>If you have any questions, please contact us.</p>

  <p>Kind regards,<br>
  <strong>Advanced Accounting Taxation &amp; Business Services</strong></p>
  `,
      attachments: [
        {
          filename: `Engagement Letter - ${fields.printedName}.pdf`,
          content: pdfBuffer,
        },
      ],
    });
    const result = await resend.emails.send({
      from: config.from,
      to: fields.email,
      replyTo: "egarcia@advancedtax.com.au",
      subject: `Action Required: Please Sign and Return Your Engagement Letter - ${fields.printedName}`,
      text: `Dear ${fields.printedName},

  Please find your Engagement Letter attached.

  Kindly review the document, sign it, and reply to this email with the signed PDF attached.

  If you have any questions, please contact us.

  Kind regards,

  Advanced Accounting Taxation & Business Services`,
      html: createEmailHtml(fields),
      attachments: [
        {
          filename: `Engagement Letter - ${fields.printedName}.pdf`,
          content: pdfBuffer,
        },
      ],
    });
      if (result.error) {
        console.error("Resend client information form error", result.error);
        return NextResponse.json(
          { error: "We could not send your form. Please call or email us." },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("========== CLIENT FORM ERROR ==========");
  console.error(error);
  console.error("======================================");
      return NextResponse.json(
        { error: "We could not send your form. Please call or email us." },
        { status: 500 }
      );
    }
  }
