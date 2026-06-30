"use client";

import * as React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * PageShell — shared layout wrapper for sub-pages.
 * Includes the sticky Navbar, a page hero header, the page content, and the Footer.
 */
export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Page hero header */}
        <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 bg-radial-fade" />
            <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-brand/40 hover:text-brand"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {eyebrow}
              </span>
              <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Page content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
