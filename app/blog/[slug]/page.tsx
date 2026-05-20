import type { Metadata } from "next";
import { ArrowLeft, Clock, UserRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import {
  blogContentHtml,
  blogToPlainDescription,
  formatBlogDate,
  getBlog,
  getAllBlogs,
  getBlogAuthor,
  getBlogCategory,
  getBlogDate,
  getBlogImage,
  getReadingTime
} from "@/lib/uplift";
import { blogArticleSchema } from "@/lib/schema";

export const revalidate = 600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { blogs } = await getAllBlogs({ status: "PUBLISH" });

  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {};
  }

  const description = blogToPlainDescription(blog);
  const title = blog.meta?.seoTitle || blog.title;

  return {
    title,
    description,
    openGraph: {
      title: blog.meta?.ogTitle || title,
      description: blog.meta?.ogDescription || description,
      type: "article",
      images: [getBlogImage(blog)]
    }
  };
}

export default async function BlogArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const category = getBlogCategory(blog);
  const tags = blog.tags ?? blog.meta?.articleTags ?? [];

  return (
    <>
      <JsonLd data={blogArticleSchema(blog)} />
      <article className="article-page blog-article-page">
        <div className="container article-grid">
          <FadeIn>
            <Link href="/blog" className="eyebrow blog-back-link">
              <ArrowLeft size={14} />
              Blog
            </Link>
            <h1>{blog.title}</h1>
            {blog.excerpt && <p className="lede">{blog.excerpt}</p>}
            <div className="blog-article-meta">
              <span>{category}</span>
              <span>{formatBlogDate(blog)}</span>
              <span>
                <Clock size={16} />
                {getReadingTime(blog)}
              </span>
            </div>
          </FadeIn>
          <ImageReveal className="article-image blog-article-image">
            <img src={getBlogImage(blog)} alt="" />
          </ImageReveal>
        </div>

        <div className="container blog-article-layout">
          <aside className="blog-article-aside" aria-label="Article details">
            <div>
              <span>Author</span>
              <strong>
                <UserRound size={17} />
                {getBlogAuthor(blog)}
              </strong>
            </div>
            <div>
              <span>Published</span>
              <strong>{formatBlogDate(blog)}</strong>
            </div>
            {blog.freshness?.needsRefresh !== undefined && (
              <div>
                <span>Freshness</span>
                <strong>
                  {blog.freshness.needsRefresh
                    ? "Ready for review"
                    : "Current"}
                </strong>
              </div>
            )}
            {typeof blog.seoScore === "number" && (
              <div>
                <span>SEO score</span>
                <strong>{blog.seoScore}/100</strong>
              </div>
            )}
            {tags.length > 0 && (
              <div>
                <span>Tags</span>
                <ul>
                  {tags.slice(0, 8).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div
            className="article-body blog-content"
            dangerouslySetInnerHTML={{ __html: blogContentHtml(blog) }}
          />
        </div>
      </article>
    </>
  );
}
