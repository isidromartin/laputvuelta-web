"use client";

import React from "react";
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

  if (disabled || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

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
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
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

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

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
      style={{ willChange: "transform, opacity" }}
      variants={item}
    >
      {children}
    </motion.div>
  );
}
