import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { faqs } from "@/lib/content";

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <HomePage />
    </>
  );
}
