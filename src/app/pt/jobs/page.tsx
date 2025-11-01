import LegalLayout from "@/components/legal/LegalLayout";
import { JOBS_2025 } from "@/legal/texts/misc";
import { type Locale } from "@/i18n/dict";

const LANG = "pt" as Locale;

const TITLES: Record<Locale,string> = {
  en:"Careers", es:"Empleo", it:"Lavoro", fr:"Emplois", de:"Jobs", pt:"Emprego",
  ar:"وظائف", ru:"Вакансии", zh:"招聘", ko:"채용"
};

export default function Page() {
  const html = (JOBS_2025 as any)[LANG] || (JOBS_2025 as any).es;
  return (
    <LegalLayout title={TITLES[LANG]}>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
}
