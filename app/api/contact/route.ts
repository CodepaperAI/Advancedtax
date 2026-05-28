import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  need?: unknown;
  message?: unknown;
};

type ContactFields = {
  name: string;
  email: string;
  phone: string;
  need: string;
  message: string;
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
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

function createEmailText(fields: ContactFields) {
  return [
    "New consultation request from the AdvancedTax website",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "Not provided"}`,
    `Need: ${fields.need || "Not provided"}`,
    "",
    "Message:",
    fields.message
  ].join("\n");
}

function createEmailHtml(fields: ContactFields) {
  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone || "Not provided"],
    ["Need", fields.need || "Not provided"]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#0f1f2e;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">New consultation request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align:left;padding:10px;border:1px solid #d9d3c7;background:#fbfaf6;width:140px">${escapeHtml(label)}</th>
                  <td style="padding:10px;border:1px solid #d9d3c7">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Message</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(fields.message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please complete the form and try again." },
      { status: 400 }
    );
  }

  const fields = {
    name: getText(payload.name, 160),
    email: getText(payload.email, 320),
    phone: getText(payload.phone, 80),
    need: getText(payload.need, 160),
    message: getText(payload.message)
  };

  if (!fields.name || !isEmail(fields.email) || !fields.message) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email and a message." },
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
      to: config.to,
      replyTo: fields.email,
      subject: `Consultation request from ${fields.name}`,
      text: createEmailText(fields),
      html: createEmailHtml(fields)
    });

    if (result.error) {
      console.error("Resend contact form error", result.error);
      return NextResponse.json(
        { error: "We could not send your request. Please call or email us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    return NextResponse.json(
      { error: "We could not send your request. Please call or email us." },
      { status: 500 }
    );
  }
}
