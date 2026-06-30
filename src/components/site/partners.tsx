"use client";

import * as React from "react";

const PARTNERS = [
  "LUMS",
  "PITB",
  "JazzCash",
  "WWF Pakistan",
  "Clean & Green",
  "Ministry of Climate",
  "Nestlé Pakistan",
  "Engro Foundation",
  "Karachi Municipal",
  "UNICEF Pakistan",
];

export function Partners() {
  return (
    <section id="partners" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading institutions and partners across Pakistan
        </p>

        <div className="marquee-paused relative mt-8 overflow-hidden mask-fade-y">
          {/* fade left */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          {/* fade right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee gap-4">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={i}
                className="flex h-16 items-center gap-2 rounded-2xl border border-border/60 bg-card px-6 shadow-card-soft transition-colors hover:border-brand/40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2 2 7l10 5 10-5-10-5zm0 7.236L6.764 6.5 12 4.764 17.236 6.5 12 9.236zM2 12l10 5 10-5M2 17l10 5 10-5" />
                  </svg>
                </span>
                <span className="font-display text-sm font-bold tracking-tight text-foreground">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
