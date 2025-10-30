"use client";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { dict, FLAGS, LOCALES, type Locale } from "@/i18n/dict";

export default function NavBar({ locale = "es" as Locale }: { locale?: Locale }) {
  const t = dict[(locale as Locale) || "es"];
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4">
        {/* Sinistra: Logo/Home (più grande) */}
        <Link href={`/${locale}`} aria-label="Home" className="shrink-0">
          <Wordmark withStars className="w-[132px] md:w-[156px] h-auto align-middle" />
        </Link>

        {/* Centro: nav con bottoni veri */}
        <nav className="mx-auto flex items-center gap-3">
          <Link
            href={`/${locale}/explore`}
            className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90"
          >
            {t.navbar.explore}
          </Link>
          <Link
            href={`/${locale}/creator/onboarding`}
            className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-neutral-900 font-medium hover:opacity-90"
          >
            {t.navbar.create}
          </Link>
        </nav>

        {/* Destra: lingue + login */}
        <div className="ml-auto flex items-center gap-2 text-xs">
          {LOCALES.map(code => (
            <Link
              key={code}
              href={`/${code}`}
              className={
                "px-2 py-1 rounded inline-flex items-center gap-1 " +
                (code === locale ? "bg-white text-black" : "hover:bg-white/10 text-white/80")
              }
              aria-current={code === locale ? "page" : undefined}
            >
              <span aria-hidden="true">{FLAGS[code]}</span>
              <span className="uppercase">{code}</span>
            </Link>
          ))}

          <div className="w-px h-4 bg-white/15 mx-1" />

          <Link
            href={`/${locale}/signin?callbackUrl=/${locale}`}
            className="text-sm hover:underline"
          >
            {t.nav.login}
          </Link>
        </div>
      </div>
    </header>
  );
}
