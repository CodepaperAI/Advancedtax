import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Business",
  description: "Terms of business information for AdvancedTax clients.",
  path: "/legal/terms",
  keywords: ["AdvancedTax terms", "accounting terms Sydney"]
});

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <p className="eyebrow">Terms</p>
        <h1>Terms of business</h1>
        <p>
          Engagement scope, professional standards, payment terms and limitation
          language should match the current client-approved terms of business.
          Insert the final legal text here before public launch.
        </p>
      </div>
    </section>
  );
}
