import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer | Advanced Accounting Taxation & Business Services",
  description:
    "Read the website disclaimer for Advanced Accounting Taxation & Business Services.",
  path: "/legal/disclaimer",
  keywords: ["AdvancedTax disclaimer", "website disclaimer"],
});

const subheading = { fontSize: "1.25rem", fontWeight: 600 };

export default function DisclaimerPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <p className="eyebrow">Legal</p>

        <h1>Disclaimer</h1>

        <article>

          <p>
            Every effort has been made to ensure that the information contained
            on this website is current, accurate and clearly presented.
            However, inadvertent errors may occur, and applicable laws,
            regulations and taxation requirements may change over time.
          </p>

          <p>
            The information provided on this website is of a general nature
            only and is not intended to constitute accounting, taxation,
            financial or legal advice. It should not be relied upon as a
            substitute for professional advice that considers your individual
            circumstances.
          </p>

          <p>
            You should not act or refrain from acting solely on the basis of
            the information contained on this website. We encourage you to
            contact{" "}
            <strong>
              Advanced Accounting Taxation &amp; Business Services
            </strong>{" "}
            to obtain advice tailored to your specific circumstances before
            making any financial, taxation or business decisions.
          </p>

          <p>
            <strong>
              Liability limited by a scheme approved under Professional
              Standards Legislation.
            </strong>
          </p>
        </article>
      </div>
    </section>
  );
}