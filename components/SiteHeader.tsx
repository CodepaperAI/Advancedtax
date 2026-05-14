"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { industries, nav, services, site } from "@/lib/content";

const serviceGroups = ["Compliance", "Advisory", "Specialist"] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<"services" | "industries" | null>(null);

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [pathname]);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="nav-shell">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="AdvancedTax home">
            <Image
              src={site.logoDark}
              alt="Advanced Accounting Taxation and Business Services"
              width={214}
              height={146}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const isMega =
                item.label === "Services" || item.label === "Industries";

              return (
                <div
                  key={item.href}
                  className="nav-item-wrap"
                  onMouseEnter={() =>
                    setMega(
                      item.label === "Services"
                        ? "services"
                        : item.label === "Industries"
                          ? "industries"
                          : null
                    )
                  }
                  onMouseLeave={() => setMega(null)}
                >
                  <Link className={active ? "nav-link active" : "nav-link"} href={item.href}>
                    {item.label}
                  </Link>
                  {isMega && (
                    <AnimatePresence>
                      {mega === item.label.toLowerCase() && (
                        <motion.div
                          className="mega-menu"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.22 }}
                        >
                          {item.label === "Services" ? (
                            <div className="mega-services">
                              {serviceGroups.map((group) => (
                                <div key={group}>
                                  <p>{group}</p>
                                  {services
                                    .filter((service) => service.group === group)
                                    .map((service) => (
                                      <Link key={service.slug} href={`/services/${service.slug}`}>
                                        <strong>{service.title}</strong>
                                        <span>{service.outcome}</span>
                                      </Link>
                                    ))}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="mega-industries">
                              {industries.map((industry) => (
                                <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                                  {industry.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a className="icon-phone" href={site.phoneHref} aria-label={`Call AdvancedTax on ${site.phoneDisplay}`}>
              <Phone size={18} />
              <span className="icon-phone-number">{site.phoneDisplay}</span>
            </a>
            <Link className="button button-gold nav-cta" href={site.bookingHref}>
              Book consultation
            </Link>
            <button
              className="menu-button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {!open && (
        <button
          className="floating-menu-button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
              <Link href="/" className="mobile-brand">
                <Image
                  src={site.logoDark}
                  alt="Advanced Accounting Taxation and Business Services"
                  width={180}
                  height={123}
                />
              </Link>
              <nav aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="drawer-contact">
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
                <a href={site.mobileHref}>{site.mobileDisplay}</a>
                <Link className="button button-gold" href="/contact">
                  Book consultation
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
