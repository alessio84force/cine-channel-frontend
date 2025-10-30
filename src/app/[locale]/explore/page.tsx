import { dict, type Locale } from "@/i18n/dict";
import React from "react";
import { UI, type L } from "@/lib/ui";

export default async function ExplorePage({ params }: { params: Promise<{ locale: L }> }) {
  const { locale } = await params;
  const t = dict[locale] || dict.es;
  const A = (dict[locale] as any)?.actions || (dict.es as any)?.actions || {
    viewChannel: locale === "es" ? "Ver canal" : "View channel",
    subscribe:  locale === "es" ? "Suscribirse" : "Subscribe"
  };

  // Placeholder semplice: sostituisci con i tuoi dati reali se presenti
  const channels = Array.from({ length: 8 }).map((_, i) => ({ id: i, name: `Channel ${i + 1}` }));

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{t.trending.title}</h1>
      <p className="text-white/60 mb-8">{t.trending.desc}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {channels.map((c) => (
          <div key={c.id} className="bg-white/5 rounded-xl p-4 flex flex-col gap-3">
            <div className="h-24 bg-white/10 rounded-lg" />
            <div className="text-sm font-medium">{c.name}</div>
            <div className="mt-auto flex gap-2">
              <button className="px-3 py-2 bg-white text-neutral-900 rounded">{A.viewChannel}</button>
              <button className="px-3 py-2 border border-white/20 rounded">{A.subscribe}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
