// Per-city local copy. Each entry differentiates a service x city page by
// referencing real suburbs, languages spoken in the area, and the business mix
// (small businesses, sole traders, families) that AATBS typically supports.
// All written conservatively — no fake numbers, no claims that aren't true.

export const localCopy: Record<string, string> = {
  "parramatta": "Our main office is in Parramatta, which means in-person meetings and same-week appointments are easiest here. We work with Parramatta CBD businesses, Harris Park retail and hospitality operators, and families across the Western Sydney corridor. The mix of sole traders, growing SMEs and property investors in this market shapes how we structure compliance and advisory work.",

  "liverpool": "Our second office is in Liverpool, serving clients across South West Sydney. The market here ranges from established trades and construction businesses to first-generation business owners building their first company structure. We're set up to handle BAS, payroll and full advisory work locally so clients don't have to drive to Parramatta or Sydney CBD.",

  "westmead": "Westmead is a short trip from our Parramatta office, and we work regularly with medical and allied-health professionals based in the Westmead Health Precinct. The compliance and structuring work for healthcare entities is a regular part of what we do here — service trust setups, GST treatment of medical income, and SMSF planning for senior practitioners.",

  "harris-park": "Harris Park is essentially across the road from our Parramatta office, so most clients here can drop in without an appointment. The strong Indian-Australian small business community in Harris Park means we see a lot of retail, hospitality and import/export work — entities that benefit from clear advice on GST, payroll and BAS cycles.",

  "granville": "Granville sits between Parramatta and Auburn, and our work here is a mix of small business compliance, sole-trader tax returns, and bookkeeping support. Many Granville clients prefer mid-quarter check-ins rather than only meeting at year-end, and we structure engagements around that cadence when it suits.",

  "auburn": "Auburn's diverse small business community — retail, hospitality, trades, and import-export — keeps our schedule full. We work with first-time business owners on company setups and structuring, and with established operators on year-end accounts, BAS and tax planning. Our Parramatta office is a short drive, and we hold appointments there or online depending on what works for the client.",

  "bankstown": "Bankstown is one of our regular South West Sydney markets, served out of the Liverpool office. The business mix here is heavy in trades, transport, and small retail — sectors where BAS, GST and payroll get complex fast. We can usually batch in-person meetings to a single day in Bankstown to keep travel reasonable for clients.",

  "cabramatta": "Cabramatta is one of the most active small business corridors in South West Sydney, and we work with restaurant operators, retail importers, and family-run businesses across the area. Our Liverpool office is the natural meeting point, with online sessions when faster turnaround matters. We're comfortable working through translated documents when needed.",

  "fairfield": "Fairfield is part of our regular South West Sydney rotation, served from Liverpool. The work here ranges from sole-trader tax returns to multi-entity structures for retail and manufacturing businesses based in Smithfield and Wetherill Park. We handle the GST and payroll cycles that come with mixed-entity setups.",

  "castle-hill": "Castle Hill and the wider Hills District bring us a mix of professional services clients, family businesses, and SMSF cases. Our Parramatta office is the closest meeting point, and many Castle Hill clients prefer Friday or Monday appointments around their work week. We structure ongoing engagements to minimise back-and-forth.",

  "blacktown": "Blacktown is a substantial Western Sydney market for us, served from the Parramatta office. The business mix includes trades, transport, small construction firms, and a growing services sector. We're equipped to handle the BAS and payroll cycles that come with growing teams, and to advise on the right structure as a business expands.",

  "penrith": "Penrith sits at the outer edge of our regular catchment. We support Penrith clients primarily online, with quarterly in-person meetings when needed. The work tends to be advisory and structuring — clients who want clear quarterly check-ins rather than only year-end contact. We're upfront about the travel time when in-person matters.",

  "campbelltown": "Campbelltown is at the southern edge of our service area. We work with Campbelltown clients online by default, with periodic in-person meetings in Liverpool when that's the better fit. The work here skews toward business advisory, year-end accounts, and SMSF support — areas where the value justifies the longer engagement cadence.",

  "sydney-cbd": "We work with Sydney CBD businesses primarily online — most CBD clients prefer Teams or Zoom sessions over in-person meetings. The work covers the full advisory range: structuring, tax planning, BAS, year-end accounts, and SMSF compliance. In-person meetings in Parramatta or Liverpool are available when the client prefers, or we'll come to the CBD on request.",
};

export function getLocalCopy(citySlug: string): string | null {
  return localCopy[citySlug] ?? null;
}
