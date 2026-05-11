import { offices, site, type Post, type Service } from "./content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "AccountingService"],
    name: site.name,
    url: site.domain,
    logo: site.logoDark,
    telephone: site.mobileDisplay,
    email: site.email,
    sameAs: [site.social.facebook, site.social.instagram],
    areaServed: ["Sydney", "Parramatta", "Liverpool", "New South Wales"],
    address: offices.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office.name,
      addressRegion: "NSW",
      addressCountry: "AU"
    }))
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.name,
    image: site.logoDark,
    url: site.domain,
    telephone: site.mobileDisplay,
    priceRange: "$$",
    areaServed: "Sydney",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Parramatta",
      addressRegion: "NSW",
      addressCountry: "AU"
    }
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: {
      "@type": "AccountingService",
      name: site.name,
      url: site.domain
    },
    areaServed: "Sydney"
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: site.logoDark
      }
    }
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
