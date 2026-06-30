"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  MapPin,
  Wallet,
  History,
  Gift,
  CreditCard,
  Bell,
  CheckCircle2,
  Download,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading, StaggerGroup, staggerItem } from "./primitives";

const APP_FEATURES = [
  { icon: MapPin, title: "Locate Stations", body: "Live map of every Davaam machine, with product availability and distance." },
  { icon: Wallet, title: "Digital Wallet", body: "Recharge credits, link family cards, and track spend in real-time." },
  { icon: CreditCard, title: "RFID Integration", body: "Pair your RFID card or wearable for sub-3-second tap-to-refill." },
  { icon: History, title: "Transaction History", body: "Every refill, payment, and reward — searchable and exportable." },
  { icon: Gift, title: "Loyalty Rewards", body: "Earn points per refill and redeem for discounts and free refills." },
  { icon: Bell, title: "Smart Notifications", body: "Low-balance alerts, restock notices, and reward milestones." },
];

export function MobileApp() {
  // Parallax scroll — back phones move slower than the front phone
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Back-left phone: small downward drift as user scrolls
  const backLeftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  // Back-right phone: opposite drift for depth
  const backRightY = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  // Front phone: subtle upward drift — feels closest
  const frontY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  // Glow also drifts slightly for atmosphere
  const glowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="mobile-app"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-sky-soft/60 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: phone mockup with layered parallax */}
          <Reveal>
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              {/* Glow (slowest parallax layer) */}
              <motion.div
                style={{ y: glowY }}
                className="absolute inset-0 -z-10 rounded-[3rem] bg-brand/15 blur-3xl"
              />

              {/* Phone 1 (back-left, slowest) */}
              <motion.div
                style={{ y: backLeftY }}
                className="absolute -left-10 top-12 hidden rotate-[-8deg] sm:block"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneMock variant="wallet" />
                </motion.div>
              </motion.div>

              {/* Phone 2 (main, foreground — fastest parallax) */}
              <motion.div
                style={{ y: frontY }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneMock variant="home" />
                </motion.div>
              </motion.div>

              {/* Phone 3 (back-right, slowest) */}
              <motion.div
                style={{ y: backRightY }}
                className="absolute -right-10 top-20 hidden rotate-[8deg] sm:block"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <PhoneMock variant="rewards" />
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right: copy + features */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mobile App"
              title={<>The Davaam Life app: refills in your pocket</>}
              subtitle="Locate stations, top up your wallet, track impact, and earn rewards — all from one beautifully simple app."
            />

            <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
              {APP_FEATURES.map((f) => (
                <motion.div
                  key={f.title}
                  variants={staggerItem}
                  className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-card-soft transition-all hover:-translate-y-1 hover:border-brand/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand transition-transform group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold">{f.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>

            {/* Download buttons */}
            <Reveal className="mt-8" delay={0.1}>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-charcoal px-5 text-white hover:bg-charcoal/90"
                >
                  <a href="#" aria-label="Get it on Google Play">
                    <Download className="mr-2 h-5 w-5" />
                    <span className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase tracking-wider opacity-80">
                        Get it on
                      </span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </span>
                  </a>
                </Button>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8 · 2,400+ reviews</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Phone mockups                                                       */
/* ------------------------------------------------------------------ */
function PhoneMock({ variant }: { variant: "home" | "wallet" | "rewards" }) {
  return (
    <div className="relative h-[420px] w-[210px] rounded-[2.5rem] border-[6px] border-charcoal/90 bg-charcoal p-1.5 shadow-2xl">
      {/* notch */}
      <div className="absolute left-1/2 top-1.5 z-20 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-charcoal" />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-brand-soft to-background">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-semibold text-foreground">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>●●●●</span>
            <span>5G</span>
            <span>▮</span>
          </div>
        </div>

        {variant === "home" && <PhoneHome />}
        {variant === "wallet" && <PhoneWallet />}
        {variant === "rewards" && <PhoneRewards />}
      </div>
    </div>
  );
}

function PhoneHome() {
  return (
    <div className="px-4 pb-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] text-muted-foreground">Welcome back,</div>
          <div className="font-display text-sm font-bold">Ayesha K.</div>
        </div>
        <div className="grid h-7 w-7 place-items-center rounded-full bg-brand/10 text-brand">
          <Bell className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand to-brand-muted p-3 text-white">
        <div className="text-[9px] uppercase tracking-wider opacity-80">
          Wallet Balance
        </div>
        <div className="font-display text-xl font-bold">Rs. 1,240</div>
        <div className="mt-2 inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-semibold">
          + Top Up
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border/60 bg-card p-2">
        <MapPin className="h-3.5 w-3.5 text-brand" />
        <div className="flex-1">
          <div className="text-[10px] font-semibold">Nearest Station</div>
          <div className="text-[8px] text-muted-foreground">LUMS · 240m away</div>
        </div>
        <div className="rounded-full bg-brand/10 px-2 py-0.5 text-[8px] font-semibold text-brand">
          Open
        </div>
      </div>

      <div className="mt-3 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        Quick Actions
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[
          { i: Wallet, l: "Wallet" },
          { i: History, l: "History" },
          { i: Gift, l: "Rewards" },
        ].map((a) => (
          <div
            key={a.l}
            className="flex flex-col items-center gap-1 rounded-xl border border-border/60 bg-card p-2"
          >
            <a.i className="h-3.5 w-3.5 text-brand" />
            <span className="text-[8px] font-semibold">{a.l}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl border border-border/60 bg-card p-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold">Your Impact</span>
          <CheckCircle2 className="h-3 w-3 text-brand" />
        </div>
        <div className="mt-1 flex items-end gap-2">
          <span className="font-display text-base font-bold text-brand">12.4 kg</span>
          <span className="text-[8px] text-muted-foreground">plastic saved</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand to-brand-muted" />
        </div>
      </div>
    </div>
  );
}

function PhoneWallet() {
  return (
    <div className="px-4 pb-4 pt-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        Wallet
      </div>
      <div className="mt-2 rounded-2xl bg-gradient-to-br from-charcoal to-charcoal/80 p-3 text-white">
        <div className="text-[8px] uppercase tracking-wider opacity-70">
          Davaam Card
        </div>
        <div className="mt-2 font-mono text-[10px] tracking-widest">
          •••• 4829
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-[8px] opacity-70">Balance</div>
            <div className="font-display text-base font-bold">Rs. 1,240</div>
          </div>
          <div className="text-[7px] opacity-70">DAVAAM</div>
        </div>
      </div>
      <div className="mt-3 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        Recent
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          { n: "Water Refill · LUMS", a: "-Rs. 20" },
          { n: "Top Up · JazzCash", a: "+Rs. 500" },
          { n: "Soap Refill · PITB", a: "-Rs. 15" },
          { n: "Reward Redeem", a: "-50 pts" },
        ].map((t) => (
          <div
            key={t.n}
            className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-2"
          >
            <span className="text-[9px] font-medium">{t.n}</span>
            <span className="text-[9px] font-bold text-brand">{t.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneRewards() {
  return (
    <div className="px-4 pb-4 pt-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        Rewards
      </div>
      <div className="mt-2 grid place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-muted p-4 text-center text-white">
        <Gift className="h-6 w-6" />
        <div className="mt-2 font-display text-2xl font-bold">1,240 pts</div>
        <div className="text-[8px] opacity-80">Silver tier · 260 pts to Gold</div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-3/4 rounded-full bg-white" />
        </div>
      </div>
      <div className="mt-3 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        Available Rewards
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          { t: "Free Water Refill", p: "100 pts" },
          { t: "20% Off Next Refill", p: "200 pts" },
          { t: "Free Soap Refill", p: "150 pts" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-2"
          >
            <div>
              <div className="text-[9px] font-semibold">{r.t}</div>
              <div className="text-[8px] text-brand">{r.p}</div>
            </div>
            <div className="rounded-full bg-brand/10 px-2 py-0.5 text-[8px] font-bold text-brand">
              Redeem
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
