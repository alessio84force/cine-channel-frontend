"use client";
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  images: string[]
  intervalMs?: number
  fadeMs?: number
  className?: string
}

export default function RotatingBackdrop({
  images,
  intervalMs = 4000,
  fadeMs = 900,
  className = '',
}: Props) {
  const pics = useMemo(
    () => Array.from(new Set(images)).filter(Boolean),
    [images]
  )

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (pics.length <= 1) return
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % pics.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [pics.length, intervalMs])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {pics.map((src, i) => (
        <div
          key={src + i}
          className="absolute inset-0"
          style={{
            opacity: i === idx ? 1 : 0,
            transition: `opacity ${fadeMs}ms ease-in-out`,
          }}
          aria-hidden={i !== idx}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  )
}
