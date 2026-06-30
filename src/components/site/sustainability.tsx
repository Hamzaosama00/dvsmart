"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Recycle, Cloud, Droplet, Trash2, TrendingUp, TrendingDown } from "lucide-react";
import { Counter, Reveal, SectionHeading, StaggerGroup, staggerItem } from "./primitives";

const IMPACT = [
  {
    icon: Recycle,
    label: "Plastic Saved",
    value: 12000,
    suffix: " kg",
    decimals: 0,
    description: "Single-use plastic bottles and packaging eliminated from landfill and ocean.",
    color: "var(--brand)",
  },
  {
    icon: Cloud,
    label: "CO₂ Reduced",
    value: 28.4,
    suffix: " tons",
    decimals: 1,
    description: "Tonnes of CO₂ emissions avoided by replacing packaged products with refills.",
    color: "#0ea5e9",
  },
  {
    icon: Droplet,
    label: "Refills Completed",
    value: 240000,
    suffix: "+",
    decimals: 0,
    description: "Refills dispensed across our fleet — and counting every single day.",
    color: "#06b6d4",
  },
  {
    icon: Trash2,
    label: "Waste Prevented",
    value: 9.8,
    suffix: " tons",
    decimals: 1,
    description: "Waste diverted from municipal systems through refill-first infrastructure.",
    color: "#84cc16",
  },
];

const TREND = [
  { month: "Jan", value: 38 },
  { month: "Feb", value: 46 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 71 },
  { month: "May", value: 84 },
  { month: "Jun", value: 96 },
  { month: "Jul", value: 112 },
  { month: "Aug", value: 124 },
  { month: "Sep", value: 138 },
  { month: "Oct", value: 152 },
  { month: "Nov", value: 168 },
  { month: "Dec", value: 184 },
];

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-soft/50 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sustainability"
          title={<>Real impact, measured continuously</>}
          subtitle="Every refill at a Davaam machine is logged. Here's what the cumulative effect looks like — measured in plastic saved, CO₂ avoided, and waste diverted."
        />

        {/* Impact cards */}
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl"
                style={{ background: `color-mix(in oklch, ${m.color} 18%, transparent)` }}
              />
              <span
                className="inline-grid h-12 w-12 place-items-center rounded-2xl text-white shadow-glow"
                style={{ background: m.color }}
              >
                <m.icon className="h-6 w-6" />
              </span>
              <div className="mt-5 font-display text-4xl font-bold tracking-tight">
                <Counter
                  to={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                />
              </div>
              <div className="mt-1 text-sm font-semibold">{m.label}</div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Trend chart + donut */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Monthly plastic avoided
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Kilograms of single-use plastic eliminated per month, last 12 months.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +384% YoY
                </span>
              </div>

              <TrendChart data={TREND} />

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  Plastic saved (kg)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <TrendingDown className="h-3.5 w-3.5 text-brand" />
                  Equivalent to 9,200 bottles monthly
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-card-soft sm:p-8">
              <h3 className="font-display text-xl font-bold">
                Where our impact comes from
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Share of refills by product category.
              </p>

              <div className="mt-6 flex items-center justify-center">
                <DonutChart
                  segments={[
                    { label: "Water", value: 42, color: "#2E7D32" },
                    { label: "Soap", value: 24, color: "#4caf50" },
                    { label: "Shampoo", value: 18, color: "#06b6d4" },
                    { label: "Cleaning", value: 16, color: "#84cc16" },
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { l: "Water", v: 42, c: "#2E7D32" },
                  { l: "Soap", v: 24, c: "#4caf50" },
                  { l: "Shampoo", v: 18, c: "#06b6d4" },
                  { l: "Cleaning", v: 16, c: "#84cc16" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-2 text-sm">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: s.c }}
                    />
                    <span className="text-muted-foreground">{s.l}</span>
                    <span className="ml-auto font-semibold">{s.v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TrendChart — animated bar chart with scroll-reveal grow             */
/* ------------------------------------------------------------------ */
function TrendChart({ data }: { data: { month: string; value: number }[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div ref={ref} className="mt-8 h-44 w-full">
      <div className="flex h-full items-end gap-1.5 sm:gap-2.5">
        {data.map((d, i) => (
          <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex w-full flex-1 items-end">
              <motion.div
                className="w-full rounded-t-md bg-gradient-to-t from-brand to-brand-muted"
                initial={{ height: 0 }}
                animate={inView ? { height: `${(d.value / max) * 100}%` } : { height: 0 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ minHeight: "4px" }}
              />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {d.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DonutChart — SVG donut with animated stroke draw                    */
/* ------------------------------------------------------------------ */
function DonutChart({
  segments,
  size = 220,
}: {
  segments: { label: string; value: number; color: string }[];
  size?: number;
}) {
  const ref = React.useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const total = segments.reduce((s, x) => s + x.value, 0);
  const radius = 80;
  const circ = 2 * Math.PI * radius;

  // Precompute each segment's dash array and cumulative offset up-front
  // using a pure reduce (no in-render mutation) so the linter stays happy
  // and the segment offsets remain stable across renders.
  const computed = segments.reduce<
    { label: string; color: string; dashArray: string; dashOffset: number }[]
  >((acc, seg) => {
    const len = (seg.value / total) * circ;
    const cumulative = acc.reduce((s, x) => s + x.len, 0);
    acc.push({
      label: seg.label,
      color: seg.color,
      len,
      dashArray: `${len} ${circ - len}`,
      dashOffset: -cumulative,
    });
    return acc;
  }, []);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className="-rotate-90"
    >
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="22"
        className="text-muted/60"
      />
      {computed.map((seg, i) => (
        <motion.circle
          key={seg.label}
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke={seg.color}
          strokeWidth="22"
          strokeLinecap="round"
          strokeDasharray={seg.dashArray}
          initial={{ strokeDashoffset: circ }}
          animate={inView ? { strokeDashoffset: seg.dashOffset } : { strokeDashoffset: circ }}
          transition={{
            duration: 1.6,
            delay: 0.2 + i * 0.18,
            // Strong custom cubic-bezier for an expressive ease-out draw
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        transform="rotate(90 100 100)"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-poppins)",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        100%
      </text>
    </svg>
  );
}
