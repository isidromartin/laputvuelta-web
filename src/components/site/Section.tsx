export function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle ? <p className="text-sm text-white/65">{subtitle}</p> : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
