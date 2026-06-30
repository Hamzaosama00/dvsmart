"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cpu,
  Leaf,
  Wrench,
  ShieldCheck,
  Activity,
  Smartphone,
  Headphones,
} from "lucide-react";
import { SectionHeading, StaggerGroup, staggerItem, Reveal } from "./primitives";

const FEATURES = [
  {
    icon: Factory,
    title: "Manufactured in Pakistan",
    body: "Designed, sourced, and assembled locally — for Pakistani climates, supply chains, and price points.",
  },
  {
    icon: Cpu,
    title: "Smart Technology",
    body: "Every machine ships IoT-ready with remote monitoring, OTA firmware updates, and live telemetry.",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    body: "Engineered to eliminate single-use plastic, reduce energy draw, and use recyclable materials throughout.",
  },
  {
    icon: Wrench,
    title: "Custom Engineering",
    body: "Modular architecture means we can tailor form factor, branding, and product mix to your site.",
  },
  {
    icon: ShieldCheck,
    title: "Easy Maintenance",
    body: "Tool-free access panels, swappable modules, and self-diagnosing firmware make servicing effortless.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    body: "Operator dashboards show sales, stock levels, machine health, and impact metrics in real time.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Support",
    body: "Users locate stations, top up wallets, track spend, and earn rewards — all from the Davaam Life app.",
  },
  {
    icon: Headphones,
    title: "Reliable Service",
    body: "Dedicated account managers, 48-hour SLA on service calls, and proactive maintenance included.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Davaam"
          title={<>Built for impact. Engineered for reliability.</>}
          subtitle="Eight reasons institutions across Pakistan choose Davaam to deliver sustainable, smart, and serviceable infrastructure at scale."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1.5 hover:border-brand/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition-all group-hover:bg-brand/10" />
              <span className="relative inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-muted text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
              <span className="mt-4 block font-display text-3xl font-bold text-brand/15">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Highlight bar */}
        <Reveal className="mt-12" delay={0.1}>
          <div className="grid gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft sm:grid-cols-3 sm:p-8">
            {[
              { k: "Avg. install time", v: "48 hrs", sub: "from approval" },
              { k: "Service SLA", v: "48 hrs", sub: "on-site response" },
              { k: "Uptime", v: "99.4%", sub: "across fleet" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex items-center gap-4 border-border/60 sm:border-r sm:last:border-r-0 sm:pr-4"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.k}
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">
                    {s.v}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
