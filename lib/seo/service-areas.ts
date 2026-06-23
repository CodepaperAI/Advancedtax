// THE TRUTHFULNESS GATE.
//
// Explicit allowlist of which {service, city} combinations get a programmatic
// landing page. For accounting/tax, work is largely virtual so the matrix is
// near-complete — but Penrith, Campbelltown and Sydney CBD only get the
// higher-value advisory services (not transactional BAS/payroll where local
// meetings matter most).

import { services } from "../content";
import { locations } from "./locations";

// Far-from-office cities: only allow higher-value advisory services that
// justify the travel for occasional in-person meetings.
const FAR_CITY_SLUGS = new Set(["penrith", "campbelltown", "sydney-cbd"]);
const FAR_CITY_ALLOWED_SERVICES = new Set([
  "accounting",
  "tax-saving",
  "business-advisory",
  "concierge-cfo",
  "smsf",
  "year-end",
]);

function isAllowedPair(serviceSlug: string, citySlug: string): boolean {
  if (FAR_CITY_SLUGS.has(citySlug)) {
    return FAR_CITY_ALLOWED_SERVICES.has(serviceSlug);
  }
  return true;
}

export const serviceAreaPairs = services.flatMap((service) =>
  locations
    .filter((loc) => isAllowedPair(service.slug, loc.slug))
    .map((loc) => ({
      serviceSlug: service.slug,
      citySlug: loc.slug,
    }))
);

export const pairsByService = services.reduce<Record<string, string[]>>(
  (acc, service) => {
    acc[service.slug] = locations
      .filter((loc) => isAllowedPair(service.slug, loc.slug))
      .map((loc) => loc.slug);
    return acc;
  },
  {}
);

export const pairsByCity = locations.reduce<Record<string, string[]>>(
  (acc, loc) => {
    acc[loc.slug] = services
      .filter((service) => isAllowedPair(service.slug, loc.slug))
      .map((service) => service.slug);
    return acc;
  },
  {}
);

export function isServiceAvailableInCity(
  serviceSlug: string,
  citySlug: string,
): boolean {
  return isAllowedPair(serviceSlug, citySlug);
}

export function getServicesForCity(citySlug: string): string[] {
  return pairsByCity[citySlug] ?? [];
}

export function getCitiesForService(serviceSlug: string): string[] {
  return pairsByService[serviceSlug] ?? [];
}
