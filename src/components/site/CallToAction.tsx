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
    <section className="relative w-full overflow-hidden py-10 md:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-[11px] font-black uppercase tracking-[0.38em] text-[var(--primary)]/80">
              {eyebrow}
            </p>
          ) : null}

          <h3 className="mt-3 secondaryFont font-black uppercase tracking-tight text-white leading-[0.95] text-[clamp(1.9rem,3.1vw,2.7rem)]">
            {title}
          </h3>

          <p className="mt-4 text-sm md:text-base text-white/62 max-w-2xl">
            {description}
          </p>
        </div>

        {actions ? (
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
