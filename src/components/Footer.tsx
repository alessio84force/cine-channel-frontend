import Link from "next/link";
import { UI, type L } from "@/lib/ui";

export default function Footer({ locale }: { locale: L }) {
  const t = UI[locale] ?? UI.es;
  const year = new Date().getFullYear();
  const rights =
    t.footer?.rights ??
    ({
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
      fr: "Tous droits réservés.",
      it: "Tutti i diritti riservati.",
      de: "Alle Rechte vorbehalten.",
      pt: "Todos os direitos reservados.",
      ar: "جميع الحقوق محفوظة.",
    } as Record<L, string>)[locale];

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-4 sm:grid-cols-2">
        <div className="text-sm text-white/70">
          <strong>{t.brand ?? "CINE-CHANNEL"}</strong> · © {year} · {rights}
        </div>
        <nav className="text-sm justify-self-start sm:justify-self-end flex gap-4">
          <Link href={`/${locale}/legal/privacy`} className="hover:underline">
            {t.footer?.privacy ?? "Privacy"}
          </Link>
          <Link href={`/${locale}/legal/terms`} className="hover:underline">
            {t.footer?.terms ?? "Terms"}
          </Link>
          <Link href={`/${locale}/legal/cookies`} className="hover:underline">
            {t.footer?.cookies ?? "Cookies"}
          </Link>
          <Link href={`/${locale}/legal/notice`} className="hover:underline">
            {t.footer?.notice ?? "Legal"}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:underline">
            {t.footer?.contact ?? "Contact"}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
