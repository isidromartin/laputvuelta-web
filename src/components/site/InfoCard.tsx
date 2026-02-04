import * as React from "react";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function InfoCard({
  index,
  tag,
  title,
  subtitle,
  actions,
  children,
}: {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] ring-1 ring-white/10 transition hover:bg-white/[0.04] hover:ring-[var(--primary)]/20">
      {/* Ambient (mucho más suave que antes) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--primary)]/12 blur-[220px] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/30" />
      </div>

      <div className="p-7 md:p-8">
        <Stagger className="flex flex-col">
          {/* Index + Tag */}
          <StaggerItem>
            <div className="mb-5 flex items-end justify-between gap-4">
              <span className="text-[var(--primary)] font-black text-5xl leading-none">
                {index}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/40">
                {tag}
              </span>
            </div>
          </StaggerItem>

          {/* Title + actions */}
          <StaggerItem>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white/90 secondaryFont">
                  {title}
                </h3>

                {subtitle ? (
                  <p className="mt-2 text-sm text-white/65">{subtitle}</p>
                ) : null}
              </div>

              {actions ? <div className="shrink-0">{actions}</div> : null}
            </div>
          </StaggerItem>

          {/* Body */}
          <StaggerItem>
            <div className="mt-6 text-white/80">{children}</div>
          </StaggerItem>
        </Stagger>
      </div>
    </div>
  );
}
