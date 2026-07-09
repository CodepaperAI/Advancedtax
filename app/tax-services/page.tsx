import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Handshake,
  Landmark,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  TrendingUp,
  User,
  Users,
  Video
} from "lucide-react";
import { FadeIn } from "@/components/MotionPrimitives";
import { pageMetadata } from "@/lib/seo";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const PHONE_DISPLAY = "(02) 9734 0777";
const PHONE_HREF = "tel:+61297340777";

export const metadata = pageMetadata({
  title: "Tax Advice for Property Investors & Business Owners in Sydney",
  description:
    "Practical tax advice for investment property owners, business owners and clients with complex tax matters. Meet in Parramatta, Liverpool or virtually across Sydney. Book a free consultation.",
  path: "/tax-services",
  keywords: [
    "investment property tax accountant Sydney",
    "business tax returns Parramatta",
    "tax planning Sydney",
    "negative gearing accountant",
    "virtual tax accountant Sydney"
  ]
});

const trustHighlights = [
  { icon: Award, label: "Over 20 years of trusted accounting and taxation experience" },
  { icon: Briefcase, label: "Specialists in investment property tax and business taxation" },
  { icon: Users, label: "Personalised accounting and tax advice tailored to your circumstances" },
  { icon: MapPin, label: "Convenient offices located in Parramatta and Liverpool" },
  { icon: Video, label: "Flexible virtual tax consultations available across Sydney" },
  { icon: Calculator, label: "Strategic tax planning designed for long-term financial success" }
];

const investmentServices = [
  "Rental property tax returns",
  "Negative gearing",
  "Depreciation claims",
  "Capital gains tax",
  "Investment property deductions",
  "Multiple investment property portfolios"
];

const businessEntities = [
  { icon: User, label: "Sole Traders" },
  { icon: Handshake, label: "Partnerships" },
  { icon: Building2, label: "Companies" },
  { icon: Landmark, label: "Trusts" }
];

const businessServices = [
  "Business tax returns",
  "BAS preparation",
  "Bookkeeping",
  "Payroll",
  "Tax planning"
];

const strategicServices = [
  "Tax planning",
  "Capital gains tax",
  "Family trusts",
  "Investment structures",
  "Asset protection",
  "Wealth structuring"
];

const virtualMethods = [
  { icon: Video, label: "Zoom consultations" },
  { icon: Phone, label: "Phone appointments" },
  { icon: ShieldCheck, label: "Secure document sharing" },
  { icon: CheckCircle2, label: "Electronic signatures" }
];

