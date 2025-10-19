"use client";
import { useId } from 'react'

export default function StarLogo({
  className = '',
  title = 'Cine-Channel',
}: {
  className?: string
  title?: string
}) {
  const gid = useId().replace(/:/g,'') // id unico per i <defs>
  const gradId = `goldGrad_${gid}`
  const shineId = `goldShine_${gid}`

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%"   stopColor="#7f5d00"/>
          <stop offset="18%"  stopColor="#b67e10"/>
          <stop offset="45%"  stopColor="#f5d76e"/>
          <stop offset="58%"  stopColor="#d4af37"/>
          <stop offset="100%" stopColor="#8e6b07"/>
        </linearGradient>
        <radialGradient id={shineId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)"/>
          <stop offset="60%" stopColor="rgba(255,255,255,0.0)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.0)"/>
        </radialGradient>
      </defs>

      {/* stella a 5 punte */}
      <path
        d="M50 6 L61.8 34.5 L92 38.2 L68 58.5 L74.5 88.5 L50 72 L25.5 88.5 L32 58.5 L8 38.2 L38.2 34.5 Z"
        fill={`url(#${gradId})`}
        stroke="#c89b2b"
        strokeWidth="1.2"
      />
      {/* highlight morbido */}
      <ellipse cx="42" cy="35" rx="22" ry="16" fill={`url(#${shineId})`} />
    </svg>
  )
}
