import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Buffer } from "node:buffer";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2000;
const MAX_SIGNATURE_LENGTH = 5_000_000;

type ClientInformationPayload = {
  office?: unknown;
  tfn?: unknown;
  firstName?: unknown;
  familyName?: unknown;
  dob?: unknown;
  currentAddress?: unknown;
  suburb?: unknown;
  state?: unknown;
  postcode?: unknown;
  postalAddress?: unknown;
  postalSuburb?: unknown;
  postalState?: unknown;
  postalPostcode?: unknown;
  mobile?: unknown;
  workHomePhone?: unknown;
  email?: unknown;
  accountName?: unknown;
  bsb?: unknown;
  accountNumber?: unknown;
  incomeTaxMatters?: unknown;
  basGstMatters?: unknown;
  signatureName?: unknown;
  signatureDate?: unknown;
  signatureImage?: unknown;
};

type ClientInformationFields = {
  office: string;
  tfn: string;
  firstName: string;
  familyName: string;
  dob: string;
  currentAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  postalAddress: string;
  postalSuburb: string;
  postalState: string;
  postalPostcode: string;
  mobile: string;
  workHomePhone: string;
  email: string;
  accountName: string;
  bsb: string;
  accountNumber: string;
  incomeTaxMatters: string;
  basGstMatters: string;
  signatureName: string;
  signatureDate: string;
  signatureImage: string;
};

