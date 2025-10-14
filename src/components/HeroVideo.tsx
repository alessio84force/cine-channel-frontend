'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type L = 'es'|'en'|'fr'
const LABELS: Record<L, { h1:string; sub:string; explore:string; create:string }> = {
  es: { h1:'CINE-CHANNEL', sub:'La plataforma para gamers, streamers, videobloggers y cineastas.',
        explore:'Explorar', create:'Crear canal' },
  en: { h1:'CINE-CHANNEL', sub:'The platform for gamers, streamers, vloggers and filmmakers.',
        explore:'Explore', create:'Create channel' },
  fr: { h1:'CINE-CHANNEL', sub:'La plateforme pour gamers, streamers, vidéoblogueurs et cinéastes.',
        explore:'Explorer', create:'Créer une chaîne' },
}

function useLocale(): L {
  const p = (usePathname() || '/').replace(/\/+$/,'') || '/'
  const seg = p.split('/').filter(Boolean)[0]
  return (seg === 'en' || seg === 'fr' || seg === 'es') ? (seg as L) : 'es'
}

export default function HeroVideo() {
  const locale = useLocale()
  const t = LABELS[locale]

  const reduce = typeof window !== 'undefined'
    ? window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const poster = '/images/immaginecine3.jpeg'
  const mp4    = '/hero/loop.mp4'   // metti i file in public/hero/
  const webm   = '/hero/loop.webm'

  return (
    <section className="relative w-full h-[72vh] min-h-[480px] overflow-hidden">
      {!reduce ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={webm} type="video/webm" />
          <source src={mp4}  type="video/mp4" />
          <img src={poster} alt="" className="w-full h-full object-cover" />
        </video>
      ) : (
        <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest">{t.h1}</h1>
        <p className="mt-3 text-lg md:text-xl text-white/85 max-w-3xl">{t.sub}</p>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/${locale}/creator/onboarding`}
            prefetch
            className="rounded-full px-5 py-2.5 bg-white text-neutral-900 hover:opacity-90 font-medium"
          >
            {t.create}
          </Link>
          <Link
            href={`/${locale}/explore`}
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
