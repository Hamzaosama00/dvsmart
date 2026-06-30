"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, Reveal } from "./primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  initials: string;
  rating: number;
  accent: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Davaam's refill stations have transformed how our campus handles water and sanitation. We've cut single-use plastic by 70% in just two semesters, and the app makes it effortless for students.",
    name: "Dr. Sana Mahmood",
    role: "Director of Sustainability",
    organization: "Lahore University",
    initials: "SM",
    rating: 5,
    accent: "from-brand to-brand-muted",
  },
  {
    quote:
      "The machines are reliable, the telemetry is excellent, and the support team responds within hours. We've deployed Davaam across 14 hospitals and the impact on hygiene and waste has been measurable.",
    name: "Dr. Imran Qureshi",
    role: "Chief Operations Officer",
    organization: "City Hospital Network",
    initials: "IQ",
    rating: 5,
    accent: "from-sky-500 to-cyan-500",
  },
  {
    quote:
      "We chose Davaam because they manufacture locally and stand behind their product. Twelve months in, the machines are still running like new. The RFID payment system is a game-changer for our employees.",
    name: "Ayesha Tariq",
    role: "Head of Workplace Experience",
    organization: "Pakistan Tech Park",
    initials: "AT",
    rating: 5,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "As an NGO focused on menstrual health, the sanitary vending machines have been a quiet revolution in the schools we serve. Discreet, reliable, and dignified — exactly what we needed.",
    name: "Fatima Noor",
    role: "Programmes Lead",
    organization: "HerHealth Foundation",
    initials: "FN",
    rating: 5,
    accent: "from-rose-500 to-orange-500",
  },
  {
    quote:
      "Davaam's operator dashboard gives us visibility we never had. We track every refill, every restock, and every impact metric in real time across 22 retail locations. Best vendor decision we made this year.",
    name: "Bilal Ahmed",
    role: "Retail Operations Director",
    organization: "Metro Shopping Group",
    initials: "BA",
    rating: 5,
    accent: "from-amber-500 to-yellow-500",
  },
];

export function Testimonials() {
  const [active, setActive] = React.useState(0);
  const [auto, setAuto] = React.useState(true);

  React.useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, [auto]);

  const go = (dir: 1 | -1) => {
    setAuto(false);
    setActive((a) => (a + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-brand-soft/30 to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What our partners say</>}
          subtitle="Institutions across Pakistan trust Davaam to deliver sustainable, reliable, and smart infrastructure. Here's what that looks like in their words."
        />

        <div className="relative mt-14">
          <div className="relative mx-auto max-w-4xl">
            <Quote className="mx-auto h-10 w-10 text-brand/30" />

            <div className="relative mt-6 min-h-[260px] sm:min-h-[230px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="mx-auto mt-5 max-w-3xl text-balance text-lg font-medium leading-relaxed text-foreground sm:text-xl md:text-2xl">
                    &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                  </p>

                  <div className="mt-7 flex items-center justify-center gap-3">
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br text-white font-bold",
                        TESTIMONIALS[active].accent
                      )}
                    >
                      {TESTIMONIALS[active].initials}
                    </span>
                    <div className="text-left">
                      <div className="font-display text-sm font-bold">
                        {TESTIMONIALS[active].name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {TESTIMONIALS[active].role} · {TESTIMONIALS[active].organization}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => {
                      setAuto(false);
                      setActive(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === active ? "w-7 bg-brand" : "w-1.5 bg-border hover:bg-brand/40"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => go(1)}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Logo strip */}
          <Reveal className="mt-14" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:gap-6 sm:text-sm">
              {["Lahore University", "City Hospital", "Tech Park", "HerHealth", "Metro Group"].map(
                (n, i) => (
                  <React.Fragment key={n}>
                    <span className="opacity-60 transition-opacity hover:opacity-100">{n}</span>
                    {i < 4 && <span className="hidden text-border sm:inline">·</span>}
                  </React.Fragment>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
