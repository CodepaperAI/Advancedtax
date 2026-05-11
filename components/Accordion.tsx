"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className="accordion-item" key={item.question}>
            <button
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{item.question}</span>
              <motion.span animate={{ rotate: active ? 180 : 0 }}>
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
