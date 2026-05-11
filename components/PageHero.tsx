import Image from "next/image";
import { FadeIn, ImageReveal } from "./MotionPrimitives";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <FadeIn>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{copy}</p>
        </FadeIn>
        <ImageReveal className="page-hero-media">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
