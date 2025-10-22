"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "@/components/Wordmark";
import { LOCALES, t, type Locale } from "@/lib/i18n";

function swapLocale(path: string, next: string) {
  if (!path.startsWith("/")) path = "/" + path;
  const parts = path.split("/");
  if (LOCALES.includes(parts[1] as Locale)) { parts[1] = next; return parts.join("/") || `/${next}`; }
  return `/${next}${path === "/" ? "" : path}`;
}

function LanguageSwitcher() {
  const pathname = usePathname() || "/es";
  return (
    <div className="flex items-center gap-1 text-sm">
      {LOCALES.map((loc) => (
        <Link
          key={loc}
          href={swapLocale(pathname, loc)}
          className="px-2 py-1 rounded hover:bg-white/10 data-[active=true]:bg-white text-white data-[active=true]:text-neutral-900"
          data-active={pathname.split("/")[1] === loc}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default function NavBar() {
  const pathname = usePathname() || "/es";
  const current = (LOCALES.includes(pathname.split("/")[1] as Locale) ? pathname.split("/")[1] : "es") as Locale;
  const i18n = t(current);

  return (
    <nav className="h-12 px-3 flex items-center justify-between border-b border-white/10">
      <Link href={`/${current}`} aria-label="Home" className="inline-flex items-center whitespace-nowrap">
        <span className="text-brand inline-flex items-center leading-none">
          {/* @ts-expect-error Wordmark may accept className */}
          <Wordmark className="h-5 sm:h-6 w-auto block" />
        </span>
      </Link>

      <div className="flex items-center gap-3">
        <Link href={`/${current}/explore`} className="text-white/80 hover:text-white">
          {i18n.nav.explore}
        </Link>
        <Link
          href={`/${current}/creator/onboarding`}
          className="rounded-md bg-white text-neutral-900 px-3 py-1.5 hover:opacity-90"
        >
          {i18n.nav.create}
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
