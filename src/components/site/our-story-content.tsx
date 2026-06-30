"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Cpu,
  Recycle,
  Heart,
  Users,
  FlaskConical,
  Factory,
  Target,
  Eye,
  Gem,
} from "lucide-react";
import { Reveal, SectionHeading, StaggerGroup, staggerItem, Counter } from "./primitives";

const TIMELINE = [
  {
    year: "2017",
    title: "Founded with a sustainability mission",
    body: "The co-founders of Davaam started with a mission to advance sustainability in Pakistan — introducing multiple technologies to reduce emissions and promote sustainable practices.",
  },
  {
    year: "2018-2020",
    title: "Years of R&D",
    body: "After years of research and development, the first refill station was developed to inculcate responsible consumer behaviour and an efficient supply chain — reducing the burden of packaging, financial costs, and environmental impact.",
  },
  {
    year: "2021-2022",
    title: "Solving critical social problems",
    body: "Continued focus on R&D and technology development enabled Davaam to venture into solving critical problems in society — including gender & inclusivity, and industrial efficiency.",
  },
  {
    year: "2023+",
    title: "Built for consumers, scaled for impact",
    body: "Today our technologies are built keeping our consumers at heart and creating sustainable impact — deployed across Pakistan and recognised by UNOPS, UNDP, World Bank, Shell, and more.",
  },
];

const VALUES = [
  {
    icon: Recycle,
    title: "Reduce, Reuse, Refill",
    body: "We are a dedicated team of environmentalists and engineers changing the way we supply and consume products — by encouraging everyone to Reduce, Reuse & Refill.",
  },
  {
    icon: Cpu,
    title: "Technology-first",
    body: "Every product we ship is engineered in-house — combining hardware, firmware, and software into a single, serviceable platform built for Pakistani conditions.",
  },
  {
    icon: Heart,
    title: "Consumers at heart",
    body: "Our technologies are built keeping our consumers at heart. If a refill doesn't feel effortless, we go back to the drawing board.",
  },
  {
    icon: FlaskConical,
    title: "R&D obsession",
    body: "We invest heavily in research and development — that's how we've expanded from refill stations into sanitary vending, RFID payments, and industrial efficiency.",
  },
  {
    icon: Factory,
    title: "Made in Pakistan",
    body: "From sheet metal to firmware, our machines are designed and assembled locally. We engineer for Pakistani climates, supply chains, and price points.",
  },
  {
    icon: Users,
    title: "People & Planet first",
    body: "Verified by People and Planet First — we put social and environmental outcomes ahead of short-term profit, every single time.",
  },
];

const MISSION_VISION = [
  {
    icon: Target,
    label: "Our Mission",
    body: "To advance sustainability in Pakistan by building refill-first infrastructure that reduces the burden of packaging, cuts financial costs, and lowers environmental impact — without asking consumers to compromise.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    body: "A Pakistan where sustainable consumption is the default — where every school, hospital, office, and public space offers smart, dignified, and affordable refill infrastructure that anyone can use.",
  },
  {
    icon: Gem,
    label: "Our Promise",
    body: "Engineering excellence, transparent impact measurement, and reliable service — every machine we ship is a long-term commitment to the institution that hosts it and the people who rely on it.",
  },
];

const STATS = [
  { icon: Users, value: 15, suffix: "+", label: "Team Members" },
  { icon: Factory, value: 150, suffix: "+", label: "Machines Built" },
  { icon: FlaskConical, value: 7, suffix: "+", label: "Years of R&D" },
  { icon: Leaf, value: 8, suffix: "+", label: "Awards & Grants" },
];

export function OurStoryContent() {
  return (
    <div className="pb-20 sm:pb-28">
      {/* Story narrative card */}
      <Reveal delay={0.05}>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-card-soft sm:p-10 md:p-12">
          <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <Leaf className="h-3.5 w-3.5" />
                Est. 2017
              </span>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                The co-founders of Davaam started in{" "}
                <span className="font-semibold text-brand">2017</span> with a
                mission to advance sustainability in Pakistan — introducing
                multiple technologies along the way to reduce emissions and
                promote sustainable practices.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                After years of R&amp;D, the first refill station was developed
                to inculcate responsible consumer behaviour and an efficient
                supply chain — to reduce the burden of packaging, to reduce
                financial costs, and to reduce environmental impact. Our
                continued focus on R&amp;D and technology development enabled
                us to venture into solving critical problems in our society
                including gender &amp; inclusivity and industrial efficiency.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Our technologies are built keeping our consumers at heart and
                creating sustainable impact — every machine we ship is a
                long-term commitment to the institution that hosts it.
              </p>
            </div>

            {/* Stats column */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 text-center backdrop-blur"
                >
                  <s.icon className="mx-auto h-5 w-5 text-brand" />
                  <div className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="mt-16">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            From mission to movement — seven years in
          </h2>
        </Reveal>

        <div className="relative mt-10 ml-4 border-l-2 border-brand/20 pl-8">
          <StaggerGroup className="space-y-8">
            {TIMELINE.map((t) => (
              <motion.div key={t.year} variants={staggerItem} className="relative">
                <div className="absolute -left-[42px] top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-brand bg-background text-[10px] font-bold text-brand shadow-glow">
                  {t.year.slice(0, 4)}
                </div>
                <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand">
                      {t.year}
                    </span>
                    <h3 className="font-display text-lg font-bold sm:text-xl">
                      {t.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* Mission / Vision / Promise */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Mission · Vision · Promise"
          title={<>What drives every decision we make</>}
        />
        <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
          {MISSION_VISION.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-muted text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                <m.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{m.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>

      {/* Values grid */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Our Values"
          title={<>Six principles that shape every product we ship</>}
          subtitle="These aren't slogans on a wall — they're the lens we use to decide what to build, how to build it, and who we build it for."
        />
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1.5 hover:border-brand/40"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition-all group-hover:bg-brand/10" />
              <span className="relative inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                <v.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
