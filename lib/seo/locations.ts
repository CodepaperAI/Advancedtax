// Truthful service area for AATBS (Advanced Accounting, Taxation & Business Services).
// Source: existing `localServiceAreas` in lib/seo.ts + `offices` in lib/content.ts
// (2 physical offices: Parramatta, Liverpool). Online + in-person across Sydney.
// Adding a suburb here without client confirmation = doorway-page risk.

export type Location = {
  slug: string;
  name: string;
  region: string;       // e.g., "Western Sydney"
  regionShort: string;  // e.g., "NSW"
  country: string;
  postalPrefix?: string;
  neighborhoods: string[];
  adjacentCities: string[];
  isHQ?: boolean;
  headline: string;
  note?: string;
};

export const locations: Location[] = [
  {
    slug: "parramatta",
    name: "Parramatta",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2150",
    neighborhoods: ["Parramatta CBD", "Harris Park", "North Parramatta", "Rosehill"],
    adjacentCities: ["westmead", "harris-park", "granville", "auburn"],
    isHQ: true,
    headline: "Accountants in Parramatta, NSW",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "South West Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2170",
    neighborhoods: ["Liverpool CBD", "Casula", "Moorebank", "Warwick Farm"],
    adjacentCities: ["fairfield", "cabramatta", "bankstown", "campbelltown"],
    isHQ: true,
    headline: "Accountants in Liverpool, NSW",
  },
  {
    slug: "westmead",
    name: "Westmead",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2145",
    neighborhoods: ["Westmead Health Precinct"],
    adjacentCities: ["parramatta", "harris-park"],
    headline: "Accountants in Westmead, NSW",
  },
  {
    slug: "harris-park",
    name: "Harris Park",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2150",
    neighborhoods: ["Harris Park village"],
    adjacentCities: ["parramatta", "westmead", "granville"],
    headline: "Accountants in Harris Park, NSW",
  },
  {
    slug: "granville",
    name: "Granville",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2142",
    neighborhoods: ["Granville", "Clyde", "Holroyd"],
    adjacentCities: ["parramatta", "auburn", "harris-park"],
    headline: "Accountants in Granville, NSW",
  },
  {
    slug: "auburn",
    name: "Auburn",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2144",
    neighborhoods: ["Auburn", "Berala", "Lidcombe", "Regents Park"],
    adjacentCities: ["parramatta", "granville"],
    headline: "Accountants in Auburn, NSW",
  },
  {
    slug: "bankstown",
    name: "Bankstown",
    region: "South West Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2200",
    neighborhoods: ["Bankstown CBD", "Yagoona", "Condell Park", "Punchbowl"],
    adjacentCities: ["liverpool", "cabramatta"],
    headline: "Accountants in Bankstown, NSW",
  },
  {
    slug: "cabramatta",
    name: "Cabramatta",
    region: "South West Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2166",
    neighborhoods: ["Cabramatta", "Canley Vale", "Canley Heights"],
    adjacentCities: ["liverpool", "fairfield", "bankstown"],
    headline: "Accountants in Cabramatta, NSW",
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    region: "South West Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2165",
    neighborhoods: ["Fairfield", "Smithfield", "Wetherill Park", "Bossley Park"],
    adjacentCities: ["liverpool", "cabramatta"],
    headline: "Accountants in Fairfield, NSW",
  },
  {
    slug: "castle-hill",
    name: "Castle Hill",
    region: "The Hills District",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2154",
    neighborhoods: ["Castle Hill", "Baulkham Hills", "Norwest"],
    adjacentCities: ["parramatta"],
    headline: "Accountants in Castle Hill, NSW",
  },
  {
    slug: "blacktown",
    name: "Blacktown",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2148",
    neighborhoods: ["Blacktown CBD", "Seven Hills", "Mount Druitt", "Doonside"],
    adjacentCities: ["parramatta", "penrith"],
    headline: "Accountants in Blacktown, NSW",
  },
  {
    slug: "penrith",
    name: "Penrith",
    region: "Western Sydney",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2750",
    neighborhoods: ["Penrith", "St Marys", "Glenmore Park", "Cranebrook"],
    adjacentCities: ["blacktown"],
    headline: "Accountants in Penrith, NSW",
    note: "Online support and quarterly in-person meetings.",
  },
  {
    slug: "campbelltown",
    name: "Campbelltown",
    region: "Macarthur Region",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2560",
    neighborhoods: ["Campbelltown", "Macarthur Square", "Camden", "Narellan"],
    adjacentCities: ["liverpool"],
    headline: "Accountants in Campbelltown, NSW",
    note: "Online support and quarterly in-person meetings.",
  },
  {
    slug: "sydney-cbd",
    name: "Sydney CBD",
    region: "Sydney CBD",
    regionShort: "NSW",
    country: "Australia",
    postalPrefix: "2000",
    neighborhoods: ["Sydney CBD", "Pyrmont", "Surry Hills", "Darlinghurst"],
    adjacentCities: [],
    headline: "Accountants for Sydney CBD businesses",
    note: "Online by default. In-person on request.",
  },
];

export const locationsBySlug = Object.fromEntries(
  locations.map((loc) => [loc.slug, loc])
);

export function getLocationBySlug(slug: string): Location | null {
  return locationsBySlug[slug] ?? null;
}

export function getAdjacentLocations(slug: string, limit = 3): Location[] {
  const loc = getLocationBySlug(slug);
  if (!loc) return [];
  return loc.adjacentCities
    .map((adjSlug) => getLocationBySlug(adjSlug))
    .filter((l): l is Location => l !== null)
    .slice(0, limit);
}
