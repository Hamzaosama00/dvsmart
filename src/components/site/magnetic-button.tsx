"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* MagneticButton — gently pulls toward the cursor when it gets close  */
/* Works as a wrapper around any Button / anchor                       */
/* ------------------------------------------------------------------ */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
  radius = 90, // distance (px) within which the magnetic effect kicks in
  as: As = "button",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  const ref = React.useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.4 });

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < radius + Math.max(rect.width, rect.height) / 2) {
      x.set(dx * strength);
      y.set(dy * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={cn("inline-flex", className)}
    >
      <As
        ref={ref as React.Ref<HTMLElement>}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        {...rest}
      >
        {children}
      </As>
    </motion.div>
  );
}
