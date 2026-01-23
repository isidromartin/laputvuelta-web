"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

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
  y = 14,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants(y)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
