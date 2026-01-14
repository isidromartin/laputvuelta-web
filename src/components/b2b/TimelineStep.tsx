import { TimelineIcon } from "@/components/b2b/TimelineIcon";

export function TimelineStep({
  title,
  subtitle,
  note,
  icon,
  tone,
}: {
  title: string;
  subtitle: string;
  note?: string;
  icon: string;
  tone: "muted" | "primary";
}) {
  const dot =
    tone === "primary"
      ? "bg-[var(--primary)] shadow-[0_0_18px_rgba(255,77,94,0.45)]"
      : "bg-white/30";

  const card =
    tone === "primary"
      ? "border-white/15 bg-[rgba(255,77,94,0.10)]"
      : "border-white/10 bg-black/10";

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* dot */}
      {/* <div className="relative z-10">
        <div className={["h-3.5 w-3.5 rounded-full", dot].join(" ")} />
      </div> */}

      {/* card */}
      <div
        className={[
          "mt-4 w-full rounded-2xl border p-4 backdrop-blur-xl",
          card,
        ].join(" ")}
      >
        <div className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <TimelineIcon kind={icon} />
        </div>

        <p className="mt-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/85">
          {title}
        </p>
        <p className="mt-1 text-sm text-white/65">{subtitle}</p>

        {note ? (
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--primary)]">
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}
