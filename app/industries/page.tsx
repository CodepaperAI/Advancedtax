import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { industries } from "@/lib/content";

const industryAngles = [
  "Timing",
  "Structure",
  "Payroll",
  "Finance",
  "Margins",
  "Reporting"
];

export const metadata = {
  title: "Industries",
  description:
    "Industry pathways for construction, healthcare, hospitality, property, professional services and retail clients."
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry advice with the real pressure points already in view."
        copy="Different businesses create different accounting questions. Explore the sectors where tax timing, payroll, finance and reporting need practical structure."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=82"
        alt="Business district and office workspace"
      />
      <section className="industry-field-section">
        <div className="container industry-field-heading">
          <FadeIn>
            <p className="eyebrow">Industry field guide</p>
            <h2>Move from a plain sector list to a visual map of business contexts.</h2>
          </FadeIn>
          <FadeIn className="industry-field-note">
            <span>What changes by industry?</span>
            <p>
              The work is still accounting, tax and advisory. The risks shift:
              staff rhythm, project timing, inventory, finance and cash flow.
            </p>
          </FadeIn>
        </div>

        <div className="container industry-field-grid">
          {industries.map((industry, index) => (
            <FadeIn
              className={`industry-field-tile industry-field-tile-${index + 1}`}
              delay={index * 0.04}
              key={industry.slug}
            >
              <Link href={`/industries/${industry.slug}`}>
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
                <span className="industry-field-copy">
                  <small>
                    0{index + 1} / {industryAngles[index]}
                  </small>
                  <strong>{industry.title}</strong>
                  <em>{industry.summary}</em>
                  <b>
                    View industry <ArrowRight size={17} />
                  </b>
                </span>
                <span className="industry-field-needs" aria-label={`${industry.title} needs`}>
                  {industry.needs.map((need) => (
                    <i key={need}>{need}</i>
                  ))}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
