"use client";

import * as React from "react";
import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/#about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Team", href: "/our-team" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Achievements", href: "/#achievements" },
];

const SOLUTIONS_LINKS = [
  { label: "Smart Refill Stations", href: "#solutions" },
  { label: "Sanitary Vending", href: "#solutions" },
  { label: "RFID Payment", href: "#solutions" },
  { label: "Mobile App", href: "#mobile-app" },
  { label: "Custom Manufacturing", href: "#solutions" },
  { label: "IoT Machines", href: "#solutions" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Accessibility", href: "#" },
];

export function Footer() {
  const [email, setEmail] = React.useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed! Welcome to the Davaam newsletter.");
    setEmail("");
  };

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/60 bg-card">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-soft/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Newsletter band */}
        <div className="grid items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-brand-soft/60 to-background p-6 sm:p-8 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Join the sustainability newsletter
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monthly insights on sustainable tech, refill infrastructure, and
              Davaam&apos;s deployments across Pakistan — no spam.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex w-full max-w-md gap-2 md:ml-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="rounded-full"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="shrink-0 rounded-full bg-brand px-5 text-brand-foreground hover:bg-brand-muted"
            >
              <Send className="mr-1.5 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-muted text-white shadow-glow">
                <Leaf className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">
                  Davaam<span className="text-brand">Life</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Sustainable Tech
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Davaam Life engineers smart refill stations, sanitary vending
              machines, and sustainable automation solutions across Pakistan —
              replacing single-use plastic with refill-first infrastructure.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:hello@davaam.life"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                hello@davaam.life
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                +92 300 1234567
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                Lahore, Pakistan
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider">
              Legal &amp; Help
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-5 rounded-full border-brand/30 text-brand hover:bg-brand-soft"
            >
              <Link href="#contact">
                Book a Demo
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Davaam Life. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <Leaf className="h-3.5 w-3.5 text-brand" />
            for a better Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
