import * as React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";

type ScrollBasedVelocityProps = {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
  containerClassName?: string;
  rowClassName?: string;
  showEdges?: boolean;
  edgeWidthClassName?: string;
};

export function ScrollBasedVelocity({
  children,
  baseVelocity = 20,
  direction = 1,
  className = "",
  containerClassName = "",
  rowClassName = "",
  showEdges = true,
  edgeWidthClassName = "w-1/4",
}: ScrollBasedVelocityProps) {
  return (
    <div className={["relative", className].join(" ")}>
      <ScrollVelocityContainer className={containerClassName}>
        <ScrollVelocityRow
          baseVelocity={baseVelocity}
          direction={direction}
          className={rowClassName}
        >
          {children}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {showEdges ? (
        <>
          <div
            className={[
              "pointer-events-none absolute inset-y-0 left-0",
              edgeWidthClassName,
              "bg-gradient-to-r from-background to-transparent",
            ].join(" ")}
          />
          <div
            className={[
              "pointer-events-none absolute inset-y-0 right-0",
              edgeWidthClassName,
              "bg-gradient-to-l from-background to-transparent",
            ].join(" ")}
          />
        </>
      ) : null}
    </div>
  );
}
