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
      ? "flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3 hover:border-white/25 hover:bg-white/[0.04] transition"
      : "group flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/25 hover:bg-white/[0.04] transition";

  const logoBoxClass =
    variant === "footer" ? "relative h-8 w-full" : "relative h-10 w-full";

  return (
    <div>
      {title ? (
        <div className="mb-4">
          <p className="text-sm font-semibold text-white/90">{title}</p>
          {subtitle ? (
            <p className="mt-1 text-sm text-white/65">{subtitle}</p>
          ) : null}
        </div>
      ) : null}

      <div className={gridClass}>
        {shown.map((p) => {
          const logoUrl = p.logo
            ? urlForImage(p.logo)
                // .width(100)
                // .height(100)
                .fit("max")
                .auto("format")
                .url()
            : null;

          const content = (
            <div className={cardClass} title={p.name} aria-label={p.name}>
              {logoUrl ? (
                <div className={logoBoxClass}>
                  <Image
                    src={logoUrl}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40vw, 160px"
                  />
                </div>
              ) : (
                <span className="text-xs text-white/70">{p.name}</span>
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
            >
              {content}
            </a>
          ) : (
            <div key={p._id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
