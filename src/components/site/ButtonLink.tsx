import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "outline",
  external,
}: Props) {
  const base =
    "relative inline-flex items-center justify-center whitespace-nowrap " +
    "rounded-full px-5 py-2.5 text-[11px] md:text-sm font-black uppercase tracking-[0.22em] " +
    "transition will-change-transform active:scale-[0.99] focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-black";

  const solid =
    base +
    " bg-[var(--primary)] text-white " +
    "hover:bg-[color:rgba(255,77,94,0.9)] hover:scale-[1.02] " +
    "shadow-[0_0_28px_rgba(255,77,94,0.18)]";

  const outline =
    base +
    " border border-white/12 bg-white/[0.03] text-white/85 backdrop-blur " +
    "hover:text-white hover:bg-white/[0.06] hover:border-[var(--primary)]/35";

  const className = variant === "solid" ? solid : outline;

  const content = (
    <>
      {/* Borde y glow (solo para solid, sutil para outline) */}
      <span
        className={[
          "pointer-events-none absolute -inset-[2px] rounded-full",
          variant === "solid"
            ? "border border-white/15"
            : "border border-transparent",
        ].join(" ")}
      />
      <span
        className={[
          "pointer-events-none absolute -inset-2 -z-10 rounded-full blur-xl",
          variant === "solid"
            ? "bg-[var(--primary)]/25"
            : "bg-[var(--primary)]/0",
        ].join(" ")}
      />
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
