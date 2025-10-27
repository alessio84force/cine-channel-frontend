"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Wordmark from '@/components/Wordmark'
import { UI, type L } from '@/lib/ui'

const FRAMES = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg']

export default function HeroVideo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % FRAMES.length), 5000) // 5s
    return () => clearInterval(id)
  }, [])

  const params = useParams<{ locale?: string }>()
  const locale = (params?.locale as L) || 'es'
  const t = UI[locale]

  return (
    <section className="relative w-full h-[64vh] min-h-[440px] overflow-hidden bg-black">
      {/* Contenitore centrato e più stretto (regola la max width se vuoi) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative h-full w-[min(100%,1100px)]">
          {FRAMES.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="(min-width:1280px) 1100px, 100vw"
              className="absolute inset-0 object-cover transition-opacity duration-700"
              style={{ opacity: i === idx ? 1 : 0, filter: 'brightness(0.84)' }}
            />
          ))}
        </div>
      </div>

      {/* Marchio centrale + TAGLINE */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none px-4">
        <div className="text-center">
          <div className="hero-wordmark mx-auto">
            <Wordmark className="w-full h-auto mx-auto" />
          </div>
          <p className="mt-4 text-white/90 text-2xl md:text-4xl font-medium drop-shadow-md mx-auto tagline-boom tagline-boom">
            {t.home.tagline}
          </p>
        </div>
      </div>

      {/* Vignetta soft per contrasto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/45" />
    </section>
  )
}
