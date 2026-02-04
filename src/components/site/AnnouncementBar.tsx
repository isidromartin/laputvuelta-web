import * as React from "react";

type AnnouncementBarProps = {
  items: string[];
  className?: string;
  separator?: React.ReactNode;
  itemClassName?: string;
  paddingClassName?: string;
};

export function AnnouncementBar({
  items,
  className = "",
  separator = <span className="text-white/25">•</span>,
  itemClassName = "text-[11px] md:text-[12px] font-black uppercase tracking-[0.34em] text-white/85",
  paddingClassName = "px-6",
}: AnnouncementBarProps) {
  const safe = (items ?? []).filter(Boolean);
  if (safe.length === 0) return null;

  return (
    <div
      className={[
        "relative w-full overflow-hidden border-y border-white/10 bg-[var(--primary)]",
        className,
      ].join(" ")}
      role="region"
      aria-label="Anuncios"
    >
      <div
        className={[
          "flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-2.5 md:py-3",
          paddingClassName,
        ].join(" ")}
      >
        {safe.map((t, i) => (
          <React.Fragment key={`${t}-${i}`}>
            <span className={itemClassName}>{t}</span>
            {i < safe.length - 1 ? separator : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
