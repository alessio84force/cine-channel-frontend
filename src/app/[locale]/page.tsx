import HeroVideo from '@/components/HeroVideo'
import { UI } from '@/lib/ui'

export default async function HomeLocale({ params }: { params: Promise<{ locale: 'es'|'en'|'fr'|'it'|'de'|'pt' }>}) {
  const { locale } = await params
  const t = UI[locale]
  return (
    <>
      <HeroVideo />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold">{t.trending}</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i)=>(
            <div key={i} className="relative aspect-video rounded-xl bg-white/[0.06] ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
