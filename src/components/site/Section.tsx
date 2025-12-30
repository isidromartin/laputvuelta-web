import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode; // <- aquí pones el botón o lo que quieras
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm text-white/65">{subtitle}</p>
          ) : null}
        </div>

        {actions ? <div className="shrink-0 md:pt-0">{actions}</div> : null}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}
