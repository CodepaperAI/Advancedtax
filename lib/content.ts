export type Service = {
  slug: string;
  title: string;
  group: "Compliance" | "Advisory" | "Specialist";
  eyebrow: string;
  outcome: string;
  intro: string;
  image: string;
  alt: string;
  includes: string[];
  proof: string;
  faqs: { question: string; answer: string }[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  needs: string[];
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const site = {
  name: "Advanced Accounting, Taxation & Business Services",
  shortName: "AATBS",
  domain: "https://www.advancedtax.com.au",
  phoneDisplay: "02 9734 0777",
  phoneHref: "tel:+61297340777",
  mobileDisplay: "0412 093 385",
  mobileHref: "tel:+61412093385",
  email: "info@advancedtax.com.au",
  bookingHref: "/contact",
  logoLight: "/brand/logo-light.png",
  logoDark: "/brand/logo.png",
  logoAbsolute: "https://www.advancedtax.com.au/brand/logo.png",
  social: {
    facebook: "https://www.facebook.com/AdvancedAccountingBusinessServices/",
    instagram: "https://www.instagram.com/advancedaccounting_au/"
  },
  legal:
    "Liability limited by a scheme approved under Professional Standards Legislation."
};

export const offices = [
  {
    name: "Parramatta",
    address: "Parramatta, NSW",
    detail:
      "A local office for clients who prefer to meet in person in Western Sydney.",
    image: "/photos/sydney-cbd.jpg"
  },
  {
    name: "Liverpool",
    address: "Liverpool, NSW",
    detail:
      "A second office for clients across South West Sydney.",
    image: "/photos/sydney-street.jpg"
  }
];

export const serviceAreas = [
  {
    name: "Parramatta",
    detail:
      "Accounting, tax returns, BAS, bookkeeping and advisory support for Western Sydney business owners and families."
  },
  {
    name: "Liverpool",
    detail:
      "Tax agent, payroll, bookkeeping and business accounting support for South West Sydney clients."
  },
  {
    name: "Sydney",
    detail:
      "Online and in-person accounting, taxation, SMSF and business advisory services for clients across Sydney and NSW."
  }
];

export const accreditations = [
  {
    name: "Tax Practitioners Board",
    image: "/brand/accreditation-tpb.svg"
  },
  {
    name: "MFAA",
    image: "/brand/accreditation-mfaa.svg"
  },
  {
    name: "Finsia",
    image: "/brand/accreditation-finsia.svg"
  },
  {
    name: "Elite Broker",
    image: "/brand/accreditation-elite-broker.svg"
  },
  {
    name: "IntelliTrain",
    image: "/brand/accreditation-intellitrain.svg"
  }
];

export const partners = [
  {
    name: "Xero",
    image: "/brand/partner-xero.svg"
  },
  {
    name: "MYOB",
    image: "/brand/partner-myob.svg"
  },
  {
    name: "QuickBooks",
    image: "/brand/partner-quickbooks.svg"
  },
  {
    name: "BGL",
    image: "/brand/partner-bgl.svg"
  }
];

export const stats = [
  {
    label: "Years supporting clients",
    value: 20,
    suffix: "+",
    note: "Helping clients with accounting, tax and business advice."
  },
  {
    label: "Trusted Advisers",
    value: 2,
    suffix: "",
    note: "Serving Australia-Wide virtually with offices in Parramatta and Liverpool."
  },
  {
    label: "Happy clients",
    value: 500,
    suffix: "+",
    note: "Business owners and individuals supported across the practice."
  }
];

export const services: Service[] = [
  {
    slug: "accounting",
    title: "Accounting",
    group: "Compliance",
    eyebrow: "Accounts and reports",
    outcome: "Clear accounts you can rely on.",
    intro:
      "Accounting support for business owners who need reliable reports and organised records.",
    image: "/photos/accounting-office.jpg",
    alt: "Advisory team reviewing financial reports in a modern office",
    includes: ["Management accounts", "Entity reporting", "Tax-ready records"],
    proof: "You get clear reports, simple explanations and a team who knows your file.",
    faqs: [
      {
        question: "Can you work with our current accounting software?",
        answer:
          "Yes. The practice works with Xero, MYOB, QuickBooks and BGL."
      },
      {
        question: "Do we need monthly reporting?",
        answer:
          "Some businesses need monthly reports. Others only need a quarterly review. We can confirm what suits you."
      }
    ]
  },
  {
    slug: "tax-saving",
    title: "Tax saving",
    group: "Compliance",
    eyebrow: "Tax planning",
    outcome: "Plan ahead before tax deadlines.",
    intro:
      "Tax support for individuals, families and businesses who want clear deadlines and practical advice.",
    image: "/photos/document-review.jpg",
    alt: "Australian tax adviser reviewing client documents in a meeting",
    includes: ["Tax returns", "ATO correspondence", "Year-end planning"],
    proof: "A registered tax agent can explain your options and what records are needed.",
    faqs: [
      {
        question: "Will using a registered tax agent change my lodgement deadline?",
        answer:
          "Sometimes, yes. It depends on your ATO status and lodgement history."
      },
      {
        question: "Do you help with ATO letters?",
        answer:
          "Yes. The team can review correspondence, explain the position and help prepare a response."
      }
    ]
  },
  {
    slug: "bas-returns",
    title: "BAS returns",
    group: "Compliance",
    eyebrow: "GST and BAS",
    outcome: "BAS lodgements kept accurate and on time.",
    intro:
      "Monthly or quarterly BAS support for businesses that need GST, PAYG and ATO reporting handled properly.",
    image: "/photos/accounting-office.jpg",
    alt: "Accounting team preparing business reporting and BAS records",
    includes: ["GST review", "PAYG instalments", "ATO lodgement support"],
    proof: "We help you prepare and lodge BAS before due dates become stressful.",
    faqs: [
      {
        question: "Can you review BAS before lodgement?",
        answer:
          "Yes. We can review your BAS before it is lodged."
      },
      {
        question: "Can you handle monthly BAS?",
        answer:
          "Yes. We can support monthly, quarterly or annual BAS depending on your registration."
      }
    ]
  },
  {
    slug: "business-advisory",
    title: "Business advisory",
    group: "Advisory",
    eyebrow: "Owner decisions",
    outcome: "Better decisions with clearer numbers.",
    intro:
      "Business advice for owners who need help with cash flow, structure, planning and next steps.",
    image: "/photos/advisory-meeting.jpg",
    alt: "Business advisers reviewing strategy with a client",
    includes: ["Cash flow review", "Business structure", "Growth planning"],
    proof: "We explain the numbers and help you decide what to do next.",
    faqs: [
      {
        question: "Is advisory separate from tax work?",
        answer:
          "Yes. Some clients include it in a package. Others book a focused planning session."
      },
      {
        question: "Can you help before a major business decision?",
        answer:
          "Yes. It is best to speak before a major decision is final."
      }
    ]
  },
  {
    slug: "year-end",
    title: "Year-end financials",
    group: "Compliance",
    eyebrow: "Close with confidence",
    outcome: "A cleaner year-end with fewer issues.",
    intro:
      "Year-end statements, reconciliations and tax records prepared for owners, lenders and directors.",
    image: "/photos/document-review.jpg",
    alt: "Client documents reviewed during year-end financial planning",
    includes: ["Financial statements", "Reconciliations", "Tax workpapers"],
    proof: "We help organise the records so year-end work is easier to complete.",
    faqs: [
      {
        question: "Can you prepare statements for lenders?",
        answer:
          "Yes. We can prepare financial information for lender or finance discussions."
      },
      {
        question: "Can you clean up prior-year issues?",
        answer:
          "Yes. We first review the records so we can explain what needs to be fixed."
      }
    ]
  },
  {
    slug: "payroll-stp",
    title: "Payroll and STP",
    group: "Compliance",
    eyebrow: "Payroll reporting",
    outcome: "Payroll and STP kept on track.",
    intro:
      "Single Touch Payroll, superannuation and payroll support for employers.",
    image: "/photos/client-consultation.jpg",
    alt: "Client consultation for payroll and reporting support",
    includes: ["STP setup", "Payroll review", "Superannuation process"],
    proof: "We help check payroll settings, reporting and super timing.",
    faqs: [
      {
        question: "Can you set up STP?",
        answer:
          "Yes. STP setup, review and ongoing reporting can be included."
      },
      {
        question: "Do you review super obligations?",
        answer:
          "Yes. Super payment timing and reporting can be reviewed."
      }
    ]
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    group: "Compliance",
    eyebrow: "Monthly records",
    outcome: "Records kept current through the year.",
    intro:
      "Bookkeeping support for businesses that need bank reconciliations, coding and regular reports.",
    image: "/photos/accounting-office.jpg",
    alt: "Accounting team maintaining business records and reporting",
    includes: ["Bank reconciliations", "Expense coding", "Monthly reporting"],
    proof: "Keeping records up to date makes BAS, tax and reports easier.",
    faqs: [
      {
        question: "Can bookkeeping be part of a package?",
        answer:
          "Yes. Bookkeeping can be included in a monthly package."
      },
      {
        question: "Do you handle catch-up bookkeeping?",
        answer:
          "Yes. We review the records first so we can explain the clean-up work."
      }
    ]
  },
  {
    slug: "concierge-cfo",
    title: "Concierge CFO",
    group: "Advisory",
    eyebrow: "Business planning",
    outcome: "Regular finance support without a full-time hire.",
    intro:
      "Extra support for growing businesses that need cash flow planning, reports and regular financial guidance.",
    image: "/photos/advisory-meeting.jpg",
    alt: "Senior advisers discussing business planning around a boardroom table",
    includes: ["Forecasting", "Management reporting", "Planning meetings"],
    proof: "You get regular help to understand the numbers and plan ahead.",
    faqs: [
      {
        question: "Is Concierge CFO only for larger businesses?",
        answer:
          "No. It is useful whenever the business needs more help than basic reports."
      },
      {
        question: "Can this include quarterly reviews?",
        answer:
          "Yes. Quarterly check-ins can be included."
      }
    ]
  },
  {
    slug: "smsf",
    title: "SMSF",
    group: "Specialist",
    eyebrow: "SMSF support",
    outcome: "SMSF administration kept compliant and understandable.",
    intro:
      "Self-managed super fund support for trustees who want records, accounts and tax returns handled carefully.",
    image: "/photos/client-consultation.jpg",
    alt: "SMSF trustee consultation with financial documents",
    includes: ["Annual accounts", "SMSF tax return", "Trustee records"],
    proof: "We explain what trustees need to provide and what needs to happen next.",
    faqs: [
      {
        question: "Do trustees stay involved?",
        answer:
          "Yes. Trustees remain responsible, and we help explain what needs to be done."
      },
      {
        question: "Can SMSF work connect with tax planning?",
        answer:
          "Yes. SMSF administration often sits alongside broader tax and retirement planning discussions."
      }
    ]
  }
];

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    summary:
      "Cash flow, contractors, equipment, progress claims and tax timing for building and trade businesses.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82",
    needs: ["Contractor structures", "Cash flow timing", "Equipment finance"]
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Support for clinics, practitioners and allied health teams balancing compliance with growth.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=82",
    needs: ["Practice reporting", "Payroll", "Business structure"]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary:
      "Payroll, GST, margins and weekly reporting for cafes, restaurants and venue operators.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=82",
    needs: ["Payroll", "GST and BAS", "Margin review"]
  },
  {
    slug: "property",
    title: "Property",
    summary:
      "Tax and entity support for investors, developers and property-linked businesses.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82",
    needs: ["Entity setup", "Finance support", "Tax planning"]
  },
  {
    slug: "professional-services",
    title: "Professional services",
    summary:
      "Accounting, tax and business support for consultants, agencies and client-service firms.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=82",
    needs: ["Revenue tracking", "Business advice", "Pricing review"]
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Inventory, payroll, finance and reporting support for retail operators.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=82",
    needs: ["Inventory reporting", "BAS", "Cash flow"]
  }
];

