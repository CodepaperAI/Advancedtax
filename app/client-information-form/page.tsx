"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "./client-information-form.css";
import { SignaturePad, type SignaturePadHandle } from "@/components/SignaturePad";

export default function ClientInformationFormPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const signaturePadRef = useRef<SignaturePadHandle>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Signature is optional — no validation blocks submission if it's empty.
    const isSignatureEmpty = signaturePadRef.current?.isEmpty?.() ?? true;

    // NOTE: assumes SignaturePadHandle exposes toDataURL(). Adjust the
    // method name here if your SignaturePad component uses a different one.
    const signatureImage = isSignatureEmpty
      ? ""
      : signaturePadRef.current?.toDataURL?.() ?? "";

    setSubmitError(null);
    setSubmitSuccess(false);

    const formData = new FormData(e.currentTarget);

    // Map FormData entries to the field names the backend route expects.
    // Field names in the JSX are left untouched; the mapping happens here.
    const payload = {
      office: formData.get("office") as string,
      tfn: formData.get("tfn") as string,
      firstName: formData.get("firstName") as string,
      familyName: formData.get("familyName") as string,
      dob: formData.get("dob") as string,
      currentAddress: formData.get("currentAddress") as string,
      suburb: formData.get("suburb") as string,
      state: formData.get("state") as string,
      postcode: formData.get("postcode") as string,
      postalAddress: formData.get("postalAddress") as string,
      postalSuburb: formData.get("postalSuburb") as string,
      postalState: formData.get("postalState") as string,
      postalPostcode: formData.get("postalPostcode") as string,
      mobile: formData.get("mobile") as string,
      // form field is "homePhone"; backend expects "workHomePhone"
      workHomePhone: formData.get("homePhone") as string,
      email: formData.get("email") as string,
      accountName: formData.get("accountName") as string,
      bsb: formData.get("bsb") as string,
      accountNumber: formData.get("accountNumber") as string,
      // form field is "incomeTaxAppointment"; backend expects "incomeTaxMatters"
      incomeTaxMatters: formData.get("incomeTaxAppointment") as string,
      // form field is "basGstAppointment"; backend expects "basGstMatters"
      basGstMatters: formData.get("basGstAppointment") as string,
      signatureName: formData.get("signatureName") as string,
      signatureDate: formData.get("signatureDate") as string,
      signatureImage
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/client-information-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setSubmitError(
          result?.error ?? "We could not send your form. Please call or email us."
        );
        return;
      }

      setSubmitSuccess(true);
      formRef.current?.reset();
      signaturePadRef.current?.clear?.();

      // Optional redirect after a short delay so the success message is visible.
      setTimeout(() => {
        router.push("engagement-letter");
      }, 1500);
    } catch (error) {
      console.error("Client information form submit failed", error);
      setSubmitError("We could not send your form. Please call or email us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <main className="client-form-page">
        {/* Simple page heading — intentionally NOT a marketing hero */}
        <section className="client-form-intro">
          <h1 className="client-form-title">Step 1: Client Information Form</h1>
          <p className="client-form-subtitle">
            Please complete the form below so we can prepare your taxation
            and accounting records accurately.
          </p>
        </section>

        <form className="client-form" ref={formRef} onSubmit={handleSubmit}>
          {/* ---------------------------------------------------------- */}
          {/* Office                                                     */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section">
            <div className="client-form-section-header">
              <h2>Office</h2>
            </div>
            <div className="client-form-section-body">
              <div className="client-form-field">
                <label htmlFor="office">Servicing Office</label>
                {/* Optional — no field in this form is required for submission. */}
                <select
                  id="office"
                  name="office"
                  defaultValue=""
                  className="client-form-select"
                >
                  <option value="">Select an office</option>
                  <option value="parramatta">Parramatta</option>
                  <option value="liverpool">Liverpool</option>
                </select>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Personal Details                                           */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section">
            <div className="client-form-section-header">
              <h2>Personal Details</h2>
            </div>
            <div className="client-form-section-body">
              <div className="client-form-grid client-form-grid--2">
                <div className="client-form-field">
                  <label htmlFor="tfn">Tax File Number (TFN)</label>
                  <input id="tfn" name="tfn" type="text" autoComplete="off" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="dob">Date of Birth</label>
                  <input id="dob" name="dob" type="date" />
                </div>
              </div>

              <div className="client-form-grid client-form-grid--2">
                <div className="client-form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="familyName">Family Name</label>
                  <input id="familyName" name="familyName" type="text" />
                </div>
              </div>

              <div className="client-form-field client-form-field--full">
                <label htmlFor="currentAddress">Current Address</label>
                <input id="currentAddress" name="currentAddress" type="text" />
              </div>

              <div className="client-form-grid client-form-grid--3">
                <div className="client-form-field">
                  <label htmlFor="suburb">Suburb</label>
                  <input id="suburb" name="suburb" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="state">State</label>
                  <input id="state" name="state" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="postcode">Postcode</label>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    inputMode="numeric"
                  />
                </div>
              </div>

              <div className="client-form-field client-form-field--full">
                <label htmlFor="postalAddress">Postal Address</label>
                <input id="postalAddress" name="postalAddress" type="text" />
              </div>

              <div className="client-form-grid client-form-grid--3">
                <div className="client-form-field">
                  <label htmlFor="postalSuburb">Postal Suburb</label>
                  <input id="postalSuburb" name="postalSuburb" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="postalState">Postal State</label>
                  <input id="postalState" name="postalState" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="postalPostcode">Postal Postcode</label>
                  <input
                    id="postalPostcode"
                    name="postalPostcode"
                    type="text"
                    inputMode="numeric"
                  />
                </div>
              </div>

              <div className="client-form-grid client-form-grid--2">
                <div className="client-form-field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input id="mobile" name="mobile" type="tel" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="homePhone">Work / Home Phone</label>
                  <input id="homePhone" name="homePhone" type="tel" />
                </div>
              </div>

              <div className="client-form-field client-form-field--full">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" />
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Bank Details                                               */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section">
            <div className="client-form-section-header">
              <h2>Bank Details</h2>
            </div>
            <div className="client-form-section-body">
              <div className="client-form-field client-form-field--full">
                <label htmlFor="accountName">Account Name</label>
                <input id="accountName" name="accountName" type="text" />
              </div>

              <div className="client-form-grid client-form-grid--2">
                <div className="client-form-field">
                  <label htmlFor="bsb">BSB</label>
                  <input
                    id="bsb"
                    name="bsb"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 062-000"
                  />
                </div>
                <div className="client-form-field">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Appointment                                                */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section">
            <div className="client-form-section-header">
              <h2>Appointment</h2>
            </div>
            <div className="client-form-section-body">
              <p className="client-form-paragraph">
                Hereby appoint Advanced Tax Business Services as my legal
                representative with the Australian Taxation Office and ask
                them to complete the appropriate forms to reflect the below
                appointments.
              </p>

              {/* Radio groups are optional — neither option carries `required`. */}
              <fieldset className="client-form-radio-group">
                <legend>Income tax matters</legend>
                <label className="client-form-radio-option">
                  <input type="radio" name="incomeTaxAppointment" value="yes" />
                  <span>Yes</span>
                </label>
                <label className="client-form-radio-option">
                  <input type="radio" name="incomeTaxAppointment" value="no" />
                  <span>No</span>
                </label>
              </fieldset>

              <fieldset className="client-form-radio-group">
                <legend>BAS / GST matters</legend>
                <label className="client-form-radio-option">
                  <input type="radio" name="basGstAppointment" value="yes" />
                  <span>Yes</span>
                </label>
                <label className="client-form-radio-option">
                  <input type="radio" name="basGstAppointment" value="no" />
                  <span>No</span>
                </label>
              </fieldset>
            </div>
          </section>
          {/* ---------------------------------------------------------- */}
          {/* Signature                                                  */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section">
            <div className="client-form-section-header">
              <h2>Signature</h2>
            </div>
            <div className="client-form-section-body">
              <div className="client-form-grid client-form-grid--2">
                <div className="client-form-field">
                  <label htmlFor="signatureName">Name</label>
                  <input id="signatureName" name="signatureName" type="text" />
                </div>
                <div className="client-form-field">
                  <label htmlFor="signatureDate">Date</label>
                  <input id="signatureDate" name="signatureDate" type="date" />
                </div>
              </div>

              <div className="client-form-field client-form-field--full">
                <span className="client-form-field-label-static">Signature</span>
                {/*
                  The ref lets handleSubmit() check whether anything has been
                  drawn, purely so it can decide whether to send an image —
                  submission is never blocked if it's left blank.
                */}
                <SignaturePad ref={signaturePadRef} />
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Terms                                                      */}
          {/* ---------------------------------------------------------- */}
          <section className="client-form-section client-form-terms">
            <div className="client-form-section-header">
              <h2>Terms</h2>
            </div>
            <div className="client-form-section-body">
              <div className="client-form-terms-block">
                <h3>CLIENTS Account Keeping Fee (NB ONLY applies if you do not pay your fees as agreed)</h3>
                <p className="client-form-placeholder-text">
                  We, the parties named in this Client Information Form, agree that, in addition to any fees outlined in the applicable Fee Schedule, should our account with Advanced Accounting, Taxation & Business Services remain outstanding for more than 30 days from the date of invoice, Advanced Accounting, Taxation & Business Services may, at its sole discretion, charge an additional Account Keeping Fee of $150, which we agree to pay. We further acknowledge that the professional fees of Advanced Accounting, Taxation & Business Services remain payable even if we choose not to proceed with or complete the requested services, subject to the firm's Refund Policy and applicable Australian Consumer Law.
                </p>
              </div>

              <div className="client-form-terms-block">
                <h3>Acknowledgement of Terms of Engagement</h3>
                <p className="client-form-placeholder-text">
                  We acknowledge that we have read, understood, and agree to be bound by the Terms of Engagement and Fee Schedule provided by Advanced Accounting, Taxation & Business Services. We appoint Advanced Accounting, Taxation & Business Services as our authorised tax agent to act on our behalf in matters relating to the Australian Taxation Office, as authorised by this engagement.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------------- */}
          {/* Submit                                                     */}
          {/* ---------------------------------------------------------- */}
          {submitError && (
            <p
              className="client-form-error-message"
              role="alert"
              style={{ color: "#c0392b" }}
            >
              {submitError}
            </p>
          )}

          {submitSuccess && (
            <p
              className="client-form-success-message"
              role="status"
              style={{ color: "#2e7d32" }}
            >
              Thank you — your form has been submitted successfully. Redirecting...
            </p>
          )}

          <div className="client-form-submit-row">
            {/* type="submit" is kept for normal form behavior, but since no
                field carries `required`, the browser never blocks submission
                — every field on this form is optional. */}
            <button type="submit" className="client-form-submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}