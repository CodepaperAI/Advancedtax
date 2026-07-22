import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 160;

type IdVerificationPayload = {
  clientName?: unknown;
};

type IdVerificationFields = {
  clientName: string;
};

function getText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
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
    console.log("About to send ID confirmation");

    console.log({
      from: config.from,
      to: "egarcia@advancedtax.com.au",
      clientName: fields.clientName,
    });

    const result = await resend.emails.send({
      from: config.from,
      to: "egarcia@advancedtax.com.au", // Change to accountants@advancedtax.com.au when ready
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
            Please review the inbox and continue with the onboarding process.
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

    return NextResponse.json({ ok: true });
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