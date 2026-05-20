import { offices, site, type Post, type Service } from "./content";
import type { UpliftBlog } from "./uplift";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "AccountingService"],
    name: site.name,
    url: site.domain,
    logo: site.logoAbsolute,
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
    image: site.logoAbsolute,
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
        url: site.logoAbsolute
      }
    }
  };
}

export function blogArticleSchema(blog: UpliftBlog) {
  const datePublished =
    blog.publishDate ?? blog.freshness?.lastUpdatedAt ?? blog.createdAt ?? blog.updatedAt;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.meta?.seoDescription ?? blog.excerpt,
    image: blog.featuredImage,
    datePublished,
    dateModified: blog.freshness?.lastUpdatedAt ?? blog.updatedAt ?? datePublished,
    author: {
      "@type": blog.authorUrl ? "Person" : "Organization",
      name: blog.authorName ?? blog.meta?.articleAuthor ?? site.name,
      url: blog.authorUrl
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: site.logoAbsolute
      }
    },
    mainEntityOfPage: `${site.domain}/blog/${blog.slug}`,
    articleSection: blog.meta?.articleSection ?? blog.categories?.[0],
    keywords: blog.meta?.keywords ?? blog.tags
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
