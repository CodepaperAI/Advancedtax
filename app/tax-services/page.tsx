import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  Phone,
  ShieldCheck,
  Video
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { pageMetadata } from "@/lib/seo";

/**
 * NOTE ON ASSUMPTIONS
 * -------------------
 * - Button classes below use `button button-primary` / `button button-secondary`
 *   as placeholders for the site's existing button styles. Rename these to
 *   match the real utility classes used elsewhere in the project.
 * - Image paths (e.g. "/photos/investment-property.jpg") are placeholders —
 *   swap in real assets from the media library.
 * - The Google Reviews section has a clearly marked spot to drop in the
 *   existing reviews component/import once its name and path are known. No
 *   implementation was shown for it, so it hasn't been guessed at here.
 * - The `Accordion` component's API wasn't provided, so the FAQ uses native
 *   <details>/<summary> elements instead — semantic, accessible, and requires
 *   no client-side JavaScript. Swap in the real Accordion if it's a closer
 *   match to the rest of the site.
 */

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

type ServiceList = {
  label: string;
  items: string[];
};

function ServicePillar({
  eyebrow,
  title,
  intro,
  primaryList,
  secondaryList,
  ctaLabel,
  image,
  alt,
  reverse = false
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primaryList: ServiceList;
  secondaryList?: ServiceList;
  ctaLabel: string;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <FadeIn
      className={`tax-services-pillar${reverse ? " tax-services-pillar-reverse" : ""}`}
    >
      <div className="tax-services-pillar-media">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
        />
      </div>

      <div className="tax-services-pillar-content">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="lede">{intro}</p>

        <div className="tax-services-pillar-lists">
          {secondaryList && (
            <div className="tax-services-pillar-list">
              <h3>{secondaryList.label}</h3>
              <ul>
                {secondaryList.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="tax-services-pillar-list">
            <h3>{primaryList.label}</h3>
            <ul>
              {primaryList.items.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/book-a-consultation" className="button button-primary">
          {ctaLabel}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </FadeIn>
  );
}

const whyChooseHighlights = [
  "Over 20 years of experience",
  "Business, Tax & Finance Specialists",
  "Virtual appointments across Sydney",
  "Offices in Parramatta & Liverpool",
  "Personalised advice"
];

const virtualFeatures = [
  { icon: Video, label: "Zoom consultations" },
  { icon: Phone, label: "Phone consultations" },
  { icon: ShieldCheck, label: "Secure document uploads" },
  { icon: CheckCircle2, label: "Electronic signatures" },
  { icon: Home, label: "Professional advice without visiting our offices" }
];

const faqItems = [
  {
    question: "Can I complete my tax return online?",
    answer:
      "Yes. We offer secure document uploads, electronic signatures and Zoom or phone consultations, so your return can be completed entirely online without visiting our offices."
  },
  {
    question: "Can you help with investment property tax?",
    answer:
      "Yes. We prepare rental property tax returns and advise on negative gearing, depreciation claims, capital gains tax and deductions for single or multiple investment properties."
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes. We support sole traders, partnerships, companies, family trusts and small to medium businesses with tax returns, BAS, bookkeeping, payroll and tax planning."
  },
  {
    question: "Where are your offices?",
    answer:
      "Our offices are located in Parramatta and Liverpool. We also offer virtual appointments for clients anywhere across Sydney."
  },
  {
    question: "How do I book a consultation?",
    answer: `Book a free consultation using the button on this page, or call us directly on ${PHONE_DISPLAY} to arrange a time that suits you.`
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

export default function TaxServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sydney Tax Specialists"
        title="Tax Advice for Property Investors, Business Owners & Complex Tax Matters"
        copy="Whether you're managing an investment property, running a growing business or looking for strategic tax advice, AATBS provides practical accounting and taxation services tailored to your circumstances. Meet with our experienced advisers in Parramatta, Liverpool or virtually from anywhere across Sydney."
        image="/photos/tax-consultation.jpg"
        alt="Adviser meeting with a client about tax services"
      />

      <section className="tax-services-hero-ctas">
        <div className="container tax-services-hero-ctas-inner">
          <Link href="/book-a-consultation" className="button button-primary">
            Book a Free Consultation
          </Link>
          <a href={PHONE_HREF} className="button button-secondary">
            <Phone size={18} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="tax-services-why">
        <div className="container tax-services-why-grid">
          <FadeIn>
            <p className="eyebrow">Why Choose AATBS</p>
            <h2>Tax advice should give you confidence, not confusion.</h2>
            <p className="lede">
              At AATBS, we take the time to understand your circumstances
              before recommending practical solutions that support your
              financial goals.
            </p>
            <p>
              Whether you need help with an investment property, business
              taxation or long-term tax planning, our team provides clear
              advice that helps you stay compliant while making informed
              decisions.
            </p>
          </FadeIn>

          <FadeIn className="tax-services-why-highlights">
            <ul>
              {whyChooseHighlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="tax-services-pillars">
        <div className="container tax-services-pillars-stack">
          <ServicePillar
            eyebrow="Investment Property Tax Returns"
            title="Make the most of your investment property, with less tax stress."
            intro="Owning an investment property creates opportunities to build wealth, but it also brings additional tax obligations requiring careful planning."
            primaryList={{
              label: "Services",
              items: [
                "Rental property tax returns",
                "Negative gearing",
                "Depreciation claims",
                "Capital gains tax",
                "Investment property deductions",
                "Multiple investment properties"
              ]
            }}
            ctaLabel="Book an Investment Property Tax Consultation"
            image="/photos/investment-property.jpg"
            alt="Investment property in Sydney"
          />

          <ServicePillar
            eyebrow="Business Tax Returns"
            title="Straightforward tax support for growing businesses."
            intro="From day-to-day compliance to the numbers behind bigger decisions, we help business owners stay on top of their tax obligations."
            secondaryList={{
              label: "We support",
              items: [
                "Sole Traders",
                "Partnerships",
                "Companies",
                "Family Trusts",
                "Small to Medium Businesses"
              ]
            }}
            primaryList={{
              label: "Services",
              items: [
                "Business tax returns",
                "Company tax returns",
                "BAS",
                "Bookkeeping",
                "Payroll",
                "Tax planning"
              ]
            }}
            ctaLabel="Speak with a Business Tax Specialist"
            image="/photos/business-tax.jpg"
            alt="Business owner reviewing accounts"
            reverse
          />

          <ServicePillar
            eyebrow="Strategic Tax Planning"
            title="Plan ahead, with confidence, as your position grows more complex."
            intro="As your financial position becomes more complex, proactive tax planning becomes increasingly important."
            primaryList={{
              label: "Services",
              items: [
                "Tax planning",
                "Capital gains tax",
                "Investment structures",
                "Family trusts",
                "Asset protection",
                "Wealth structuring"
              ]
            }}
            ctaLabel="Arrange a Confidential Consultation"
            image="/photos/tax-planning.jpg"
            alt="Adviser discussing a tax planning strategy"
          />
        </div>
      </section>

      <section className="tax-services-virtual">
        <div className="container tax-services-virtual-grid">
          <FadeIn>
            <p className="eyebrow">Virtual Tax Appointments Across Sydney</p>
            <h2>Meet with our accountants remotely from anywhere across Sydney.</h2>
          </FadeIn>

          <FadeIn className="tax-services-virtual-features">
            <ul>
              {virtualFeatures.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="tax-services-reviews">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Client Reviews</p>
            <h2>What our clients say.</h2>
          </FadeIn>
          {/*
            Drop in the existing Google Reviews component here, e.g.:
            <GoogleReviews />
            Its import path wasn't provided, so it hasn't been referenced
            directly to avoid inventing an incorrect import.
          */}
        </div>
      </section>

      <section className="tax-services-faq">
        <div className="container tax-services-faq-inner">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </FadeIn>

          <FadeIn className="tax-services-faq-list">
            {faqItems.map((item) => (
              <details className="tax-services-faq-item" key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="tax-services-final-cta">
        <div className="container tax-services-final-cta-inner">
          <FadeIn>
            <p className="eyebrow">Ready to speak with an accountant?</p>
            <h2>
              Whether you&apos;re a property investor, business owner or
              looking for strategic tax advice, our experienced team is ready
              to help.
            </h2>
            <div className="tax-services-final-cta-buttons">
              <Link href="/book-a-consultation" className="button button-primary">
                Book Your Free Consultation
              </Link>
              <a href={PHONE_HREF} className="button button-secondary">
                <Phone size={18} aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <p className="tax-services-final-cta-note">
              Virtual appointments available across Sydney.
            </p>
          </FadeIn>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
