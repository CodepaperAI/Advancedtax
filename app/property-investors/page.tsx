import Image from "next/image";
import Link from "next/link";
import "./property-investors.css";
import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Home,
  Landmark,
  LineChart,
  MapPin,
  Phone,
  PiggyBank,
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
  title: "Investment Property Tax Returns & Accounting | Maximise Your Deductions",
  description:
    "Specialist tax returns and accounting for property investors. Maximise rental deductions, depreciation and capital gains tax outcomes, and structure your portfolio for long-term growth. Meet in Parramatta, Liverpool or virtually across Sydney.",
  path: "/property-investors",
  keywords: [
    "investment property tax returns Sydney",
    "rental property accountant",
    "negative gearing tax advice",
    "capital gains tax accountant Sydney",
    "property depreciation schedule",
    "SMSF property accountant",
    "property portfolio tax structuring",
    "landlord tax deductions Sydney"
  ]
});

const trustHighlights = [
  { icon: Award, label: "Over 20 years of trusted tax and accounting experience" },
  { icon: Home, label: "Specialists in investment property and rental tax returns" },
  { icon: Users, label: "Personalised advice tailored to your property portfolio" },
  { icon: MapPin, label: "Convenient offices located in Parramatta and Liverpool" },
  { icon: Video, label: "Flexible virtual tax consultations available across Sydney" },
  { icon: Calculator, label: "Strategic tax planning for long-term portfolio growth" }
];

const whoWeHelp = [
  {
    icon: Home,
    title: "First Investment Property",
    description:
      "Just bought your first rental? We'll set you up with the right deductions, depreciation claims and record-keeping from day one."
  },
  {
    icon: Building2,
    title: "Growing Portfolios",
    description:
      "Two or more properties brings more complexity. We help you structure ownership, manage cash flow and plan ahead for CGT."
  },
  {
    icon: PiggyBank,
    title: "SMSF Property Investors",
    description:
      "Holding property inside a self-managed super fund? We handle SMSF property tax returns and compliance alongside your broader strategy."
  }
];

const whyClientsChooseUs = [
  { icon: Calculator, label: "Proactive tax planning, not just year-end compliance" },
  { icon: Building2, label: "Property investment taxation specialists" },
  { icon: LineChart, label: "Depreciation and capital gains modelling" },
  { icon: Landmark, label: "Integrated accounting, tax and lending solutions" },
  { icon: Users, label: "Personalised advice from experienced professionals" },
  { icon: Home, label: "One trusted team for your entire property journey" }
];

const propertyChecklist = [
  "Rental property tax returns",
  "Negative gearing advice",
  "Depreciation schedules & claims",
  "Capital gains tax planning",
  "Multiple property portfolios",
  "SMSF property tax returns",
  "Interest deduction reviews",
  "Renovation & repair vs. capital works",
  "Property ownership structuring",
  "Land tax guidance"
];

const situations = [
  {
    icon: Home,
    title: "Own One Investment Property?",
    description:
      "We'll make sure you're claiming every rental deduction you're entitled to, including depreciation, interest and holding costs.",
    cta: "Book a Property Tax Consultation"
  },
  {
    icon: Building2,
    title: "Building a Portfolio?",
    description:
      "As your properties grow, so does the complexity. We help you structure ownership and plan ahead for cash flow and CGT.",
    cta: "Speak with a Portfolio Specialist"
  },
  {
    icon: PiggyBank,
    title: "Investing Through an SMSF?",
    description:
      "Property held in super comes with its own compliance rules. We keep your fund compliant while optimising the tax outcome.",
    cta: "Arrange an SMSF Property Consultation"
  }
];

