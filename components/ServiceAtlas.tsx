"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { services, type Service } from "@/lib/content";

const groups = ["Compliance", "Advisory", "Specialist"] as const;

export function ServiceAtlas() {
  const [active, setActive] = useState<Service>(services[0]);
  const grouped = useMemo(
    () =>
      groups.map((group) => ({
        group,
        services: services.filter((service) => service.group === group)
      })),
    []
  );

  return (
    <div className="service-atlas">
      <div className="service-atlas-copy">
        <p className="eyebrow">Services</p>
        <h2>Accounting, tax and advisory support under one roof.</h2>
        <p>
          Start with what is due now: tax, BAS, payroll, bookkeeping, business
          advice or SMSF support. Each service explains the practical outcome
          and the next step before you book a consultation.
        </p>
      </div>
      <div className="service-atlas-media">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src={active.image}
            alt={active.alt}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </motion.div>
        <span>{active.eyebrow}</span>
      </div>
      <div className="service-atlas-list">
        {grouped.map((group) => (
          <div key={group.group} className="atlas-group">
            <h3>{group.group}</h3>
            {group.services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className={active.slug === service.slug ? "active" : ""}
                onMouseEnter={() => setActive(service)}
                onFocus={() => setActive(service)}
              >
                <span>
                  <strong>{service.title}</strong>
                  <small>{service.outcome}</small>
                </span>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
