import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={site.urls.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            Instagram
          </a>
          <span className="text-white/20">·</span>
          <a
            href={site.urls.kick}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            Kick
          </a>
          <span className="text-white/20">·</span>
          <a
            href={site.urls.fourvenuesTeam}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            Fourvenues
          </a>
        </div>

        <div className="flex flex-col gap-1 text-xs text-white/50">
          <p>{site.copy.footerNote}</p>
          <p>
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
