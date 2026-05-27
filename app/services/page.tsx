import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const groups = ["Compliance", "Advisory", "Specialist"] as const;

const groupNarrative = {
  Compliance: {
    eyebrow: "Regular work",
    title: "Stay on top of tax, BAS, payroll and records.",
    copy:
      "These services help keep your accounts current, your BAS lodged and your tax records ready."
  },
  Advisory: {
    eyebrow: "Business decisions",
    title: "Use your numbers to make better decisions.",
    copy:
      "We help with cash flow, planning, business structure and the questions that come up as your business changes."
  },
  Specialist: {
    eyebrow: "SMSF support",
    title: "Keep SMSF work clear and up to date.",
    copy:
      "We help trustees with annual accounts, SMSF tax returns, records and clear explanations of what needs attention."
  }
} satisfies Record<(typeof groups)[number], { eyebrow: string; title: string; copy: string }>;

export const metadata = pageMetadata({
  title: "Accounting, Tax, BAS & Bookkeeping Services in Sydney",
  description:
    "Accounting, tax, BAS, bookkeeping, payroll, advisory, Concierge CFO and SMSF services for Sydney, Parramatta and Liverpool clients.",
  path: "/services",
  keywords: [
    "accounting services Sydney",
    "tax services Parramatta",
    "bookkeeping services Liverpool",
    "BAS returns Western Sydney",
    "SMSF accounting Sydney"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Accounting, tax and business services in Sydney."
        copy="Choose the support you need from Parramatta, Liverpool or online. Each service explains what is included, what it helps with and what happens next."
        image="/photos/advisory-meeting.jpg"
        alt="Business advisers meeting with a client"
      />
      <section className="service-dossier-section">
        <div className="container service-dossier-intro">
          <FadeIn>
            <p className="eyebrow">Services</p>
            <h2>Find the right support for your accounts, tax or business.</h2>
          </FadeIn>
          <FadeIn className="service-dossier-note">
            <span>Registered tax agent</span>
            <p>
              We help Sydney, Parramatta and Liverpool clients with regular
              accounting work, business advice and SMSF support.
            </p>
          </FadeIn>
        </div>

        <div className="container service-dossier">
          <nav className="service-dossier-nav" aria-label="Service sections">
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
                          View service <ArrowRight size={17} />
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
