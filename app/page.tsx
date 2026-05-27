import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AdvancedTax Accountants in Sydney, Parramatta & Liverpool",
  description:
    "Accounting, tax, BAS, bookkeeping, SMSF and business advisory services for business owners across Sydney, Parramatta, Liverpool, Western Sydney and South West Sydney.",
  path: "/",
  keywords: [
    "accounting firm Sydney",
    "business tax accountant Parramatta",
    "small business accountant Liverpool",
    "taxation services Western Sydney"
  ]
});

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <HomePage />
    </>
  );
}
