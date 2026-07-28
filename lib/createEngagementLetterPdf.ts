import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

export type PdfFields = {
  printedName: string;
  email: string;
  fees: string;
  signatureDate: string;
};

export async function createEngagementLetterPdf(fields: PdfFields) {
  const pdfPath = path.join(
    process.cwd(),
    "public",
    "engagement-letter-template.pdf"
  );

  const existingPdf = await fs.readFile(pdfPath);

  const pdfDoc = await PDFDocument.load(existingPdf);

  const form = pdfDoc.getForm();

  form.getTextField("printedName").setText(fields.printedName);
  form.getTextField("email").setText(fields.email);
  form.getTextField("fees").setText(fields.fees);
  form.getTextField("signatureDate").setText(fields.signatureDate);

// Makes the PDF non-editable after filling it
form.flatten();

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}