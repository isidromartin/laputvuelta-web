import { Container } from "@/components/site/Container";
import { FourvenuesEmbed } from "@/components/site/FourvenuesEmbed";

export const revalidate = 60;

export default function TicketsPage() {
  const publicUrl =
    process.env.NEXT_PUBLIC_FOURVENUES_PUBLIC_URL ||
    "https://web.fourvenues.com/es/team-la-putvuelta1/";

  const embedPath =
    process.env.NEXT_PUBLIC_FOURVENUES_EMBED_PATH ||
    "team-la-putvuelta1/events";

  return (
    <main className="py-12">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Calendario
          </h1>
          <p className="text-white/70 max-w-2xl">
            Próximos eventos de La Put* Vuelta.
          </p>
        </div>

        <div className="mt-10">
          <FourvenuesEmbed
            path={embedPath}
            publicUrl={publicUrl}
            minHeight={860}
          />
        </div>
      </Container>
    </main>
  );
}