const faqItems = [
  {
    question: "Can I complete my tax return without visiting an office?",
    answer:
      "Yes. We offer secure document sharing, electronic signatures, and Zoom or phone consultations, so your return can be handled entirely online if that suits you better."
  },
  {
    question: "Do you handle investment properties with negative gearing or multiple properties?",
    answer:
      "Yes. We prepare rental property tax returns and advise on negative gearing, depreciation claims, capital gains tax and deductions — whether you own one investment property or a growing portfolio."
  },
  {
    question: "Which business structures do you work with?",
    answer:
      "We support sole traders, partnerships, companies and family trusts, with services spanning business tax returns, BAS preparation, bookkeeping, payroll and tax planning."
  },
  {
    question: "Is strategic tax advice only for high net worth individuals?",
    answer:
      "Most clients benefit from proactive tax planning as their affairs grow more complex — from capital gains tax and family trusts to investment structures and asset protection. We also advise high net worth individuals on more complex structuring."
  },
  {
    question: "Where are your offices, and can I meet virtually instead?",
    answer: `Our offices are in Parramatta and Liverpool, and we offer secure virtual consultations for clients anywhere across Sydney. Book online or call us on ${PHONE_DISPLAY} to arrange a time that suits you.`
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default async function TaxServicesPage() {
  const googleReview = await getGoogleReviewSummary();

  return (
    <main className="tax-services-page">
      <section className="tax-services-hero">
        <div className="container tax-services-hero-grid">
          <div className="tax-services-hero-content">
            <p className="eyebrow">
              Investment Property Tax Returns • Business Tax Returns • Strategic Tax Advice
            </p>

            <h1>Tax Advice That Works for You</h1>

            <p className="lede">
              Whether you&apos;re growing an investment portfolio, running a
              business, or managing complex financial affairs, AATBS provides
              practical tax advice tailored to your goals. Our experienced
              accountants help you stay compliant, maximise legitimate tax
              outcomes, and make informed financial decisions with confidence.
            </p>

            <div className="tax-services-hero-buttons">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="tax-services-hero-image">
            <Image
              src="/team/principal.png"
              alt="Adviser meeting with a client about tax services"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{objectFit: "contain"}}
            />
          </div>
        </div>
      </section>

      {/* Why choose AATBS — intro plus scannable trust-indicator grid */}
      <section className="tax-services-why">
        <div className="container">
          <FadeIn className="tax-services-why-intro">
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Trusted Tax Advice That Puts You First</h2>
            <p className="lede">
              Tax advice should do more than keep you compliant. It should
              give you clarity, confidence, and a strategy that supports your
              financial goals. At AATBS, we take the time to understand your
              circumstances before providing practical, personalised advice.
            </p>
          </FadeIn>

          <FadeIn className="tax-services-why-grid">
            {trustHighlights.map(({ icon: Icon, label }) => (
              <div className="tax-services-why-card" key={label}>
                <span className="tax-services-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Investment Property Tax Returns — media split with floating badge */}
      <section id="investment-property" className="tax-services-property">
        <div className="container tax-services-property-grid">
          <FadeIn className="tax-services-property-media">
            <div className="tax-services-property-image">
              <Image
                src="/photos/advisory-meeting.jpg"
                alt="Investment property in Sydney"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <div className="tax-services-property-badge">
              <TrendingUp size={20} aria-hidden="true" />
              <span>Multiple investment property portfolios welcome</span>
            </div>
          </FadeIn>

          <FadeIn className="tax-services-property-content">
            <p className="eyebrow">Investment Property Tax Returns</p>
            <h2>Maximise the Value of Your Investment Property</h2>
            <p className="lede">
              Whether you own your first investment property or manage a
              growing portfolio, we&apos;ll help you understand your
              obligations while identifying opportunities to improve your tax
              position.
            </p>

            <ul className="tax-services-property-checklist">
              {investmentServices.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
  href="/contact"
  className="tax-services-property-cta"
  style={{
    backgroundColor: "#b3924a",
    borderColor: "#b3924a",
    borderRadius: "5px",
    fontWeight: 700
  }}
>
  Book an Investment Property Consultation
  <ArrowRight size={18} aria-hidden="true" />
</Link>
          </FadeIn>
        </div>
      </section>

      {/* Business Tax Returns — image column + entity icon grid + service tags */}
      <section id="business-tax" className="tax-services-business">
        <div className="container tax-services-business-grid">
          <div className="tax-services-business-media">
            <div className="tax-services-business-image">
              <Image
                src="/photos/client-consultation.jpg"
                alt="Adviser meeting with a business owner"
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <Link href="/contact" className="button button-primary tax-services-business-cta">
              Speak with a Business Tax Specialist
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="tax-services-business-content">
            <FadeIn className="tax-services-business-intro">
              <p className="eyebrow">Business Tax Returns</p>
              <h2>Practical Tax Support for Growing Businesses</h2>
              <p className="lede">
                From sole traders to established companies, we provide
                proactive accounting and taxation advice that helps businesses
                stay compliant while planning confidently for the future.
              </p>
            </FadeIn>

            <FadeIn className="tax-services-business-entities">
              {businessEntities.map(({ icon: Icon, label }) => (
                <div className="tax-services-entity-card" key={label}>
                  <Icon size={24} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </FadeIn>

            <FadeIn className="tax-services-business-tags-wrap">
              <ul className="tax-services-business-tags">
                {businessServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Strategic Tax Advice — signature panel, distinct from the two treatments above */}
      <section id="strategic-tax" className="tax-services-strategic">
        <div className="container tax-services-strategic-inner">
          <FadeIn>
            <p className="eyebrow">Strategic Tax Advice</p>
            <h2>Plan Ahead with Confidence</h2>
            <p className="lede">
              As your financial affairs become more complex, proactive tax
              planning becomes increasingly important. We provide tailored
              advice that helps you protect your assets, structure your
              finances effectively, and plan for the future.
            </p>
          </FadeIn>

          <FadeIn className="tax-services-strategic-quote">
            <Quote size={28} aria-hidden="true" />
            <p>
              We also advise high net worth individuals on complex tax
              matters, investment structures, family trusts, and long-term
              tax planning.
            </p>
          </FadeIn>

          <FadeIn className="tax-services-strategic-list-wrap">
            <ul className="tax-services-strategic-list">
              {strategicServices.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="button button-secondary">
              Arrange a Confidential Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Virtual Tax Appointments */}
      <section className="tax-services-virtual">
        <div className="container tax-services-virtual-grid">
          <FadeIn>
            <p className="eyebrow">Virtual Tax Appointments</p>
            <h2>Professional Tax Advice, Wherever You Are</h2>
            <p className="lede">
              You don&apos;t need to visit one of our offices to receive
              expert advice. We offer secure virtual consultations across
              Sydney, making it easy to manage your tax affairs from wherever
              you are.
            </p>
          </FadeIn>

          <FadeIn className="tax-services-virtual-cards">
            {virtualMethods.map(({ icon: Icon, label }) => (
              <div className="tax-services-virtual-card" key={label}>
                <Icon size={22} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="google-review-section" aria-labelledby="google-review-heading">
        <div className="container google-review-grid">
          <FadeIn className="google-review-copy">
            <p className="eyebrow">Client Reviews</p>
            <h2 id="google-review-heading">What Clients Say About Us</h2>
            <p>
              We&apos;re proud to support individuals, property investors,
              business owners, and families across Sydney with personalised
              accounting and taxation advice. Discover why so many clients
              continue to choose us.
            </p>
          </FadeIn>
          <FadeIn className="google-review-card">
            <div className="google-review-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={22} fill="currentColor" />
              ))}
            </div>
            <div
              className="google-review-score"
              aria-label={`${googleReview.rating.toFixed(1).replace(/\.0$/, "")} out of 5 Google rating`}
            >
              <strong>{googleReview.rating.toFixed(1).replace(/\.0$/, "")}</strong>
              <span>
                {typeof googleReview.userRatingCount === "number" && googleReview.userRatingCount > 0
                  ? `${googleReview.userRatingCount.toLocaleString("en-AU")} Google reviews`
                  : "Google Rating"}
              </span>
            </div>
            <p>{googleReview.displayName}</p>
            {googleReview.googleMapsUri ? (
              <a className="text-link" href={googleReview.googleMapsUri} target="_blank" rel="noreferrer">
                View Google profile <ExternalLink size={16} />
              </a>
            ) : (
              <span className="google-review-source">Google Rating</span>
            )}
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="tax-services-faq">
        <div className="container tax-services-faq-inner">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2>Common Questions</h2>
          </FadeIn>

          <FadeIn className="tax-services-faq-list">
            {faqItems.map((item) => (
              <details className="tax-services-faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tax-services-final-cta">
        <div className="container tax-services-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Ready to Get Started?</p>

            <h2>Speak with an experienced tax accountant today.</h2>

            <p className="tax-services-final-cta-sub">
              Whether you&apos;re preparing your next tax return, investing in
              property, growing your business, or planning ahead, we&apos;re
              here to help you make informed financial decisions with
              confidence.
            </p>

            <div className="tax-services-final-cta-buttons">
              <Link href="/contact" className="button button-primary">
                Book a Free Consultation
              </Link>

              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Give Us a Call
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
