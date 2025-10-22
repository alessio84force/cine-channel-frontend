"use client";
import { useMemo } from "react";

type L = 'es'|'en'|'fr'|'it'|'de'|'pt';
const LOCALES: L[] = ['es','en','fr','it','de','pt'];

function swapLocale(path: string, next: L) {
  if (!path.startsWith("/")) path = "/" + path;
  const parts = path.split("/");
  if (parts.length < 2) return `/${next}`;
  if (LOCALES.includes(parts[1] as L)) parts[1] = next;
  else parts.splice(1, 0, next);
  return parts.join("/") || `/${next}`;
}

export default function LanguageSwitcher() {
  // pathname lato client
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/es";
  const current = useMemo<L>(() => {
    const seg = pathname.split("/")[1] as L;
    return LOCALES.includes(seg) ? seg : 'es';
  }, [pathname]);

  return (
    <div className="flex items-center gap-1 text-sm">
      {LOCALES.map((l) => (
        <a
          key={l}
          href={swapLocale(pathname, l)}
          className={`px-2 py-1 rounded hover:bg-white/10 ${l===current ? 'bg-white/10' : ''}`}
          aria-current={l===current ? 'page' : undefined}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
