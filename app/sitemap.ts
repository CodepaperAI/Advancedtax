import type { MetadataRoute } from "next";
import { industries, posts, services, site } from "@/lib/content";
import { getAllBlogs, getBlogDate } from "@/lib/uplift";
import { locations } from "@/lib/seo/locations";
import { serviceAreaPairs } from "@/lib/seo/service-areas";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { blogs } = await getAllBlogs({ status: "PUBLISH" });
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/about/team",
    "/about/offices",
    "/services",
    "/industries",
    "/pricing",
    "/blog",
    "/resources",
    "/faq",
    "/contact",
    "/service-areas",
    "/legal/privacy",
    "/legal/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: now,
    })),
    ...locations.map((loc) => ({
      url: `${site.domain}/service-areas/${loc.slug}`,
      lastModified: now,
    })),
    ...serviceAreaPairs.map(({ serviceSlug, citySlug }) => ({
      url: `${site.domain}/services/${serviceSlug}/${citySlug}`,
      lastModified: now,
    })),
    ...industries.map((industry) => ({
      url: `${site.domain}/industries/${industry.slug}`,
      lastModified: now,
    })),
    ...posts.map((post) => ({
      url: `${site.domain}/resources/insights/${post.slug}`,
      lastModified: new Date(post.date),
    })),
    ...blogs.map((blog) => ({
      url: `${site.domain}/blog/${blog.slug}`,
      lastModified: new Date(getBlogDate(blog) ?? Date.now()),
    })),
  ];
}
