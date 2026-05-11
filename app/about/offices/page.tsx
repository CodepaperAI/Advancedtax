import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices } from "@/lib/content";

export const metadata = {
  title: "Offices",
  description:
    "Parramatta and Liverpool office presentation for AdvancedTax clients."
};

export default function OfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="Parramatta and Liverpool"
        title="Two Sydney offices should become a conversion asset."
        copy="The redesigned site treats local access as a trust signal, pairing maps, hours and real office photography with consultation CTAs."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=82"
        alt="Office meeting room prepared for a consultation"
      />
      <section className="section-pad">
        <div className="container office-grid">
          {offices.map((office) => (
            <FadeIn className="office-panel" key={office.name}>
              <div>
                <Image src={office.image} alt={`${office.name} office`} fill sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
              <span>
                <MapPin size={18} />
                {office.address}
              </span>
              <h2>{office.name}</h2>
              <p>{office.detail}</p>
              <Link href="/contact" className="text-link">
                Book at this office
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
