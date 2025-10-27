"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = ["es","en","fr","it","de","pt","ar"] as const;

export default function LanguageSwitcher({ current }: { current: string }) {
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);

  const rest = parts.slice(1).join("/"); // tutto dopo il locale

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-2">
      {LOCALES.map((lc) => {
        const href = `/${lc}${rest ? `/${rest}` : ""}`;
        const active = lc === current;
        return (
          <Link
            key={lc}
            href={href}
            className={`px-2 py-1 rounded text-xs border ${
              active ? "border-white/60 bg-white/10" : "border-white/10 hover:bg-white/10"
            }`}
            hrefLang={lc}
          >
            {lc.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
