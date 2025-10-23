"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Wordmark from '@/components/Wordmark'

const FRAMES = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg']

export default function HeroVideo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % FRAMES.length), 5000) // 5s
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full h-[64vh] min-h-[440px] overflow-hidden bg-black">
      {/* Backdrop frames */}
      {FRAMES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={idx === 0}
          sizes="100vw"
          className="absolute inset-0 object-cover transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0, filter: 'brightness(0.84)' }}
        />
      ))}

      {/* Marchio centrale (responsive, look cinema) */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none px-4">
        <div className="hero-wordmark">
          <Wordmark className="w-full h-auto mx-auto" />
        </div>
      </div>

      {/* Vignetta soft per contrasto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/45" />
    </section>
  )
}
