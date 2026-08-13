import Image from "next/image";
import Link from "next/link";
import "./business-owners.css";
import {
  ArrowRight,
  Award,
  Banknote,
  Briefcase,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  Landmark,
  MapPin,
  Phone,
  Rocket,
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
  title: "Business Tax Returns & Accounting | Grow With Confidence",
  description:
    "Specialist tax returns, BAS, bookkeeping and advisory for sole traders, companies and trusts. Stay compliant, manage cash flow and get proactive tax planning as your business grows. Meet in Parramatta, Liverpool or virtually across Sydney.",
  path: "/business-owners",
  keywords: [
    "business tax returns Sydney",
    "company tax returns Parramatta",
    "small business accountant Sydney",
    "BAS preparation accountant",
    "business tax planning",
    "startup accountant Sydney",
    "trust tax returns business",
    "bookkeeping and payroll services"
  ]
});

const trustHighlights = [
  { icon: Award, label: "Over 20 years of trusted tax and accounting experience" },
  { icon: Briefcase, label: "Specialists in business tax returns and compliance" },
  { icon: Users, label: "Personalised advice tailored to your business goals" },
  { icon: MapPin, label: "Convenient offices located in Parramatta and Liverpool" },
  { icon: Video, label: "Flexible virtual tax consultations available across Sydney" },
  { icon: Calculator, label: "Strategic tax planning for sustainable business growth" }
];

const whoWeHelp = [
  {
    icon: Rocket,
    title: "Sole Traders & Startups",
    description:
      "Just starting out? We'll get your structure, registrations and record-keeping right from day one, so tax time is never a scramble."
  },
  {
    icon: Briefcase,
    title: "Established Companies",
    description:
      "From company tax returns to BAS and payroll, we keep your business compliant while looking for ways to legally reduce tax."
  },
  {
    icon: TrendingUp,
    title: "Growing & Scaling Businesses",
    description:
      "As revenue and headcount grow, so does complexity. We provide advisory support on structure, cash flow and long-term planning."
  }
];

const whyClientsChooseUs = [
  { icon: Calculator, label: "Proactive tax planning, not just year-end compliance" },
  { icon: Briefcase, label: "Business growth and advisory expertise" },
  { icon: ClipboardList, label: "BAS, bookkeeping and payroll under one roof" },
  { icon: Landmark, label: "Integrated accounting, tax and lending solutions" },
  { icon: Users, label: "Personalised advice from experienced professionals" },
  { icon: Banknote, label: "One trusted team for tax, finance and business" }
];

const businessChecklist = [
  "Business tax returns",
  "Company tax returns",
  "Trust tax returns",
  "BAS preparation & lodgement",
  "Bookkeeping & payroll",
  "Business structuring & setup",
  "Cash flow management",
  "Tax planning for growth",
  "Asset protection",
  "Succession & exit planning"
];

const situations = [
  {
    icon: Rocket,
    title: "Just Starting Your Business?",
    description:
      "We'll help you choose the right structure, register for the right taxes and set up bookkeeping that keeps you organised from the start.",
    cta: "Book a Startup Tax Consultation"
  },
  {
    icon: Briefcase,
    title: "Running an Established Business?",
    description:
      "From sole traders to companies and trusts, we'll ensure your business stays compliant while identifying opportunities to legally minimise tax.",
    cta: "Speak with a Business Tax Specialist"
  },
  {
    icon: TrendingUp,
    title: "Ready to Scale or Exit?",
    description:
      "Whether you're expanding, bringing on partners or planning an exit, we provide proactive advice to protect your wealth and your business.",
    cta: "Arrange a Growth Strategy Consultation"
  }
];

