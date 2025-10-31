import Link from "next/link";
import { dict, LOCALES, type Locale } from "@/i18n/dict";

export default async function ExplorePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const lang = (LOCALES.includes(locale) ? locale : "es") as Locale;
  const t = dict[lang] || dict.es;

  const channels = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `${t.labels.channel} ${i + 1}`,
  }));

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{t.trending.title}</h1>
      <p className="text-white/60 mb-8">{t.trending.desc}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {channels.map((c) => (
          <div key={c.id} className="rounded-xl border border-white/15 bg-neutral-900/30 p-3 flex flex-col">
            <div className="aspect-video bg-neutral-800/40 rounded mb-3" />
            <div className="text-sm font-medium">{c.name}</div>
            <div className="mt-auto flex gap-2 pt-3">
              <button className="px-3 py-2 bg-white text-neutral-900 rounded">{t.actions.viewChannel}</button>
              <button className="px-3 py-2 border border-white/20 rounded">{t.actions.subscribe}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90"
          href={`/${lang}/creator/onboarding`}
        >
          {t.navbar.create}
        </Link>
      </div>
    </main>
  );
}
