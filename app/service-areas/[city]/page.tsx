import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeIn } from "@/components/MotionPrimitives";
import { JsonLd } from "@/components/JsonLd";
import { getService, site, type Service } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { getLocationBySlug, getAdjacentLocations, locations } from "@/lib/seo/locations";
import { getServicesForCity } from "@/lib/seo/service-areas";
import { getLocalCopy } from "@/lib/seo/local-copy";
import {
  cityLocalBusinessSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema-helpers";

export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getLocationBySlug(citySlug);
  if (!city) return {};

  return pageMetadata({
    title: `Accountants in ${city.name}, ${city.regionShort}`,
    description: `AATBS provides accounting, tax, BAS, payroll, bookkeeping and SMSF support for ${city.name}, ${city.region} businesses and families.`,
    path: `/service-areas/${city.slug}`,
    keywords: [
      `accountants ${city.name}`,
      `tax accountant ${city.name}`,
      `${city.name} accountant`,
      `bookkeeping ${city.name}`,
      `BAS agent ${city.name}`,
    ],
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getLocationBySlug(citySlug);
  if (!city) notFound();

  const localParagraph = getLocalCopy(citySlug);
  const adjacent = getAdjacentLocations(citySlug, 4);
  const cityServices = getServicesForCity(citySlug)
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <JsonLd data={cityLocalBusinessSchema(city)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: city.name },
        ])}
      />

      <section className="service-detail-hero">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Serving {city.name}, {city.regionShort}</p>
            <h1>Accountants in {city.name}, {city.regionShort}.</h1>
            <p className="lede">
              {localParagraph ?? city.headline}
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
          <FadeIn>
            <p className="eyebrow">Services in {city.name}</p>
            <h2>A full-service accounting practice in {city.name}.</h2>
            <p>
              From tax returns and BAS to SMSF compliance and business
              advisory, we can support {city.name} clients across the full
              practice.
            </p>
          </FadeIn>
          <div className="service-area-list">
            {cityServices.map((service) => (
              <FadeIn key={service.slug}>
                <MapPin size={22} />
                <div>
                  <h3>
                    <Link href={`/services/${service.slug}/${city.slug}`}>
                      {service.title} in {city.name}
                    </Link>
                  </h3>
                  <p>{service.intro}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {adjacent.length ? (
        <section className="section-pad service-areas-section">
          <div className="container service-areas-grid">
            <FadeIn>
              <p className="eyebrow">Nearby suburbs</p>
              <h2>Other suburbs we serve near {city.name}.</h2>
            </FadeIn>
            <div className="service-area-list">
              {adjacent.map((adj) => (
                <FadeIn key={adj.slug}>
                  <MapPin size={22} />
                  <div>
                    <h3>
                      <Link href={`/service-areas/${adj.slug}`}>
                        {adj.name}, {adj.regionShort}
                      </Link>
                    </h3>
                    <p>{adj.headline}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad cream-band">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Ready when you are</p>
            <h2>Looking for an accountant in {city.name}?</h2>
            <p>
              Book a short call and we'll line up the right adviser, scope, and
              fee for your {city.name} engagement.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">
                Talk to an adviser
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
