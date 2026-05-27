import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact a Sydney Tax Accountant",
  description:
    "Book a consultation with AdvancedTax in Parramatta, Liverpool or online for accounting, tax, BAS, bookkeeping, SMSF and business advisory support.",
  path: "/contact",
  keywords: [
    "book tax accountant Sydney",
    "contact accountant Parramatta",
    "contact accountant Liverpool",
    "accounting consultation Sydney"
  ]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Start with a clear accounting and tax conversation."
        copy="Tell AATBS what you need help with in Sydney, Parramatta, Liverpool or online. We will point you to the right adviser before the consultation."
        image="/photos/client-consultation.jpg"
        alt="Client consultation with an adviser"
      />
      <section className="section-pad contact-section">
        <div className="container contact-grid">
          <FadeIn>
            <p className="eyebrow">Contact details</p>
            <h2>Meet in Parramatta, Liverpool or online.</h2>
            <div className="contact-details">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={site.mobileHref}>{site.mobileDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-office-strip">
              {offices.map((office) => (
                <div key={office.name}>
                  <Image src={office.image} alt={`${office.name} office`} fill sizes="220px" />
                  <span>{office.name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
