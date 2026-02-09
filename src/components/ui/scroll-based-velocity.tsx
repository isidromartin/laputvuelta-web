"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface ScrollVelocityRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ScrollVelocityContext = React.createContext<MotionValue<number> | null>(
  null,
);

function onMediaChange(mq: MediaQueryList, cb: () => void) {
  // Modern browsers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyMq = mq as any;
  if (typeof anyMq.addEventListener === "function") {
    anyMq.addEventListener("change", cb);
    return () => anyMq.removeEventListener("change", cb);
  }

  // Safari/legacy
  if (typeof anyMq.addListener === "function") {
    anyMq.addListener(cb);
    return () => anyMq.removeListener(cb);
  }

  return () => {};
}

export function ScrollVelocityContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  // Note: This runs in a Client Component, but still SSRs HTML.
  // The hook itself is safe; DOM work happens after hydration.
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth it to avoid jitter
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Clamp and normalize to a small factor [-5..5]
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ScrollVelocityContext.Provider value={velocityFactor}>
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </ScrollVelocityContext.Provider>
  );
}

export function ScrollVelocityRow(props: ScrollVelocityRowProps) {
  const sharedVelocityFactor = useContext(ScrollVelocityContext);
  if (sharedVelocityFactor) {
    return (
      <ScrollVelocityRowImpl {...props} velocityFactor={sharedVelocityFactor} />
    );
  }
  return <ScrollVelocityRowLocal {...props} />;
}

interface ScrollVelocityRowImplProps extends ScrollVelocityRowProps {
  velocityFactor: MotionValue<number>;
}

function ScrollVelocityRowImpl({
  children,
  baseVelocity = 5,
  direction = 1,
  className,
  velocityFactor,
  ...props
}: ScrollVelocityRowImplProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  const [numCopies, setNumCopies] = useState(1);

  // Motion values
  const baseX = useMotionValue(0);
  const unitWidth = useMotionValue(0);

  // Direction refs (avoid re-renders)
  const baseDirectionRef = useRef<number>(direction >= 0 ? 1 : -1);
  const currentDirectionRef = useRef<number>(direction >= 0 ? 1 : -1);

  const isInViewRef = useRef(true)
  const isPageVisibleRef = useRef(true)
  const prefersReducedMotionRef = useRef(false)
  const isLowPowerRef = useRef(false)

  // Ensure direction updates if prop changes
  useEffect(() => {
    baseDirectionRef.current = direction >= 0 ? 1 : -1;
    currentDirectionRef.current = direction >= 0 ? 1 : -1;
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    const block = blockRef.current;
    if (!container || !block) return;

    const updateSizes = () => {
      const cw = container.offsetWidth || 0;
      const bw = block.scrollWidth || 0;

      unitWidth.set(bw);

      // Ensure enough copies to cover width + buffer
      const nextCopies = bw > 0 ? Math.max(3, Math.ceil(cw / bw) + 2) : 1;
      setNumCopies((prev) => (prev === nextCopies ? prev : nextCopies));
    };

    updateSizes();

    const ro = new ResizeObserver(updateSizes);
    ro.observe(container);
    ro.observe(block);

    const io = new IntersectionObserver(([entry]) => {
      isInViewRef.current = !!entry?.isIntersecting;
    });
    io.observe(container);

    const handleVisibility = () => {
      isPageVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility, {
      passive: true,
    });
    handleVisibility();

    const prm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handlePRM = () => {
      prefersReducedMotionRef.current = prm.matches;
    };
    handlePRM();
    const offPRM = onMediaChange(prm, handlePRM);

    // Low-power heuristic: coarse pointer or small screens
    const lowPower = window.matchMedia("(pointer: coarse), (max-width: 768px)");
    const handleLowPower = () => {
      isLowPowerRef.current = lowPower.matches;
    };
    handleLowPower();
    const offLP = onMediaChange(lowPower, handleLowPower);

    return () => {
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      offPRM();
      offLP();
    };
  }, [children, unitWidth]);

  // Convert baseX into wrapped negative translateX pixels string
  const x = useTransform([baseX, unitWidth], ([v, bw]) => {
    const width = Number(bw) || 1;
    const offset = Number(v) || 0;
    return `${-wrap(0, width, offset)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (!isInViewRef.current || !isPageVisibleRef.current) return;
    if (prefersReducedMotionRef.current) return;
    const dt = delta / 1000;
    const vf = velocityFactor.get(); // [-5..5]
    const absVf = Math.min(5, Math.abs(vf));
    const lowPowerMultiplier = isLowPowerRef.current ? 0.35 : 1;
    const speedMultiplier = (1 + absVf) * lowPowerMultiplier;

    // Reverse direction based on scroll direction, preserving base direction
    if (absVf > 0.1) {
      const scrollDirection = vf >= 0 ? 1 : -1;
      currentDirectionRef.current = baseDirectionRef.current * scrollDirection;
    }

    const bw = unitWidth.get() || 0;
    if (bw <= 0) return;

    // baseVelocity is a % of one unit width per second (bw * baseVelocity / 100)
    const pixelsPerSecond = (bw * baseVelocity) / 100;

    const moveBy =
      currentDirectionRef.current * pixelsPerSecond * speedMultiplier * dt;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-hidden whitespace-nowrap", className)}
      {...props}
    >
      <motion.div
        className="inline-flex select-none items-center transform-gpu will-change-transform"
        style={{ x }}
        aria-hidden={false}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? blockRef : null}
            aria-hidden={i !== 0}
            className="inline-flex shrink-0 items-center"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ScrollVelocityRowLocal(props: ScrollVelocityRowProps) {
  const { scrollY } = useScroll();
  const localVelocity = useVelocity(scrollY);

  const localSmoothVelocity = useSpring(localVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const localVelocityFactor = useTransform(localSmoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5);
    return sign * magnitude;
  });

  return (
    <ScrollVelocityRowImpl {...props} velocityFactor={localVelocityFactor} />
  );
}
