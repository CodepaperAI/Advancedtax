import { Accordion } from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accounting & Tax FAQ for Sydney Clients",
  description:
    "Answers about switching accountants, packages, BAS, tax, bookkeeping and consultation preparation for Sydney, Parramatta and Liverpool clients.",
  path: "/faq",
  keywords: [
    "accounting FAQ Sydney",
    "tax accountant questions Parramatta",
    "switch accountants Sydney",
    "BAS questions Liverpool"
  ]
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Practical answers before the first consultation."
        copy="Common questions for Sydney, Parramatta and Liverpool clients about switching accountants, packages, BAS, bookkeeping and what to bring to the first conversation."
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
