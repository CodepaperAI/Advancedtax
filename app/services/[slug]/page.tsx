import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { getService, serviceAreas, services, type Service } from "@/lib/content";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

function servicePageTitle(service: Service) {
  return `${service.title} services in Sydney, Parramatta & Liverpool`;
}

function serviceLocationFaq(service: Service) {
  return {
    question: `Do you offer ${service.title} in Parramatta or Liverpool?`,
    answer: `Yes. AATBS offers ${service.title} support from Parramatta, Liverpool and online for clients across Sydney, Western Sydney, South West Sydney and wider NSW.`
  };
}

function serviceSentenceName(service: Service) {
  return service.title === "SMSF" ? "SMSF" : service.title.toLowerCase();
}

function serviceAreaDetail(service: Service, area: string) {
  if (area === "Parramatta") {
    return `${service.title} support for Parramatta and Western Sydney clients who want local access and clear advice.`;
  }

  if (area === "Liverpool") {
    return `${service.title} support for Liverpool and South West Sydney clients, with online meetings available when that is easier.`;
  }

  return `${service.title} support across Sydney and wider NSW for clients who prefer flexible online or in-person advice.`;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: servicePageTitle(service),
    description: `${service.intro} Available in Sydney, Parramatta, Liverpool, Western Sydney, South West Sydney and wider NSW.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [
      `${service.title} Sydney`,
      `${service.title} Parramatta`,
      `${service.title} Liverpool`,
      ...service.includes
    ]
  });
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const locationFaq = serviceLocationFaq(service);
  const faqs = [locationFaq, ...service.faqs];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(faqs)} />
      <section className="service-detail-hero">
        <div className="container service-detail-grid">
          <FadeIn>
            <p className="eyebrow">{service.group} / {service.eyebrow}</p>
            <h1>{servicePageTitle(service)}</h1>
            <p className="lede">
              {service.intro} Meet in Parramatta, Liverpool or online, with
              support available across Sydney, Western Sydney, South West
              Sydney and wider NSW.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">
                Talk to an adviser
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-outline dark" href="/services">
                All services
              </Link>
            </div>
          </FadeIn>
          <ImageReveal className="service-detail-image">
            <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 48vw" />
          </ImageReveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="container service-body-grid">
          <FadeIn>
            <p className="eyebrow">Outcome</p>
            <h2>{service.outcome}</h2>
            <p>
              {service.proof} Support is available from Parramatta, Liverpool
              and online for clients across Sydney, Western Sydney and South
              West Sydney.
            </p>
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
      <section className="section-pad service-areas-section">
        <div className="container service-areas-grid">
          <FadeIn>
            <p className="eyebrow">Service areas</p>
            <h2>{service.title} support across Sydney and NSW.</h2>
            <p>
              AATBS helps clients with {serviceSentenceName(service)} from
              Parramatta, Liverpool and online, covering Sydney, Western
              Sydney, South West Sydney and wider NSW.
            </p>
            <div className="service-area-actions">
              <Link className="text-link" href="/about/offices">
                View offices <ArrowRight size={16} />
              </Link>
              <Link className="text-link" href="/contact">
                Book a consultation <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="service-area-list" aria-label={`${service.title} service areas`}>
            {serviceAreas.map((area) => (
              <FadeIn key={area.name}>
                <MapPin size={22} />
                <div>
                  <h3>{service.title} in {area.name}</h3>
                  <p>{serviceAreaDetail(service, area.name)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad cream-band">
        <div className="container faq-grid">
          <FadeIn>
            <p className="eyebrow">Service questions</p>
            <h2>Answers before the consultation.</h2>
          </FadeIn>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
