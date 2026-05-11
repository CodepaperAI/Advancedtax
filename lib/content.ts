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
  domain: "https://advancedtax.com.au",
  phoneDisplay: "02 9734 0777",
  phoneHref: "tel:+61297340777",
  mobileDisplay: "0412 093 385",
  mobileHref: "tel:+61412093385",
  email: "info@advancedtax.com.au",
  bookingHref: "/contact",
  logoLight:
    "https://advancedtax.com.au/wp-content/uploads/2024/08/advancedtaxservices-logo-light.png",
  logoDark: "https://advancedtax.com.au/wp-content/uploads/2025/07/advancetax1.png",
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
      "A central Sydney base for business owners who prefer in-person advice close to the commercial core of Western Sydney.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=82"
  },
  {
    name: "Liverpool",
    address: "Liverpool, NSW",
    detail:
      "A second office for clients across South West Sydney who want local access without giving up senior advisory depth.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82"
  }
];

export const accreditations = [
  {
    name: "Tax Practitioners Board",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/accredit-tpb-logo.png"
  },
  {
    name: "MFAA",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/accredit-mfaa-logo.png"
  },
  {
    name: "Finsia",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/accredit-finsia-logo.png"
  },
  {
    name: "Elite Broker",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/accredit-elite-broker-logo.png"
  },
  {
    name: "IntelliTrain",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/accredit-intellitrain-logo-1.png"
  }
];

export const partners = [
  {
    name: "Xero",
    image: "https://advancedtax.com.au/wp-content/uploads/2024/08/xero-logo.png"
  },
  {
    name: "MYOB",
    image:
      "https://advancedtax.com.au/wp-content/uploads/elementor/thumbs/myob-logo-qtlocc7utxvwwq0proa27lyzh0xlqk9xm8j9ggu0w0.png"
  },
  {
    name: "QuickBooks",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/quickbooks-logo.png"
  },
  {
    name: "BGL",
    image: "https://advancedtax.com.au/wp-content/uploads/2024/08/bgl-logo.png"
  }
];

export const stats = [
  {
    label: "Years supporting NSW clients",
    value: 30,
    suffix: "+",
    note: "Replace with client-confirmed founding year before launch."
  },
  {
    label: "Sydney offices",
    value: 2,
    suffix: "",
    note: "Parramatta and Liverpool."
  },
  {
    label: "Core service lines",
    value: 10,
    suffix: "",
    note: "Compliance, advisory, finance, SMSF, payroll and audit."
  },
  {
    label: "Launch target Lighthouse",
    value: 95,
    suffix: "+",
    note: "Desktop performance target for the rebuild."
  }
];

