import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate h-[70vh] md:h-[80vh] overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20" />
        <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <div className="w-full flex justify-center">
            <Wordmark withStars className="w-[720px] md:w-[880px] h-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" />
          </div>
          <div className="text-center text-lg md:text-2xl leading-snug">
            <span className="gold-text gold-rise">La plataforma para gamers, streamers, videobloggers e cineastas</span>
            <div className="mt-1 text-white/90">Vive una experiencia premium</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12 pt-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contenido de tendencia</h2>
            <p className="text-white/70 mt-1">
              Explora lo que está destacando ahora. Cuando crees tu canal, aquí aparecerán tus imágenes y vídeos.
            </p>
          </div>
          <Link
            className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90"
            href="/es/creator/onboarding"
          >
            Crear canal
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
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
