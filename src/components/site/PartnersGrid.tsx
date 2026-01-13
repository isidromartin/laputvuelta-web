import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export type Partner = {
  _id: string;
  name: string;
  websiteUrl?: string;
  logo?: any;
};

const globalPartnersQuery = groq`*[_type=="partner" && isGlobal==true] | order(name asc){
  _id, name, websiteUrl, logo
}`;

function dedupePartners(list: Partner[]) {
  return Array.from(new Map(list.map((p) => [p._id, p])).values());
}

export async function PartnersGrid({
  partners = [],
  includeGlobal = false,
  title,
  subtitle,
  variant = "grid",
  max,
}: {
  partners?: Partner[];
  includeGlobal?: boolean;
  title?: string;
  subtitle?: string;
  variant?: "grid" | "footer";
  max?: number;
}) {
  const globals = includeGlobal
    ? await client.fetch<Partner[]>(globalPartnersQuery)
    : [];

  const merged = dedupePartners([...(globals ?? []), ...(partners ?? [])]);
  const shown = typeof max === "number" ? merged.slice(0, max) : merged;

  if (!shown.length) return null;

  const gridClass =
    variant === "footer"
      ? "grid grid-cols-3 gap-2 sm:grid-cols-6"
      : "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";

  const cardClass =
    variant === "footer"
      ? "group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/30"
      : "group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition hover:bg-white/[0.06] hover:border-[var(--primary)]/30";

  const logoBoxClass =
    variant === "footer" ? "relative h-8 w-full" : "relative h-10 w-full";

  const titleWrapClass = "mb-5 flex items-end justify-between gap-4";

  return (
    <div>
      {title ? (
        <div className={titleWrapClass}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/45">
              Partners
            </p>
            <p className="mt-2 text-xl md:text-2xl font-black uppercase tracking-tight text-white/95">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-2 text-sm text-white/60 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>

          {/* marca dossier opcional */}
          <span className="hidden md:block text-[var(--primary)] font-black text-6xl opacity-20 leading-none">
            {variant === "footer" ? "" : "04"}
          </span>
        </div>
      ) : null}

      <div className={gridClass}>
        {shown.map((p) => {
          const logoUrl = p.logo
            ? urlForImage(p.logo).fit("max").auto("format").url()
            : null;

          const content = (
            <div className={cardClass} title={p.name} aria-label={p.name}>
              {/* halo neon en hover */}
              <span className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl bg-[var(--primary)]/0 blur-2xl transition group-hover:bg-[var(--primary)]/14" />
              {/* borde interior sutil */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

              {logoUrl ? (
                <div className={logoBoxClass}>
                  <Image
                    src={logoUrl}
                    alt={p.name}
                    fill
                    className="object-contain opacity-90 transition group-hover:opacity-100"
                    sizes="(max-width: 768px) 40vw, 160px"
                  />
                </div>
              ) : (
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                  {p.name}
                </span>
              )}
            </div>
          );

          return p.websiteUrl ? (
            <a
              key={p._id}
              href={p.websiteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={p.name}
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={p._id} className="block">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
