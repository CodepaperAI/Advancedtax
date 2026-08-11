/**
 * SMSF Services landing page.
 *
 * Written for the Next.js App Router (default export is a page component,
 * SEO handled via the `metadata` export below). If this project uses the
 * Pages Router instead, drop the `metadata` export and wrap the returned
 * JSX in a `<Head>` block using the same title/description values.
 *
 * Buttons use this page's own `.smsf-services-btn` classes (solid gold
 * primary with an arrow, outlined ghost secondary) rather than any global
 * button component, so they render identically regardless of what else is
 * defined elsewhere in the project.
 *
 * One assumption worth checking against the real project before shipping:
 * the "Book a Virtual Consultation" / "Speak with an SMSF Accountant" links
 * point at "/contact". Update BOOKING_URL and CONTACT_URL below if the
 * real booking/contact routes are named differently.
 *
 * Hero image: uses next/image pointed at "/images/smsf/ABBY.png". Copy
 * ABBY.png into this project's `public/images/smsf/` folder so that path
 * resolves. Update HERO_IMAGE_SRC / HERO_IMAGE_ALT below if the file lives
 * somewhere else or needs different alt text.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./smsf-services.css";

const BOOKING_URL = "/contact";
const CONTACT_URL = "/contact";

// Place ABBY.png at public/images/smsf/ABBY.png (or update this path to
// wherever it actually lives in the project).
const HERO_IMAGE_SRC = "/team/ABBY.png";
const HERO_IMAGE_ALT = "AATBS SMSF accountant";

export const metadata: Metadata = {
  title: "SMSF Accountant Sydney | SMSF Accounting & Compliance | AATBS",
  description:
    "Experienced SMSF accountants providing SMSF administration, compliance, tax returns, accounting and audit coordination. Introductory SMSF services from $990*. Book a Virtual Consultation.",
};

/* -------------------------------------------------------------------- */
/* Icons                                                                  */
/* Small inline SVGs so this file has no new dependency on an icon        */
/* library. If the project already uses lucide-react (as referenced in    */
/* other AATBS pages), these can be swapped for the equivalent imports.   */
/* -------------------------------------------------------------------- */

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function IconTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.2L3 3v6.59a2 2 0 0 0 .59 1.41l9.59 9.59a2 2 0 0 0 2.82 0l4.59-4.59a2 2 0 0 0 0-2.82Z" />
      <circle cx="7.5" cy="7.5" r="1.25" />
    </svg>
  );
}

function IconFileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function IconSettings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function IconScale(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="m5 7-3 6a3 3 0 0 0 6 0Z" />
      <path d="m19 7-3 6a3 3 0 0 0 6 0Z" />
    </svg>
  );
}

function IconBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="5" width="3" height="13" />
    </svg>
  );
}

function IconSearchCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10" cy="10" r="7" />
      <path d="m21 21-4.35-4.35" />
      <path d="m7.5 10 1.8 1.8L13 8" />
    </svg>
  );
}

function IconXCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m9.5 9.5 5 5M14.5 9.5l-5 5" />
    </svg>
  );
}

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconHandshake(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m11 17 2 2a2.4 2.4 0 0 0 3.4-3.4l-1.6-1.6" />
      <path d="m8 14 4 4" />
      <path d="m2 12 5.5-5.5a2 2 0 0 1 2.8 0L12 8" />
      <path d="M22 12h-6l-2-2" />
    </svg>
  );
}

function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4" />
      <path d="M9 7h.01M9 11h.01M9 15h.01M15 7h.01M15 11h.01M15 15h.01" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/* Static content                                                        */
/* -------------------------------------------------------------------- */

const OFFER_INCLUDES = [
  "SMSF Annual Financial Statements",
  "SMSF Tax Return Preparation & Lodgement",
  "Independent Audit Coordination",
  "Ongoing SMSF Compliance",
  "Dedicated SMSF Accountant",
];

const TRUST_ITEMS = [
  { label: "Experienced SMSF Accountants", icon: IconShield },
  { label: "SMSF Administration Specialists", icon: IconClipboard },
  { label: "ATO Compliant SMSF Services", icon: IconScale },
  { label: "Transparent Pricing", icon: IconTag },
];

const RESPONSIBILITY_TAGS = [
  "Annual reporting",
  "Compliance",
  "Tax obligations",
  "Record keeping",
  "Audits",
  "Changing legislation",
];

