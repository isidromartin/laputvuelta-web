"use client";

import React from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

const variants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0 },
});

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ willChange: enabled ? "transform, opacity" : undefined }}
      variants={enabled ? variants(y) : undefined}
      initial={enabled ? "hidden" : false}
      whileInView={enabled ? "show" : undefined}
      viewport={enabled ? { once, amount: 0.25 } : undefined}
      transition={
        enabled ? { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } : undefined
      }
    >
      {children}
    </motion.div>
  );
}
