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
        <p className="eyebrow">Request received</p>
        <h1>Thanks for contacting AdvancedTax.</h1>
        <p>
          Your consultation request has been sent to AATBS. The team will review
          your details and respond as soon as possible.
        </p>
        <div className="thank-you-actions">
          <Link className="button button-gold" href="/">
            Back to home <ArrowRight size={18} />
          </Link>
          <Link className="button button-outline dark" href="/services">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
