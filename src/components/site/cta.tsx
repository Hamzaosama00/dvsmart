"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./primitives";
import { MagneticButton } from "./magnetic-button";
import { toast } from "sonner";

export function CTA() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-br from-charcoal via-charcoal to-brand/40 p-8 shadow-glow sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-soft/20 blur-[120px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              {/* Left copy */}
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                  Get Started
                </span>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Ready to make your workplace sustainable?
                </h2>
                <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
                  Tell us about your site, your footfall, and your sustainability
                  goals. We&apos;ll design a deployment plan that fits — and have
                  you live within 48 hours of approval.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Mail, label: "Email", value: "hello@davaam.life" },
                    { icon: Phone, label: "Phone", value: "+92 300 1234567" },
                    { icon: MapPin, label: "Office", value: "Lahore, Pakistan" },
                    { icon: CheckCircle2, label: "Response", value: "Within 24 hours" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-white/60">
                          {c.label}
                        </div>
                        <div className="text-sm font-semibold">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    as="a"
                    href="mailto:hello@davaam.life"
                    strength={0.4}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-medium text-brand-foreground shadow-glow transition-colors hover:bg-brand-muted"
                  >
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href="tel:+923001234567"
                    strength={0.4}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
                  >
                    Contact Us
                  </MagneticButton>
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-3xl border border-white/15 bg-card/90 p-6 shadow-2xl backdrop-blur sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center py-12 text-center"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold">
                      Thank you!
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Your request is in. Our team will reach out within 24 hours
                      to schedule your demo.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", organization: "", message: "" });
                      }}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="font-display text-lg font-bold">
                        Request a demo
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name" className="text-xs">Full name *</Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ayesha Khan"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="ayesha@org.pk"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization" className="text-xs">Organization</Label>
                      <Input
                        id="organization"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="Lahore University"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs">Message *</Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your site, footfall, and goals…"
                        className="mt-1 min-h-[110px]"
                      />
                    </div>

                    <MagneticButton
                      as="button"
                      type="submit"
                      strength={0.35}
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-muted"
                    >
                      <Send className="h-4 w-4" />
                      Send Request
                    </MagneticButton>

                    <p className="text-center text-[11px] text-muted-foreground">
                      By submitting, you agree to our Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
