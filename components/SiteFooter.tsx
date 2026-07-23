import Image from "next/image";
import Link from "next/link";
import { accreditations, nav, offices, services, site } from "@/lib/content";
import { locations } from "@/lib/seo/locations";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src={site.logoLight}
            alt="Advanced Accounting Taxation and Business Services"
            width={260}
            height={120}
          />
          <p>
            Accounting, taxation, BAS, bookkeeping, SMSF and advisory support
            for Sydney, Parramatta, Liverpool, Western Sydney and South West
            Sydney clients.
          </p>
          <div className="footer-social">
            <a href={site.social.facebook}>Facebook</a>
            <a href={site.social.instagram}>Instagram</a>
          </div>
        </div>
        <div>
          <h2>Navigate</h2>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h2>Services</h2>
          {services.slice(0, 8).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Service Areas</h2>
          <Link href="/service-areas">All service areas</Link>
          {locations.map((loc) => (
            <Link key={loc.slug} href={`/service-areas/${loc.slug}`}>
              {loc.name}
            </Link>
          ))}
        </div>
        <div>
          <h2>Offices</h2>
          {offices.map((office) => (
            <p key={office.name}>
              <strong>{office.name}</strong>
              <span>{office.address}</span>
            </p>
          ))}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.mobileHref}>{site.mobileDisplay}</a>
        </div>
      </div>
      <div className="container footer-accreditations">
        {accreditations.map((item) => (
          <Image
            key={item.name}
            src={item.image}
            alt={item.name}
            width={92}
            height={54}
          />
        ))}
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 Advanced Accounting, Taxation & Business Services.</span>
        <span>{site.legal}</span>
        <Link href="/legal/privacy">Privacy</Link>
        <Link href="/legal/terms">Terms</Link>
        <Link href="/legal/disclaimer">Disclaimer</Link>
      </div>
    </footer>
  );
}
