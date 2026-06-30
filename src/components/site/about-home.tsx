"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Sparkles,
  Leaf,
  ArrowRight,
  ArrowUpRight,
  Users,
  FlaskConical,
  Factory,
  Cpu,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  StaggerGroup,
  staggerItem,
  Counter,
} from "./primitives";
import { TiltCard } from "./tilt-card";

const FOUNDERS = [
  {
    name: "Salman Tariq",
    role: "CEO & Co-founder",
    image: "/team/salman-tariq.png",
    linkedin: "#",
  },
  {
    name: "Omer Ghaznavi",
    role: "MD & Co-founder",
    image: "/team/omer-ghaznavi.png",
    linkedin: "#",
  },
];

const STATS = [
  { icon: Users, value: 15, suffix: "+", label: "Team Members" },
  { icon: Factory, value: 150, suffix: "+", label: "Machines Built" },
  { icon: FlaskConical, value: 7, suffix: "+", label: "Years of R&D" },
  { icon: Leaf, value: 8, suffix: "+", label: "Awards & Grants" },
];

const PILLARS = [
  {
    icon: Leaf,
    title: "Founded in 2017",
    body: "Two co-founders on a sustainability mission — advancing refill-first infrastructure across Pakistan.",
  },
  {
    icon: Cpu,
    title: "Technology-first",
    body: "Every machine engineered in-house — hardware, firmware, and software built for Pakistani conditions.",
  },
  {
    icon: Users,
    title: "People & Planet first",
    body: "Verified by People and Planet First — social and environmental outcomes ahead of short-term profit.",
  },
];

export function AboutHome() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand/8 blur-[140px]" />
        <div className="absolute right-0 bottom-1/3 h-[320px] w-[320px] rounded-full bg-sky-soft/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Davaam"
          title={<>Engineering sustainability, one machine at a time</>}
          subtitle="Founded in 2017, Davaam Life designs and manufactures smart refill stations, sanitary vending machines, and sustainable automation solutions across Pakistan."
        />

        {/* Pillars */}
        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand">
                <p.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Co-founders featured + link to full team */}
        <div className="mt-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  The co-founders
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                  The two people who started Davaam in 2017 — and still lead it today.
                </p>
              </div>
              <Link
                href="/our-team"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft/60 px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                Meet the full team
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2">
            {FOUNDERS.map((m) => (
              <motion.div
                key={m.name}
                variants={staggerItem}
                style={{ perspective: 1000 }}
              >
                <TiltCard intensity={6} className="h-full rounded-3xl">
                  <article className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft transition-colors hover:border-brand/40 sm:p-6">
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Portrait */}
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-brand/30 shadow-glow sm:h-32 sm:w-32">
                      <Image
                        src={m.image}
                        alt={`${m.name} — ${m.role}`}
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <Sparkles className="h-3 w-3" />
                        Co-founder
                      </span>
                      <h4 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight sm:text-xl">
                        {m.name}
                      </h4>
                      <p className="mt-0.5 text-sm font-medium text-brand">
                        {m.role}
                      </p>
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          aria-label={`${m.name} on LinkedIn`}
                          className="mt-3 inline-grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Stats grid */}
        <div className="mt-14">
          <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 text-center shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40"
              >
                <s.icon className="mx-auto h-5 w-5 text-brand" />
                <div className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Dual CTA — Read our story / Meet the team */}
        <Reveal className="mt-12" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/our-story"
              className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-brand-soft/60 to-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40 sm:p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition-all group-hover:bg-brand/20" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  The journey
                </span>
                <h4 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
                  Read our story
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  From 2017 mission to award-winning impact.
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground shadow-glow transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>

            <Link
              href="/our-team"
              className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-sky-soft/60 to-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40 sm:p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition-all group-hover:bg-brand/20" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  The people
                </span>
                <h4 className="mt-1.5 font-display text-xl font-bold sm:text-2xl">
                  Meet the full team
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  15+ engineers, designers, and operators.
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground shadow-glow transition-transform group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
