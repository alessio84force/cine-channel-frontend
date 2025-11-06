import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default async function Page({ params }:{ params: Promise<{ locale: Locale }>}) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;
  const t = dict[lang] || dict.es;

  const jar = await cookies();
  const email = jar.get("cc_user_email")?.value || "";
  if (!email) {
    redirect(`/${lang}/signin?callbackUrl=/${lang}/dashboard`);
  }
  const short = email.split("@")[0].slice(0,4).toUpperCase();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-4">{t.navbar.explore}</h1>
      <p className="text-white/70 mb-8">Bienvenido, <span className="font-mono">{short}</span> — ({email})</p>
      <div className="grid gap-4">
        <a href={`/${lang}/account`} className="rounded-xl bg-white text-neutral-900 px-4 py-2 w-max">Cuenta</a>
      </div>
    </main>
  );
}
