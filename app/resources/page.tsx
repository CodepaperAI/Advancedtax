import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/MotionPrimitives";
import { posts } from "@/lib/content";

export const metadata = {
  title: "Resources",
  description:
    "Tax tips, SMSF guidance, year-end resources and STP articles from AdvancedTax."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical insights for tax, payroll, SMSF and year-end decisions."
        copy="Use these guides to prepare better records, ask sharper questions and make the first consultation more useful."
        image="/photos/accounting-office.jpg"
        alt="Accounting team reviewing business records"
      />
      <section className="section-pad">
        <div className="container resource-index">
          {posts.map((post) => (
            <FadeIn key={post.slug}>
              <Link href={`/resources/insights/${post.slug}`}>
                <Image src={post.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                <span>{post.category} / {new Date(post.date).toLocaleDateString("en-AU")}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <strong>
                  Read insight <ArrowRight size={16} />
                </strong>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
