import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy information for AdvancedTax clients and website visitors.",
  path: "/legal/privacy",
  keywords: ["AdvancedTax privacy", "accounting firm privacy Sydney"]
});

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy policy</h1>
        <p>
          AdvancedTax handles client and enquiry information for consultation,
          accounting, taxation and advisory purposes. The full client-approved
          privacy policy should be inserted here before public launch, including
          analytics, form and CMS processing disclosures.
        </p>
      </div>
    </section>
  );
}
