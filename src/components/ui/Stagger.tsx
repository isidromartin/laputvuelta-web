"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  subtle?: boolean;
  disabled?: boolean;
};

export function Stagger({
  children,
  className,
  subtle,
  disabled,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!(disabled || reduceMotion)) {
      setEnabled(true);
    }
  }, [disabled, reduceMotion]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: subtle ? 0.08 : 0.14,
        delayChildren: subtle ? 0.04 : 0.1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={enabled ? container : undefined}
      initial={enabled ? "hidden" : false}
      whileInView={enabled ? "show" : undefined}
      viewport={enabled ? { once: true, amount: 0.22 } : undefined}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  subtle?: boolean;
};

export function StaggerItem({ children, className, subtle }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!reduceMotion) {
      setEnabled(true);
    }
  }, [reduceMotion]);

  const item: Variants = {
    hidden: { opacity: 0, y: subtle ? 12 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: subtle ? 0.6 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={enabled ? { willChange: "transform, opacity" } : undefined}
      variants={enabled ? item : undefined}
      initial={enabled ? "hidden" : false}
      animate={enabled ? "show" : undefined}
    >
      {children}
    </motion.div>
  );
}
