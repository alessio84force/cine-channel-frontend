"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoHome from "@/components/LogoHome";
import { UI, type L } from "@/lib/ui";

const LOCALES = new Set<L>(["es","en","fr","it","de","pt"]);
const getLocale = (pathname: string): L => {
  const seg = (pathname || "/es").split("/")[1] as L;
  return (LOCALES.has(seg) ? seg : "es") as L;
};

export default function NavBar() {
  const pathname = usePathname() || "/es";
  const locale = getLocale(pathname);
  const t = UI[locale] || UI.es;

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 h-14">
        {/* Logo Home */}
        <Link href={`/${locale}`} aria-label="Home" className="flex items-center gap-2">
          <LogoHome className="h-8 w-auto" />
        </Link>

        {/* Menu destro */}
        <nav className="flex items-center gap-3">
          <Link href={`/${locale}/explore`} className="opacity-90 hover:opacity-100">
            {t.nav?.explore ?? "Explore"}
          </Link>
          <Link
            href={`/${locale}/creator/onboarding`}
            className="rounded bg-white text-neutral-900 px-3 py-1.5 hover:opacity-90"
          >
            {t.nav?.create ?? "Create channel"}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
