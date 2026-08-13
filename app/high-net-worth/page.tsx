import Image from "next/image";
import Link from "next/link";
import "./high-net-worth.css";
import {
  ArrowRight,
  Award,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Gem,
  Landmark,
  MapPin,
  Phone,
  PiggyBank,
  Scale,
  Shield,
  Star,
  Users,
  Video
} from "lucide-react";
import { FadeIn } from "@/components/MotionPrimitives";
import { pageMetadata } from "@/lib/seo";
import { getGoogleReviewSummary } from "@/lib/googleReviews";

const PHONE_DISPLAY = "(02) 9734 0777";
const PHONE_HREF = "tel:+61297340777";

export const metadata = pageMetadata({
  title: "Tax & Wealth Advisory for High Net Worth Individuals | Protect What You've Built",
  description:
    "Strategic tax advice for high-income earners, family groups and complex financial affairs. Trusts, companies, SMSFs and asset protection, handled with discretion. Meet in Parramatta, Liverpool or virtually across Sydney.",
  path: "/high-net-worth",
  keywords: [
    "high net worth tax advice Sydney",
    "family trust tax accountant",
    "asset protection strategy",
    "SMSF accountant Sydney",
    "private wealth accountant",
    "complex tax structuring",
    "high income tax planning",
    "family group tax advice"
  ]
});

const trustHighlights = [
  { icon: Award, label: "Over 20 years of trusted tax and accounting experience" },
  { icon: Gem, label: "Specialists in complex, high-net-worth tax affairs" },
  { icon: Users, label: "Personalised advice tailored to your financial goals" },
  { icon: MapPin, label: "Convenient offices located in Parramatta and Liverpool" },
  { icon: Video, label: "Flexible, discreet virtual consultations across Sydney" },
  { icon: Calculator, label: "Strategic tax planning to protect long-term wealth" }
];

const whoWeHelp = [
  {
    icon: Landmark,
    title: "Family Groups & Trusts",
    description:
      "Coordinated tax advice across family trusts, companies and individuals, so your whole family group is structured and working together."
  },
  {
    icon: PiggyBank,
    title: "SMSF & Retirement Planning",
    description:
      "Self-managed super funds bring compliance obligations and opportunity. We manage both, alongside your broader wealth strategy."
  },
  {
    icon: Shield,
    title: "Asset Protection",
    description:
      "Structuring ownership and entities to protect what you've built, from business risk, family changes and future uncertainty."
  }
];

const whyClientsChooseUs = [
  { icon: Calculator, label: "Proactive tax planning, not just year-end compliance" },
  { icon: Scale, label: "Deep experience with complex structures and trusts" },
  { icon: Shield, label: "Asset protection and risk-aware structuring" },
  { icon: Landmark, label: "Integrated accounting, tax and lending solutions" },
  { icon: Users, label: "Discreet, personalised advice from senior advisers" },
  { icon: Gem, label: "One trusted team for tax, structuring and wealth" }
];

const hnwChecklist = [
  "Complex individual tax returns",
  "Family trust tax returns",
  "Company tax returns",
  "SMSF tax returns & compliance",
  "Multiple entity & family group structuring",
  "Capital gains tax planning",
  "Asset protection strategy",
  "High-income tax planning",
  "Investment structuring advice",
  "Succession & estate tax planning"
];

const situations = [
  {
    icon: Landmark,
    title: "Managing a Family Group?",
    description:
      "We coordinate tax across trusts, companies and family members, so everything works together instead of in isolation.",
    cta: "Book a Family Group Consultation"
  },
  {
    icon: PiggyBank,
    title: "Investing Through an SMSF?",
    description:
      "We handle SMSF tax returns and compliance while keeping your fund aligned with your broader retirement and wealth strategy.",
    cta: "Speak with an SMSF Specialist"
  },
  {
    icon: Shield,
    title: "Protecting Significant Assets?",
    description:
      "We advise on structuring and entity setup to help protect your wealth from business, family and financial risk.",
    cta: "Arrange a Confidential Consultation"
  }
];

