import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Our Sydney Accounting Firm",
  description:
    "Learn about AATBS, a Sydney accounting and tax advisory firm with Parramatta and Liverpool access for clients across Western and South West Sydney.",
  path: "/about",
  keywords: [
    "Sydney accounting firm",
    "Parramatta accounting firm",
    "Liverpool tax accountant",
    "AATBS accountant"
  ]
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AATBS"
        title="Business, tax and finance advice with Australia-wide virtual support."
        copy="Meet the team behind AATBS and learn how we support clients virtually Australia-wide, with offices in Parramatta and Liverpool."
        image="/photos/sydney-cbd.jpg"
        alt="Sydney CBD skyline and business district"
      />
      <section className="section-pad">
        <div className="container editorial-grid">
          <FadeIn>
            <p className="eyebrow">Practice approach</p>
            <h2>Practical advice from a local accounting team.</h2>
          </FadeIn>
          <FadeIn>
            <p>
              AATBS has supported Australian clients for more than 20 years.
              The practice helps with accounting, tax, BAS, bookkeeping, SMSF
              and business advice across Sydney, Western Sydney and South West
              Sydney.
            </p>
            <p>
              The goal is simple: explain what needs to be done, keep records
              organised and help clients make better decisions.
            </p>
          </FadeIn>
        </div>
      </section>
      <section className="section-pad founder-section">
        <div className="container founder-grid">
          <FadeIn className="founder-portrait">
            <Image
              src="/team/principal.png"
              alt="Principal adviser portrait"
              width={520}
              height={680}
              priority
            />
          </FadeIn>
          <FadeIn className="founder-copy">
            <p className="eyebrow">Meet the founder</p>
            <h2>Abby Raweri</h2>
            <p className="founder-role">
              Director - Tax, Finance &amp; Lending Solutions
            </p>
            <p>
              For more than two decades, Abby has guided Australian
              business owners through tax, accounting and business questions.
              Clients stay because the advice is direct and easy to understand.
            </p>
            <p>
              The practice is built on three commitments: be reachable, be
              accurate and explain the reason behind each recommendation.
            </p>
            <ul className="founder-creds">
              <li>Business, Tax &amp; Finance Specialist</li>
              <li>20+ years in Australian small business advisory</li>
              <li>Serving Australia-Wide virtually with offices in Parramatta and Liverpool</li>
            </ul>
            <Link className="button button-dark" href="/contact">
              Book a consultation
            </Link>
          </FadeIn>
        </div>
      </section>
      <section className="section-pad cream-band">
        <div className="container pillar-grid">
          {[
            {
              icon: Award,
              title: "Accredited",
              text: "Registered and accredited support for accounting, tax and finance questions."
            },
            {
              icon: UsersRound,
              title: "Human",
              text: "Clients deal with a real team who can explain the work clearly."
            },
            {
              icon: MapPin,
              title: "Australia-wide",
              text: "Virtual support for clients Australia-wide, with Parramatta and Liverpool office access."
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
      <section className="final-cta compact">
        <div className="container final-cta-grid">
          <div>
            <p className="eyebrow">Office access</p>
            <h2>Meet online, in Parramatta or in Liverpool.</h2>
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
