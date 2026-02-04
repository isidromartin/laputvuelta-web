import * as React from "react";

export function QuickLinksBand({
  eyebrow = "Quick access",
  title,
  description,
  badges,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  badges?: React.ReactNode;
  actions: React.ReactNode;
}) {
  return (
    <div className="mt-10 py-10 md:py-12 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[220px]" />
        <div className="absolute -right-64 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[var(--primary)]/7 blur-[240px]" />
      </div>

      <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.38em] text-[var(--primary)]/80">
            {eyebrow}
          </p>

          <h2 className="mt-3 secondaryFont font-black uppercase tracking-tight text-white leading-[0.95] text-[clamp(1.8rem,3.2vw,2.6rem)]">
            {title}
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/62 max-w-2xl">
            {description}
          </p>

          {badges ? (
            <div className="mt-5 flex flex-wrap gap-2">{badges}</div>
          ) : null}
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {actions}
        </div>
      </div>
    </div>
  );
}
