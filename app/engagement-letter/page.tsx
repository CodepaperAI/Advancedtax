"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "./engagement-letter.css";
import { SignaturePad, type SignaturePadHandle } from "@/components/SignaturePad";

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function EngagementLetterPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const signaturePadRef = useRef<SignaturePadHandle>(null);
  const [signatureError, setSignatureError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [todaysDate] = useState<string>(getTodayIsoDate);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isSignatureEmpty = signaturePadRef.current?.isEmpty?.() ?? true;

    if (isSignatureEmpty) {
      setSignatureError("Please provide your signature before submitting.");
      return;
    }

    setSignatureError(null);
    setSubmitError(null);
    setSubmitSuccess(false);

    // NOTE: assumes SignaturePadHandle exposes toDataURL(). Adjust the
    // method name here if your SignaturePad component uses a different one.
    const signatureImage = signaturePadRef.current?.toDataURL?.() ?? "";

    const formData = new FormData(e.currentTarget);

    const payload = {
  printedName: formData.get("printedName") as string,
  email: formData.get("email") as string,
  signatureDate: formData.get("signatureDate") as string,
  termsAccepted: formData.get("termsAccepted") as string,
  signatureImage,
};
const response = await fetch("/api/engagement-letter", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const result = await response.json();

if (!response.ok) {
  setSubmitError(result.error);
  setIsSubmitting(false);
  return;
}
    setIsSubmitting(true);

    try {
      setSubmitSuccess(true);

formRef.current?.reset();
signaturePadRef.current?.clear?.();

setTimeout(() => {
  router.push("/cis-thank-you");
}, 1500);

      // TODO: Once the above steps are implemented, redirect the client to
      // the final Thank You page instead of only showing the success message
      // below, e.g.:
      //   setTimeout(() => {
      //     router.push("/thank-you");
      //   }, 1500);
    } catch (error) {
      console.error("Engagement letter submit failed", error);
      setSubmitError(
        "We could not send your Engagement Letter. Please call or email us."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="engagement-letter-page">
        {/* Simple page heading — intentionally NOT a marketing hero */}
        <section className="engagement-letter-intro">
          <h1 className="engagement-letter-title">Step 2: Engagement Letter</h1>
          <p className="engagement-letter-subtitle">
            Please read the Engagement Letter below carefully, then sign and
            submit it to confirm your instructions.
          </p>
        </section>

        <form
          className="engagement-letter-form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* ---------------------------------------------------------- */}
          {/* Letter                                                     */}
          {/* ---------------------------------------------------------- */}
          <section className="engagement-letter-section engagement-letter-document">
            <div className="engagement-letter-section-body">
              <p className="engagement-letter-salutation">Dear Client,</p>

              <h2>Engagement as your tax agent for an individual income tax return</h2>
              <p className="engagement-letter-paragraph">
                Thank you for your instructions. We are pleased to accept an
                appointment as your tax agent for your 2026 and outstanding
                years tax returns if applicable.
              </p>
              <p className="engagement-letter-paragraph">
                At the outset, we need to enter into an agreement with you
                setting out the terms on which we will assist you, including
                how we will charge you for the work.
              </p>
              <p className="engagement-letter-paragraph">
                This letter and the enclosed Terms of Business set out the
                terms of the engagement. Any additions will be by the
                written agreement of both parties. Please read this letter
                and the Terms of Business carefully. If the terms are
                acceptable to you, please sign and return this letter to us.
                If you do not return a signed copy of this letter, but
                continue to provide us with information and instructions,
                we will assume that you have accepted the terms contained
                in this letter.
              </p>

              <hr className="engagement-letter-divider" />

              <h2>Scope of services</h2>
              <p className="engagement-letter-paragraph">
                As your tax agent we will prepare and lodge your individual
                income tax return for 2026 and outstanding years tax returns
                (&ldquo;the Services&rdquo;).
              </p>
              <p className="engagement-letter-paragraph">
                In addition to the financial information required to
                complete your tax return, it is expected that you will make
                available all relevant source documentation to us.
              </p>
              <p className="engagement-letter-paragraph">
                In preparing your individual tax return, we will rely on the
                documents and information provided, and representations
                made by you.
              </p>

              <hr className="engagement-letter-divider" />

              <h2>Matters outside the scope of services</h2>
              <p className="engagement-letter-paragraph">
                In performing the Services, we will not perform an audit or
                review. Accordingly, no assurances are made in this regard.
                This engagement cannot be relied upon to disclose
                irregularities including fraud, other illegal acts and
                errors that may exist. However, we will inform you of any
                such matters that come to our attention.
              </p>

              <hr className="engagement-letter-divider" />

              <h2>Deduction of professional fees from your tax refund</h2>
              <p className="engagement-letter-paragraph">
                It is agreed that fees for the Services will be deducted
                directly from any tax refund you receive. In accordance
                with the requirements of Advanced Accounting Taxation &amp;
                Business Services, your refund will be deposited into our
                Trust Account with our professional fees deducted and the
                balance of the funds forwarded to you as agreed.
              </p>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Signature                                                  */}
          {/* ---------------------------------------------------------- */}
          <section className="engagement-letter-section">
            <div className="engagement-letter-section-header">
              <h2>Client Declaration &amp; Signature</h2>
            </div>
            <div className="engagement-letter-section-body">
              <div className="engagement-letter-grid engagement-letter-grid--3">
  <div className="engagement-letter-field">
    <label htmlFor="printedName">Printed Name</label>
    <input
      id="printedName"
      name="printedName"
      type="text"
      required
    />
  </div>

  <div className="engagement-letter-field">
  <label htmlFor="email">Email Address</label>
  <input
    id="email"
    name="email"
    type="email"
    placeholder="name@example.com"
    required
  />
  <small className="engagement-letter-help">
    A signed copy of your Engagement Letter will be sent to this email address.
  </small>
</div>

  <div className="engagement-letter-field">
    <label htmlFor="signatureDate">Date</label>
    <input
      id="signatureDate"
      name="signatureDate"
      type="date"
      defaultValue={todaysDate}
      required
    />
  </div>
</div>

              <div className="engagement-letter-field engagement-letter-field--full">
                <span className="engagement-letter-field-label-static">
                  Digital Signature
                </span>
                {/*
                  The ref lets handleSubmit() ask the pad whether anything
                  has been drawn yet — see the SignaturePadHandle note near
                  the top of this file for the assumption this relies on.
                */}
                <SignaturePad ref={signaturePadRef} />

                {/* Manual validation message for the signature pad, since
                    a canvas can't use the native `required` attribute. */}
                {signatureError && (
                  <p
                    className="engagement-letter-error-message"
                    role="alert"
                    style={{ color: "#c0392b", marginTop: "0.5rem" }}
                  >
                    {signatureError}
                  </p>
                )}
              </div>
            </div>
          </section>

          <div className="engagement-letter-checkbox">
            <label>
              <input type="checkbox" name="termsAccepted" required />
              <span>
                I have read, understood and agree to the terms of this
                Engagement Letter.
              </span>
            </label>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Submit                                                     */}
          {/* ---------------------------------------------------------- */}
          {submitError && (
            <p
              className="engagement-letter-error-message"
              role="alert"
              style={{ color: "#c0392b" }}
            >
              {submitError}
            </p>
          )}

          {submitSuccess && (
            <p
              className="engagement-letter-success-message"
              role="status"
              style={{ color: "#2e7d32" }}
            >
              Thank you — your Engagement Letter has been submitted
              successfully.
            </p>
          )}

          <div className="engagement-letter-submit-row">
            {/* type="submit" so the browser runs native `required`/type
                validation on all the fields above, then calls
                handleSubmit() once those pass. */}
            <button
              type="submit"
              className="engagement-letter-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Engagement Letter"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
