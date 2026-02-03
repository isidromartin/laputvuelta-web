import type { ReactNode } from "react";

export function CallToAction({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,77,94,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(255,77,94,0.10),transparent_60%)]" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-[440px] lg:max-w-[480px]">
          {eyebrow ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight secondaryFont">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-white/60">
            {description}
          </p>
        </div>

        {actions ? (
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center md:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}
