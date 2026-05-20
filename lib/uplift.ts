import { posts, site } from "./content";

export type UpliftBlogStatus = "PUBLISH" | "DRAFT" | "ALL";

export type UpliftBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status?: UpliftBlogStatus;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  analytics?: {
    contentQualityScore?: number;
    rankingPotential?: string;
    conversionPotential?: string;
    externalLinksCount?: number;
  };
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: {
    lastUpdatedAt?: string;
    ageDays?: number;
    needsRefresh?: boolean;
    freshnessThresholdDays?: number;
  };
  meta?: {
    seoTitle?: string;
    seoDescription?: string;
    focusKeyword?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogType?: string;
    ogUrl?: string;
    ogSiteName?: string;
    ogLocale?: string;
    articleAuthor?: string;
    articleSection?: string;
    articleTags?: string[];
  };
  customFields?: Record<string, string | number | boolean | null>;
};

type UpliftListResponse = {
  blogs: UpliftBlog[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

type UpliftApiEnvelope<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type BlogListResult = UpliftListResponse & {
  source: "uplift" | "fallback";
};

const API_BASE_URL = "https://api.upliftai.co/api/public/v1";
const DEFAULT_LIMIT = 25;
const REVALIDATE_SECONDS = 600;
const DEFAULT_BLOG_IMAGE = "/photos/accounting-office.jpg";

function getToken() {
  return process.env.UPLIFTAI_API_TOKEN?.trim() ?? "";
}

async function fetchFromUplift<T>(path: string) {
  const token = getToken();

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      },
      next: { revalidate: REVALIDATE_SECONDS }
    });

    if (!response.ok) {
      throw new Error(`Uplift API responded with ${response.status}`);
    }

    const payload = (await response.json()) as UpliftApiEnvelope<T>;

    if (!payload.success || !payload.data) {
      throw new Error(payload.error ?? "Uplift API returned an unsuccessful response");
    }

    return payload.data;
  } catch (error) {
    console.warn(error instanceof Error ? error.message : "Uplift API request failed");
    return null;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fallbackBlogFromPost(post: (typeof posts)[number]): UpliftBlog {
  return {
    id: post.slug,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join(""),
    status: "PUBLISH",
    publishDate: post.date,
    publishTime: "09:00:00",
    featuredImage: post.image,
    categories: [post.category],
    tags: [],
    authorName: site.shortName,
    meta: {
      seoTitle: post.title,
      seoDescription: post.excerpt,
      articleAuthor: site.name,
      articleSection: post.category
    }
  };
}

function fallbackBlogs() {
  return posts.map(fallbackBlogFromPost);
}

export async function getBlogs({
  page = 1,
  limit = DEFAULT_LIMIT,
  status = "PUBLISH"
}: {
  page?: number;
  limit?: number;
  status?: UpliftBlogStatus;
} = {}): Promise<BlogListResult> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    status
  });

  const data = await fetchFromUplift<UpliftListResponse>(`/blogs?${params.toString()}`);

  if (data?.blogs?.length) {
    return {
      blogs: data.blogs,
      pagination: data.pagination,
      source: "uplift"
    };
  }

  const blogs = fallbackBlogs();

  return {
    blogs,
    pagination: {
      page: 1,
      limit: blogs.length,
      total: blogs.length,
      totalPages: 1
    },
    source: "fallback"
  };
}

export async function getAllBlogs({
  status = "PUBLISH",
  pageSize = DEFAULT_LIMIT,
  maxPages = 12
}: {
  status?: UpliftBlogStatus;
  pageSize?: number;
  maxPages?: number;
} = {}): Promise<BlogListResult> {
  const firstPage = await getBlogs({ page: 1, limit: pageSize, status });

  if (firstPage.source === "fallback" || !firstPage.pagination) {
    return firstPage;
  }

  const totalPages = Math.min(firstPage.pagination.totalPages, maxPages);

  if (totalPages <= 1) {
    return firstPage;
  }

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      getBlogs({ page: index + 2, limit: pageSize, status })
    )
  );

  return {
    blogs: [
      ...firstPage.blogs,
      ...remainingPages
        .filter((page) => page.source === "uplift")
        .flatMap((page) => page.blogs)
    ],
    pagination: firstPage.pagination,
    source: "uplift"
  };
}

export async function getBlog(slug: string) {
  const data = await fetchFromUplift<{ blog: UpliftBlog }>(`/blog/${encodeURIComponent(slug)}`);

  if (data?.blog) {
    return data.blog;
  }

  return fallbackBlogs().find((blog) => blog.slug === slug) ?? null;
}

export function getBlogDate(blog: UpliftBlog) {
  return blog.publishDate ?? blog.freshness?.lastUpdatedAt ?? blog.updatedAt ?? blog.createdAt;
}

export function formatBlogDate(blog: UpliftBlog) {
  const value = getBlogDate(blog);

  if (!value) {
    return "Recently published";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export function getBlogImage(blog: UpliftBlog) {
  return blog.featuredImage || DEFAULT_BLOG_IMAGE;
}

export function getBlogCategory(blog: UpliftBlog) {
  return blog.categories?.[0] ?? blog.meta?.articleSection ?? "Insight";
}

export function getBlogAuthor(blog: UpliftBlog) {
  return blog.authorName || blog.meta?.articleAuthor || site.name;
}

export function getReadingTime(blog: UpliftBlog) {
  const customReadingTime = blog.customFields?.readingTime;

  if (typeof customReadingTime === "string" && customReadingTime.trim()) {
    return customReadingTime;
  }

  const wordCount = stripHtml(blog.content ?? blog.excerpt ?? "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));

  return `${minutes} min read`;
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function blogToPlainDescription(blog: UpliftBlog) {
  return blog.meta?.seoDescription || blog.excerpt || stripHtml(blog.content ?? "").slice(0, 160);
}

export function blogContentHtml(blog: UpliftBlog) {
  const content = blog.content?.trim();

  if (!content) {
    return `<p>${escapeHtml(blog.excerpt ?? "This article is being prepared.")}</p>`;
  }

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(content);

  if (!hasHtml) {
    return content
      .split(/\n{2,}/)
      .map((paragraph) => `<p>${escapeHtml(paragraph.trim())}</p>`)
      .join("");
  }

  return content
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+=("[^"]*"|'[^']*')/gi, "")
    .replace(/\s(href|src)=("|')javascript:[\s\S]*?\2/gi, "");
}
