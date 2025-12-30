import Link from "next/link";
import Image from "next/image";
import { nav } from "@/components/site/nav";
import { MobileNav } from "@/components/site/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-[70] border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-transparent px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile drawer */}
        <div className="md:hidden">
          <MobileNav nav={nav} />
        </div>
      </div>
    </header>
  );
}
