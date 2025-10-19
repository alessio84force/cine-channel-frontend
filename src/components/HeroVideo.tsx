// src/components/HeroVideo.tsx
'use client'
import RotatingBackdrop from '@/components/RotatingBackdrop'
import Wordmark from '@/components/Wordmark'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-client'
import { UI } from '@/lib/ui'

export default function HeroVideo() {
  const loc = (useLocale() as 'es'|'en'|'fr') || 'es'
  const t = UI[loc]

  return (
    <section className="relative w-full h-[72vh] min-h-[480px] overflow-hidden">
      <RotatingBackdrop
        images={[
          '/images/immaginecine1.jpeg',
          '/images/immaginecine2.jpeg',
          '/images/immaginecine3.jpeg',
          '/images/immaginepod3.jpeg',
        ]}
        intervalMs={4000}
        fadeMs={900}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
        <h1 className="sr-only">Cine-Channel</h1>
        <div className="title-outline"><Wordmark size="lg" /></div>
        <p className="mt-3 text-lg md:text-xl text-white/85 max-w-3xl">
          La plataforma para gamers, streamers, videobloggers y cineastas.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/${loc}/creator/onboarding`}
            prefetch
            className="rounded-full px-5 py-2.5 bg-white text-neutral-900 hover:opacity-90 font-medium"
          >
            {t.create_channel}
          </Link>
          <Link
            href={`/${loc}/explore`}
            prefetch
            className="rounded-full px-5 py-2.5 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 font-medium"
          >
            {t.explore}
          </Link>
        </div>
      </div>
    </section>
  )
}
