import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { team } from "@/lib/content";

export const metadata = {
  title: "Team",
  description:
    "Principal and senior team presentation for the AdvancedTax redesign."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The homepage needs visible accountability, not faceless service claims."
        copy="This page is structured for real portraits, credentials, Tax Agent numbers, short bios and LinkedIn links once supplied by the client."
        image="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1500&q=82"
        alt="Professional advisory team in meeting"
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
