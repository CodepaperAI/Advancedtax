import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "AdvancedTax | Sydney Accounting, Taxation and Advisory",
    template: "%s | AdvancedTax"
  },
  description:
    "Premium redesign for Advanced Accounting, Taxation & Business Services: Sydney tax, accounting, SMSF, finance and advisory support.",
  openGraph: {
    title: "AdvancedTax | Sydney Accounting, Taxation and Advisory",
    description:
      "Accounting, taxation and advisory support from Parramatta and Liverpool.",
    url: site.domain,
    siteName: "AdvancedTax",
    images: [site.logoDark],
    locale: "en_AU",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
