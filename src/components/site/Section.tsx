import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="glass group relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-8">
      {/* halo suave */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--primary)]/10 blur-3xl transition group-hover:bg-[var(--primary)]/16" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[var(--primary)]/8 blur-3xl transition group-hover:bg-[var(--primary)]/12" />

      {/* borde interior */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white/95 secondaryFont">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm text-white/60 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>

      <div className="relative mt-5 text-white/80">{children}</div>
    </section>
  );
}