export const team = [
  {
    name: "Abby Raweri",
    role: "Director - Tax, Finance & Lending Solutions",
    credential: "Business, Tax & Finance Specialist",
    image: "/team/principal.png"
  },
  {
    name: "Accounting team",
    role: "Accounting and tax compliance",
    credential: "Tax, BAS, payroll and year-end compliance support",
    image: "/photos/accounting-office.jpg"
  },
  {
    name: "Client services team",
    role: "Bookkeeping, BAS and client support",
    credential: "Bookkeeping, client communication and lodgement support",
    image: "/photos/client-consultation.jpg"
  }
];

export const testimonials = [
  {
    quote:
      "The most valuable part was how clearly everything was explained. We knew what was due and what to do next.",
    name: "Sydney business owner",
    business: "Sydney business owner",
    location: "NSW"
  },
  {
    quote:
      "They explained tax and cash flow in a way we could use for real business decisions.",
    name: "Growth-stage client",
    business: "Growth-stage company",
    location: "Western Sydney"
  },
  {
    quote:
      "Having a local office and a named contact made the whole process easier. We were never guessing who had the file.",
    name: "Family business client",
    business: "Family business",
    location: "South West Sydney"
  }
];

export const pricingBusiness = [
  {
    name: "Thinker",
    audience: "Small businesses that need tax and annual accounts",
    price: "$220 / month",
    summary: "Tax, annual accounts and support through the year.",
    features: [
      "Annual planning meeting",
      "Cloud accounting subscription",
      "Annual financial statements",
      "Annual tax return",
      "Year-round tax advice and support"
    ]
  },
  {
    name: "Mover",
    audience: "Businesses that need BAS and regular reports",
    price: "$550 / month",
    summary: "Tax, BAS and regular reports for better decisions.",
    features: [
      "Everything in Thinker",
      "Quarterly BAS lodgement",
      "Quarterly management reports",
      "Quarterly review meetings",
      "ASIC compliance",
      "Bookkeeping quoted separately"
    ]
  },
  {
    name: "Shaker",
    audience: "Businesses that need more regular planning",
    price: "$1,100 / month",
    summary: "Tax, reports and monthly planning support in one package.",
    features: [
      "Everything in Mover",
      "Monthly planning meeting (1 hour)",
      "Annual business benchmarking",
      "Annual business valuation"
    ]
  }
];

