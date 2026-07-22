import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting AdvancedTax.",
  alternates: {
    canonical: "/thank-you"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <section className="thank-you-page">
      <div className="container thank-you-card">
      <CheckCircle2 size={44} />

<p className="eyebrow">Submission successful</p>

<h1>Thank you!</h1>

<p>
  Your Client Information Form and signed Engagement Letter have been
  successfully submitted to Advanced Accounting Taxation &amp; Business
  Services.
</p>

<p>
  <strong style={{ color: "#d32f2f" }}>
  Identity Verification Required
</strong>
</p>

<p>
  Please email a copy of your identification to{" "}
<a
  href="mailto:accountants@advancedtax.com.au"
  style={{ color: "#d32f2f", fontWeight: "600" }}
>
  accountants@advancedtax.com.au
</a>
{" "}so we can complete the verification process.
</p>

<p>The following forms of identification are accepted:</p>

<ul className="thank-you-id-list">
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

<div className="thank-you-actions">
  <Link className="button button-gold" href="/">
    Back to Home <ArrowRight size={18} />
  </Link>

  <Link className="button button-outline dark" href="/contact">
    Contact Us
  </Link>
</div>
      </div>
    </section>
  );
}
