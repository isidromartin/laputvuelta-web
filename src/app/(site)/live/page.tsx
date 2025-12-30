import { site } from "@/lib/site";

export default function LivePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold">Live</h1>
      <p className="mt-2 text-white/70">
        Si el embed falla, abre Kick directamente.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={site.urls.kick}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white text-black px-5 py-2 text-sm hover:opacity-90 transition"
        >
          Ver en Kick
        </a>
      </div>
    </main>
  );
}
