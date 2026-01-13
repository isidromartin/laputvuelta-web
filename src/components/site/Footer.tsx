import { site } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--primary)]/12 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-7 md:p-9">
          {/* subtle inner gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,77,94,0.12),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(255,77,94,0.06),transparent_60%)]" />

          <div className="relative flex flex-col gap-8">
            {/* Top row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Brand / mini manifesto */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg md:text-xl font-black uppercase tracking-tight">
                    <Link href="/" className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="La Put* Vuelta"
                        width={160}
                        height={40}
                        priority
                        className="h-8 w-auto"
                      />
                    </Link>
                  </span>
                </div>
                {/* <p className="text-sm text-white/55 max-w-xl">
                  ¿Hace cuánto no sales a dar una vuelta?
                </p> */}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={site.urls.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/75 transition hover:text-white hover:border-[var(--primary)]/35 hover:bg-white/[0.06]"
                >
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/0 blur-xl transition group-hover:bg-[var(--primary)]/14" />
                  Instagram
                </a>

                <a
                  href={site.urls.kick}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/75 transition hover:text-white hover:border-[var(--primary)]/35 hover:bg-white/[0.06]"
                >
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/0 blur-xl transition group-hover:bg-[var(--primary)]/14" />
                  Kick
                </a>

                <a
                  href={site.urls.fourvenuesTeam}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/75 transition hover:text-white hover:border-[var(--primary)]/35 hover:bg-white/[0.06]"
                >
                  <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-[var(--primary)]/0 blur-xl transition group-hover:bg-[var(--primary)]/14" />
                  Fourvenues
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Bottom row */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="text-xs text-white/45 leading-relaxed">
                <p>{site.copy.footerNote}</p>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/35">
                © {new Date().getFullYear()} {site.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
