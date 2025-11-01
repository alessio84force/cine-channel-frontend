import LegalLayout from "@/components/legal/LegalLayout";
import { JOBS_2025 } from "@/legal/texts/misc";
import { LOCALES, type Locale } from "@/i18n/dict";

const TITLES: Record<Locale,string> = {
  en:"Careers", es:"Empleo", it:"Lavoro", fr:"Emplois", de:"Jobs", pt:"Emprego",
  ar:"وظائف", ru:"Вакансии", zh:"招聘", ko:"채용"
};

export default async function Page({ params }:{ params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;
  const html = (JOBS_2025 as any)[lang] || (JOBS_2025 as any).es;

  return (
    <LegalLayout title={TITLES[lang]}>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
}
