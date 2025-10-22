"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoHome from "@/components/LogoHome";
import { UI, type L } from "@/lib/ui";

const LOCALES = new Set<L>(["es","en","fr","it","de","pt"]);
const getLocale = (pathname: string): L => {
  const seg = (pathname || "/es").split("/")[1] as L;
  return LOCALES.has(seg) ? seg : "es";
};

export default function NavBar() {
  const pathname = usePathname() || "/es";
  const locale = getLocale(pathname);

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo cliccabile = Home */}
        <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Home">
          <LogoHome className="h-8 w-auto" />
        </Link>

        {/* Menu destro */}
        <div className="flex items-center gap-3">
          <Link href={`/${locale}/explore`} className="hover:underline">
            {UI[locale].explore}
          </Link>
          <Link
            href={`/${locale}/creator/onboarding`}
            className="rounded-md bg-white text-neutral-900 px-3 py-1.5 hover:opacity-90"
          >
            {UI[locale].create}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
