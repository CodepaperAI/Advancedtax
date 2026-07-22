import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  clientName?: unknown;
};

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return null;
  }

  return { apiKey, from };
}

function getText(value: unknown, maxLength = 160) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const config = getConfig();

  if (!config) {
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 500 }
    );
  }

  const payload = await request.json();
  const clientName = getText(payload.clientName);

  if (!clientName) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 }
    );
  }

  const resend = new Resend(config.apiKey);

  const result = await resend.emails.send({
    from: config.from,
    to: "accountants@advancedtax.com.au",
    subject: `Identity Verification Submitted - ${clientName}`,
    html: `
      <h2>Identity Verification Confirmation</h2>

      <p>
        <strong>Client Name:</strong> ${clientName}
      </p>

      <p>
        The client has confirmed that they have emailed one (1) acceptable
        form of identification to
        <strong>accountants@advancedtax.com.au</strong>.
      </p>

      <p>
        Please review the inbox and continue with the onboarding process.
      </p>
    `,
  });

  if (result.error) {
    return NextResponse.json(
      { error: "Unable to send confirmation email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}