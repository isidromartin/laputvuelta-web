export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        group inline-flex items-center gap-2
        rounded-full
        border border-white/10
        bg-white/[0.04]
        px-3 py-1
        text-[11px] font-bold uppercase tracking-[0.22em]
        text-white/75
        backdrop-blur
        transition
        hover:border-[var(--primary)]/35
        hover:bg-white/[0.06]
        hover:text-white
      "
    >
      {/* micro dot neon opcional */}
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]/70 shadow-[0_0_10px_rgba(255,77,94,0.35)]" />
      {children}
    </span>
  );
}