const faqItems = [
  {
    question: "Is strategic tax advice only for very high income earners?",
    answer:
      "Most clients benefit from proactive tax planning as their affairs grow more complex — from capital gains tax and family trusts to investment structures and asset protection. We also advise clients with more significant or complex wealth on further structuring."
  },
  {
    question: "Can you manage tax across my whole family group?",
    answer:
      "Yes. We coordinate tax returns and planning across family trusts, companies, SMSFs and individuals, so your structures work together rather than being handled in isolation."
  },
  {
    question: "Do you advise on asset protection, not just tax returns?",
    answer:
      "Yes, we advise on ownership and entity structuring aimed at protecting your assets from business and financial risk, alongside your ongoing tax and compliance work."
  },
  {
    question: "How do you help with succession or estate planning?",
    answer:
      "We work alongside your legal advisers on the tax implications of succession and estate planning, including how trusts, companies and asset ownership are structured for the next generation."
  },
  {
    question: "Where are your offices, and can I meet virtually instead?",
    answer: `Our offices are in Parramatta and Liverpool, and we offer secure, discreet virtual consultations for clients anywhere across Sydney. Book online or call us on ${PHONE_DISPLAY} to arrange a time that suits you.`
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

export default async function HighNetWorthPage() {
  const googleReview = await getGoogleReviewSummary();

  return (
    <main className="high-net-worth-page">
      <Link href="/contact" className="high-net-worth-announcement-banner">
        <span className="high-net-worth-announcement-banner-inner">
          <Calendar size={16} aria-hidden="true" />
          <span>
            <strong>Tax Time 2026</strong> · Appointments Now Available · Book
            Your Confidential Consultation
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      {/* Hero */}
      <section className="high-net-worth-hero">
        <div className="container high-net-worth-hero-grid">
          <div className="high-net-worth-hero-content">
            <p className="eyebrow">
              Family Trusts • SMSFs • Asset Protection • Strategic Tax Advice
            </p>

            <h1>Strategic tax and wealth advisory for high-income
              Australians and family groups.</h1>

            <p className="high-net-worth-hero-subhead">
              Protect What You&apos;ve Built. Plan For What&apos;s Next.
            </p>

            <p className="lede">
              If your affairs span trusts, companies, super and multiple
              income streams, you need advice that looks at the whole
              picture, not just this year&apos;s return.
            </p>

            <div className="high-net-worth-hero-buttons">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Confidential Consultation
              </Link>
            </div>
          </div>

          <div className="high-net-worth-hero-image">
            <Image
              src="/team/ABBY.png"
              alt="Adviser meeting with a high net worth client about tax and wealth strategy"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="high-net-worth-why">
        <div className="container">
          <FadeIn className="high-net-worth-why-intro">
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Private Wealth & Complex Tax Specialists</h2>
            <p className="lede">
              Helping high-income Australians and family groups protect
              wealth and plan ahead through strategic, coordinated advice.
            </p>
          </FadeIn>

          <FadeIn className="high-net-worth-why-grid">
            {trustHighlights.map(({ icon: Icon, label }) => (
              <div className="high-net-worth-why-card" key={label}>
                <span className="high-net-worth-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Who we help */}
      <section className="high-net-worth-who">
        <div className="container">
          <FadeIn className="high-net-worth-who-intro">
            <p className="eyebrow">Who We Help</p>
            <h2>Coordinated Advice Across Your Whole Financial Picture</h2>
          </FadeIn>

          <FadeIn className="high-net-worth-who-grid">
            {whoWeHelp.map(({ icon: Icon, title, description }) => (
              <div className="high-net-worth-who-card" key={title}>
                <span className="high-net-worth-who-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="high-net-worth-why-clients">
        <div className="container">
          <FadeIn className="high-net-worth-why-intro">
            <p className="eyebrow">A Trusted Partner for Your Wealth</p>
            <h2>Why Clients Choose Us</h2>
          </FadeIn>

          <FadeIn className="high-net-worth-why-grid">
            {whyClientsChooseUs.map(({ icon: Icon, label }) => (
              <div className="high-net-worth-why-card" key={label}>
                <span className="high-net-worth-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Checklist */}
      <section className="high-net-worth-checklist-section">
        <div className="container high-net-worth-checklist-layout">
          <FadeIn className="high-net-worth-checklist-content">
            <p className="eyebrow">Practical Advice, Handled With Discretion</p>
            <h2 className="high-net-worth-checklist-heading">
              Looking for an Accountant Who Understands Complex Affairs?
            </h2>
            <p className="lede">
              Whether you&apos;re managing a family group, multiple entities
              or significant assets, we provide practical, coordinated
              accounting and taxation advice tailored to your circumstances.
            </p>

            <ul className="high-net-worth-property-checklist">
              {hnwChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="high-net-worth-hero-buttons high-net-worth-checklist-cta">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Confidential Consultation
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="high-net-worth-checklist-media">
            <div className="high-net-worth-checklist-image">
              <Image
                src="/photos/client-consultation.jpg"
                alt="Accountant meeting with a high net worth client to discuss tax and wealth advice"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Choose your situation */}
      <section className="high-net-worth-situations">
        <div className="container">
          <FadeIn className="high-net-worth-situations-intro">
            <p className="eyebrow">How Can We Help You?</p>
            <h2>Expert Advice for Complex Financial Affairs</h2>
          </FadeIn>

          <FadeIn className="high-net-worth-situations-grid">
            {situations.map(({ icon: Icon, title, description, cta }) => (
              <div className="high-net-worth-situation-card" key={title}>
                <span className="high-net-worth-situation-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="/contact" className="high-net-worth-property-cta">
                  {cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="google-review-section" aria-labelledby="google-review-heading">
        <div className="container google-review-grid">
          <FadeIn className="google-review-copy">
            <p className="eyebrow">Client Reviews</p>
            <h2 id="google-review-heading">What Our Clients Say About Us</h2>
            <p>
              We&apos;re proud to support high-income individuals and family
              groups across Sydney with discreet, personalised accounting and
              taxation advice. Discover why so many clients continue to
              choose us.
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
      <section className="high-net-worth-faq">
        <div className="container high-net-worth-faq-inner">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2>Common Questions</h2>
          </FadeIn>

          <FadeIn className="high-net-worth-faq-list">
            {faqItems.map((item) => (
              <details className="high-net-worth-faq-item" key={item.question}>
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
      <section className="high-net-worth-final-cta">
        <div className="container high-net-worth-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Get Started</p>

            <h2>Ready to Protect and Grow Your Wealth?</h2>

            <p className="high-net-worth-final-cta-sub">
              Book a confidential consultation today and let our experienced
              advisers help you plan ahead with strategic, coordinated tax
              advice.
            </p>

            <div className="high-net-worth-final-cta-buttons">
              <Link href="/contact" className="button button-primary">
                Book A Confidential Consultation
              </Link>

              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Give Us a Call
              </a>
            </div>

            <p className="high-net-worth-final-cta-footer">
              Helping high-income Australians protect what they&apos;ve built.
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