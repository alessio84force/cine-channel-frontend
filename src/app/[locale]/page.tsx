import Wordmark from "@/components/Wordmark";
import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";
import { UI, type L } from "@/lib/ui";

export default async function HomePage({ params }: { params: Promise<{ locale: L }> }) {
  const { locale } = await params;
  const t = UI[locale];

  const placeholders = Array.from({ length: 8 });

  return (
    <main>
  <h1 className="mb-4">
  <Wordmark locale={locale} withStars className="w-[480px] h-auto mx-auto"  withStars/>
</h1>
      <HeroVideo />
      <section className="max-w-6xl mx-auto px-6 pb-12 pt-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">{t.home.trendingTitle}</h2>
            <p className="text-white/70 mt-1">{t.home.trendingSubtitle}</p>
          </div>
          <Link
            href={`/${locale}/creator/onboarding`}
            className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90"
          >
            {t.home.ctaCreate}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-dashed border-white/15 bg-neutral-900/30 overflow-hidden"
            >
              <div className="aspect-video bg-neutral-800/40" />
              <div className="px-3 py-2 text-xs text-white/60">Coming soon</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}