import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[200px]" />
        <div className="absolute right-[-180px] top-[20vh] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/12 blur-[220px]" />
        <div className="absolute bottom-[-240px] left-[-160px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[240px]" />
      </div>
      <Header />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
}
