"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Team", href: "/our-team" },
  { label: "Solutions", href: "/#solutions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Sustainability", href: "/#sustainability" },
  { label: "Achievements", href: "/#achievements" },
  { label: "App", href: "/#mobile-app" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = (resolvedTheme ?? theme) === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-brand/20 py-3 shadow-[0_8px_40px_-12px_rgba(46,125,50,0.25),inset_0_-1px_0_0_rgba(46,125,50,0.15)]"
          : "bg-transparent py-5"
      )}
    >
      {/* Animated border glow line that appears on scroll */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--brand) 50%, transparent) 30%, color-mix(in oklch, var(--brand) 70%, transparent) 50%, color-mix(in oklch, var(--brand) 50%, transparent) 70%, transparent 100%)",
          boxShadow: "0 0 12px color-mix(in oklch, var(--brand) 60%, transparent)",
        }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Davaam Life home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-muted text-white shadow-glow">
            <Leaf className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Davaam<span className="text-brand">Life</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Sustainable Tech
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-brand px-5 text-brand-foreground hover:bg-brand-muted sm:inline-flex"
          >
            <Link href="#contact">
              Book a Demo
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-card p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">
                  Davaam<span className="text-brand">Life</span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button
                  asChild
                  className="rounded-full bg-brand px-5 text-brand-foreground hover:bg-brand-muted"
                >
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Book a Demo
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="#solutions" onClick={() => setOpen(false)}>
                    Explore Solutions
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
