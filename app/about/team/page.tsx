import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { team } from "@/lib/content";

export const metadata = {
  title: "Team",
  description:
    "Principal and senior team presentation for AdvancedTax clients."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Visible accountability behind the advice."
        copy="Meet the advisory, accounting and client service roles that support tax, BAS, bookkeeping and business advisory work."
        image="/photos/advisory-meeting.jpg"
        alt="Professional advisory team in a client meeting"
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
