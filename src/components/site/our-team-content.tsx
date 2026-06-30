"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Sparkles, Users } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem, Counter } from "./primitives";
import { TiltCard } from "./tilt-card";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  founder?: boolean;
};

const TEAM: TeamMember[] = [
  { name: "Salman Tariq", role: "CEO & Co-founder", image: "/team/salman-tariq.png", linkedin: "#", founder: true },
  { name: "Omer Ghaznavi", role: "MD & Co-founder", image: "/team/omer-ghaznavi.png", linkedin: "#", founder: true },
  { name: "Muhammad Abdullah", role: "Head of Engineering", image: "/team/muhammad-abdullah.jpeg", linkedin: "#" },
  { name: "Bilal Alvi", role: "Head of Distribution", image: "/team/bilal-alvi.png", linkedin: "#" },
  { name: "Fizzah Ahsan Jawad", role: "Program Manager", image: "/team/fizzah-ahsan-jawad.jpeg", linkedin: "#" },
  { name: "Syed Muhammad Kabir", role: "Business Development Executive", image: "/team/syed-muhammad-kabir.png", linkedin: "#" },
  { name: "Fasih Raza", role: "Admin Procurement Manager", image: "/team/fasih-raza.png", linkedin: "#" },
  { name: "Ifrah Aslam", role: "Stock Management Assistant", image: "/team/ifrah-aslam.jpg", linkedin: "#" },
  { name: "Ibrahim Bashir", role: "Software Lead", image: "/team/ibrahim-bashir.png", linkedin: "#" },
  { name: "Hassan Haroon", role: "Senior Software Engineer", image: "/team/hassan-haroon.png", linkedin: "#" },
  { name: "Adnan Ali", role: "Software Engineer", image: "/team/adnan-ali.png", linkedin: "#" },
  { name: "Muhammad Affan", role: "R&D Engineer", image: "/team/muhammad-affan.png", linkedin: "#" },
  { name: "Rao Umer", role: "Project Engineer", image: "/team/rao-umer.png", linkedin: "#" },
  { name: "Usama Bajwa", role: "Project Engineer", image: "/team/usama-bajwa.png", linkedin: "#" },
  { name: "Muhammad Abubakar", role: "Project Engineer", image: "/team/muhammad-abubakar.jpeg", linkedin: "#" },
];

const STATS = [
  { icon: Users, value: 15, suffix: "+", label: "Team Members" },
  { icon: Sparkles, value: 2, suffix: "", label: "Co-founders" },
  { icon: Users, value: 4, suffix: "", label: "Departments" },
  { icon: Sparkles, value: 100, suffix: "%", label: "In-house" },
];

export function OurTeamContent() {
  const founders = TEAM.filter((m) => m.founder);
  const rest = TEAM.filter((m) => !m.founder);

  return (
    <div className="pb-20 sm:pb-28">
      {/* Stats strip */}
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

      {/* Founders (featured) */}
      <Reveal className="mt-14" delay={0.05}>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Co-founders</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          The two people who started Davaam in 2017 — and still lead it today.
        </p>
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2">
        {founders.map((m) => (
          <motion.div
            key={m.name}
            variants={staggerItem}
            style={{ perspective: 1000 }}
          >
            <TiltCard intensity={6} className="h-full rounded-3xl">
              <FounderCard member={m} />
            </TiltCard>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Rest of the team */}
      <Reveal className="mt-16" delay={0.05}>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          The wider team
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Engineers, designers, and operators building, shipping, and servicing
          Davaam&apos;s machines every day.
        </p>
      </Reveal>

      <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {rest.map((m) => (
          <motion.div
            key={m.name}
            variants={staggerItem}
            style={{ perspective: 1000 }}
          >
            <TiltCard intensity={8} className="h-full rounded-2xl">
              <TeamCard member={m} />
            </TiltCard>
          </motion.div>
        ))}
      </StaggerGroup>

      {/* Join the team CTA */}
      <Reveal className="mt-16" delay={0.1}>
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-brand/30 bg-gradient-to-r from-brand-soft/60 to-background p-6 shadow-card-soft sm:flex-row sm:p-8">
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg font-bold sm:text-xl">
              Want to join the team?
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;re always looking for engineers and operators who care
              about sustainability and Pakistan.
            </p>
          </div>
          <a
            href="mailto:info@davaam.pk"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-glow transition-colors hover:bg-brand-muted"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FounderCard — large featured card for the two co-founders           */
/* ------------------------------------------------------------------ */
function FounderCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full items-center gap-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-card-soft transition-colors hover:border-brand/40 sm:p-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-soft/60 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Portrait */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-brand/30 shadow-glow sm:h-32 sm:w-32">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
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
        <h3 className="mt-2 font-display text-lg font-bold leading-tight tracking-tight sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-brand">{member.role}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            aria-label={`${member.name} on LinkedIn`}
            className="mt-3 inline-grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* TeamCard — compact card for the rest of the team                    */
/* ------------------------------------------------------------------ */
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border/60 bg-card p-4 text-center shadow-card-soft transition-colors hover:border-brand/40 sm:p-5">
      {/* Portrait */}
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-brand/20 shadow-glow sm:h-24 sm:w-24">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.role}`}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 font-display text-sm font-bold leading-tight tracking-tight">
        {member.name}
      </h3>
      <p className="mt-0.5 text-[11px] font-medium text-brand sm:text-xs">
        {member.role}
      </p>

      {member.linkedin && (
        <a
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          className="mt-2.5 inline-grid h-7 w-7 place-items-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
      )}
    </article>
  );
}
