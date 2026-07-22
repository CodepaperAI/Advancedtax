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
    <div style="background-color:#f6f7f5;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background-color:#ffffff;border:1px solid #e1e5e1;border-radius:6px;overflow:hidden;">

        <div style="border-top:4px solid #1b4332;padding:32px 40px 8px 40px;">

          <p style="font-size:16px;line-height:1.5;color:#212824;margin:0 0 20px 0;">
            Dear Client,
          </p>

          <h2 style="font-size:16px;font-weight:bold;color:#10281e;margin:24px 0 10px 0;">
            Engagement as your tax agent for an individual income tax return
          </h2>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            Thank you for your instructions. We are pleased to accept an appointment as your tax agent for your 2026 and outstanding years tax returns if require.
          </p>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            At the outset, we need to enter into an agreement with you setting out the terms on which we will assist you, including how we will charge you for the work.
          </p>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            This letter and the enclosed Terms of Business set out the terms of the engagement. Any additions will be by the written agreement of both parties. Please read this letter and the Terms of Business carefully. If the terms are acceptable to you, please sign and return this letter to us. If you do not return a signed copy of this letter, but continue to provide us with information and instructions, we will assume that you have accepted the terms contained in this letter.
          </p>

          <hr style="border:none;border-top:1px solid #e1e5e1;margin:24px 0;" />

          <h2 style="font-size:16px;font-weight:bold;color:#10281e;margin:24px 0 10px 0;">
            Scope of services
          </h2>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            As your tax agent we will prepare and lodge your individual income tax return for 2026 and outstanding years tax returns (&#8220;the Services&#8221;).
          </p>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            In addition to the financial information required to complete your tax return, it is expected that you will make available all relevant source documentation to us.
          </p>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            In preparing your individual tax return, we will rely on the documents and information provided, and representations made by you.
          </p>

          <hr style="border:none;border-top:1px solid #e1e5e1;margin:24px 0;" />

          <h2 style="font-size:16px;font-weight:bold;color:#10281e;margin:24px 0 10px 0;">
            Matters outside the scope of services
          </h2>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            In performing the Services, we will not perform an audit or review. Accordingly, no assurances are made in this regard. This engagement cannot be relied upon to disclose irregularities including fraud, other illegal acts and errors that may exist. However, we will inform you of any such matters that come to our attention.
          </p>

          <hr style="border:none;border-top:1px solid #e1e5e1;margin:24px 0;" />

          <h2 style="font-size:16px;font-weight:bold;color:#10281e;margin:24px 0 10px 0;">
            Deduction of professional fees from your tax refund
          </h2>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            It is agreed that fees for the Services will be deducted directly from any tax refund you receive. In accordance with the requirements of Advanced Accounting Taxation &amp; Business Services, your refund will be deposited into our Trust Account with our professional fees deducted and the balance of the funds forwarded to you as agreed.
          </p>

          <hr style="border:none;border-top:1px solid #e1e5e1;margin:24px 0;" />

          <h2 style="font-size:16px;font-weight:bold;color:#10281e;margin:24px 0 10px 0;">
            Declaration
          </h2>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            I declare that the information I have provided is true and correct to the best of my knowledge.
          </p>
          <p style="font-size:14px;line-height:1.6;color:#212824;margin:0 0 12px 0;">
            I acknowledge that I have read, understood and agree to this Engagement Letter.
          </p>

          <p style="font-size:14px;line-height:1.6;color:#212824;margin:28px 0 2px 0;">
            Yours sincerely,
          </p>
          <p style="font-size:14px;font-weight:bold;line-height:1.6;color:#212824;margin:0 0 8px 0;">
            Advanced Accounting, Taxation &amp; Business Services
          </p>

        </div>

        <div style="border-top:1px solid #e1e5e1;background-color:#fbfbfa;padding:28px 40px 32px 40px;">

          <h2 style="font-size:15px;font-weight:bold;color:#10281e;margin:0 0 16px 0;">
            Client Declaration &amp; Signature
          </h2>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
            <tr>
              <td style="padding-right:16px;padding-bottom:14px;vertical-align:top;width:50%;">
                <p style="font-size:10px;font-weight:bold;color:#5c6862;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 4px 0;">
                  Printed Name
                </p>
                <p style="font-size:14px;color:#212824;margin:0;border-bottom:1px solid #e1e5e1;padding-bottom:6px;">
                  ${escapeHtml(fields.printedName)}
                </p>
              </td>
              <td style="padding-bottom:14px;vertical-align:top;width:50%;">
                <p style="font-size:10px;font-weight:bold;color:#5c6862;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 4px 0;">
                  Email Address
                </p>
                <p style="font-size:14px;color:#212824;margin:0;border-bottom:1px solid #e1e5e1;padding-bottom:6px;">
                  ${escapeHtml(fields.email)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-right:16px;vertical-align:top;width:50%;">
                <p style="font-size:10px;font-weight:bold;color:#5c6862;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 4px 0;">
                  Date Signed
                </p>
                <p style="font-size:14px;color:#212824;margin:0;border-bottom:1px solid #e1e5e1;padding-bottom:6px;">
                  ${escapeHtml(fields.signatureDate)}
                </p>
              </td>
              <td style="vertical-align:top;width:50%;"></td>
            </tr>
          </table>

          <p style="font-size:10px;font-weight:bold;color:#5c6862;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px 0;">
            Client Signature
          </p>
          <img
            src="${fields.signatureImage}"
            alt="Client Signature"
            style="
              max-width:280px;
              max-height:100px;
              display:block;
              border:1px solid #e1e5e1;
              border-radius:6px;
              padding:10px;
              background:#ffffff;
            "
          />

        </div>

      </div>
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
  to: "accountants@advancedtax.com.au",
  replyTo: fields.email,
});
    await resend.emails.send({
  from: config.from,
  to: "accountants@advancedtax.com.au",
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
