import { ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  formatBlogDate,
  getBlogImage,
  getAllBlogs,
  type UpliftBlog
} from "@/lib/uplift";

export const revalidate = 600;

export const metadata = {
  title: "Blog",
  description:
    "Accounting, taxation, payroll, SMSF and business advisory articles from AdvancedTax."
};

function BlogCardData({ blog }: { blog: UpliftBlog }) {
  return (
    <div className="blog-card-date" aria-label="Article publish date">
      <span>Published</span>
      <time>{formatBlogDate(blog)}</time>
    </div>
  );
}

export default async function BlogPage() {
  const { blogs, source } = await getAllBlogs({ status: "PUBLISH" });
  const [featured, ...articles] = blogs;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Current notes for cleaner accounting and sharper tax decisions."
        copy="Read practical articles from the AdvancedTax team, with guidance for business owners, trustees, employers and families."
        image="/photos/document-review.jpg"
        alt="Tax adviser reviewing documents before a client meeting"
      />

      <section className="section-pad blog-index-section">
        <div className="container blog-index-heading">
          <div>
            <p className="eyebrow">Latest articles</p>
            <h2>Guides pulled from the publishing desk.</h2>
          </div>
          <p>
            New posts are loaded from Uplift AI. Each article keeps its author,
            category, image and publishing metadata intact.
          </p>
        </div>

        {source === "fallback" && (
          <div className="container blog-api-note" role="status">
            <RefreshCw size={18} />
            <span>
              Showing local sample articles until the Uplift API returns published posts.
            </span>
          </div>
        )}

        {featured && (
          <div className="container blog-feature-wrap">
            <Link href={`/blog/${featured.slug}`} className="blog-feature">
              <img src={getBlogImage(featured)} alt="" />
              <BlogCardData blog={featured} />
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <strong>
                Read article <ArrowRight size={18} />
              </strong>
            </Link>
          </div>
        )}

        <div className="container resource-index blog-card-grid">
          {articles.map((blog) => (
            <Link className="blog-card" key={blog.id || blog.slug} href={`/blog/${blog.slug}`}>
              <img className="blog-card-image" src={getBlogImage(blog)} alt="" />
              <BlogCardData blog={blog} />
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <strong>
                Read article <ArrowRight size={16} />
              </strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
