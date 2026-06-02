import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { team } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sydney Tax Accountants & Advisory Team",
  description:
    "Meet the AdvancedTax team supporting Sydney, Parramatta and Liverpool clients with tax, BAS, bookkeeping, SMSF and business advice.",
  path: "/about/team",
  keywords: [
    "Sydney tax accountant team",
    "Parramatta accountant team",
    "Liverpool accounting team",
    "business tax finance advisers Sydney"
  ]
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Meet the people behind the advice."
        copy="Our team supports Sydney, Parramatta and Liverpool clients with tax, BAS, bookkeeping, SMSF and business advice."
        image="/photos/advisory-meeting.jpg"
        alt="Professional team in a client meeting"
      />
      <section className="section-pad">
        <div className="container team-grid">
          {team.map((member) => (
            <FadeIn className="team-member" key={member.name}>
              <div>
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <p className="eyebrow">{member.role}</p>
              <h2>{member.name}</h2>
              <p>{member.credential}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
