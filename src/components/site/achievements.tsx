"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Leaf,
  Users,
  Globe2,
  Banknote,
  Recycle,
  Sparkles,
  ArrowUpRight,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import {
  Reveal,
  SectionHeading,
  StaggerGroup,
  staggerItem,
  Counter,
} from "./primitives";
import { TiltCard } from "./tilt-card";

/* ------------------------------------------------------------------ */
/* Achievement data — sourced from davaam.life/achievement             */
/* ------------------------------------------------------------------ */

type Achievement = {
  title: string;
  issuer: string;
  year: string;
  category: "Verification" | "Grant" | "Award" | "Membership" | "Cohort";
  blurb: string;
  image: string;
  href?: string;
  featured?: boolean;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "People & Planet First Verified",
    issuer: "People and Planet First",
    year: "2024",
    category: "Verification",
    blurb:
      "Davaam Life is a certified member of People and Planet First — a global collective accelerating the transition to an economy that puts people and the planet first. The verification recognises companies solving social and environmental problems at scale.",
    image: "/achievements/people-planet.jpg",
    href: "https://peopleandplanetfirst.org",
    featured: true,
  },
  {
    title: "Innovation Grantee — PLEASE Project",
    issuer: "SACEP · UNOPS · The World Bank",
    year: "2024",
    category: "Grant",
    blurb:
      "Davaam Life was judged the winner in the final round of the Plastic Free Rivers and Seas in South Asia (PLEASE) project — implemented by SACEP with support from UNOPS and The World Bank — securing grant and concessional funding for its smart automated dispensing machines.",
    image: "/achievements/karandaaz.jpg",
    href: "https://www.sacep.org",
    featured: true,
  },
  {
    title: "SDG Innovative Financing Challenge Cup",
    issuer: "JS Bank · UNDP Pakistan",
    year: "2024",
    category: "Award",
    blurb:
      "Winner of the SDG Innovative Financing Challenge Cup 2024, organised by JS Bank and UNDP Pakistan. Davaam was awarded grant and concessional funding for its innovative smart automated dispensing machines that cut single-use plastic at source.",
    image: "/achievements/karandaaz-2.jpg",
    href: "https://www.pk.undp.org",
    featured: true,
  },
  {
    title: "Prevent Waste Alliance Member",
    issuer: "PREVENT Waste Alliance",
    year: "2024",
    category: "Membership",
    blurb:
      "Davaam Life officially joined the PREVENT Waste Alliance — gaining access to the PREVENT HUB, a members-only platform for constructive exchange, easy access to information, and regular updates on circular economy best practice.",
    image: "/achievements/waste-alliance.jpg",
    href: "https://prevent-waste.net",
  },
  {
    title: "Climate Finance Accelerator (CFA)",
    issuer: "CFA Pakistan",
    year: "2024",
    category: "Cohort",
    blurb:
      "Davaam Life was selected for the cohort of the prestigious Climate Finance Accelerator (CFA) in Pakistan — a testimony that Davaam is one of the leading companies in Pakistan focusing on people, planet, and profitability simultaneously.",
    image: "/achievements/climate-finance.jpg",
    href: "https://climatefinanceaccelerator.org",
  },
  {
    title: "Karandaaz Green Innovation Challenge",
    issuer: "Karandaaz Pakistan",
    year: "2023",
    category: "Grant",
    blurb:
      "Davaam Life was amongst 6 winners out of over 135 proposals from all over Pakistan — and ranked in the top 3 in the waste management category of the Karandaaz Green Innovation Challenge Fund.",
    image: "/achievements/karandaaz-3.jpg",
    href: "https://karandaaz.com.pk",
  },
  {
    title: "Shell Tameer Award — Circular Economy",
    issuer: "Shell Pakistan",
    year: "2023",
    category: "Award",
    blurb:
      "After being selected as a finalist from over 250 applicants from across Pakistan, Davaam was conferred the Shell Tameer Award in the Circular Economy category at the 75th year celebrations of Shell Pakistan — recognised as an innovative model using technology to cut down single-use plastic.",
    image: "/achievements/shell-tameer.jpg",
    href: "https://www.shell.pk",
  },
  {
    title: "Climate Launchpad — Pakistan & Asia Pacific Winner",
    issuer: "EIT Climate-KIC",
    year: "2022",
    category: "Award",
    blurb:
      "Davaam was the winner of the Pakistan round and the Asia Pacific Region winner in the prestigious global green business idea competition. Climate Launchpad is part of the entrepreneurship offerings of EIT Climate-KIC.",
    image: "/achievements/climate-launchpad.jpg",
    href: "https://climatelaunchpad.org",
  },
];

const CATEGORY_META: Record<
  Achievement["category"],
  { icon: React.ElementType; tint: string; chip: string }
