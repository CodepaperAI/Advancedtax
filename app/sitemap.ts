import type { MetadataRoute } from "next";
import { industries, posts, services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/team",
    "/about/offices",
    "/services",
    "/industries",
    "/pricing",
    "/resources",
    "/faq",
    "/contact",
    "/legal/privacy",
    "/legal/terms"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date()
    })),
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: new Date()
    })),
    ...industries.map((industry) => ({
      url: `${site.domain}/industries/${industry.slug}`,
      lastModified: new Date()
    })),
    ...posts.map((post) => ({
      url: `${site.domain}/resources/insights/${post.slug}`,
      lastModified: new Date(post.date)
    }))
  ];
}
