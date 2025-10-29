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
    <section className="text-6xl md:text-7xl mx-auto">
      {/* Contenitore centrato e più stretto (regola la max width se vuoi) */}
      <div className="text-6xl md:text-7xl mx-auto">
        <div className="text-6xl md:text-7xl mx-auto">
          {FRAMES.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="(min-width:1280px) 1100px, 100vw"
              className="text-6xl md:text-7xl mx-auto"
              style={{ opacity: i === idx ? 1 : 0, filter: 'brightness(0.84)' }}
            />
          ))}
        
      <div className="mt-4 text-center text-xl md:text-2xl leading-tight">
        <span className="gold-text gold-rise">La plataforma para gamers, streamers, videobloggers e cineastas</span>
            <div className="mt-1 text-white/90">Vive una experiencia premium</div>
      </span></div>
    </div>
      </div>

      {/* Marchio centrale + TAGLINE */}
      <div className="text-6xl md:text-7xl mx-auto">
        <div className="text-6xl md:text-7xl mx-auto">  <p className="text-6xl md:text-7xl mx-auto">
            {t.home.tagline}
          </p>
        </div>
      </div>

      {/* Vignetta soft per contrasto */}
      <div className="text-6xl md:text-7xl mx-auto" />
    </section>
  )
}
