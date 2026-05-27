import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import {
  pricingBusiness,
  pricingBookkeeping,
  pricingBundles
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accounting & Bookkeeping Packages in Sydney",
  description:
    "Business, bookkeeping and bundle packages for Sydney, Parramatta and Liverpool clients, including Thinker, Mover, Shaker, Small, Medium and Heavy options.",
  path: "/pricing",
  keywords: [
    "accounting packages Sydney",
    "bookkeeping packages Sydney",
    "tax accountant pricing Parramatta",
    "bookkeeping pricing Liverpool"
  ]
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Simple monthly accounting and bookkeeping packages."
        copy="Review package options for Sydney, Parramatta and Liverpool clients before you call. We confirm the right fit and monthly price after the first consultation."
        image="/photos/document-review.jpg"
        alt="Adviser reviewing business documents and package options"
      />

      <section className="section-pad">
        <div className="container">
          <FadeIn className="section-heading">
            <p className="eyebrow">Business packages</p>
            <h2>Choose the level of business support you need.</h2>
            <p>
              Thinker covers the basics. Mover adds regular reports. Shaker
              adds more planning and monthly support.
            </p>
          </FadeIn>
          <div className="pricing-page-grid">
            {pricingBusiness.map((item, index) => (
              <FadeIn
                className={
                  index === 1 ? "pricing-page-item featured" : "pricing-page-item"
                }
                key={item.name}
              >
                <span>{item.audience}</span>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p className="pricing-summary">{item.summary}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link className="button button-dark" href="/contact">
                  Ask about this package
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="container">
          <FadeIn className="section-heading">
            <p className="eyebrow">Bookkeeping packages</p>
            <h2>Books that stay current month to month.</h2>
            <p>
              Three bookkeeping tiers scaled to revenue and transaction volume,
              with payroll add-ons priced per payslip.
            </p>
          </FadeIn>
          <div className="pricing-page-grid">
            {pricingBookkeeping.map((item, index) => (
              <FadeIn
                className={
                  index === 1 ? "pricing-page-item featured" : "pricing-page-item"
                }
                key={item.name}
              >
                <span>{item.audience}</span>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p className="pricing-summary">{item.summary}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link className="button button-dark" href="/contact">
                  Ask about bookkeeping
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <FadeIn className="section-heading">
            <p className="eyebrow">Combined bundles</p>
            <h2>Bundle a business package with the matching bookkeeping tier.</h2>
            <p>
              Pair the two sides of the work and the monthly price comes down.
              All bundle prices exclude GST.
            </p>
          </FadeIn>
          <div className="pricing-page-grid">
            {pricingBundles.map((item, index) => (
              <FadeIn
                className={
                  index === 1 ? "pricing-page-item featured" : "pricing-page-item"
                }
                key={item.name}
              >
                <span>{item.audience}</span>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <ul>
                  {item.includes.map((line) => (
                    <li key={line}>
                      <CheckCircle2 size={18} />
                      {line}
                    </li>
                  ))}
                </ul>
                <Link className="button button-dark" href="/contact">
                  Start with this bundle
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
