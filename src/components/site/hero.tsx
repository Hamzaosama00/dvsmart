"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Wifi, ShieldCheck, Recycle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MachineRenderPhoto } from "./machine-render-photo";

/* Staggered reveal variants — mask slide-up effect */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const maskSlideUp: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-soft/60 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left: copy with staggered mask-slide-up reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <Sparkles className="h-3.5 w-3.5" />
                Engineered in Pakistan
              </span>
            </motion.div>

            {/* Headline with mask slide-up — split into lines for the mask effect */}
            <h1 className="mt-6 overflow-hidden text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              <span className="block overflow-hidden">
                <motion.span variants={maskSlideUp} className="block">
                  Sustainable Technology
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={maskSlideUp} className="block">
                  for a{" "}
                  <span className="gradient-text">Better Pakistan</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              Davaam manufactures smart refill stations, sanitary vending machines,
              and sustainable automation solutions — engineered locally, deployed
              across cities, and built to reduce plastic waste at scale.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-brand px-7 text-base text-brand-foreground shadow-glow hover:bg-brand-muted sm:w-auto"
              >
                <Link href="#contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-foreground/15 bg-card/60 px-7 text-base backdrop-blur sm:w-auto"
              >
                <Link href="#solutions">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Solutions
                </Link>
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { icon: Recycle, label: "Plastic Saved", value: "12T+" },
                { icon: Droplets, label: "Refills Done", value: "240K" },
                { icon: Wifi, label: "IoT Machines", value: "150+" },
                { icon: ShieldCheck, label: "Uptime", value: "99.4%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/60 bg-card/50 px-3 py-3 text-center backdrop-blur sm:text-left"
                >
                  <s.icon className="mx-auto mb-1 h-4 w-4 text-brand sm:mx-0" />
                  <div className="font-display text-lg font-bold leading-none text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: official machine render with cursor-tracking + float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <MachineRenderPhoto />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
