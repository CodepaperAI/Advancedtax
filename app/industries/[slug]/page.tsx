import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { getIndustry, industries, services } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: industry.title,
    description: industry.summary
  };
}

export default async function IndustryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-grid">
          <FadeIn>
            <p className="eyebrow">Industry support</p>
            <h1>{industry.title}</h1>
            <p className="lede">{industry.summary}</p>
            <Link className="button button-gold" href="/contact">
              Discuss your industry
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
          <ImageReveal className="service-detail-image">
            <Image src={industry.image} alt={industry.title} fill sizes="(max-width: 900px) 100vw, 48vw" />
          </ImageReveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="container service-body-grid">
          <FadeIn>
            <p className="eyebrow">Common needs</p>
            <h2>Common accounting needs for this industry.</h2>
            <p>
              {industry.title} clients often need help with timing, payroll,
              cash flow, finance and tax compliance.
            </p>
          </FadeIn>
          <div className="inclusion-list">
            {industry.needs.map((need) => (
              <FadeIn key={need}>
                <CheckCircle2 size={20} />
                <span>{need}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad cream-band">
        <div className="container related-services">
          <FadeIn>
            <p className="eyebrow">Relevant services</p>
            <h2>Services that may help.</h2>
          </FadeIn>
          <div>
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
