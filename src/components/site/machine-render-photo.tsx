"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, Smartphone, Leaf, ShieldCheck } from "lucide-react";

/**
 * MachineRenderPhoto
 * Uses the official Davaam machine product render (transparent WebP) inside
 * an interactive wrapper that:
 *  - floats gently on idle (Framer Motion loop)
 *  - tilts subtly toward the cursor (cursor-tracking)
 *  - emits a soft radial glow + pulse rings behind it
 *  - overlays floating spec chips (IoT, App, Impact, Safety)
 */
export function MachineRenderPhoto() {
  const ref = React.useRef<HTMLDivElement>(null);

  // Cursor-tracking rotation (raw + smoothed)
  const px = useMotionValue(0.5); // 0..1 across the wrapper
  const py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });

  // Subtle translate so the machine feels like it's leaning toward the cursor
  const translateX = useSpring(useTransform(px, [0, 1], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(Math.max(0, Math.min(1, x)));
    py.set(Math.max(0, Math.min(1, y)));
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative aspect-square w-full"
      style={{ perspective: 1200 }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 rounded-[40%] bg-brand/20 blur-3xl" />

      {/* Pulse rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30 animate-pulse-ring" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20 animate-pulse-ring"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Pedestal disc beneath the machine */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[78%] -z-10 h-24 w-3/4 -translate-x-1/2 rounded-[50%] bg-brand/15 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scaleX: [0.9, 1, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The machine — floats + tilts toward cursor */}
      <motion.div
        className="relative z-10 mx-auto h-full w-full"
        style={{
          rotateX,
          rotateY,
          translateX,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/machines/davaam-machine-original.webp"
            alt="Davaam smart refill station — official product render"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-contain drop-shadow-[0_30px_60px_rgba(11,170,176,0.35)]"
            style={{
              transform: "translateZ(40px)",
              transformStyle: "preserve-3d",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating spec chips — DOM overlays */}
      <FloatingChip
        className="left-2 top-12"
        icon={Wifi}
        label="IoT"
        value="Real-time"
        delay={0}
        yRange={[-10, 0]}
      />
      <FloatingChip
        className="right-0 top-1/3"
        icon={Smartphone}
        label="App"
        value="RFID Pay"
        delay={0.4}
        yRange={[12, 0]}
      />
      <FloatingChip
        className="bottom-12 left-0"
        icon={Leaf}
        label="Impact"
        value="Eco Mode"
        delay={0.8}
        yRange={[-8, 0]}
      />
      <FloatingChip
        className="bottom-20 right-2"
        icon={ShieldCheck}
        label="Safety"
        value="Food-grade"
        delay={0.2}
        yRange={[10, 0]}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Floating spec chip (DOM overlay)                                    */
/* ------------------------------------------------------------------ */
function FloatingChip({
  className,
  icon: Icon,
  label,
  value,
  delay,
  yRange,
}: {
  className: string;
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  yRange: [number, number];
}) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 px-3 py-2 shadow-card-soft backdrop-blur ${className}`}
      animate={{ y: yRange }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-xs font-semibold">{value}</div>
      </div>
    </motion.div>
  );
}
