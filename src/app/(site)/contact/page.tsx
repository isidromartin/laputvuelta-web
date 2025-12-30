import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { Badge } from "@/components/site/Badge";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | La Put* Vuelta",
  description:
    "Contacto oficial de La Put* Vuelta. Partners, salas, prensa o cualquier consulta: escríbenos desde aquí.",
};

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Contacto</Badge>
            <Badge>La Put* Vuelta</Badge>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Hablemos
          </h1>

          <p className="text-white/70 max-w-2xl">
            Partners, salas, prensa o cualquier idea canalla bien hecha.
            Escríbenos y te respondemos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-sm font-semibold text-white/90">Instagram</p>
              <p className="mt-1 text-sm text-white/60">
                Para cosas rápidas y urgentes, DM.
              </p>
              <a
                className="mt-4 inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                href="https://instagram.com/laputvuelta.oficial"
                target="_blank"
                rel="noreferrer"
              >
                @laputvuelta.oficial
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-sm font-semibold text-white/90">Live</p>
              <p className="mt-1 text-sm text-white/60">
                Canal oficial en Kick.
              </p>
              <a
                className="mt-4 inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                href="https://kick.com/laputvuelta-oficial"
                target="_blank"
                rel="noreferrer"
              >
                kick.com/laputvuelta-oficial
              </a>

              <div className="mt-4">
                <Link
                  href="/live"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  Ir a la página Live →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-sm font-semibold text-white/90">Entradas</p>
              <p className="mt-1 text-sm text-white/60">
                Venta oficial en Fourvenues.
              </p>
              <a
                className="mt-4 inline-flex rounded-2xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.06] hover:border-white/25 transition"
                href="https://web.fourvenues.com/es/team-la-putvuelta1/"
                target="_blank"
                rel="noreferrer"
              >
                Abrir Fourvenues
              </a>

              <div className="mt-4">
                <Link
                  href="/tickets"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  Ir a Entradas →
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
