import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  index?: string;
  actions?: ReactNode;
  badges?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  index,
  actions,
  badges,
}: PageHeaderProps) {
  return (
    <div className="glass card-hover relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.14),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.08),transparent_60%)]" />
      <div className="relative flex flex-col gap-4">
        {badges ? (
          <div className="flex flex-wrap items-center gap-2">{badges}</div>
        ) : null}

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--primary)]">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-black uppercase tracking-tight text-white/95 secondaryFont">
              {title}
            </h1>
          </div>

          {index ? (
            <span className="hidden md:block text-[var(--primary)] font-black text-6xl leading-none secondaryFont">
              {index}
            </span>
          ) : null}
        </div>

        {description ? (
          <p className="text-white/65 max-w-2xl leading-relaxed">
            {description}
          </p>
        ) : null}

        {actions ? (
          <div className="flex flex-wrap gap-3 pt-1">{actions}</div>
        ) : null}
      </div>
    </div>
  );
}
