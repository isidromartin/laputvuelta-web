import * as React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 [content-visibility:auto] [contain-intrinsic-size:1px_1000px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
