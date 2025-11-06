"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { dict, FLAGS, LOCALES, type Locale } from "@/i18n/dict";

type SessionUser = { email?: string; name?: string } | null;

export default function NavBar({ locale = "es" }: { locale?: Locale }) {
  const t = dict[locale] || dict.es;
  const [user, setUser] = useState<SessionUser>(null);

  // Sessione (avatar 4 lettere)
  useEffect(() => {
    fetch("/api/session")
      .then(r => r.json())
      .then(d => setUser(d?.user || null))
      .catch(() => {});
  }, []);

  const langs = LOCALES as Locale[];

  // Indicatore mobile sotto la lingua selezionata
  const barWrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<Locale, HTMLAnchorElement | null>>({} as any);
  const [indicator, setIndicator] = useState<{ left: number; width: number; ready: boolean }>({ left: 0, width: 0, ready: false });

  const recalc = () => {
    const el = itemRefs.current[locale as Locale];
    const wrap = barWrapRef.current;
    if (el && wrap) {
      const wrapRect = wrap.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicator({
        left: rect.left - wrapRect.left - 4, // padding compensazione
        width: rect.width + 8,
        ready: true,
      });
    }
  };

  // Calcolo iniziale + resize/route-change (locale cambia come prop)
  useLayoutEffect(() => {
    recalc();
    // ricalcola anche al resize
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <header className="z-50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-4">
        {/* Sinistra: Logo/Home -> /{locale} */}
        <Link href={`/${locale}`} aria-label="Home" className="shrink-0">
          <Wordmark withStars className="w-[132px] md:w-[156px] h-auto align-middle" />
        </Link>

        {/* Centro: nav con bottoni */}
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

        {/* Destra: lingue + utente */}
        <div className="ml-auto flex items-center gap-4">
          {/* Wrapper relativo per l'indicatore scorrevole */}
          <div ref={barWrapRef} className="relative px-1">
            {/* Indicatore */}
            <span
              aria-hidden
              className={`absolute top-0 bottom-0 my-auto h-8 rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.25)] ${indicator.ready ? "opacity-100" : "opacity-0"} transition-all duration-300`}
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                background: "white",
              }}
            />
            {/* Lingue: bandiera + sigla */}
            <div className="relative flex items-end gap-3 text-[10px] leading-none">
              {langs.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  prefetch={false}
                  ref={(el) => { (itemRefs.current as any)[l] = el; }}
                  className={`flex flex-col items-center px-2 py-1 rounded-lg transition-opacity ${l === locale ? "text-neutral-900" : "text-white"} ${l === locale ? "opacity-100" : "opacity-80"} relative z-10`}
                  onClick={() => {
                    // leggera attesa per permettere il layout prima di animare (in navigazione client)
                    setTimeout(recalc, 50);
                  }}
                >
                  <span className="text-base">{FLAGS[l]}</span>
                  <span className={`mt-0.5 uppercase tracking-wide ${l === locale ? "font-semibold" : ""}`}>
                    {l}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-px h-4 bg-white/15" />

          {/* Login / User */}
          {user ? (
            <Link
              href={`/${locale}/account`}
              className="inline-flex items-center gap-2 text-sm"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/30 bg-white text-neutral-900 font-semibold">
                {(user.name || user.email || "user").slice(0, 4).toUpperCase()}
              </span>
            </Link>
          ) : (
            <Link
              href={`/${locale}/signin?callbackUrl=/${locale}`}
              className="text-sm hover:underline"
            >
              {t.navbar.login}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
