import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Gem,
  Handshake,
  Home,
  Landmark,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Users,
  Video
} from "lucide-react";
import { FadeIn } from "@/components/MotionPrimitives";
import { pageMetadata } from "@/lib/seo";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const PHONE_DISPLAY = "(02) 9734 0777";
const PHONE_HREF = "tel:+61297340777";

export const metadata = pageMetadata({
  title: "Investment Property & Business Tax Returns | Pay Less Tax, Build Wealth",
  description:
    "Specialist tax returns and proactive tax advice for property investors, business owners and high-income Australians. Maximise deductions, minimise tax and build long-term wealth. Meet in Parramatta, Liverpool or virtually across Sydney.",
  path: "/tax-services",
  keywords: [
    "investment property tax returns Sydney",
    "business tax returns Parramatta",
    "tax planning Sydney",
    "capital gains tax accountant",
    "company tax returns",
    "trust tax returns",
    "high net worth tax advice",
    "strategic tax advice Sydney"
  ]
});

// Section 4: Investment Property & Business Tax Specialists — reuses the
// existing trust-card grid (.tax-services-why-grid / .tax-services-why-card)
const trustHighlights = [
  { icon: Award, label: "Over 20 years of trusted tax and accounting experience" },
  { icon: Briefcase, label: "Specialists in investment property and business tax returns" },
  { icon: Users, label: "Personalised tax advice tailored to your financial goals" },
  { icon: MapPin, label: "Convenient offices located in Parramatta and Liverpool" },
  { icon: Video, label: "Flexible virtual tax consultations available across Sydney" },
  { icon: Calculator, label: "Strategic tax planning for long-term wealth building" }
];

// Section 5: Who We Help
const whoWeHelp = [
  {
    icon: Home,
    title: "Investment Property Owners",
    description:
      "Maximise rental deductions, reduce CGT, structure your portfolio correctly and receive strategic tax advice as your investments grow."
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description:
      "Tax planning, compliance, cash flow management, business structuring and ongoing advisory for growing businesses."
  },
  {
    icon: Gem,
    title: "High Net Worth Individuals",
    description: "Complex tax affairs, family groups, trusts, companies and SMSFs."
  }
];

// Section 6: Why Clients Choose Us — reuses the same trust-card style as
// section 4 above
const whyClientsChooseUs = [
  { icon: Calculator, label: "Proactive tax planning, not just year-end compliance" },
  { icon: Building2, label: "Property investment taxation specialists" },
  { icon: Briefcase, label: "Business growth and advisory expertise" },
  { icon: Landmark, label: "Integrated accounting, tax and lending solutions" },
  { icon: Users, label: "Personalised advice from experienced professionals" },
  { icon: Handshake, label: "One trusted team for tax, finance and business" }
];

// Section 7: Looking for an Accountant Who Understands Your Situation?
// Reuses the existing checklist markup/style (.tax-services-property-checklist)
const accountantChecklist = [
  "Investment property tax returns",
  "Multiple property portfolios",
  "Business tax returns",
  "Company tax returns",
  "Trust tax returns",
  "High-income salary earners",
  "Capital gains tax",
  "Tax planning",
  "Asset protection"
];

