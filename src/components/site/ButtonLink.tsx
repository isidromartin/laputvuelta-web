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
  const className =
    variant === "solid"
      ? "inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2 text-sm hover:opacity-90 transition"
      : "inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm text-white/85 hover:text-white hover:border-white/30 transition";
  variant === "outline"
    ? "inline-flex items-center justify-center rounded-full text-white px-5 py-2 text-sm hover:opacity-90 transition"
    : "inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2 text-sm text-white/85 hover:text-white hover:border-white/30 transition";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
