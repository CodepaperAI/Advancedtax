import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import {
  pricingBusiness,
  pricingBookkeeping,
  pricingBundles
} from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description:
    "Business, bookkeeping and bundle packages for AdvancedTax clients — Thinker, Mover, Shaker, plus Small, Medium and Heavy bookkeeping."
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Three pathways for business owners. Three pathways for the books. One price when you bundle them."
        copy="Pricing mirrors the live AdvancedTax packages so you can scope the conversation before the first meeting. All monthly prices, no surprises at year-end."
        image="/photos/document-review.jpg"
        alt="Adviser reviewing business documents and package options"
      />

      <section className="section-pad">
        <div className="container">
          <FadeIn className="section-heading">
            <p className="eyebrow">Business packages</p>
            <h2>Pick the right level of accountability.</h2>
            <p>
              Thinker keeps compliance clean. Mover adds a reporting rhythm.
              Shaker brings CFO-grade oversight every month.
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
                  Scope this pathway
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
                  Scope this rhythm
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
