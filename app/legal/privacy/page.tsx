import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Advanced Accounting Taxation & Business Services",
  description:
    "Read the Privacy Policy for Advanced Accounting Taxation & Business Services and learn how we collect, use and protect your personal information.",
  path: "/legal/privacy",
  keywords: ["AdvancedTax privacy", "accounting firm privacy Sydney"]
});

// Subheadings should read smaller than the page's main <h1>.
// If your global stylesheet already sizes <h2> appropriately, this
// inline override can be removed.
const subheading = { fontSize: "1.25rem", fontWeight: 600 };
const listStyle = { listStyleType: "disc", paddingLeft: "1.5rem" };

export default function PrivacyPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>

        <p>
          <strong>Able Accounting &amp; Taxation Services Pty Ltd</strong>
          <br />
          ABN 77 119 247 997
          <br />
          T/A <strong>Advanced Accounting Taxation &amp; Business Services</strong>
          <br />
          Last Updated: July 2026
        </p>
        <p></p>
        <article>
          <h2 style={subheading}>1. Privacy Statement</h2>
          <p>
            <strong>
  Able Accounting &amp; Taxation Services Pty Ltd
</strong>{" "}
trading as{" "}
<strong>
  Advanced Accounting Taxation &amp; Business Services
</strong>{" "}
(&quot;AATBS&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is
committed to protecting the privacy and confidentiality of your personal
information.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, store
            and protect your personal information when you engage our
            services, communicate with us or use our website.
          </p>
          <p>
            We manage personal information in accordance with the{" "}
            <strong>Privacy Act 1988 (Cth)</strong> and the{" "}
            <strong>Australian Privacy Principles (APPs)</strong>.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>2. Information We Collect</h2>
          <p>
            The information we collect depends on the services you require
            and may include:
          </p>
          <ul style={listStyle}>
            <li>your name and contact details;</li>
            <li>date of birth;</li>
            <li><strong>Tax File Number</strong> (where authorised by law);</li>
            <li>financial and taxation information;</li>
            <li>bank account details;</li>
            <li>business information;</li>
            <li>identification documents;</li>
            <li>electronic signatures;</li>
            <li>documents you provide to us; and</li>
            <li>correspondence between you and our office.</li>
          </ul>
          <p>
            Where required, we may also collect information from government
            agencies, your authorised representatives or other organisations
            involved in providing our services.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>3. How We Collect Information</h2>
          <p>
            We generally collect personal information directly from you when
            you:
          </p>
          <ul style={listStyle}>
            <li>engage us to provide professional services;</li>
            <li>complete our Client Information Form;</li>
            <li>sign an Engagement Letter;</li>
            <li>complete our Identity Verification process;</li>
            <li>contact us by telephone, email or through our website;</li>
            <li>subscribe to our newsletter; or</li>
            <li>
              provide documents or other information relevant to your
              engagement.
            </li>
          </ul>
          <p>
            Where permitted by law, we may also collect information from
            third parties where necessary to provide our services.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>4. How We Use Your Information</h2>
          <p>We collect and use your personal information to:</p>
          <ul style={listStyle}>
            <li>
              provide taxation, accounting, bookkeeping, SMSF, home loan and
              business advisory services;
            </li>
            <li>prepare and lodge documents with government authorities;</li>
            <li>verify your identity where required;</li>
            <li>communicate with you regarding your affairs;</li>
            <li>maintain accurate client records;</li>
            <li>respond to enquiries;</li>
            <li>comply with legal and professional obligations; and</li>
            <li>improve our services.</li>
          </ul>
          <p>
            <strong>
              If you do not provide the information we reasonably require, we
              may be unable to provide some or all of our services.
            </strong>
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>
            5. Online Forms and Electronic Signatures
          </h2>
          <p>Our website includes online services such as:</p>
          <ul style={listStyle}>
            <li>Client Information Forms;</li>
            <li>Engagement Letters;</li>
            <li>Identity Verification;</li>
            <li>Contact Forms; and</li>
            <li>Newsletter subscriptions.</li>
          </ul>
          <p>
            When you complete these forms, we collect the information and
            documents you choose to provide.
          </p>
          <p>This may include:</p>
          <ul style={listStyle}>
            <li>contact details;</li>
            <li>taxation information;</li>
            <li>identity documents;</li>
            <li>supporting documentation; and</li>
            <li>electronic signatures.</li>
          </ul>
          <p>
            Electronic signatures submitted through our website may be
            retained as part of your client records.
          </p>
          <p>
            Information collected through our online forms is used solely to
            provide our professional services, verify your identity where
            required by law, communicate with you and maintain accurate
            client records.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>6. Disclosure of Information</h2>
          <p>
            We will only disclose your personal information where necessary
            to provide our services, where you have authorised us to do so,
            or where we are required or permitted to do so by law.
          </p>
          <p>
            Depending on the services we provide, your information may be
            shared with organisations such as:
          </p>
          <ul style={listStyle}>
            <li>the <strong>Australian Taxation Office (ATO)</strong>;</li>
            <li>
              the <strong>Australian Securities and Investments Commission (ASIC)</strong>;
            </li>
            <li>financial institutions;</li>
            <li>your authorised representatives; and</li>
            <li>government authorities where required by law.</li>
          </ul>
          <p>
            <strong>We do not sell your personal information.</strong>
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>7. Storage and Security</h2>
          <p>
            We take reasonable steps to protect your personal information
            from misuse, loss, unauthorised access, modification and
            disclosure.
          </p>
          <p>
            Personal information may be stored electronically or in physical
            files. Access is restricted to authorised personnel who require
            the information to perform their duties.
          </p>
          <p>
            We retain personal information only for as long as necessary to
            provide our services and comply with our legal and professional
            obligations. When information is no longer required, it is
            securely destroyed or de-identified where appropriate.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>8. Marketing Communications</h2>
          <p>
            From time to time, we may send newsletters, taxation updates and
            information about services that may be of interest to you.
          </p>
          <p>
            <strong>
              You may unsubscribe from these communications at any time
            </strong>{" "}
            by following the unsubscribe instructions in our emails or by
            contacting our office.
          </p>
          <p>
            We will continue to contact you regarding matters directly
            relating to your existing engagements or legal obligations where
            necessary.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>9. Access and Correction</h2>
          <p>
            You may request access to the personal information we hold about
            you or ask us to correct information that you believe is
            inaccurate, incomplete or out of date.
          </p>
          <p>
            To protect your privacy, we may ask you to verify your identity
            before providing access to your information.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>10. Privacy Complaints</h2>
          <p>
            If you believe your privacy has been affected or you have
            concerns about how we have handled your personal information,
            please contact us.
          </p>
          <p>
            We will investigate your complaint and respond within a
            reasonable timeframe.
          </p>
          <p>
            If you are not satisfied with our response, you may contact the{" "}
            <strong>
              Office of the Australian Information Commissioner (OAIC)
            </strong>{" "}
            for further assistance.
          </p>
        </article>
        <p></p>
        <article>
          <h2 style={subheading}>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            access or correct your personal information, please contact us.
          </p>
          <p>
           <strong>
  Able Accounting &amp; Taxation Services Pty Ltd
</strong>
<br />
ABN 77 119 247 997
<br />
T/A Advanced Accounting Taxation &amp; Business Services
<br />
<br />
<strong>Parramatta Office</strong>
<br />
Level 14, 3 Parramatta Square
<br />
153 Macquarie Street
<br />
Parramatta NSW 2150
<br />
<strong>Liverpool Office</strong>
<br />
83 Scott Street
<br />
Liverpool NSW 2170
<br />
<br />
Phone: (02) 9734 0777
<br />
Email:{" "}
<a href="mailto:accountants@advancedtax.com.au">
  accountants@advancedtax.com.au
</a>
<br />
Website:{" "}
<a href="https://www.advancedtax.com.au">
  www.advancedtax.com.au
</a>
          </p>
        </article>
      </div>
    </section>
  );
}
