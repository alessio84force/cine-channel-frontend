import Link from "next/link";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default function Footer({ locale = "es" as Locale }) {
  const lang = (LOCALES.includes(locale as Locale) ? locale : "es") as Locale;
  const t = dict[lang] || dict.es;
  const F = (t as any).footer || (dict.es as any).footer;

  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div className="space-y-2">
          <div className="text-white/60 font-semibold">Product</div>
          <Link href={`/${lang}/about`} className="block hover:underline">{F.about}</Link>
          <Link href={`/${lang}/help`} className="block hover:underline">{F.help}</Link>
          <Link href={`/${lang}/accessibility`} className="block hover:underline">{F.accessibility}</Link>
        </div>

        <div className="space-y-2">
          <div className="text-white/60 font-semibold">Legal</div>
          <Link href={`/${lang}/terms`} className="block hover:underline">{F.terms}</Link>
          <Link href={`/${lang}/privacy`} className="block hover:underline">{F.privacy}</Link>
          <Link href={`/${lang}/cookies`} className="block hover:underline">{F.cookies}</Link>
          <Link href={`/${lang}/copyright`} className="block hover:underline">{F.copyright}</Link>
          <Link href={`/${lang}/dmca`} className="block hover:underline">{F.dmca}</Link>
          <Link href={`/${lang}/imprint`} className="block hover:underline">{F.imprint}</Link>
        </div>

        <div className="space-y-2">
          <div className="text-white/60 font-semibold">Company</div>
          <Link href={`/${lang}/careers`} className="block hover:underline">{F.careers}</Link>
          <Link href={`/${lang}/press`} className="block hover:underline">{F.press}</Link>
          <Link href={`/${lang}/contact`} className="block hover:underline">Contact</Link>
        </div>

        <div className="space-y-2">
          <div className="text-white/60 font-semibold">CINE-CHANNEL</div>
          <p className="text-white/60">
            © {year} CINE-CHANNEL. {F.rights}.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-white/50 flex flex-wrap items-center gap-3 justify-between">
          <div>© {year} CINE-CHANNEL</div>
          <div className="flex gap-3">
            <Link href={`/${lang}/terms`} className="hover:underline">{F.terms}</Link>
            <span>·</span>
            <Link href={`/${lang}/privacy`} className="hover:underline">{F.privacy}</Link>
            <span>·</span>
            <Link href={`/${lang}/cookies`} className="hover:underline">{F.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
