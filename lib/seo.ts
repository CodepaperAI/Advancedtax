import type { Metadata } from "next";
import { site } from "./content";

export const localServiceAreas = [
  "Sydney",
  "Parramatta",
  "Liverpool",
  "Western Sydney",
  "South West Sydney",
  "New South Wales"
];

export const coreSeoKeywords = [
  "accountants Sydney",
  "tax accountant Sydney",
  "accountant Parramatta",
  "tax accountant Parramatta",
  "accountant Liverpool",
  "tax accountant Liverpool",
  "Western Sydney accountant",
  "South West Sydney accountant",
  "business accounting Sydney",
  "BAS agent Sydney",
  "bookkeeping Sydney",
  "SMSF accountant Sydney",
  "small business tax advice Sydney",
  "business tax finance advisers Sydney"
];

export function withLocalKeywords(keywords: string[] = []) {
  return Array.from(new Set([...keywords, ...coreSeoKeywords, ...localServiceAreas]));
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.domain).toString();
}

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = site.logoAbsolute,
  type = "website"
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    keywords: withLocalKeywords(keywords),
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "AdvancedTax",
      images: [image],
      locale: "en_AU",
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
