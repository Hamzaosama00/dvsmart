"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Hospital,
  ShoppingBag,
  Factory,
  Landmark,
  Trees,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading, StaggerGroup, staggerItem } from "./primitives";
import { TiltCard } from "./tilt-card";

const INDUSTRIES = [
  {
    icon: GraduationCap,
    title: "Schools",
    body: "Hygienic water and soap refills for students; sanitary vending for staff.",
    accent: "from-emerald-500/15 to-emerald-500/5",
  },
  {
    icon: Building2,
    title: "Universities",
    body: "High-capacity stations across campuses with app-based student wallets.",
    accent: "from-brand/15 to-brand/5",
  },
  {
    icon: Briefcase,
    title: "Offices",
    body: "Sustainable washroom and pantry refills for corporate ESG programs.",
    accent: "from-sky-500/15 to-sky-500/5",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    body: "Hygienic soap and sanitizer refills with strict sanitation standards.",
    accent: "from-rose-500/15 to-rose-500/5",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Malls",
    body: "Public refill stations that drive footfall and demonstrate sustainability.",
    accent: "from-amber-500/15 to-amber-500/5",
  },
  {
    icon: Factory,
    title: "Factories",
    body: "Industrial-grade refills for cleaning, sanitation, and worker welfare.",
    accent: "from-violet-500/15 to-violet-500/5",
  },
  {
    icon: Landmark,
    title: "Government",
    body: "Public-sector deployments supporting national sustainability targets.",
    accent: "from-teal-500/15 to-teal-500/5",
  },
  {
    icon: Trees,
    title: "Public Spaces",
    body: "High-traffic refill points in parks, transit hubs, and community centers.",
    accent: "from-lime-500/15 to-lime-500/5",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title={<>Trusted across every sector</>}
          subtitle="From schools to factories, Davaam adapts to the rhythm of any space — bringing sustainable infrastructure wherever people gather."
        />

        <StaggerGroup className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.title}
              variants={staggerItem}
              style={{ perspective: 1000 }}
            >
              <TiltCard intensity={10} className="h-full rounded-3xl">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft transition-colors hover:border-brand/40 sm:p-6">
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${ind.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <ind.icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{ind.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {ind.body}
                  </p>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
