import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2000;
const MAX_SIGNATURE_LENGTH = 5_000_000;

type EngagementLetterPayload = {
  printedName?: unknown;
  email?: unknown;
  signatureDate?: unknown;
  signatureImage?: unknown;
};

type EngagementLetterFields = {
  printedName: string;
  email: string;
 signatureDate: string;
  signatureImage: string;
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
    `Date Signed: ${fields.signatureDate}`,
    "",
    "The client's signature is included in the HTML version of this email."
  ].join("\n");
}

function createEmailHtml(fields: EngagementLetterFields) {
  return `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6">
      <h1>Signed Engagement Letter</h1>

      <p><strong>Printed Name:</strong> ${escapeHtml(fields.printedName)}</p>

      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>

      <p><strong>Date Signed:</strong> ${escapeHtml(fields.signatureDate)}</p>

      <h2>Signature</h2>

      <img
        src="${fields.signatureImage}"
        alt="Client Signature"
        style="
          max-width:350px;
          border:1px solid #ddd;
          padding:10px;
          background:#fff;
        "
      />
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
  signatureDate: getText(payload.signatureDate, 40),
  signatureImage: getText(payload.signatureImage, MAX_SIGNATURE_LENGTH),
};

 if (
  !fields.printedName ||
  !isEmail(fields.email) ||
  !fields.signatureDate ||
  !fields.signatureImage
) {
  return NextResponse.json(
    { error: "Please complete all required fields and try again." },
    { status: 400 }
  );
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
    await resend.emails.send({
  from: config.from,
  to: "egarcia@advancedtax.com.au",
  replyTo: fields.email,
  subject: `Signed Engagement Letter - ${fields.printedName}`,
  text: createEmailText(fields),
  html: createEmailHtml(fields),
});

const result = await resend.emails.send({
  from: config.from,
  to: fields.email,
  subject: "Your Signed Engagement Letter",
  text: createEmailText(fields),
  html: createEmailHtml(fields),
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
