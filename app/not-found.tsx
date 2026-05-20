import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>We could not find that page.</h1>
        <p>
          The page may have moved. Start from the homepage or book a
          consultation if you need a direct answer.
        </p>
        <div className="hero-actions">
          <Link className="button button-gold" href="/">
            Return home
          </Link>
          <Link className="button button-outline dark" href="/contact">
            Contact AATBS
          </Link>
        </div>
      </div>
    </section>
  );
}