> = {
  Verification: {
    icon: BadgeCheck,
    tint: "from-brand/15 to-brand/5",
    chip: "bg-brand/10 text-brand border-brand/30",
  },
  Grant: {
    icon: Banknote,
    tint: "from-amber-500/15 to-amber-500/5",
    chip: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  },
  Award: {
    icon: Trophy,
    tint: "from-violet-500/15 to-violet-500/5",
    chip: "bg-violet-500/10 text-violet-600 border-violet-500/30",
  },
  Membership: {
    icon: Users,
    tint: "from-sky-500/15 to-sky-500/5",
    chip: "bg-sky-500/10 text-sky-600 border-sky-500/30",
  },
  Cohort: {
    icon: Sparkles,
    tint: "from-emerald-500/15 to-emerald-500/5",
    chip: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  },
};

const STATS = [
  { icon: Trophy, value: 8, suffix: "+", label: "Awards & Recognitions" },
  { icon: Globe2, value: 3, suffix: "", label: "Global Verifications" },
  { icon: Banknote, value: 4, suffix: "", label: "Grants Won" },
  { icon: Calendar, value: 2022, suffix: "", label: "Winning Since" },
];

export function Achievements() {
  const featured = ACHIEVEMENTS.filter((a) => a.featured);
  const rest = ACHIEVEMENTS.filter((a) => !a.featured);

  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand/8 blur-[140px]" />
        <div className="absolute right-0 bottom-1/3 h-[320px] w-[320px] rounded-full bg-sky-soft/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Recognised for engineering sustainability,
              <br className="hidden md:block" /> backed by global institutions
            </>
          }
          subtitle="From UNOPS and the World Bank to JS Bank, UNDP, Karandaaz, Shell, and EIT Climate-KIC — Davaam Life's work has been verified, funded, and awarded by organisations that set the global standard for sustainability and innovation."
        />

        {/* Stats strip */}
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
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

        {/* Featured achievements (full-bleed alternating rows) */}
        <div className="mt-16 space-y-6 sm:space-y-8">
          {featured.map((a, i) => (
            <FeaturedAchievement key={a.title} a={a} flip={i % 2 === 1} />
          ))}
        </div>

        {/* Remaining achievements as a 2-col grid of tilt cards */}
        <Reveal className="mt-14" delay={0.05}>
          <h3 className="text-center font-display text-2xl font-bold sm:text-3xl">
            More recognition & memberships
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            A broader look at the programmes, cohorts, and platforms that have
            recognised Davaam&apos;s work across Pakistan and beyond.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
          {rest.map((a) => (
            <motion.div key={a.title} variants={staggerItem} style={{ perspective: 1000 }}>
              <TiltCard intensity={7} className="h-full rounded-3xl">
                <CompactAchievement a={a} />
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Closing CTA */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-brand/30 bg-gradient-to-r from-brand-soft/60 to-background p-6 shadow-card-soft sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <h4 className="font-display text-lg font-bold sm:text-xl">
                Want to partner with an award-winning sustainability team?
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                We collaborate with NGOs, governments, and corporates on
                refill-first infrastructure across Pakistan.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow transition-colors hover:bg-brand-muted"
            >
              Partner With Us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FeaturedAchievement — large alternating layout with image           */
/* ------------------------------------------------------------------ */
function FeaturedAchievement({ a, flip }: { a: Achievement; flip: boolean }) {
  const meta = CATEGORY_META[a.category];
  const Icon = meta.icon;

  return (
    <Reveal>
      <article
        className={`group grid items-center gap-6 overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft transition-all hover:border-brand/40 hover:shadow-glow sm:gap-8 sm:p-6 lg:grid-cols-2 lg:p-8 ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={a.image}
            alt={`${a.title} — ${a.issuer}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          {/* Floating year badge */}
          <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-charcoal/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
            {a.year}
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${meta.chip}`}
            >
              <Icon className="h-3.5 w-3.5" />
              {a.category}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {a.issuer}
            </span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {a.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {a.blurb}
          </p>

          {a.href && (
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft/60 px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Learn More
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* CompactAchievement — tilt-card layout for the secondary grid        */
/* ------------------------------------------------------------------ */
function CompactAchievement({ a }: { a: Achievement }) {
  const meta = CATEGORY_META[a.category];
  const Icon = meta.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card-soft transition-colors hover:border-brand/40`}
    >
      {/* Image header */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={a.image}
          alt={`${a.title} — ${a.issuer}`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${meta.chip} backdrop-blur`}
          >
            <Icon className="h-3 w-3" />
            {a.category}
          </span>
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-charcoal/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
          {a.year}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {a.issuer}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug tracking-tight">
          {a.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {a.blurb}
        </p>
        {a.href && (
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-muted"
          >
            Learn More
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
