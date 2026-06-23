import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeIn } from "@/components/MotionPrimitives";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { locations } from "@/lib/seo/locations";
import { breadcrumbSchema } from "@/lib/seo/schema-helpers";
import { site } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Service areas across Sydney, Western Sydney & South West Sydney",
  description:
    "AATBS accountants serve Parramatta, Liverpool, and suburbs across Sydney. Find your area for the local accountant near you.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas" },
        ])}
      />

      <section className="service-detail-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Where we work</p>
            <h1>Accountants across Sydney, Western Sydney &amp; South West Sydney.</h1>
            <p className="lede">
              Our crews are based in Parramatta and Liverpool, and we serve {" "}
              {locations.length} suburbs and regions across Greater Sydney. Pick
              your area for a closer look at the work we do there.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={site.mobileHref}>
                Call {site.mobileDisplay}
                <ArrowRight size={18} />
              </a>
              <Link className="button button-outline dark" href="/contact">
                Book a consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad service-areas-section">
        <div className="container service-areas-grid">
          <div className="service-area-list">
            {locations.map((loc) => (
              <FadeIn key={loc.slug}>
                <MapPin size={22} />
                <div>
                  <h3>
                    <Link href={`/service-areas/${loc.slug}`}>{loc.name}, {loc.regionShort}</Link>
                  </h3>
                  <p>{loc.headline}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
