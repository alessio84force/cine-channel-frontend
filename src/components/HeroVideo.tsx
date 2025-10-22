'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Wordmark from '@/components/Wordmark'

const FRAMES = ['/hero-1.jpg','/hero-2.jpg','/hero-3.jpg','/hero-4.jpg']

export default function HeroVideo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % FRAMES.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-black/60">
      {FRAMES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={idx === 0}
          className="absolute inset-0 object-cover transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0, filter: 'brightness(0.8)' }}
        />
      ))}

      {/* Layer centrale con wordmark molto grande */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="hero-wordmark"><Wordmark /></div>
      </div>
    </section>
  )
}
