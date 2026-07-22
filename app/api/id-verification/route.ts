import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 160;

type IdVerificationFields = {
  clientName: string;
};

function getText(value: FormDataEntryValue | null, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return null;
  }

  return { apiKey, from };
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const fields: IdVerificationFields = {
    clientName: getText(formData.get("clientName")),
  };

  if (!fields.clientName) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 }
    );
  }

  const config = getConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  const resend = new Resend(config.apiKey);

  try {
    const result = await resend.emails.send({
      from: config.from,
      to: "accountants@advancedtax.com.au", // Change to  while testing if required
      subject: `Identity Verification Submitted - ${fields.clientName}`,
      text: [
        "Identity Verification Confirmation",
        "",
        `Client Name: ${fields.clientName}`,
        "",
        "The client has confirmed that they have emailed one (1) acceptable form of identification.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#0f1f2e;line-height:1.6">
          <h1>Identity Verification Confirmation</h1>

          <p><strong>Client Name:</strong> ${fields.clientName}</p>

          <p>
            The client has confirmed that they have emailed one (1)
            acceptable form of identification to
            <strong> accountants@advancedtax.com.au</strong>.
          </p>

          <p>
            Please review the inbox.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend ID verification error", result.error);

      return NextResponse.json(
        { error: "We could not send your confirmation." },
        { status: 502 }
      );
    }

    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Thank You</title>
          <style>
            body{
              margin:0;
              font-family:Arial,Helvetica,sans-serif;
              background:#f5f7fa;
              display:flex;
              justify-content:center;
              align-items:center;
              min-height:100vh;
            }
            .card{
              background:#fff;
              padding:48px;
              max-width:600px;
              border-radius:10px;
              box-shadow:0 6px 18px rgba(0,0,0,.08);
              text-align:center;
            }
            h1{
              color:#005ea2;
              margin-bottom:16px;
            }
            p{
              color:#444;
              line-height:1.7;
              margin:0;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Thank You</h1>
            <p>
              Your forms have been successfully submitted.
              Our team will review your information and contact you if any
              additional details are required.
            </p>
          </div>
        </body>
      </html>
      `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } catch (error) {
    console.error("========== ID VERIFICATION ERROR ==========");
    console.error(error);
    console.error("==========================================");

    return NextResponse.json(
      { error: "We could not send your confirmation." },
      { status: 500 }
    );
  }
}