"use client";

import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  FileText,
  MapPin,
  Quote,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  faqs,
  industries,
  offices,
  partners,
  posts,
  pricing,
  site,
  stats,
  team,
  testimonials
} from "@/lib/content";
import {
  CountUp,
  FadeIn,
  ImageReveal,
  ScrollProgressBar,
  motion
} from "./MotionPrimitives";
import { Accordion } from "./Accordion";
import { ServiceAtlas } from "./ServiceAtlas";

export function HomePage() {
  return (
    <>
      <HeroFullBleedSection />

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <FadeIn className="stat-item" key={stat.label}>
              <strong>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
              <small>{stat.note}</small>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad atlas-section">
        <div className="container">
          <ServiceAtlas />
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <ImageReveal className="story-image">
            <Image
              src={team[0].image}
              alt="AATBS principal adviser portrait"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </ImageReveal>
          <FadeIn className="story-copy">
            <p className="eyebrow">Real people</p>
            <h2>Speak with advisers who know your file.</h2>
            <p>
              AATBS gives clients a clear contact for tax, accounting and
              business advice. You can meet in Parramatta, Liverpool or online.
            </p>
            <blockquote>
              We explain what is due, what has changed and what needs to happen
              next.
            </blockquote>
            <Link href="/about/team" className="text-link">
              Meet the team <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad why-section">
        <div className="container why-editorial">
          <FadeIn className="why-copy">
            <p className="eyebrow">Why AATBS</p>
            <h2>Keep your accounts, tax and records under control.</h2>
            <p>
              Clients come to AATBS for clear advice, local access and support
              before tax or reporting deadlines become stressful.
            </p>
          </FadeIn>
          <div className="why-ledger" aria-label="Reasons to choose AATBS">
            {[
              {
                icon: MapPin,
                title: "Two Sydney offices",
                text: "Parramatta and Liverpool access for clients who want a local adviser and the option to meet in person."
              },
              {
                icon: Building2,
                title: "Clear contact",
                text: "You know who is helping you and what they are handling."
              },
              {
                icon: ShieldCheck,
                title: "Software support",
                text: "We work with Xero, MYOB, QuickBooks and BGL."
              }
            ].map((pillar, index) => (
              <FadeIn className="why-ledger-row" delay={index * 0.08} key={pillar.title}>
                <span className="why-ledger-number">0{index + 1}</span>
                <pillar.icon size={28} />
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <ScrollProgressBar className="process-progress" />
        <div className="container process-grid">
          <FadeIn>
            <p className="eyebrow">How it starts</p>
            <h2>A simple way to get started.</h2>
          </FadeIn>
          <div className="process-steps">
            {[
              ["01", "Free consultation", "We listen, review the situation and confirm whether AATBS is the right fit."],
              ["02", "Clear quote", "We confirm the work, timing and price before anything starts."],
              ["03", "Ongoing support", "You have a clear contact and regular help through the year."]
            ].map(([number, title, text]) => (
              <FadeIn className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad industries-section">
        <div className="container">
          <FadeIn className="section-heading split-heading">
            <div>
              <p className="eyebrow">Industries served</p>
              <h2>Accounting support for different kinds of businesses.</h2>
            </div>
            <Link href="/industries" className="text-link">
              View industries <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <div className="industry-mosaic">
            {industries.map((industry, index) => (
              <Link
                className={index === 0 || index === 3 ? "industry-tile wide" : "industry-tile"}
                href={`/industries/${industry.slug}`}
                key={industry.slug}
              >
                <Image src={industry.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                <span>{industry.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container partners-grid">
          <FadeIn>
            <p className="eyebrow">Software partners</p>
            <h2>We work inside the tools clients already use.</h2>
          </FadeIn>
          <div className="partner-row">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                width={120}
                height={70}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialParallaxSection />

      <section className="section-pad pricing-section">
        <div className="container pricing-stage">
          <FadeIn className="pricing-lead">
            <p className="eyebrow">Packages</p>
            <h2>Monthly packages with clear inclusions.</h2>
            <p>
              Choose from business, bookkeeping and bundle options. We confirm
              the right package after the first conversation.
            </p>
            <Link href="/pricing" className="button button-dark">
              See packages
            </Link>
          </FadeIn>
          <div className="pricing-pathways" aria-label="Pricing pathways">
            {pricing.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={index === 1 ? "pathway recommended" : "pathway"}
              >
                <strong className="pathway-number">0{index + 1}</strong>
                <span>{item.audience}</span>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </motion.div>
            ))}
          </div>
          <div className="pricing-proof-strip" aria-label="Pricing principles">
            <span>Quoted after consultation</span>
            <span>Support through the year</span>
            <span>Clear monthly options</span>
          </div>
        </div>
      </section>

      <section className="section-pad resources-section">
        <div className="container">
          <FadeIn className="section-heading split-heading">
            <div>
              <p className="eyebrow">Insights</p>
              <h2>Practical insights for tax, payroll and SMSF decisions.</h2>
            </div>
            <Link href="/resources" className="text-link">
              View resources <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <div className="resource-strip">
            {posts.map((post, index) => (
              <Link
                className={index === 0 ? "resource-featured" : undefined}
                key={post.slug}
                href={`/resources/insights/${post.slug}`}
              >
                <Image src={post.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                <small>Issue 0{index + 1}</small>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                {index === 0 && (
                  <strong>
                    Read the checklist <ArrowRight size={16} />
                  </strong>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad faq-section">
        <div className="container faq-stage">
          <FadeIn className="faq-aside">
            <p className="eyebrow">FAQ</p>
            <h2>Questions clients often ask before they call.</h2>
            <div className="faq-brief">
              <span>
                <FileText size={18} /> What to bring
              </span>
              <span>
                <ShieldCheck size={18} /> What is included
              </span>
              <span>
                <CalendarCheck size={18} /> What happens next
              </span>
            </div>
          </FadeIn>
          <div className="faq-panel">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-grid">
          <FadeIn>
            <p className="eyebrow">Ready to talk?</p>
            <h2>Book a free consultation with a Sydney accounting adviser.</h2>
          </FadeIn>
          <div className="final-actions">
            <Link href="/contact" className="button button-gold">
              <CalendarCheck size={18} />
              Book consultation
            </Link>
            <a href={site.phoneHref} className="button button-outline">
              Call {site.phoneDisplay}
            </a>
          </div>
          <div className="final-proof">
            <span>
              <CheckCircle2 size={18} /> Registered and accredited
            </span>
            <span>
              <MapPin size={18} /> Parramatta and Liverpool
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroFullBleedSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero-section">
      <motion.div
        className="hero-full-bg"
        initial={reducedMotion ? false : { scale: 1.08, opacity: 0.82 }}
        animate={reducedMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/photos/advisory-meeting.jpg"
          alt="Advisory meeting with Australian business clients"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-scrim" />
      <div className="hero-grain" />
      <div className="container hero-grid">
        <div className="hero-copy hero-entrance">
          <div>
            <p className="eyebrow">Parramatta / Liverpool</p>
          </div>
          <div>
            <h1>
              Accountants and tax advisers for business owners.
            </h1>
          </div>
          <div>
            <p className="hero-lede">
              Accounting, tax, BAS, SMSF and business advice from Parramatta
              and Liverpool.
            </p>
          </div>
          <div>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">
                Book a free consultation
                <ArrowRight size={18} />
              </Link>
              <Link className="button button-outline" href="/services">
                Explore services
              </Link>
            </div>
            <div className="hero-trust-row" aria-label="Practice trust signals">
              <span>Registered tax agent</span>
              <span>20+ years</span>
              <span>Two Sydney offices</span>
            </div>
          </div>
        </div>
        <div className="hero-proof-panel" aria-label="Practice profile">
          <span>Practice profile</span>
          <strong>Tax, accounting and business advice in one place.</strong>
          <small>
            Meet in Parramatta, Liverpool or online. Get help before deadlines
            become stressful.
          </small>
        </div>
      </div>
    </section>
  );
}

function TestimonialParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.01, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="testimonial-section"
      aria-labelledby="testimonial-heading"
    >
      <div className="testimonial-sticky">
        <motion.div
          className="testimonial-full-bg"
          style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src={team[1].image}
            alt="AATBS team reviewing client work"
            fill
            sizes="100vw"
          />
        </motion.div>
        <div className="testimonial-scrim" />
        <div className="testimonial-grain" />

        <div className="container testimonial-overlay">
          <motion.div
            className="testimonial-lead"
          >
            <p className="eyebrow">Client experience</p>
            <h2 id="testimonial-heading">
              Clear advice makes the next step easier.
            </h2>
            <p>
              Clients value simple explanations, clear timing and a team that
              understands their business.
            </p>
          </motion.div>

          <div className="testimonial-quote-layer">
            <motion.div
              className="testimonial-feature"
            >
              <Quote size={30} />
              <p>{testimonials[0].quote}</p>
              <span>
                {testimonials[0].business} / {testimonials[0].location}
              </span>
            </motion.div>
            <motion.div
              className="testimonial-notes"
            >
              {testimonials.slice(1).map((item) => (
                <motion.div
                  className="testimonial-note"
                  key={item.quote}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.22 }}
                >
                  <p>{item.quote}</p>
                  <span>{item.business}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
