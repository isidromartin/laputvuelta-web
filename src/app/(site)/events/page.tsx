export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold">Eventos</h1>
      <p className="mt-2 text-white/70">
        Próximos y pasados. Aquí luego conectamos el CMS.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-4">
            <p className="text-xs text-white/50">Próximamente</p>
            <p className="mt-2 text-sm text-white/85">
              La Put* Vuelta — Vol. {i + 1}
            </p>
            <p className="mt-1 text-xs text-white/55">Sala · Ciudad</p>
          </div>
        ))}
      </div>
    </main>
  );
}
