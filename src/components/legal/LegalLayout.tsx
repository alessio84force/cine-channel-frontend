"use client";
import Link from "next/link";
import { COMPANY } from "@/legal/company";

type Locale = 'es'|'en'|'fr'|'it'|'de'|'pt'|'ar'|'ru'|'zh'|'ko';

const NOTICE: Record<Locale,string> = {
  es: "Esta es la versión original vinculante.",
  en: "This is the binding original version.",
  fr: "Ceci est la version originale juridiquement contraignante.",
  it: "Questa è la versione originale giuridicamente vincolante.",
  de: "Dies ist die rechtsverbindliche Originalversion.",
  pt: "Esta é a versão original vinculativa.",
  ar: "هذه هي النسخة الأصلية الملزمة قانونيًا.",
  ru: "Это обязательная оригинальная версия.",
  zh: "此为具有法律效力的原始版本。",
  ko: "이 문서는 법적 효력이 있는 원본 버전입니다.",
};

const TRANSL_NOTE: Record<Locale,string> = {
  es: "Si lees otra lengua, recuerda: la versión en español prevalece en caso de divergencias.",
  en: "If you are reading another language, the Spanish version prevails in case of discrepancies.",
  fr: "Si vous lisez une autre langue, la version espagnole prévaut en cas de divergence.",
  it: "Se stai leggendo un’altra lingua, in caso di discrepanze prevale la versione spagnola.",
  de: "Wenn Sie eine andere Sprache lesen, gilt bei Abweichungen die spanische Version.",
  pt: "Se estiver a ler outra língua, a versão em espanhol prevalece em caso de divergências.",
  ar: "إذا كنت تقرأ بلغة أخرى، فتسود النسخة الإسبانية في حال وجود تعارض.",
  ru: "Если вы читаете на другом языке, при расхождениях приоритет имеет испанская версия.",
  zh: "如与西班牙语版本存在不一致，以西班牙语版本为准。",
  ko: "다른 언어로 읽는 경우, 불일치 시 스페인어 버전이 우선합니다.",
};

export default function LegalLayout({ title, children, locale }:{ title:string; children:React.ReactNode; locale?: string }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-xs text-white/60 mb-6">
        {NOTICE[locale as Locale]} {locale !== "es" && <span className="block">{TRANSL_NOTE[locale as Locale]}</span>}
      </p>
      <article className="prose prose-invert prose-sm sm:prose-base">
        {children}
      </article>
      <hr className="my-8 border-white/10" />
      <div className="text-xs text-white/60">
        <div>{COMPANY.name} · {COMPANY.address}</div>
        <div>NIF/VAT: {COMPANY.vat}</div>
        <div className="mt-2 flex gap-3">
          <Link href="/es/terms" className="hover:underline">Términos</Link>
          <Link href="/es/privacy" className="hover:underline">Privacidad</Link>
          <Link href="/es/cookies" className="hover:underline">Cookies</Link>
          <Link href="/es/dmca" className="hover:underline">DMCA</Link>
        </div>
      </div>
    </div>
  );
}