export const pricingBookkeeping = [
  {
    name: "Small",
    audience: "Annual revenue up to $500k",
    price: "$300 / month",
    summary: "Basic bookkeeping for smaller businesses.",
    features: [
      "Xero file subscription",
      "Bank reconciliations up to 50 transactions",
      "Customer and supplier payment matching",
      "Payroll add-on at $15 / payslip / month"
    ]
  },
  {
    name: "Medium",
    audience: "Growing businesses up to $1m revenue",
    price: "$550 / month",
    summary: "Bookkeeping with payroll built in.",
    features: [
      "Xero file subscription",
      "Bank reconciliations up to 150 transactions",
      "Payroll for up to 10 employees",
      "Superannuation reminders",
      "Annual PAYG summaries",
      "Additional payroll at $10 / payslip / month"
    ]
  },
  {
    name: "Heavy",
    audience: "Established businesses over $1m revenue",
    price: "$825 / month",
    summary: "Full bookkeeping and payroll support at scale.",
    features: [
      "Xero file subscription",
      "Bank reconciliations up to 300 transactions",
      "Payroll for up to 25 employees",
      "Superannuation reminders",
      "Annual PAYG summaries",
      "Additional payroll at $10 / payslip / month"
    ]
  }
];

export const pricingBundles = [
  {
    name: "Thinker + Small",
    audience: "Tax support plus basic bookkeeping",
    price: "$440 / month +GST",
    includes: ["Thinker business package", "Small bookkeeping package"]
  },
  {
    name: "Mover + Medium",
    audience: "Business reporting with payroll included",
    price: "$880 / month +GST",
    includes: ["Mover business package", "Medium bookkeeping package"]
  },
  {
    name: "Shaker + Heavy",
    audience: "Monthly planning with full bookkeeping",
    price: "$1,650 / month +GST",
    includes: ["Shaker business package", "Heavy bookkeeping package"]
  }
];

