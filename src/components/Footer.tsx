"use client";
import Link from "next/link";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default function Footer({ locale = "es" }: { locale?: Locale }) {
  const lang = (LOCALES as readonly string[]).includes(locale) ? (locale as Locale) : "es";
  const t = dict[lang] || dict.es;
  const F = (t as any).footer || (dict.es as any).footer || {
    about:"Sobre nosotros", terms:"Términos", privacy:"Privacidad", cookies:"Cookies",
    dmca:"DMCA", help:"Ayuda", careers:"Empleo", press:"Prensa", accessibility:"Accesibilidad",
    contact:"Contacto", rights:"Todos los derechos reservados"
  };
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      {/* Bloccone legale (ripristinato) */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Colonna 1: Legal */}
        <div>
          <h3 className="mb-3 font-semibold text-white/90">Legal</h3>
          <nav className="space-y-2 text-white/70">
            <Link href={`/${lang}/terms`} className="block hover:underline">{F.terms}</Link>
            <Link href={`/${lang}/privacy`} className="block hover:underline">{F.privacy}</Link>
            <Link href={`/${lang}/cookies`} className="block hover:underline">{F.cookies}</Link>
            <Link href={`/${lang}/dmca`} className="block hover:underline">{F.dmca}</Link>
          </nav>
        </div>

        {/* Colonna 2: Azienda */}
        <div>
          <h3 className="mb-3 font-semibold text-white/90">Cine-Channel</h3>
          <nav className="space-y-2 text-white/70">
            <Link href={`/${lang}/about`} className="block hover:underline">{F.about}</Link>
            <Link href={`/${lang}/press`} className="block hover:underline">{F.press}</Link>
            <Link href={`/${lang}/careers`} className="block hover:underline">{F.careers}</Link>
            <Link href={`/${lang}/contact`} className="block hover:underline">{F.contact}</Link>
          </nav>
        </div>

        {/* Colonna 3: Supporto */}
        <div>
          <h3 className="mb-3 font-semibold text-white/90">Soporte</h3>
          <nav className="space-y-2 text-white/70">
            <Link href={`/${lang}/help`} className="block hover:underline">{F.help}</Link>
            <Link href={`/${lang}/accessibility`} className="block hover:underline">{F.accessibility}</Link>
          </nav>
        </div>
      </div>

      {/* Riga finale: solo copyright centrato */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {year} Cine-Channel — {F.rights}
      </div>
    </footer>
  );
}