const WHY_CHOOSE_BENEFITS = [
  "Experienced SMSF accountants",
  "Complete SMSF administration",
  "Ongoing compliance support",
  "Accurate annual financial statements",
  "SMSF tax return preparation",
  "Independent audit coordination",
  "Transparent pricing",
  "Fast response times",
  "Practical advice explained in plain English",
  "Personal service tailored to your goals",
];

const SERVICE_CARDS = [
  {
    icon: IconBuilding,
    title: "SMSF Setup",
    body: "We'll help determine whether establishing a Self Managed Super Fund is right for your circumstances before guiding you through every step of the setup process.",
  },
  {
    icon: IconSettings,
    title: "SMSF Administration",
    body: "Comprehensive administration including record keeping, member reporting, pension administration, contribution tracking, annual financial statements, and ongoing fund management.",
  },
  {
    icon: IconShield,
    title: "SMSF Compliance",
    body: "Helping your fund remain compliant with ATO requirements and superannuation legislation through accurate reporting and ongoing guidance.",
  },
  {
    icon: IconFileText,
    title: "SMSF Tax Returns",
    body: "Preparation and lodgement of annual SMSF tax returns, completed accurately and on time.",
  },
  {
    icon: IconBarChart,
    title: "Annual Financial Statements",
    body: "Professional financial reporting prepared in accordance with Australian accounting standards.",
  },
  {
    icon: IconSearchCheck,
    title: "Independent SMSF Audit Coordination",
    body: "We coordinate the mandatory annual audit with approved SMSF auditors.",
  },
  {
    icon: IconUsers,
    title: "Pension & Member Reporting",
    body: "Supporting pension commencements, contribution reporting, and member balances.",
  },
  {
    icon: IconHandshake,
    title: "Ongoing SMSF Advice",
    body: "Practical guidance throughout the year whenever you need it.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Book Your Virtual Consultation",
  },
  {
    title: "We Review Your Fund",
  },
  {
    title: "We Manage Your SMSF Administration & Compliance",
  },
  {
    title: "You Receive Ongoing Advice & Support",
  },
];

const SWITCH_REASONS = [
  "Only contacts you once a year",
  "Takes too long to respond",
  "Doesn't explain things clearly",
  "Provides compliance without proactive advice",
  "Makes SMSF management feel confusing",
  "Charges premium fees without delivering ongoing value",
];

const WHO_WE_HELP = [
  "Individuals considering an SMSF",
  "Existing SMSF trustees",
  "Clients changing accountants",
  "Investors building retirement wealth",
  "Professionals seeking ongoing SMSF advice",
  "Retirees requiring pension administration",
  "Trustees wanting reliable compliance support",
];

const FAQS = [
  {
    question: "Is an SMSF right for me?",
    answer:
      "We'll discuss your circumstances and determine whether an SMSF aligns with your retirement goals.",
  },
  {
    question: "Can you take over my existing SMSF?",
    answer:
      "Yes. We'll manage the transition from your current accountant with minimal disruption.",
  },
  {
    question: "What does SMSF administration include?",
    answer:
      "Administration includes financial statements, member reporting, pension administration, contribution tracking, audit coordination, compliance reporting, and ongoing support.",
  },
  {
    question: "Do you coordinate the annual audit?",
    answer: "Yes. We work with approved independent SMSF auditors.",
  },
  {
    question: "Can you establish a new SMSF?",
    answer:
      "Absolutely. We'll guide you through every step of the establishment process.",
  },
  {
    question: "How much does your SMSF service cost?",
    answer:
      "Our introductory offer starts from just $990* for eligible standard SMSFs. After understanding your fund's requirements, we'll provide a fixed, transparent quote.",
  },
];

/* -------------------------------------------------------------------- */
/* Page                                                                   */
/* -------------------------------------------------------------------- */

