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
        title="The FAQ should answer real buying questions, not hide filler text."
        copy="These questions are structured for prospects deciding whether to book a consultation."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1500&q=82"
        alt="Financial documents prepared for review"
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
