"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Reveal: fades & slides children in when scrolled into view          */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px -80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger container + item                                            */
/* ------------------------------------------------------------------ */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter: animates a number from 0 → target when scrolled in view    */
/* ------------------------------------------------------------------ */
export function Counter({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  React.useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  const [display, setDisplay] = React.useState(from.toFixed(decimals));

  React.useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
  }, [spring, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeading: consistent eyebrow + title + subtitle styling       */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={
        align === "center"
          ? `mx-auto max-w-2xl text-center ${className ?? ""}`
          : `max-w-2xl ${className ?? ""}`
      }
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
