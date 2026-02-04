import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  actions,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={[
        "relative mt-10 w-full overflow-hidden",
        "py-10 md:py-14",
        className,
      ].join(" ")}
    >
      {/* Dividers */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /> */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.38em] text-white/45">
              {title}
            </p>

            {/* Headline */}
            <h2 className="mt-3 secondaryFont font-black uppercase tracking-tight text-white leading-[0.95] text-[clamp(1.8rem,3.2vw,2.6rem)]">
              {title}
            </h2>

            {subtitle ? (
              <p className="mt-4 text-sm md:text-base text-white/62 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            ) : null}
          </div>

          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>

        <div className="mt-8 text-white/80">{children}</div>
      </div>
    </section>
  );
}
