// City-aware JSON-LD helpers that extend the existing schema in lib/schema.ts
// with areaServed/{City} specificity. Use these on programmatic pSEO pages.

import { site, type Service } from "../content";
import type { Location } from "./locations";

const SITE_URL = site.domain;

export function cityLocalBusinessSchema(city: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    image: site.logoAbsolute,
    telephone: site.mobileDisplay,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.region,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: city.regionShort,
      addressCountry: city.country === "Australia" ? "AU" : city.country,
    },
  };
}

export function cityServiceSchema(service: Service, city: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} in ${city.name}, ${city.regionShort}`,
    description: service.intro,
    provider: {
      "@id": `${SITE_URL}/#business`,
      "@type": "AccountingService",
      name: site.name,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    url: `${SITE_URL}/services/${service.slug}/${city.slug}`,
  };
}

export function breadcrumbSchema(
  items: { name: string; url?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}
