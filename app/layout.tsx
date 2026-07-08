import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/content";
import { withLocalKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "AdvancedTax | Sydney Accounting, Taxation and Advisory",
    template: "%s | AdvancedTax"
  },
  description:
    "Accounting, tax, BAS, bookkeeping, SMSF and business advisory support for Sydney, Parramatta, Liverpool, Western Sydney and South West Sydney clients.",
  keywords: withLocalKeywords(),
  applicationName: "AdvancedTax",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AdvancedTax | Sydney Accounting, Taxation and Advisory",
    description:
      "Accounting, tax, BAS, SMSF and advisory support from Parramatta and Liverpool for clients across Sydney and NSW.",
    url: site.domain,
    siteName: "AdvancedTax",
    images: [site.logoAbsolute],
    locale: "en_AU",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNZ3BWSF');`
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNZ3BWSF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
