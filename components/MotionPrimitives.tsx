"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  id
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduced ? undefined : { clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  suffix = ""
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease,
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, motionValue, reduced, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function ScrollProgressBar({ className }: { className?: string }) {
  return (
    <motion.div className={className}>
      <motion.span
        initial={{ scaleX: 0.08 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.2, ease }}
      />
    </motion.div>
  );
}

export { motion };