function getText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function display(value: string) {
  return value || "Not provided";
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

function createEmailText(fields: ClientInformationFields) {
  return [
    "New client information form submission from the AdvancedTax website",
    "",
    "Personal Details",
    `First Name: ${display(fields.firstName)}`,
    `Family Name: ${display(fields.familyName)}`,
    `Date of Birth: ${display(fields.dob)}`,
    `TFN: ${display(fields.tfn)}`,
    "",
    "Address",
    `Current Address: ${display(fields.currentAddress)}`,
    `Suburb: ${display(fields.suburb)}`,
    `State: ${display(fields.state)}`,
    `Postcode: ${display(fields.postcode)}`,
    "",
    "Postal Address",
    `Postal Address: ${display(fields.postalAddress)}`,
    `Postal Suburb: ${display(fields.postalSuburb)}`,
    `Postal State: ${display(fields.postalState)}`,
    `Postal Postcode: ${display(fields.postalPostcode)}`,
    "",
    "Contact Details",
    `Mobile Number: ${display(fields.mobile)}`,
    `Work/Home Phone: ${display(fields.workHomePhone)}`,
    `Email Address: ${display(fields.email)}`,
    "",
    "Bank Details",
    `Account Name: ${display(fields.accountName)}`,
    `BSB: ${display(fields.bsb)}`,
    `Account Number: ${display(fields.accountNumber)}`,
    "",
    "Appointment Details",
    `Office: ${display(fields.office)}`,
    `Income Tax Matters: ${display(fields.incomeTaxMatters)}`,
    `BAS/GST Matters: ${display(fields.basGstMatters)}`,
    "",
    "Signature",
    `Signature Name: ${display(fields.signatureName)}`,
    `Signature Date: ${display(fields.signatureDate)}`,
    fields.signatureImage
      ? "(Signature image attached in HTML version)"
      : "(No signature was provided)"
  ].join("\n");
}

function createSection(title: string, rows: [string, string][]) {
  return `
    <h2 style="font-size:16px;margin:22px 0 8px">${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="text-align:left;padding:10px;border:1px solid #d9d3c7;background:#fbfaf6;width:180px">${escapeHtml(label)}</th>
                <td style="padding:10px;border:1px solid #d9d3c7">${escapeHtml(display(value))}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function createEmailHtml(fields: ClientInformationFields) {
  const personalDetails: [string, string][] = [
    ["First Name", fields.firstName],
    ["Family Name", fields.familyName],
    ["Date of Birth", fields.dob],
    ["TFN", fields.tfn]
  ];

  const address: [string, string][] = [
    ["Current Address", fields.currentAddress],
    ["Suburb", fields.suburb],
    ["State", fields.state],
    ["Postcode", fields.postcode]
  ];

  const postalAddress: [string, string][] = [
    ["Postal Address", fields.postalAddress],
    ["Postal Suburb", fields.postalSuburb],
    ["Postal State", fields.postalState],
    ["Postal Postcode", fields.postalPostcode]
  ];

  const contactDetails: [string, string][] = [
    ["Mobile Number", fields.mobile],
    ["Work/Home Phone", fields.workHomePhone],
    ["Email Address", fields.email]
  ];

  const bankDetails: [string, string][] = [
    ["Account Name", fields.accountName],
    ["BSB", fields.bsb],
    ["Account Number", fields.accountNumber]
  ];

  const appointmentDetails: [string, string][] = [
    ["Office", fields.office],
    ["Income Tax Matters", fields.incomeTaxMatters],
    ["BAS/GST Matters", fields.basGstMatters]
  ];

  const signatureRows: [string, string][] = [
    ["Signature Name", fields.signatureName],
    ["Signature Date", fields.signatureDate]
  ];

  const signatureImageHtml = fields.signatureImage
    ? `<div style="margin-top:12px">
         <img src="${fields.signatureImage}" alt="Client signature" style="max-width:320px;border:1px solid #d9d3c7;padding:8px;background:#fbfaf6" />
       </div>`
    : `<p style="margin-top:12px;color:#5c6862">No signature was provided.</p>`;

  return `
    <div style="font-family:Arial,sans-serif;color:#0f1f2e;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">New client information form submission</h1>
      ${createSection("Personal Details", personalDetails)}
      ${createSection("Address", address)}
      ${createSection("Postal Address", postalAddress)}
      ${createSection("Contact Details", contactDetails)}
      ${createSection("Bank Details", bankDetails)}
      ${createSection("Appointment Details", appointmentDetails)}
      ${createSection("Signature", signatureRows)}
      ${signatureImageHtml}
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: ClientInformationPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please complete the form and try again." },
      { status: 400 }
    );
  }

  const fields: ClientInformationFields = {
    office: getText(payload.office, 160),
    tfn: getText(payload.tfn, 40),
    firstName: getText(payload.firstName, 160),
    familyName: getText(payload.familyName, 160),
    dob: getText(payload.dob, 40),
    currentAddress: getText(payload.currentAddress, 320),
    suburb: getText(payload.suburb, 160),
    state: getText(payload.state, 40),
    postcode: getText(payload.postcode, 20),
    postalAddress: getText(payload.postalAddress, 320),
    postalSuburb: getText(payload.postalSuburb, 160),
    postalState: getText(payload.postalState, 40),
    postalPostcode: getText(payload.postalPostcode, 20),
    mobile: getText(payload.mobile, 40),
    workHomePhone: getText(payload.workHomePhone, 40),
    email: getText(payload.email, 320),
    accountName: getText(payload.accountName, 160),
    bsb: getText(payload.bsb, 20),
    accountNumber: getText(payload.accountNumber, 40),
    incomeTaxMatters: getText(payload.incomeTaxMatters, 160),
    basGstMatters: getText(payload.basGstMatters, 160),
    signatureName: getText(payload.signatureName, 160),
    signatureDate: getText(payload.signatureDate, 40),
    signatureImage: getText(payload.signatureImage, MAX_SIGNATURE_LENGTH)
  };

  // No fields are required — a blank or partially-filled form is still
  // accepted. If an email address was entered, it must look like a real
  // email so replies/notifications don't fail; an empty email is fine too.
  if (fields.email && !isEmail(fields.email)) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email address." },
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

  // Only attach a signature image if one was actually provided.
  const signatureBuffer = fields.signatureImage
    ? Buffer.from(
        fields.signatureImage.replace(/^data:image\/\w+;base64,/, ""),
        "base64"
      )
    : null;

  const attachments = signatureBuffer
    ? [
        {
          filename: "client-signature.png",
          content: signatureBuffer,
        },
      ]
    : undefined;

  try {
    console.log("About to send email");
    console.log({
      from: config.from,
      to: "accountants@advancedtax.com.au",
      replyTo: fields.email || undefined,
    });

    const result = await resend.emails.send({
      from: config.from,
      to: "accountants@advancedtax.com.au",
      replyTo: fields.email || undefined,
      subject: `New Client Information Form - ${fields.firstName || fields.familyName || "Unnamed client"}`,
      text: createEmailText(fields),
      html: createEmailHtml(fields),
      attachments,
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