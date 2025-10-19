'use client'

import { useEffect } from 'react'

export default function SplashIntro({ onDone }: { onDone: () => void }) {
  const DURATION = 1800

  useEffect(() => {
    console.log('[SPLASH] mount, will hide in', DURATION, 'ms')
    const t = setTimeout(() => {
      console.log('[SPLASH] timeout -> onDone()')
      onDone()
    }, DURATION)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ backgroundColor: '#000' }}
      aria-hidden="true"
    >
      {/* DEBUG frame per vedere che lo splash c'è */}
      <div style={{
        position: 'absolute', inset: 0, outline: '2px dashed rgba(255,255,255,0.15)', pointerEvents: 'none'
      }} />

      <div className="flex flex-col items-center select-none">
        {/* STELLA ORO GRANDE */}
        <svg
          width="420" height="420" viewBox="0 0 100 100" aria-hidden="true"
          className="animate-star"
        >
          <defs>
            <radialGradient id="goldRad" cx="50%" cy="50%" r="60%">
              <stop offset="0%"  stopColor="#FFF1BA"/>
              <stop offset="35%" stopColor="#FFD77A"/>
              <stop offset="100%" stopColor="#E3A018"/>
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b"/>
              <feMerge>
                <feMergeNode in="b"/>
                <feMergeNode in="b"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)">
            {/* corpo stella a 8 punte */}
            <path
              d="M50 5 L57 35 L92 50 L57 65 L50 95 L43 65 L8 50 L43 35 Z"
              fill="url(#goldRad)" stroke="#FFD77A" strokeWidth="0.6"
            />
            {/* highlight */}
            <path
              d="M50 12 L56 35 L80 50 L56 65 L50 88 L44 65 L20 50 L44 35 Z"
              fill="rgba(255,255,255,0.22)"
            />
          </g>
        </svg>

        {/* WORDMARK: bianco con bordo nero spesso */}
        <div className="mt-6 text-center">
          <div className="brand-text">CINE-CHANNEL</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes starIn {
          0%   { transform: scale(0.2); opacity: 0 }
          18%  { transform: scale(1.25); opacity: 1 }
          55%  { transform: scale(1.00); opacity: 1 }
          100% { transform: scale(1.00); opacity: 1 }
        }
        @keyframes fadeOut {
          0% { opacity: 1 }
          100% { opacity: 0 }
        }
        .animate-star { animation: starIn ${DURATION}ms ease-in-out forwards; }
        /* il contenitore sfuma negli ultimi 300ms per un'uscita pulita */
        .fixed { animation: fadeOut 300ms ease-in-out ${DURATION-300}ms forwards; }

        .brand-text {
          color: #fff;
          font-weight: 900;
          letter-spacing: .22em;
          font-size: clamp(26px, 4.6vw, 48px);
          /* bordo nero marcato */
          text-shadow:
            -1.5px -1.5px 0 #000,
             1.5px -1.5px 0 #000,
            -1.5px  1.5px 0 #000,
             1.5px  1.5px 0 #000,
             0      -2px  0 #000,
             0       2px  0 #000,
            -2px     0    0 #000,
             2px     0    0 #000;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-star { animation: none }
          .fixed { animation: none }
        }
      `}</style>
    </div>
  )
}
