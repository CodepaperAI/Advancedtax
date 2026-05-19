import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { services } from "@/lib/content";

const groups = ["Compliance", "Advisory", "Specialist"] as const;

const groupNarrative = {
  Compliance: {
    eyebrow: "Recurring obligations",
    title: "Keep the accounting rhythm clean before deadlines become pressure.",
    copy:
      "Tax, BAS, payroll, bookkeeping and year-end work sit together here so owners can see the operating cadence, not a disconnected menu."
  },
  Advisory: {
    eyebrow: "Owner decisions",
    title: "Add senior finance context when the numbers need interpretation.",
    copy:
      "For businesses that need clearer cash flow, sharper planning and CFO-grade guidance without turning every question into a separate project."
  },
  Specialist: {
    eyebrow: "SMSF support",
    title: "Keep trustee obligations clear, current and understandable.",
    copy:
      "SMSF work is framed around annual accounts, tax return preparation, trustee records and clear explanations of what needs attention."
  }
} satisfies Record<(typeof groups)[number], { eyebrow: string; title: string; copy: string }>;

export const metadata = {
  title: "Services",
  description:
    "Accounting, tax, BAS, bookkeeping, payroll, advisory, Concierge CFO and SMSF services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Accounting, tax and advisory pathways for each stage of the work."
        copy="Choose the support you need: compliance, business advice or specialist work. Each pathway explains what is included, what outcome to expect and what happens next."
        image="/photos/advisory-meeting.jpg"
        alt="Business advisers meeting with a client"
      />
      <section className="service-dossier-section">
        <div className="container service-dossier-intro">
          <FadeIn>
            <p className="eyebrow">Service pathways</p>
            <h2>Choose the part of the financial relationship that needs structure.</h2>
          </FadeIn>
          <FadeIn className="service-dossier-note">
            <span>Registered tax agent</span>
            <p>
              Services are organised by how clients usually experience the work:
              ongoing obligations, decision support and specialist review.
            </p>
          </FadeIn>
        </div>

        <div className="container service-dossier">
          <nav className="service-dossier-nav" aria-label="Service pathway sections">
            {groups.map((group, index) => (
              <a href={`#${group.toLowerCase()}-services`} key={group}>
                <span>0{index + 1}</span>
                {group}
              </a>
            ))}
          </nav>

          <div className="service-dossier-stack">
            {groups.map((group, groupIndex) => {
              const groupServices = services.filter((service) => service.group === group);
              const lead = groupServices[0];
              const secondary = groupServices.slice(1);
              const narrative = groupNarrative[group];

              return (
                <FadeIn
                  className="service-dossier-group"
                  id={`${group.toLowerCase()}-services`}
                  key={group}
                >
                  <div className="service-dossier-heading">
                    <span className="service-dossier-number">0{groupIndex + 1}</span>
                    <div>
                      <p className="eyebrow">{narrative.eyebrow}</p>
                      <h2>{narrative.title}</h2>
                      <p>{narrative.copy}</p>
                    </div>
                  </div>

                  <div
                    className={
                      secondary.length
                        ? "service-dossier-layout"
                        : "service-dossier-layout service-dossier-layout-single"
                    }
                  >
                    <Link className="service-lead-feature" href={`/services/${lead.slug}`}>
                      <Image
                        src={lead.image}
                        alt={lead.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 42vw"
                      />
                      <span className="service-lead-copy">
                        <small>{lead.eyebrow}</small>
                        <strong>{lead.title}</strong>
                        <em>{lead.outcome}</em>
                        <b>
                          Open pathway <ArrowRight size={17} />
                        </b>
                      </span>
                    </Link>

                    {secondary.length > 0 && (
                      <div className="service-brief-grid">
                        {secondary.map((service, serviceIndex) => (
                          <Link
                            className="service-brief"
                            href={`/services/${service.slug}`}
                            key={service.slug}
                          >
                            <span className="service-brief-number">
                              {groupIndex + 1}.{serviceIndex + 2}
                            </span>
                            <strong>{service.title}</strong>
                            <p>{service.outcome}</p>
                            <ul>
                              {service.includes.slice(0, 2).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                            <ArrowRight size={18} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
