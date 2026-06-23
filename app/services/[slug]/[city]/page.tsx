import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { getService, services, type Service } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  getLocationBySlug,
  getAdjacentLocations,
  type Location,
} from "@/lib/seo/locations";
import {
  serviceAreaPairs,
  isServiceAvailableInCity,
  getServicesForCity,
} from "@/lib/seo/service-areas";
import { getLocalCopy } from "@/lib/seo/local-copy";
import {
  cityLocalBusinessSchema,
  cityServiceSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema-helpers";

export function generateStaticParams() {
  return serviceAreaPairs.map(({ serviceSlug, citySlug }) => ({
    slug: serviceSlug,
    city: citySlug,
  }));
}

function pageTitle(service: Service, city: Location) {
  return `${service.title} in ${city.name}, ${city.regionShort}`;
}

function localFaqs(service: Service, city: Location) {
  return [
    {
      question: `Do you offer ${service.title.toLowerCase()} in ${city.name}?`,
      answer: `Yes. ${city.note ?? "Our team handles " + service.title.toLowerCase() + " for clients in " + city.name + " from our Parramatta and Liverpool offices, with online meetings available."}`,
    },
    {
      question: `How much does ${service.title.toLowerCase()} cost in ${city.name}?`,
      answer: `Every client is different. We scope ${city.name} engagements after a short consult so the fee matches the actual work. Call ${"0412 093 385"} for an indicative quote.`,
    },
    {
      question: `Are you registered to provide ${service.title.toLowerCase()} services in ${city.name}, NSW?`,
      answer: `Yes. AATBS is registered with the Tax Practitioners Board and works with clients across NSW including ${city.name}. We can share registration details on request.`,
    },
    ...service.faqs.slice(0, 2),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = getService(slug);
  const city = getLocationBySlug(citySlug);
  if (!service || !city || !isServiceAvailableInCity(slug, citySlug)) return {};

  return pageMetadata({
    title: pageTitle(service, city),
    description: `${service.intro} Servicing ${city.name} and the ${city.region} area from our Parramatta and Liverpool offices.`,
    path: `/services/${service.slug}/${city.slug}`,
    image: service.image,
    keywords: [
      `${service.title} ${city.name}`,
      `${service.title.toLowerCase()} ${city.name}`,
      `accountant ${city.name}`,
      `tax accountant ${city.name}`,
      `${city.name} accountant`,
      ...service.includes,
    ],
  });
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city: citySlug } = await params;
  const service = getService(slug);
  const city = getLocationBySlug(citySlug);

  if (!service || !city || !isServiceAvailableInCity(slug, citySlug)) {
    notFound();
  }

  const localParagraph = getLocalCopy(citySlug);
  const adjacent = getAdjacentLocations(citySlug, 3).filter((l) =>
    isServiceAvailableInCity(slug, l.slug),
  );
  const otherServices = getServicesForCity(citySlug)
    .filter((s) => s !== slug)
    .slice(0, 4)
    .map((s) => getService(s))
    .filter((s): s is Service => Boolean(s));
  const faqs = localFaqs(service, city);
  const title = pageTitle(service, city);

  return (
    <>
      <JsonLd data={cityLocalBusinessSchema(city)} />
      <JsonLd data={cityServiceSchema(service, city)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
          { name: city.name },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="service-detail-hero">
        <div className="container service-detail-grid">
          <FadeIn>
            <p className="eyebrow">
              {city.name}, {city.regionShort} / {service.group}
            </p>
            <h1>{title}</h1>
            <p className="lede">
              {service.intro} Servicing {city.name} and the {city.region} area
              from our Parramatta and Liverpool offices.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">
                Book a {city.name} consultation
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-outline dark" href={`/services/${service.slug}`}>
                Service overview
              </Link>
            </div>
          </FadeIn>
          <ImageReveal className="service-detail-image">
            <Image
              src={service.image}
              alt={`${service.title} in ${city.name}`}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </ImageReveal>
        </div>
      </section>

      {localParagraph ? (
        <section className="section-pad">
          <div className="container service-body-grid">
            <FadeIn>
              <p className="eyebrow">About {city.name}</p>
              <h2>
                {service.title} for {city.name} businesses and families.
              </h2>
              <p>{localParagraph}</p>
              {city.neighborhoods.length ? (
                <p>
                  Neighbourhoods we work in regularly:{" "}
                  {city.neighborhoods.slice(0, 6).join(", ")}.
                </p>
              ) : null}
            </FadeIn>
            <div className="inclusion-list">
              {service.includes.map((item) => (
                <FadeIn key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad cream-band">
        <div className="container service-body-grid">
          <FadeIn>
            <p className="eyebrow">How we work with a {city.name} {service.title.toLowerCase()} client</p>
            <h2>Working with a trusted {service.title.toLowerCase()} accountant in {city.name}.</h2>
            <p>
              {service.proof} For {city.name} clients we typically combine a
              first call, document checklist, and a turnaround meeting
              {city.isHQ ? " at our local office" : " online or in Parramatta"}.
            </p>
          </FadeIn>
          <div className="inclusion-list">
            {service.includes.slice(0, 5).map((item) => (
              <FadeIn key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="container faq-grid">
          <FadeIn>
            <p className="eyebrow">{city.name} questions</p>
            <h2>Answers for {city.name} clients.</h2>
          </FadeIn>
          <Accordion items={faqs} />
        </div>
      </section>

      {otherServices.length ? (
        <section className="section-pad service-areas-section">
          <div className="container service-areas-grid">
            <FadeIn>
              <p className="eyebrow">Other services in {city.name}</p>
              <h2>Often paired with {service.title.toLowerCase()}.</h2>
              <p>
                We can bundle related work for {city.name} clients in a single
                engagement so reporting and compliance stay aligned.
              </p>
            </FadeIn>
            <div className="service-area-list">
              {otherServices.map((item) => (
                <FadeIn key={item.slug}>
                  <MapPin size={22} />
                  <div>
                    <h3>
                      <Link href={`/services/${item.slug}/${city.slug}`}>
                        {item.title} in {city.name}
                      </Link>
                    </h3>
                    <p>{item.intro}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {adjacent.length ? (
        <section className="section-pad service-areas-section">
          <div className="container service-areas-grid">
            <FadeIn>
              <p className="eyebrow">Nearby service areas</p>
              <h2>
                {service.title} in suburbs near {city.name}.
              </h2>
            </FadeIn>
            <div className="service-area-list">
              {adjacent.map((adj) => (
                <FadeIn key={adj.slug}>
                  <MapPin size={22} />
                  <div>
                    <h3>
                      <Link href={`/services/${service.slug}/${adj.slug}`}>
                        {service.title} in {adj.name}
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
            <h2>Hire a {service.title.toLowerCase()} accountant in {city.name}.</h2>
            <p>
              Book a short call, share your documents, and we'll come back with a
              clear scope and fee for your {city.name} work.
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
