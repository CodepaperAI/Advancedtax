import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/content";
import { faqSchema } from "@/lib/schema";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about switching accountants, packages, BAS, tax and consultation preparation."
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Practical answers before the first consultation."
        copy="Common questions about switching accountants, packages, BAS, bookkeeping and what to bring to the first conversation."
        image="/photos/document-review.jpg"
        alt="Adviser reviewing client documents"
      />
      <section className="section-pad">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Client questions</p>
            <h2>Practical answers before the first meeting.</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