export const pricing = pricingBusiness;

export const posts: Post[] = [
  {
    slug: "smsf-compliance-checklist",
    title: "SMSF compliance checklist for trustees",
    category: "SMSF",
    date: "2026-05-01",
    excerpt:
      "A practical checklist for trustees preparing records and annual return information.",
    image: "/photos/client-consultation.jpg",
    body: [
      "SMSF compliance works best when trustees keep records current instead of gathering everything at year-end.",
      "The essentials are clean bank records, investment documents and member balance information.",
      "Before lodgement, trustees should check contributions, pensions, valuations and related-party transactions."
    ]
  },
  {
    slug: "year-end-financial-statements",
    title: "Preparing cleaner year-end financial statements",
    category: "Year-end",
    date: "2026-04-18",
    excerpt:
      "How business owners can reduce year-end stress before final accounts are prepared.",
    image: "/photos/document-review.jpg",
    body: [
      "A cleaner year-end starts before 30 June. Reconciliations, payroll records and director loan accounts are easier to fix while the details are fresh.",
      "Owners should review receivables, payables, stock, finance agreements and unusual transactions before the final file is prepared.",
      "Organised records give advisers better information and give owners more confidence in the numbers."
    ]
  },
  {
    slug: "single-touch-payroll-review",
    title: "Single Touch Payroll review points",
    category: "Payroll",
    date: "2026-03-29",
    excerpt:
      "A short guide to reviewing STP settings, employee records and super payments.",
    image: "/photos/accounting-office.jpg",
    body: [
      "STP depends on correct employee details, pay categories, super settings and regular reporting.",
      "Employers should review payroll before year-end finalisation, especially if roles, allowances or super settings changed during the year.",
      "A payroll review can reduce correction work and help keep employees, the ATO and owners aligned."
    ]
  }
];

export const faqs = [
  {
    question: "Which areas do you serve?",
    answer:
      "AATBS supports clients in Sydney, Parramatta, Liverpool, Western Sydney, South West Sydney and wider NSW, with in-person and online meetings available."
  },
  {
    question: "Can we switch from another accountant?",
    answer:
      "Yes. AATBS can review your current status, request handover information and set up the work."
  },
  {
    question: "Do you offer fixed-fee packages?",
    answer:
      "Yes. We confirm the fee after we understand the work, reports and support you need."
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. The practice has Parramatta and Liverpool access, with remote meetings available when that is easier."
  },
  {
    question: "Do you handle both tax and bookkeeping?",
    answer:
      "Yes. Tax, bookkeeping, BAS and business advice can be packaged together where it makes sense."
  },
  {
    question: "What information should we bring to a first consultation?",
    answer:
      "Bring recent tax records, business structure details, current software access and any ATO correspondence you want reviewed."
  }
];

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