const faqItems = [
  {
    question: "What can I claim on my investment property?",
    answer:
      "You can generally claim interest on your loan, property management fees, council rates, insurance, repairs and maintenance, and depreciation on eligible items and capital works. We review your specific property to make sure nothing is missed."
  },
  {
    question: "Do you handle negative gearing and multiple properties?",
    answer:
      "Yes. We prepare rental property tax returns and advise on negative gearing, depreciation claims, capital gains tax and deductions — whether you own one investment property or a growing portfolio."
  },
  {
    question: "Can you help with property held in an SMSF?",
    answer:
      "Yes, we prepare tax returns and provide compliance support for property held inside self-managed super funds, alongside advice on how it fits your broader retirement strategy."
  },
  {
    question: "How do you help reduce capital gains tax when I sell?",
    answer:
      "We look at timing, ownership structure, available exemptions and cost base records ahead of a sale, so you're not caught off guard by a CGT bill and can plan the outcome in advance."
  },
  {
    question: "Where are your offices, and can I meet virtually instead?",
    answer: `Our offices are in Parramatta and Liverpool, and we offer secure virtual consultations for property investors anywhere across Sydney. Book online or call us on ${PHONE_DISPLAY} to arrange a time that suits you.`
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

export default async function PropertyInvestorsPage() {
  const googleReview = await getGoogleReviewSummary();

  return (
    <main className="property-investors-page">
      <Link href="/contact" className="property-investors-announcement-banner">
        <span className="property-investors-announcement-banner-inner">
          <Calendar size={16} aria-hidden="true" />
          <span>
            <strong>Tax Time 2026</strong> · Appointments Now Available · Book
            Your Property Tax Appointment
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      {/* Hero */}
      <section className="property-investors-hero">
        <div className="container property-investors-hero-grid">
          <div className="property-investors-hero-content">
            <p className="eyebrow">
              Rental Property Tax Returns • Depreciation • Capital Gains Tax
            </p>

            <h1>Specialist tax returns and proactive advice for
              Australian property investors.</h1>

            <p className="property-investors-hero-subhead">
              Maximise Your Deductions. Build Your Portfolio.
            </p>

            <p className="lede">
              Whether you own one rental property or a growing portfolio,
              we&apos;ll help you claim every deduction you&apos;re entitled
              to and plan ahead for capital gains tax.
            </p>

            <div className="property-investors-hero-buttons">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Virtual Consultation
              </Link>
            </div>
          </div>

          <div className="property-investors-hero-image">
            <Image
              src="/team/ABBY.png"
              alt="Adviser meeting with a property investor about tax services"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="property-investors-why">
        <div className="container">
          <FadeIn className="property-investors-why-intro">
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Investment Property Tax Specialists</h2>
            <p className="lede">
              Helping property investors maximise deductions, reduce tax and
              build long-term wealth through their portfolio.
            </p>
          </FadeIn>

          <FadeIn className="property-investors-why-grid">
            {trustHighlights.map(({ icon: Icon, label }) => (
              <div className="property-investors-why-card" key={label}>
                <span className="property-investors-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Who we help */}
      <section className="property-investors-who">
        <div className="container">
          <FadeIn className="property-investors-who-intro">
            <p className="eyebrow">Who We Help</p>
            <h2>Tailored Advice at Every Stage of Your Portfolio</h2>
          </FadeIn>

          <FadeIn className="property-investors-who-grid">
            {whoWeHelp.map(({ icon: Icon, title, description }) => (
              <div className="property-investors-who-card" key={title}>
                <span className="property-investors-who-icon">
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
      <section className="property-investors-why-clients">
        <div className="container">
          <FadeIn className="property-investors-why-intro">
            <p className="eyebrow">A Trusted Partner for Your Portfolio</p>
            <h2>Why Clients Choose Us</h2>
          </FadeIn>

          <FadeIn className="property-investors-why-grid">
            {whyClientsChooseUs.map(({ icon: Icon, label }) => (
              <div className="property-investors-why-card" key={label}>
                <span className="property-investors-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Checklist */}
      <section className="property-investors-checklist-section">
        <div className="container property-investors-checklist-layout">
          <FadeIn className="property-investors-checklist-content">
            <p className="eyebrow">Practical Advice, Tailored to You</p>
            <h2 className="property-investors-checklist-heading">
              Looking for an Accountant Who Understands Property Investment?
            </h2>
            <p className="lede">
              From your first rental to a growing portfolio, we provide
              practical accounting and taxation advice tailored to property
              investors.
            </p>

            <ul className="property-investors-property-checklist">
              {propertyChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="property-investors-hero-buttons property-investors-checklist-cta">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Virtual Consultation
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="property-investors-checklist-media">
            <div className="property-investors-checklist-image">
              <Image
                src="/photos/client-consultation.jpg"
                alt="Accountant meeting with a property investor to discuss tax advice"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Choose your situation */}
      <section className="property-investors-situations">
        <div className="container">
          <FadeIn className="property-investors-situations-intro">
            <p className="eyebrow">How Can We Help You?</p>
            <h2>Expert Tax Advice for Every Investor</h2>
          </FadeIn>

          <FadeIn className="property-investors-situations-grid">
            {situations.map(({ icon: Icon, title, description, cta }) => (
              <div className="property-investors-situation-card" key={title}>
                <span className="property-investors-situation-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="/contact" className="property-investors-property-cta">
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
            <h2 id="google-review-heading">What Property Investors Say About Us</h2>
            <p>
              We&apos;re proud to support property investors across Sydney
              with personalised accounting and taxation advice. Discover why
              so many clients continue to choose us.
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
      <section className="property-investors-faq">
        <div className="container property-investors-faq-inner">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2>Common Questions</h2>
          </FadeIn>

          <FadeIn className="property-investors-faq-list">
            {faqItems.map((item) => (
              <details className="property-investors-faq-item" key={item.question}>
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
      <section className="property-investors-final-cta">
        <div className="container property-investors-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Get Started</p>

            <h2>Ready to Maximise Your Property Tax Outcome?</h2>

            <p className="property-investors-final-cta-sub">
              Book your tax appointment today and let our experienced
              accountants help you claim every deduction you&apos;re entitled
              to.
            </p>

            <div className="property-investors-final-cta-buttons">
              <Link href="/contact" className="button button-primary">
                Book Your Tax Return
              </Link>

              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Give Us a Call
              </a>
            </div>

            <p className="property-investors-final-cta-footer">
              Helping property investors keep more of what they earn.
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