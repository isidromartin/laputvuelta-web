import { TimelineIcon } from "@/components/b2b/TimelineIcon";

export function MobileTimelineItem({
  phase,
  title,
  text,
  note,
  icon,
  primary,
}: {
  phase: string;
  title: string;
  text: string;
  note?: string;
  icon: string;
  primary?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-5",
        primary
          ? "border-white/15 bg-[rgba(255,77,94,0.10)]"
          : "border-white/10 bg-black/20",
      ].join(" ")}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--primary)]">
        {phase}
      </p>

      <div className="mt-3 flex items-start gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <TimelineIcon kind={icon} />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/90">
            {title}
          </p>
          <p className="mt-1 text-sm text-white/70">{text}</p>
          {note ? (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
