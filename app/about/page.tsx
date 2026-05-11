import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices, team } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "The story, offices and advisory philosophy behind Advanced Accounting, Taxation & Business Services."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AATBS"
        title="A Sydney accounting firm with a stronger story than the old site showed."
        copy="The redesign brings the firm history, office presence, accreditations and senior team into the foreground."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=82"
        alt="Premium advisory office interior"
      />
      <section className="section-pad">
        <div className="container editorial-grid">
          <FadeIn>
            <p className="eyebrow">Positioning</p>
            <h2>Boutique attention with the discipline of a serious advisory practice.</h2>
          </FadeIn>
          <FadeIn>
            <p>
              AATBS already has the credibility signals that prospects need:
              long practice history, two Sydney offices, specialist service
              depth and visible accreditations. The rebuild makes those assets
              impossible to miss.
            </p>
            <p>
              The brand voice should be direct, calm and practical. No inflated
              claims. No vague "growth partner" filler. Every section should
              explain what the client gets and why the firm can be trusted.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="section-pad cream-band">
        <div className="container pillar-grid">
          {[
            {
              icon: Award,
              title: "Accredited",
              text: "Regulatory and finance accreditations move from footer afterthought to first-screen trust proof."
            },
            {
              icon: UsersRound,
              title: "Human",
              text: "Team, principal and client service content gives prospects someone real to connect with."
            },
            {
              icon: MapPin,
              title: "Local",
              text: "Parramatta and Liverpool offices support clients across Western and South West Sydney."
            }
          ].map((item) => (
            <FadeIn className="pillar light" key={item.title}>
              <item.icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="container team-preview">
          {team.map((member) => (
            <Link href="/about/team" key={member.name}>
              <Image src={member.image} alt={member.name} fill sizes="(max-width: 900px) 100vw, 30vw" />
              <span>{member.role}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="final-cta compact">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Office access</p>
            <h2>Meet in Parramatta or Liverpool.</h2>
          </div>
          <div className="office-mini-list">
            {offices.map((office) => (
              <span key={office.name}>{office.name}</span>
            ))}
          </div>
          <Link className="button button-gold" href="/about/offices">
            View offices <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
