"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* TiltCard — 3D cursor-tracking tilt + radial flashlight highlight    */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  intensity = 8, // max rotation in degrees
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Mouse position (0..1) within the card
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // Smoothed rotation
  const rx = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 18,
  });

  // Glare position (CSS variables for the radial highlight)
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);

  // Precompute the two gradient backgrounds at the top level (hooks order safe)
  const whiteGlare = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(280px circle at ${x} ${y}, rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)`
  );
  const brandGlare = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(220px circle at ${x} ${y}, color-mix(in oklch, var(--brand) 22%, transparent), transparent 60%)`
  );

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
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={cn("relative", className)}
    >
      {/* Inner content lifted slightly to enhance 3D depth */}
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>

      {/* Radial flashlight glare overlay */}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{ background: whiteGlare }}
        />
      )}

      {/* Subtle brand-colored highlight that follows the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: brandGlare, opacity: 0.6 }}
      />
    </motion.div>
  );
}
