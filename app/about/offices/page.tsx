import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Parramatta & Liverpool Accounting Offices",
  description:
    "Meet AATBS in Parramatta, Liverpool or online for accounting, tax, BAS, bookkeeping, SMSF and business advisory support across Sydney.",
  path: "/about/offices",
  keywords: [
    "accountant Parramatta",
    "tax accountant Parramatta",
    "accountant Liverpool",
    "tax accountant Liverpool",
    "Sydney accounting office"
  ]
});

export default function OfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="Parramatta and Liverpool"
        title="Parramatta and Liverpool offices with Australia-wide virtual support."
        copy="Serving Australia-Wide virtually with offices in Parramatta and Liverpool for clients who want a direct adviser, clear timing and the option to meet online or face to face."
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
