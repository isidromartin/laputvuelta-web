"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;

  /** Opcional: si alguna sección no quieres tanto motion */
  subtle?: boolean;

  /** Opcional: desactiva animación */
  disabled?: boolean;
};

export function Stagger({
  children,
  className,
  subtle,
  disabled,
}: StaggerProps) {
  if (disabled) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: subtle ? 0.06 : 0.1,
        delayChildren: subtle ? 0.02 : 0.06,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55, margin: "0px 0px -18% 0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;

  /** Opcional: baja intensidad */
  subtle?: boolean;
};

export function StaggerItem({ children, className, subtle }: StaggerItemProps) {
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: subtle ? 12 : 22,
      scale: subtle ? 0.995 : 0.985,
      filter: subtle ? "blur(0px)" : "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      className={className}
      variants={item}
      transition={{
        duration: subtle ? 0.5 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
