import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Identity Verification",
  description: "Complete your identity verification.",
  alternates: {
    canonical: "/cis-thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="thank-you-page">
      <div className="container thank-you-card">
        <CheckCircle2 size={44} />

        <p className="eyebrow">Almost Complete</p>

        <h1>One Final Step</h1>

        <p>
          Your Client Information Form and signed Engagement Letter have been
          successfully submitted to Advanced Accounting Taxation &amp; Business
          Services.
        </p>

        <p>
          <strong style={{ color: "#d32f2f", fontStyle: "italic" }}>
            Final Step - Identity Verification Required
          </strong>
        </p>

        <p>
          Please email a copy of your identification to{" "}
          <a
            href="mailto:accountants@advancedtax.com.au"
            style={{
              color: "#d32f2f",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            accountants@advancedtax.com.au
          </a>{" "}
          so we can complete the verification process.
        </p>

        <p>
          Please provide one (1) of the following acceptable forms of
          identification:
        </p>

        <ul
          className="thank-you-id-list"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li>Australian Driver Licence</li>
          <li>Australian or International Passport</li>
          <li>Proof of Age Card</li>
          <li>Photo Card</li>
          <li>Government-issued Photo Identification</li>
        </ul>

        <p>
          Once we have received your identification, our team will review your
          information and contact you if any additional details are required.
        </p>
<div style={{ marginTop: "28px", textAlign: "left" }}>
  <label
    htmlFor="clientName"
    style={{
      display: "block",
      fontWeight: 600,
      marginBottom: "8px",
    }}
  >
    Full Name
  </label>

  <input
    id="clientName"
    name="clientName"
    type="text"
    placeholder="Enter your full name"
    required
    style={{
      width: "100%",
      padding: "12px 14px",
      border: "1px solid #d9d9d9",
      borderRadius: "6px",
      fontSize: "16px",
      boxSizing: "border-box",
    }}
  />
</div>
        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            background: "#fafafa",
            textAlign: "left",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              id="idConfirmation"
              style={{ marginTop: "4px" }}
            />

            <span>
              I confirm that I have emailed one (1) acceptable form of
              identification to{" "}
              <strong>accountants@advancedtax.com.au</strong>.
            </span>
          </label>
        </div>

        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            className="button button-gold"
          >
            Submit Confirmation
          </button>
        </div>
      </div>
    </section>
  );
}