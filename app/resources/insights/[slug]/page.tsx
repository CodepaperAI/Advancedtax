import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { FadeIn, ImageReveal } from "@/components/MotionPrimitives";
import { getPost, posts } from "@/lib/content";
import { articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article className="article-page">
        <div className="container article-grid">
          <FadeIn>
            <Link href="/resources" className="eyebrow">
              Resources
            </Link>
            <h1>{post.title}</h1>
            <p className="lede">{post.excerpt}</p>
            <span>{post.category} / {new Date(post.date).toLocaleDateString("en-AU")}</span>
          </FadeIn>
          <ImageReveal className="article-image">
            <Image src={post.image} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </ImageReveal>
        </div>
        <div className="container article-body">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
}
