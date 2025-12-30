import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        <Image
          src="/logo.png"
          alt="La Put* Vuelta"
          width={900}
          height={300}
          priority
          className="w-full h-auto select-none"
        />
        <p className="text-white/70 text-sm tracking-wide text-center">
          &copy; La Put* Vuelta. Todos los derechos reservados.
        </p>
      </div>
    </main>
  );
}
