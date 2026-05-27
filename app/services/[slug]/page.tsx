import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { getService, services } from "@/lib/content";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

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
    title: `${service.title} in Sydney, Parramatta & Liverpool`,
    description: `${service.intro} Local support for Sydney, Parramatta, Liverpool, Western Sydney and South West Sydney clients.`,
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

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <section className="service-detail-hero">
        <div className="container service-detail-grid">
          <FadeIn>
            <p className="eyebrow">{service.group} / {service.eyebrow}</p>
            <h1>{service.title} for Sydney clients</h1>
            <p className="lede">{service.intro}</p>
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
      <section className="section-pad cream-band">
        <div className="container faq-grid">
          <FadeIn>
            <p className="eyebrow">Service questions</p>
            <h2>Answers before the consultation.</h2>
          </FadeIn>
          <Accordion items={service.faqs} />
        </div>
      </section>
    </>
  );
}