export const services: Service[] = [
  {
    slug: "accounting",
    title: "Accounting",
    group: "Compliance",
    eyebrow: "Financial clarity",
    outcome: "Clean accounts that make decisions easier.",
    intro:
      "Month-end, year-end and management reporting shaped for business owners who need reliable numbers without chasing paperwork.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=82",
    alt: "Financial reports and accounting documents arranged on a desk",
    includes: ["Management accounts", "Entity reporting", "Tax-ready records"],
    proof: "Structured reporting, plain-English explanations and a named adviser.",
    faqs: [
      {
        question: "Can you work with our current accounting software?",
        answer:
          "Yes. The practice works across Xero, MYOB, QuickBooks and BGL workflows."
      },
      {
        question: "Do we need monthly reporting?",
        answer:
          "Most growing businesses benefit from monthly numbers; smaller entities may only need quarterly review."
      }
    ]
  },
  {
    slug: "tax-saving",
    title: "Tax saving",
    group: "Compliance",
    eyebrow: "Tax strategy",
    outcome: "Tax planning before the deadline pressure hits.",
    intro:
      "Advice for individuals, families and businesses who want compliant tax outcomes, clear deadlines and fewer year-end surprises.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=82",
    alt: "Tax paperwork and calculator on a timber desk",
    includes: ["Tax returns", "ATO correspondence", "Year-end planning"],
    proof: "Registered tax agent guidance with practical timing and documentation support.",
    faqs: [
      {
        question: "Will using a registered tax agent change my lodgement deadline?",
        answer:
          "In many cases registered agent lodgement programs provide different timing, but eligibility depends on your history and ATO status."
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
      "Quarterly and monthly BAS support for businesses that need their GST, PAYG and reporting obligations handled without rush work.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=82",
    alt: "Business activity statement preparation on a laptop",
    includes: ["GST review", "PAYG instalments", "ATO lodgement support"],
    proof: "A repeatable lodgement rhythm that keeps owners ahead of due dates.",
    faqs: [
      {
        question: "Can you review BAS before lodgement?",
        answer:
          "Yes. A review step can be built into the workflow before anything is lodged."
      },
      {
        question: "Can you handle monthly BAS?",
        answer:
          "Yes. Monthly, quarterly and annual BAS rhythms can be supported depending on your registration."
      }
    ]
  },
  {
    slug: "business-advisory",
    title: "Business advisory",
    group: "Advisory",
    eyebrow: "Owner decisions",
    outcome: "Better decisions from sharper financial context.",
    intro:
      "Advisory for owners who need help interpreting numbers, planning cash flow, reviewing structure and choosing the next move.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82",
    alt: "Business advisers reviewing a strategy session",
    includes: ["Cash flow review", "Business structure", "Growth planning"],
    proof: "Boutique attention with CFO-grade commercial discipline.",
    faqs: [
      {
        question: "Is advisory separate from tax work?",
        answer:
          "It can be. Some clients use advisory as part of a broader package; others use it for a focused planning session."
      },
      {
        question: "Can you help before a major business decision?",
        answer:
          "Yes. That is often the best time to speak, before the accounting effect becomes locked in."
      }
    ]
  },
  {
    slug: "year-end",
    title: "Year-end financials",
    group: "Compliance",
    eyebrow: "Close with confidence",
    outcome: "A cleaner year-end close with fewer loose ends.",
    intro:
      "Year-end statements, reconciliations and tax-ready packs prepared with the detail lenders, directors and owners expect.",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/financial-report-ZYNX4RM-1536x1024.jpg",
    alt: "Financial report with charts and figures",
    includes: ["Financial statements", "Reconciliations", "Tax workpapers"],
    proof: "A structured close process that reduces back-and-forth.",
    faqs: [
      {
        question: "Can you prepare statements for lenders?",
        answer:
          "Yes. The team can prepare financial information suitable for finance and review discussions."
      },
      {
        question: "Can you clean up prior-year issues?",
        answer:
          "Yes, but the scope depends on the quality of available records and prior lodgements."
      }
    ]
  },
  {
    slug: "payroll-stp",
    title: "Payroll and STP",
    group: "Compliance",
    eyebrow: "Payroll obligations",
    outcome: "Payroll reporting that does not drift out of control.",
    intro:
      "Single Touch Payroll, superannuation and payroll support for employers who want correct reporting and clearer processes.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=82",
    alt: "Payroll and reporting data on a laptop",
    includes: ["STP setup", "Payroll review", "Superannuation process"],
    proof: "Practical payroll compliance without forcing a software migration.",
    faqs: [
      {
        question: "Can you set up STP?",
        answer:
          "Yes. Setup, review and ongoing payroll reporting can be included in the package."
      },
      {
        question: "Do you review super obligations?",
        answer:
          "Yes. Super payment timing and reporting can be reviewed as part of payroll support."
      }
    ]
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    group: "Compliance",
    eyebrow: "Monthly rhythm",
    outcome: "Records that stay current instead of being rescued later.",
    intro:
      "Bookkeeping support for businesses that need reconciliations, coding and reporting kept current through the year.",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/notebook-laptop-and-writing-hands-of-black-woman-o-ZDYYSGP-1536x1024.jpg",
    alt: "Bookkeeping notes beside a laptop",
    includes: ["Bank reconciliations", "Expense coding", "Monthly reporting"],
    proof: "A steady operating rhythm, not a year-end scramble.",
    faqs: [
      {
        question: "Can bookkeeping be part of a package?",
        answer:
          "Yes. It can sit inside a compliance or advisory package depending on business size."
      },
      {
        question: "Do you handle catch-up bookkeeping?",
        answer:
          "Yes, after a records review to confirm the clean-up scope."
      }
    ]
  },
  {
    slug: "concierge-cfo",
    title: "Concierge CFO",
    group: "Advisory",
    eyebrow: "Senior finance support",
    outcome: "CFO-grade guidance without a full-time hire.",
    intro:
      "A senior advisory layer for growing businesses that need cash flow discipline, scenario planning and financial leadership.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=82",
    alt: "Advisory meeting around a conference table",
    includes: ["Forecasting", "Board reporting", "Scenario planning"],
    proof: "Financial leadership scaled to the stage of the business.",
    faqs: [
      {
        question: "Is Concierge CFO only for larger businesses?",
        answer:
          "No. It is useful when decisions have outgrown basic compliance reporting."
      },
      {
        question: "Can this include quarterly reviews?",
        answer:
          "Yes. Quarterly check-ins are a natural fit for this service."
      }
    ]
  },
  {
    slug: "audit-assurance",
    title: "Audit and assurance",
    group: "Specialist",
    eyebrow: "Independent review",
    outcome: "Assurance work with clear documentation and calm execution.",
    intro:
      "Audit and assurance support for entities that need reliable review, documentation and stakeholder confidence.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=82",
    alt: "Assurance documents reviewed in an office",
    includes: ["Audit support", "Assurance review", "Documentation"],
    proof: "Clear process and evidence trails from start to sign-off.",
    faqs: [
      {
        question: "Can you support audit preparation?",
        answer:
          "Yes. The team can help organise documentation and prepare the right evidence."
      },
      {
        question: "Do you work with external auditors?",
        answer:
          "Yes. The workflow can be structured around external auditor requests."
      }
    ]
  },
  {
    slug: "smsf",
    title: "SMSF",
    group: "Specialist",
    eyebrow: "Specialist compliance",
    outcome: "SMSF administration kept compliant and understandable.",
    intro:
      "Self-managed super fund support for trustees who want compliance handled carefully and explained clearly.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=82",
    alt: "Retirement planning and financial documents",
    includes: ["Annual accounts", "SMSF tax return", "Audit preparation"],
    proof: "Trustee obligations translated into practical steps.",
    faqs: [
      {
        question: "Do trustees stay involved?",
        answer:
          "Yes. Trustees remain responsible, and the adviser helps make obligations clear and manageable."
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
    needs: ["Payroll rhythm", "GST and BAS", "Margin review"]
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
      "Advisory and compliance support for consultants, agencies and client-service firms.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=82",
    needs: ["Revenue tracking", "Advisory", "Pricing clarity"]
  },
  {
    slug: "retail",
    title: "Retail",
    summary:
      "Inventory, payroll, finance and reporting discipline for retail operators.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=82",
    needs: ["Inventory reporting", "BAS", "Cash flow"]
  }
];

export const team = [
  {
    name: "Principal adviser",
    role: "Registered tax agent and business adviser",
    credential: "Client-supplied bio required before launch",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/professional-business-team-NNXYFQN-768x864.jpg"
  },
  {
    name: "Senior accountant",
    role: "Accounting and tax compliance",
    credential: "CA/CPA details to be confirmed",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/cheerful-business-team-discussing-project-L7SEHE4-768x864.jpg"
  },
  {
    name: "Client services lead",
    role: "Bookkeeping, BAS and client workflow",
    credential: "Profile photo and bio pending",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/unity-of-business-team-LSJVEG5-768x512.jpg"
  }
];

export const testimonials = [
  {
    quote:
      "The most valuable part was the clarity. We left each meeting knowing exactly what was due, what changed, and what we needed to do next.",
    name: "Client name pending",
    business: "Sydney business owner",
    location: "NSW"
  },
  {
    quote:
      "They translated tax and cash flow into practical decisions. That is what made the relationship feel like advisory, not just compliance.",
    name: "Client name pending",
    business: "Growth-stage company",
    location: "Western Sydney"
  },
  {
    quote:
      "Having a local office and a named contact made the whole process easier. We were never guessing who had the file.",
    name: "Client name pending",
    business: "Family business",
    location: "South West Sydney"
  }
];

export const pricingBusiness = [
  {
    name: "Thinker",
    audience: "Compliance-led owners and small operators",
    price: "$220 / month",
    summary: "Compliance with tax advice and support.",
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
    audience: "Active businesses building reporting rhythm",
    price: "$550 / month",
    summary: "Compliance and reporting for growth decisions.",
    features: [
      "Everything in Thinker",
      "Quarterly BAS lodgement",
      "Quarterly management reports",
      "Quarterly review meetings",
      "ASIC compliance",
      "Bookkeeping scoped separately"
    ]
  },
  {
    name: "Shaker",
    audience: "Owners ready for CFO-grade oversight",
    price: "$1,100 / month",
    summary: "Compliance, reporting and accountability in one package.",
    features: [
      "Everything in Mover",
      "Monthly accountability meeting (1 hour)",
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
    summary: "A clean Xero rhythm for early-stage operators.",
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
    audience: "Compliance plus a clean Xero rhythm",
    price: "$440 / month +GST",
    includes: ["Thinker business package", "Small bookkeeping package"]
  },
  {
    name: "Mover + Medium",
    audience: "Reporting rhythm with payroll built in",
    price: "$880 / month +GST",
    includes: ["Mover business package", "Medium bookkeeping package"]
  },
  {
    name: "Shaker + Heavy",
    audience: "CFO-grade oversight with full bookkeeping",
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
      "A practical checklist for trustees preparing records, audit evidence and annual return information.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=82",
    body: [
      "SMSF compliance works best when trustees keep records current instead of gathering everything at year-end.",
      "The essentials are clean bank records, investment documentation, member balance information and evidence for material transactions.",
      "Before lodgement, trustees should confirm contributions, pensions, valuations and any related-party arrangements have been documented."
    ]
  },
  {
    slug: "year-end-financial-statements",
    title: "Preparing cleaner year-end financial statements",
    category: "Year-end",
    date: "2026-04-18",
    excerpt:
      "How business owners can reduce year-end friction before the final close begins.",
    image:
      "https://advancedtax.com.au/wp-content/uploads/2024/08/financial-report-ZYNX4RM-1536x1024.jpg",
    body: [
      "A cleaner year-end starts before 30 June. Reconciliations, payroll records and director loan accounts are easier to fix while the details are fresh.",
      "Owners should review receivables, payables, stock, finance agreements and unusual transactions before the final file is prepared.",
      "A structured close gives advisers better evidence and gives owners more confidence in the numbers."
    ]
  },
  {
    slug: "single-touch-payroll-review",
    title: "Single Touch Payroll review points",
    category: "Payroll",
    date: "2026-03-29",
    excerpt:
      "A short guide to reviewing STP settings, employee records and super obligations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=82",
    body: [
      "STP is not just a software setting. It depends on correct employee details, pay categories, super settings and reporting rhythm.",
      "Employers should review payroll before year-end finalisation, especially if roles, allowances or super settings changed during the year.",
      "A payroll review can reduce correction work and help keep employees, the ATO and owners aligned."
    ]
  }
];

export const faqs = [
  {
    question: "Can we switch from another accountant?",
    answer:
      "Yes. AATBS can review your current status, request the right handover information and set up a cleaner ongoing workflow."
  },
  {
    question: "Do you offer fixed-fee packages?",
    answer:
      "Packages are scoped after consultation so the fee matches the actual work, reporting rhythm and advisory needs."
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. The practice has Parramatta and Liverpool access, with remote meetings available when that is easier."
  },
  {
    question: "Do you handle both tax and bookkeeping?",
    answer:
      "Yes. Compliance, bookkeeping, BAS and advisory can be packaged together where it makes sense."
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
  { label: "Resources", href: "/resources" },
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