// Section 8: Choose Your Situation
const situations = [
  {
    icon: Home,
    title: "Own an Investment Property?",
    description:
      "We'll help you maximise rental deductions, depreciation claims, interest deductions and capital gains tax planning.",
    cta: "Book a Property Tax Consultation"
  },
  {
    icon: Briefcase,
    title: "Run a Business?",
    description:
      "From sole traders to companies and trusts, we'll ensure your business stays compliant while identifying opportunities to legally minimise tax.",
    cta: "Speak with a Business Tax Specialist"
  },
  {
    icon: TrendingUp,
    title: "High-Income Earner?",
    description:
      "If you're earning a high income, your tax strategy matters more than ever. We provide proactive advice to help reduce tax and protect your wealth.",
    cta: "Arrange a Confidential Consultation"
  }
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
      {/* Tax Time 2026 announcement banner — sits immediately under the
          site navigation and stays visible while browsing the page. */}
      <Link href="/contact" className="tax-announcement-banner">
        <span className="tax-announcement-banner-inner">
          <Calendar size={16} aria-hidden="true" />
          <span>
            <strong>Tax Time 2026</strong> · Appointments Now Available · Book
            Your Tax Appointment
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      {/* Hero — layout/buttons unchanged, copy updated */}
      <section className="tax-services-hero">
        <div className="container tax-services-hero-grid">
          <div className="tax-services-hero-content">
            <p className="eyebrow">
              Investment Property Tax Returns • Business Tax Returns • Strategic Tax Advice
            </p>

            <h1>Specialist tax returns and proactive tax advice for property
              investors, business owners and high-income Australians.</h1>

            <p className="tax-services-hero-subhead">
              Pay Less Tax. Build More Wealth.
            </p>

            <p className="lede">
              Whether you own one investment property or a growing business,
              we&apos;ll help you maximise legitimate deductions, minimise tax
              and keep more of what you&apos;ve earned.
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
              src="/team/ABBY.png"
              alt="Adviser meeting with a client about tax services"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Investment Property & Business Tax Specialists — reuses the
          existing trust-card grid, wording updated for new positioning */}
      <section className="tax-services-why">
        <div className="container">
          <FadeIn className="tax-services-why-intro">
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Investment Property & Business Tax Specialists</h2>
            <p className="lede">
              Helping Australians maximise deductions, reduce tax and build
              long-term wealth through strategic accounting and taxation
              advice.
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

      {/* Who We Help */}
      <section className="tax-services-who">
        <div className="container">
          <FadeIn className="tax-services-who-intro">
            <p className="eyebrow">Who We Help</p>
            <h2>Tailored Tax Advice for Every Stage</h2>
          </FadeIn>

          <FadeIn className="tax-services-who-grid">
            {whoWeHelp.map(({ icon: Icon, title, description }) => (
              <div className="tax-services-who-card" key={title}>
                <span className="tax-services-who-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Why Clients Choose Us — reuses the same trust-card style as above */}
      <section className="tax-services-why-clients">
        <div className="container">
          <FadeIn className="tax-services-why-intro">
            <p className="eyebrow">A Trusted Partner for Tax, Property and Business</p>
            <h2>Why Clients Choose Us</h2>
          </FadeIn>

          <FadeIn className="tax-services-why-grid">
            {whyClientsChooseUs.map(({ icon: Icon, label }) => (
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

      {/* Looking for an Accountant Who Understands Your Situation? —
          reuses the existing checklist markup/style, now paired with an image */}
      <section className="tax-services-checklist-section">
        <div className="container tax-services-checklist-layout">
          <FadeIn className="tax-services-checklist-content">
            <p className="eyebrow">Practical Advice, Tailored to You</p>
            <h2 className="tax-services-checklist-heading">Looking for an Accountant Who Understands Your Situation?</h2>
            <p className="lede">
              Whether you&apos;re a property investor, business owner or
              high-income earner, we provide practical accounting and
              taxation advice tailored to your circumstances.
            </p>

            <ul className="tax-services-property-checklist">
              {accountantChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="tax-services-hero-buttons tax-services-checklist-cta">
        <a href={PHONE_HREF} className="button button-secondary">
          <Phone size={18} aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>

        <Link href="/contact" className="button button-primary">
          Book Consultation
        </Link>
      </div>
          </FadeIn>

          <FadeIn className="tax-services-checklist-media">
            <div className="tax-services-checklist-image">
              <Image
                src="/photos/client-consultation.jpg"
                alt="Accountant meeting with a client to discuss tax and business advice"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Choose Your Situation */}
      <section className="tax-services-situations">
        <div className="container">
          <FadeIn className="tax-services-situations-intro">
            <p className="eyebrow">How Can We Help You?</p>
            <h2>Expert Tax Advice Tailored to You</h2>
          </FadeIn>

          <FadeIn className="tax-services-situations-grid">
            {situations.map(({ icon: Icon, title, description, cta }) => (
              <div className="tax-services-situation-card" key={title}>
                <span className="tax-services-situation-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="/contact" className="tax-services-property-cta">
                  {cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* What Clients Say About Us — kept exactly as-is */}
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

      {/* FAQ — kept exactly as-is */}
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

      {/* Final CTA — copy updated */}
      <section className="tax-services-final-cta">
        <div className="container tax-services-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Get Started</p>

            <h2>Ready to Maximise Your Tax Outcome?</h2>

            <p className="tax-services-final-cta-sub">
              Book your tax appointment today and let our experienced
              accountants help you claim every deduction you&apos;re entitled
              to.
            </p>

            <div className="tax-services-final-cta-buttons">
              <Link href="/contact" className="button button-primary">
                Book Your Tax Return
              </Link>

              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Give Us a Call
              </a>
            </div>

            <p className="tax-services-final-cta-footer">
              Helping Australians keep more of what they earn.
            </p>
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
