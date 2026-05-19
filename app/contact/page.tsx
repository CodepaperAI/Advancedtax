import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { offices, site } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Book a consultation with AdvancedTax in Parramatta, Liverpool or online."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book consultation"
        title="Start with a clear conversation."
        copy="Tell AATBS what is due, what is changing, or where you need clarity. We will direct your enquiry to the right adviser before the consultation."
        image="/photos/client-consultation.jpg"
        alt="Client consultation with an adviser"
      />
      <section className="section-pad contact-section">
        <div className="container contact-grid">
          <FadeIn>
            <p className="eyebrow">Contact details</p>
            <h2>Parramatta and Liverpool access, plus remote meetings when easier.</h2>
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
