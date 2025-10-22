"use client";
import Link from "next/link";
import { UI, type L } from "@/lib/ui";

const LOCALES = new Set<L>(["es","en","fr","it","de","pt"]);
const getLocale = (pathname: string): L => {
  const seg = (pathname.split("/")[1] || "es") as L;
  return (LOCALES.has(seg) ? seg : "es") as L;
};
const withLocale = (loc: L, sub: string) => `/${loc}${sub.startsWith('/')?sub:'/'+sub}`;

export default function Footer() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/es";
  const locale = getLocale(pathname);
  const t = UI[locale];

  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-white/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:justify-between">
        <div>© {UI[locale].brand} — {t.footer.rights}</div>
        <nav className="flex gap-4">
          <Link href={withLocale(locale, '/legal/privacy')}>{t.footer.privacy}</Link>
          <Link href={withLocale(locale, '/legal/terms')}>{t.footer.terms}</Link>
          <Link href={withLocale(locale, '/contact')}>{t.footer.contact}</Link>
        </nav>
      </div>
    </footer>
  );
}
