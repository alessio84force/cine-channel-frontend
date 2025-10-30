"use client";

import clsx from "clsx";

export default function Wordmark({
  className = "",
  withStars = true,
}: { className?: string; withStars?: boolean }) {
  return (
    <svg
      viewBox="0 0 1600 240"
      role="img"
      aria-label="CINE-CHANNEL"
      className={clsx("isolate mix-blend-normal h-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "none", opacity: 1, transform: "translateZ(0)" }}
    >
      <defs>
        {/* Gradiente oro semplice */}
        <linearGradient id="gold-3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6db" />
          <stop offset="14%" stopColor="#f6da7b" />
          <stop offset="32%" stopColor="#d4af37" />
          <stop offset="55%" stopColor="#8c6a10" />
          <stop offset="72%" stopColor="#d4af37" />
          <stop offset="88%" stopColor="#f3cf6b" />
          <stop offset="100%" stopColor="#a97c15" />
        </linearGradient>

        {/* Stella base */}
        <symbol id="cineStar" viewBox="0 0 190 190">
          <path d="M95 10 L113 70 L175 70 L125 105 L143 165 L95 130 L47 165 L65 105 L15 70 L77 70 Z" />
        </symbol>
      </defs>

      {/* TESTO: bordo nero + riempimento dorato, NESSUNA OMBRA */}
      <text
        x="800"
        y="148"
        textAnchor="middle"
        fontFamily="Cinzel, 'Trajan Pro', serif"
        fontWeight="800"
        fontSize="132"
        fill="url(#gold-3d)"
        stroke="#000"
        strokeWidth="3"
        strokeLinejoin="round"
        style={{ paintOrder: "stroke fill" }}
        letterSpacing="6"
      >
        CINE-CHANNEL
      </text>

      {/* STELLE AGLI ESTREMI (senza filtri né ombre) */}
      {withStars && (
        <>
          <use href="#cineStar" x="20" y="12" width="190" height="190" fill="url(#gold-3d)" />
          <use href="#cineStar" x="1390" y="12" width="190" height="190" fill="url(#gold-3d)" />
        </>
      )}
    </svg>
  );
}
