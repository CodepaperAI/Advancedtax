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
        title="Two Sydney offices for advice when it is easier to meet in person."
        copy="Local access is a trust signal for owners who want a direct adviser, clear timing and the option to meet face to face."
        image="/photos/sydney-cbd.jpg"
        alt="Sydney business district and harbour skyline"
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
