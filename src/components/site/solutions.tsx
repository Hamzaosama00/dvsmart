"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, CreditCard, Smartphone, Wrench, Cpu, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading, StaggerGroup, staggerItem } from "./primitives";
import { TiltCard } from "./tilt-card";

const SOLUTIONS = [
  {
    icon: Droplets,
    title: "Smart Refill Stations",
    description:
      "Modular refill units for water, liquid soap, shampoo, and cleaning products. Tap, refill, pay — single-use plastic eliminated in seconds.",
    bullets: ["Multi-product", "Metered dispensing", "Leak-proof design"],
    gradient: "from-brand/15 to-brand/5",
    accent: "bg-brand",
  },
  {
    icon: Package,
    title: "Sanitary Napkin Vending",
    description:
      "Discreet, app-enabled vending machines for sanitary products in washrooms. Reliable, hygienic, and accessible 24/7 across institutions.",
    bullets: ["Hygienic dispensing", "Low-stock alerts", "App restock"],
    gradient: "from-rose-500/10 to-rose-500/5",
    accent: "bg-rose-500",
  },
  {
    icon: CreditCard,
    title: "RFID Payment System",
    description:
      "Tap-to-pay RFID cards and wearables let users refill in under three seconds. Recharge online, track spend, and link family cards.",
    bullets: ["Sub-3s checkout", "Family linking", "Online top-up"],
    gradient: "from-amber-500/10 to-amber-500/5",
    accent: "bg-amber-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description:
      "Locate stations, recharge credits, view transaction history, and earn loyalty rewards — all from the Davaam Life mobile app.",
    bullets: ["Live station map", "Digital wallet", "Loyalty rewards"],
    gradient: "from-sky-500/10 to-sky-500/5",
    accent: "bg-sky-500",
  },
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description:
      "Need a unique form factor, branding, or product mix? Our in-house engineering team designs and builds machines tailored to your site.",
    bullets: ["Custom branding", "Site-specific build", "Low MOQ"],
    gradient: "from-violet-500/10 to-violet-500/5",
    accent: "bg-violet-500",
  },
  {
    icon: Cpu,
    title: "IoT Enabled Machines",
    description:
      "Every machine ships connected. Real-time telemetry, remote diagnostics, predictive maintenance, and dashboards for every operator.",
    bullets: ["Live telemetry", "Predictive maintenance", "Operator dashboard"],
    gradient: "from-emerald-500/10 to-emerald-500/5",
    accent: "bg-emerald-500",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title={<>A complete ecosystem for sustainable consumption</>}
          subtitle="From the hardware on the floor to the app in your pocket, Davaam builds every layer of the refill experience — so institutions can deploy with confidence."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              style={{ perspective: 1000 }}
            >
              <TiltCard
                intensity={9}
                className="h-full rounded-3xl"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft transition-colors hover:border-brand/40">
                  {/* gradient wash */}
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="flex items-start justify-between">
                    <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <span className={`h-2.5 w-2.5 rounded-full ${s.accent} opacity-70`} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto rounded-full px-0 text-brand hover:bg-transparent hover:px-2"
                    >
                      Learn More
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10" delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <h4 className="font-display text-lg font-bold sm:text-xl">
                Not sure which solution fits your site?
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your space and footfall — we&apos;ll recommend a deployment plan.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-brand px-7 text-brand-foreground hover:bg-brand-muted sm:w-auto"
            >
              <a href="#contact">
                Talk to an Engineer
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