const faqItems = [
  {
    question: "Which business structures do you work with?",
    answer:
      "We support sole traders, partnerships, companies and family trusts, with services spanning business tax returns, BAS preparation, bookkeeping, payroll and tax planning."
  },
  {
    question: "Can you help with BAS and bookkeeping, not just my annual return?",
    answer:
      "Yes. We prepare and lodge BAS, handle bookkeeping and payroll, and keep your records accurate throughout the year so your tax return is straightforward and nothing is missed."
  },
  {
    question: "I'm just starting a business — where do I begin?",
    answer:
      "We start with your business structure and registrations, then set up bookkeeping and reporting so you're compliant and organised from day one, with tax planning built in as you grow."
  },
  {
    question: "Do you provide ongoing advisory, or just tax returns?",
    answer:
      "Most business clients work with us year-round on cash flow, structuring, growth planning and proactive tax strategy, not just a once-a-year lodgement."
  },
  {
    question: "Where are your offices, and can I meet virtually instead?",
    answer: `Our offices are in Parramatta and Liverpool, and we offer secure virtual consultations for business owners anywhere across Sydney. Book online or call us on ${PHONE_DISPLAY} to arrange a time that suits you.`
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

export default async function BusinessOwnersPage() {
  const googleReview = await getGoogleReviewSummary();

  return (
    <main className="business-owners-page">
      <Link href="/contact" className="business-owners-announcement-banner">
        <span className="business-owners-announcement-banner-inner">
          <Calendar size={16} aria-hidden="true" />
          <span>
            <strong>Tax Time 2026</strong> · Appointments Now Available · Book
            Your Business Tax Appointment
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>

      {/* Hero */}
      <section className="business-owners-hero">
        <div className="container business-owners-hero-grid">
          <div className="business-owners-hero-content">
            <p className="eyebrow">
              Business Tax Returns • BAS & Bookkeeping • Strategic Advisory
            </p>

            <h1>Specialist tax returns and proactive advice for
              Australian business owners.</h1>

            <p className="business-owners-hero-subhead">
              Stay Compliant. Grow With Confidence.
            </p>

            <p className="lede">
              From sole traders to companies and trusts, we&apos;ll keep your
              business compliant, manage the day-to-day and identify
              opportunities to legally minimise tax.
            </p>

            <div className="business-owners-hero-buttons">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Virtual Consultation
              </Link>
            </div>
          </div>

          <div className="business-owners-hero-image">
            <Image
              src="/team/ABBY.png"
              alt="Adviser meeting with a business owner about tax services"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="business-owners-why">
        <div className="container">
          <FadeIn className="business-owners-why-intro">
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Business Tax & Advisory Specialists</h2>
            <p className="lede">
              Helping business owners stay compliant, manage cash flow and
              build long-term wealth through strategic tax planning.
            </p>
          </FadeIn>

          <FadeIn className="business-owners-why-grid">
            {trustHighlights.map(({ icon: Icon, label }) => (
              <div className="business-owners-why-card" key={label}>
                <span className="business-owners-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Who we help */}
      <section className="business-owners-who">
        <div className="container">
          <FadeIn className="business-owners-who-intro">
            <p className="eyebrow">Who We Help</p>
            <h2>Tailored Advice at Every Stage of Your Business</h2>
          </FadeIn>

          <FadeIn className="business-owners-who-grid">
            {whoWeHelp.map(({ icon: Icon, title, description }) => (
              <div className="business-owners-who-card" key={title}>
                <span className="business-owners-who-icon">
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
      <section className="business-owners-why-clients">
        <div className="container">
          <FadeIn className="business-owners-why-intro">
            <p className="eyebrow">A Trusted Partner for Your Business</p>
            <h2>Why Clients Choose Us</h2>
          </FadeIn>

          <FadeIn className="business-owners-why-grid">
            {whyClientsChooseUs.map(({ icon: Icon, label }) => (
              <div className="business-owners-why-card" key={label}>
                <span className="business-owners-why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <p>{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Checklist */}
      <section className="business-owners-checklist-section">
        <div className="container business-owners-checklist-layout">
          <FadeIn className="business-owners-checklist-content">
            <p className="eyebrow">Practical Advice, Tailored to You</p>
            <h2 className="business-owners-checklist-heading">
              Looking for an Accountant Who Understands Your Business?
            </h2>
            <p className="lede">
              Whether you&apos;re a sole trader, a growing company or
              managing a family trust, we provide practical accounting and
              taxation advice tailored to your business.
            </p>

            <ul className="business-owners-property-checklist">
              {businessChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="business-owners-hero-buttons business-owners-checklist-cta">
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <Link href="/contact" className="button button-primary">
                Book A Virtual Consultation
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="business-owners-checklist-media">
            <div className="business-owners-checklist-image">
              <Image
                src="/photos/client-consultation.jpg"
                alt="Accountant meeting with a business owner to discuss tax and advisory"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Choose your situation */}
      <section className="business-owners-situations">
        <div className="container">
          <FadeIn className="business-owners-situations-intro">
            <p className="eyebrow">How Can We Help You?</p>
            <h2>Expert Tax Advice for Every Stage of Business</h2>
          </FadeIn>

          <FadeIn className="business-owners-situations-grid">
            {situations.map(({ icon: Icon, title, description, cta }) => (
              <div className="business-owners-situation-card" key={title}>
                <span className="business-owners-situation-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="/contact" className="business-owners-property-cta">
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
            <h2 id="google-review-heading">What Business Owners Say About Us</h2>
            <p>
              We&apos;re proud to support business owners across Sydney with
              personalised accounting, tax and advisory services. Discover
              why so many clients continue to choose us.
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
      <section className="business-owners-faq">
        <div className="container business-owners-faq-inner">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2>Common Questions</h2>
          </FadeIn>

          <FadeIn className="business-owners-faq-list">
            {faqItems.map((item) => (
              <details className="business-owners-faq-item" key={item.question}>
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
      <section className="business-owners-final-cta">
        <div className="container business-owners-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Get Started</p>

            <h2>Ready to Get Your Business Tax Sorted?</h2>

            <p className="business-owners-final-cta-sub">
              Book your tax appointment today and let our experienced
              accountants help your business stay compliant and grow.
            </p>

            <div className="business-owners-final-cta-buttons">
              <Link href="/contact" className="button button-primary">
                Book Your Tax Return
              </Link>

              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Give Us a Call
              </a>
            </div>

            <p className="business-owners-final-cta-footer">
              Helping business owners keep more of what they earn.
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
