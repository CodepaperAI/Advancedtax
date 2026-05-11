export const cmsModels = [
  {
    name: "service",
    title: "Service",
    fields: [
      "title",
      "slug",
      "group",
      "eyebrow",
      "outcome",
      "intro",
      "image",
      "includes",
      "proof",
      "faqs",
      "relatedServices",
      "seo"
    ]
  },
  {
    name: "industry",
    title: "Industry",
    fields: ["title", "slug", "summary", "image", "needs", "relatedServices", "seo"]
  },
  {
    name: "teamMember",
    title: "Team member",
    fields: [
      "name",
      "role",
      "photo",
      "credentials",
      "taxAgentNumber",
      "bio",
      "linkedin",
      "displayOrder"
    ]
  },
  {
    name: "office",
    title: "Office",
    fields: ["name", "address", "hours", "phone", "photo", "mapUrl", "parkingNotes"]
  },
  {
    name: "testimonial",
    title: "Testimonial",
    fields: ["quote", "name", "business", "location", "consentConfirmed", "videoUrl"]
  },
  {
    name: "pricingPackage",
    title: "Pricing package",
    fields: ["name", "audience", "priceLabel", "features", "recommended", "cta"]
  },
  {
    name: "post",
    title: "Insight post",
    fields: ["title", "slug", "category", "publishDate", "excerpt", "heroImage", "body", "seo"]
  },
  {
    name: "faq",
    title: "FAQ",
    fields: ["question", "answer", "category", "displayOrder"]
  },
  {
    name: "accreditation",
    title: "Accreditation",
    fields: ["name", "logo", "url", "displayOrder"]
  },
  {
    name: "partnerLogo",
    title: "Partner logo",
    fields: ["name", "logo", "url", "displayOrder"]
  },
  {
    name: "siteSettings",
    title: "Site settings",
    fields: [
      "logo",
      "phone",
      "mobile",
      "email",
      "primaryCta",
      "socialLinks",
      "legalDisclaimer",
      "footerNavigation"
    ]
  }
] as const;
