"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Smartphone,
  Package,
  CreditCard,
  Droplet,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHeading, StaggerGroup, staggerItem } from "./primitives";

const STEPS = [
  {
    n: "01",
    icon: Wrench,
    title: "Install Machine",
    body: "Our team handles site survey, installation, and onboarding. Most deployments go live within 48 hours of approval.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Scan RFID or App",
    body: "Users tap their RFID card or scan the QR on the Davaam app to authenticate and unlock the machine in seconds.",
  },
  {
    n: "03",
    icon: Package,
    title: "Select Product",
    body: "Choose product and quantity on the touchscreen. Pricing, availability, and sustainability stats are shown up-front.",
  },
  {
    n: "04",
    icon: CreditCard,
    title: "Secure Payment",
    body: "Pay with RFID wallet, mobile wallet, or card. Transactions are encrypted and settle instantly with full receipts.",
  },
  {
    n: "05",
    icon: Droplet,
    title: "Dispense Product",
    body: "The machine dispenses the exact quantity metered to the millilitre — no waste, no spillage, no plastic bottle.",
  },
  {
    n: "06",
    icon: Leaf,
    title: "Sustainability Impact",
    body: "Every refill is logged. Users and operators see real-time CO₂ saved, plastic avoided, and money saved per refill.",
  },
];

export function HowItWorks() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // Scroll-linked progress for the neon line (desktop)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/40 to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From installation to impact in six simple steps</>}
          subtitle="A frictionless flow engineered for users and operators alike — designed so the first refill feels as effortless as the thousandth."
        />

        {/* Desktop: zig-zag timeline with scroll-linked neon progress line */}
        <div className="relative mt-16 hidden lg:block">
          {/* Track (background line) */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          {/* Scroll-linked neon glow line */}
          <motion.div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top"
            style={{
              scaleY: lineScaleY,
              background:
                "linear-gradient(to bottom, color-mix(in oklch, var(--brand) 90%, transparent), color-mix(in oklch, var(--brand) 60%, transparent))",
              boxShadow:
                "0 0 12px color-mix(in oklch, var(--brand) 80%, transparent), 0 0 24px color-mix(in oklch, var(--brand) 40%, transparent)",
            }}
          />

          <StaggerGroup className="space-y-12">
            {STEPS.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <TimelineStepDesktop
                  key={step.n}
                  step={step}
                  index={i}
                  isRight={isRight}
                />
              );
            })}
          </StaggerGroup>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="mt-14 lg:hidden">
          <div className="relative ml-4 border-l-2 border-border pl-8">
            <StaggerGroup className="space-y-8">
              {STEPS.map((step) => (
                <motion.div
                  key={step.n}
                  variants={staggerItem}
                  className="relative"
                >
                  <div className="absolute -left-[42px] top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-brand bg-background text-sm font-bold text-brand shadow-glow">
                    {step.n}
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-bold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>

        {/* Footer CTA chip */}
        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full border border-border/60 bg-card px-5 py-3 text-sm text-muted-foreground shadow-card-soft">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Average first-refill time after install:
            <span className="font-semibold text-foreground"> under 3 seconds</span>
            <ArrowRight className="ml-1 h-4 w-4 text-brand" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop timeline step — active scaling via IntersectionObserver      */
/* ------------------------------------------------------------------ */
function TimelineStepDesktop({
  step,
  index,
  isRight,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isRight: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const active = inView;

  return (
    <motion.div variants={staggerItem} className="relative grid grid-cols-2 items-center gap-12">
      <div className={`${isRight ? "col-start-2" : "col-start-1 text-right"}`}>
        <motion.div
          ref={ref}
          animate={{
            scale: active ? 1.04 : 0.96,
            opacity: active ? 1 : 0.55,
            filter: active ? "blur(0px)" : "blur(0.4px)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block max-w-md rounded-3xl border border-border/60 bg-card p-6 text-left shadow-card-soft transition-colors"
          style={{
            boxShadow: active
              ? "0 20px 60px -20px color-mix(in oklch, var(--brand) 40%, transparent), 0 0 0 1px color-mix(in oklch, var(--brand) 30%, transparent)"
              : undefined,
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className={`grid h-11 w-11 place-items-center rounded-2xl transition-colors ${
                active ? "bg-brand text-white shadow-glow" : "bg-brand/10 text-brand"
              }`}
            >
              <step.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Step {step.n}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.body}
          </p>
        </motion.div>
      </div>

      {/* Node on center line — glows when active */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: active ? 1.25 : 1,
            boxShadow: active
              ? "0 0 24px color-mix(in oklch, var(--brand) 80%, transparent), 0 0 12px color-mix(in oklch, var(--brand) 100%, transparent)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-brand bg-background text-sm font-bold text-brand"
        >
          {index + 1}
        </motion.div>
        {active && (
          <motion.span
            layoutId={`step-glow-${index}`}
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand/30 blur-xl"
          />
        )}
      </div>
    </motion.div>
  );
}