export default function SmsfServicesPage() {
  return (
    <main className="smsf-services-page">
      {/* Announcement bar */}
      <Link
        href={BOOKING_URL}
        className="smsf-services-announcement"
      >
        <span className="smsf-services-announcement-inner">
          <IconClipboard width={16} height={16} />
          LIMITED TIME INTRODUCTORY OFFER
          <span className="smsf-services-announcement-divider">|</span>
          Professional SMSF Administration &amp; Compliance from just $990*
          <span className="smsf-services-announcement-divider">|</span>
          Book Your Virtual Consultation Today
        </span>
      </Link>

      {/* Hero */}
      <section className="smsf-services-hero">
        <div className="smsf-services-container smsf-services-hero-grid">
          <div className="smsf-services-hero-content">
            <span className="smsf-services-eyebrow">SMSF Accountant Sydney</span>
            <h1>Expert SMSF Accounting, Administration &amp; Compliance Services</h1>
            <p className="smsf-services-lede">
              Managing a Self Managed Super Fund (SMSF) gives you greater
              control over your retirement, but it also comes with ongoing
              responsibilities. From SMSF administration and annual
              compliance to tax returns, financial statements, and audit
              coordination, our experienced SMSF accountants help you stay
              compliant while supporting your long-term financial goals.
            </p>
            <p className="smsf-services-hero-support">
              Book your complimentary consultation today and discover how
              AATBS can simplify your SMSF.
            </p>
            <div className="smsf-services-hero-buttons">
              <Link
                href={BOOKING_URL}
                className="smsf-services-btn smsf-services-btn-primary"
              >
                Book a Virtual Consultation
                <IconArrowRight />
              </Link>
              <Link
                href="tel:+6129734077"
                className="smsf-services-btn smsf-services-btn-secondary"
              >
                Speak with an SMSF Accountant
              </Link>
            </div>
          </div>

          {/*
            Copy ABBY.png into public/images/smsf/ so this path resolves
            (or update HERO_IMAGE_SRC above to wherever it actually lives).
            object-fit: contain on .smsf-services-hero-image img (see the
            CSS file) suits a transparent-background cut-out; switch to
            cover in the CSS if this ends up being a full-bleed photo.
          */}
          <div className="smsf-services-hero-image">
            <Image
              src={HERO_IMAGE_SRC}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Introductory offer */}
      <section className="smsf-services-offer-section">
        <div className="smsf-services-container">
          <div className="smsf-services-offer-card">
            <span className="smsf-services-offer-eyebrow">
              <IconTag width={16} height={16} />
              Limited Time Introductory Offer
            </span>
            <h2>Professional SMSF Administration &amp; Compliance</h2>
            <p className="smsf-services-offer-sub">
              A fixed-price introductory package for eligible standard SMSFs.
            </p>

            <div className="smsf-services-offer-price">
              <span className="smsf-services-offer-price-label">From</span>
              <span className="smsf-services-offer-price-value">$990*</span>
            </div>

            <ul className="smsf-services-offer-list">
              {OFFER_INCLUDES.map((item) => (
                <li key={item}>
                  <IconCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={BOOKING_URL}
              className="smsf-services-btn smsf-services-btn-primary smsf-services-btn--block"
            >
              Book Your Virtual Consultation
              <IconArrowRight />
            </Link>

            <p className="smsf-services-offer-disclaimer">
              *Available for eligible standard SMSFs. Additional fees may
              apply depending on fund complexity and investment structure.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="smsf-services-trust">
        <div className="smsf-services-container smsf-services-trust-grid">
          {TRUST_ITEMS.map(({ label, icon: Icon }) => (
            <div className="smsf-services-trust-item" key={label}>
              <span className="smsf-services-trust-icon">
                <Icon width={20} height={20} />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Managing an SMSF doesn't have to be complicated */}
      <section className="smsf-services-section smsf-services-section--white">
        <div className="smsf-services-container">
          <div className="smsf-services-section-intro" style={{ marginBottom: "2.5rem" }}>
            <span className="smsf-services-eyebrow">Self Managed Super Fund</span>
            <h2>Managing an SMSF Doesn&rsquo;t Have to Be Complicated</h2>
          </div>

          <div className="smsf-services-intro-layout">
            <div className="smsf-services-intro-copy">
              <p>
                A Self Managed Super Fund offers greater flexibility and
                control over your retirement savings, but it also means
                taking responsibility for annual reporting, compliance, tax
                obligations, record keeping, audits, and ever-changing
                superannuation legislation.
              </p>
              <p>
                Many trustees simply don&rsquo;t have the time or confidence
                to manage every requirement themselves.
              </p>

              <ul className="smsf-services-intro-tags">
                {RESPONSIBILITY_TAGS.map((tag) => (
                  <li className="smsf-services-intro-tag" key={tag}>
                    <IconCheck width={14} height={14} />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="smsf-services-intro-callout">
              <p className="smsf-services-intro-lead">
                That&rsquo;s where we come in.
              </p>
              <p>
                Our experienced SMSF accountants handle the administration,
                compliance, and reporting so you can focus on growing your
                retirement wealth with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose AATBS */}
      <section className="smsf-services-section smsf-services-section--alt">
        <div className="smsf-services-container">
          <div className="smsf-services-section-intro">
            <span className="smsf-services-eyebrow">Why AATBS</span>
            <h2>Why Choose AATBS?</h2>
            <p>
              Your SMSF deserves more than an accountant who only contacts
              you once a year. At AATBS, we build long-term relationships
              with our clients by providing proactive advice, responsive
              support, and reliable compliance services throughout the year.
            </p>
          </div>

          <div className="smsf-services-why-grid">
            {WHY_CHOOSE_BENEFITS.map((benefit) => (
              <div className="smsf-services-why-card" key={benefit}>
                <span className="smsf-services-why-icon">
                  <IconCheck />
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete SMSF administration, compliance & accounting services */}
      <section className="smsf-services-section smsf-services-section--white">
        <div className="smsf-services-container">
          <div className="smsf-services-section-intro">
            <span className="smsf-services-eyebrow">Our SMSF Services</span>
            <h2>
              Complete SMSF Administration, Compliance &amp; Accounting
              Services
            </h2>
            <p>
              Whether you&rsquo;re establishing a new fund or looking for a
              trusted accountant to manage your existing SMSF, we provide
              comprehensive support throughout the life of your fund.
            </p>
          </div>

          <div className="smsf-services-card-grid">
            {SERVICE_CARDS.map(({ icon: Icon, title, body }) => (
              <article className="smsf-services-card" key={title}>
                <span className="smsf-services-card-icon">
                  <Icon width={22} height={22} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="smsf-services-section smsf-services-section--alt">
        <div className="smsf-services-container">
          <div className="smsf-services-section-intro">
            <span className="smsf-services-eyebrow">How It Works</span>
            <h2>Our Process</h2>
          </div>

          <ol className="smsf-services-process-grid">
            {PROCESS_STEPS.map((step, index) => (
              <li className="smsf-services-process-step" key={step.title}>
                <span className="smsf-services-process-number">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                {index < PROCESS_STEPS.length - 1 && (
                  <span
                    className="smsf-services-process-connector"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we help */}
      <section className="smsf-services-section smsf-services-section--alt">
        <div className="smsf-services-container">
          <div className="smsf-services-section-intro">
            <span className="smsf-services-eyebrow">Who We Help</span>
            <h2>Who We Help</h2>
            <p>Our SMSF services are ideal for:</p>
          </div>

          <div className="smsf-services-who-grid">
            {WHO_WE_HELP.map((item) => (
              <div className="smsf-services-who-card" key={item}>
                <span className="smsf-services-who-icon">
                  <IconUsers width={18} height={18} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="smsf-services-faq">
        <div className="smsf-services-container smsf-services-faq-inner">
          <div className="smsf-services-section-intro" style={{ margin: 0 }}>
            <span className="smsf-services-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="smsf-services-faq-list">
            {FAQS.map(({ question, answer }) => (
              <details className="smsf-services-faq-item" key={question}>
                <summary>
                  {question}
                  <IconChevronDown />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="smsf-services-final-cta">
        <div className="smsf-services-container smsf-services-final-cta-inner">
          <h2>Ready to Simplify Your SMSF?</h2>
          <p className="smsf-services-final-cta-sub">
            Whether you&rsquo;re establishing a Self Managed Super Fund,
            transferring from another accountant, or looking for reliable
            SMSF administration, SMSF compliance, and SMSF accounting
            services, our experienced team is here to help.
          </p>
          <p className="smsf-services-final-cta-sub">
            Take advantage of our Limited Time Introductory Offer from just
            $990* and discover how AATBS can help you manage your SMSF with
            confidence.
          </p>
          <div className="smsf-services-final-cta-buttons">
            <Link
              href={BOOKING_URL}
              className="smsf-services-btn smsf-services-btn-primary"
            >
              Book Your Virtual Consultation
              <IconArrowRight />
            </Link>
          </div>
          <p className="smsf-services-final-cta-footer">
            *Available for eligible standard SMSFs. Additional fees may
            apply depending on fund complexity and investment structure.
          </p>
        </div>
      </section>
    </main>
  );
}