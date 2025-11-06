import AccountClient from "@/components/AccountClient";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default async function Page({ params }:{ params: Promise<{ locale: Locale }>}) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;
  const t = dict[lang] || dict.es;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{t.navbar.login}</h1>
      <AccountClient />
    </main>
  );
}
