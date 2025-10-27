import React from "react";

type Props = {
  className?: string;
  withStars?: boolean;
  title?: string;
};

export default function Wordmark({ className = "", withStars = true, title = "Cine Channel" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 220"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wm-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd36e"/>
          <stop offset="55%" stopColor="#f0b63a"/>
          <stop offset="100%" stopColor="#a37c1a"/>
        </linearGradient>

        <filter id="wm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* Stella sinistra opzionale */}
      {withStars && (
        <g transform="translate(24, 24)" filter="url(#wm-shadow)">
          <path
            d="M50 2 L61 38 L98 38 L68 59 L79 95 L50 74 L21 95 L32 59 L2 38 L39 38 Z"
            fill="url(#wm-gold)"
            stroke="#1b1b1b"
            strokeWidth="2"
            paintOrder="stroke"
          />
        </g>
      )}

      {/* Testo UNICO del wordmark: niente duplicati */}
      <g transform="translate( withStars ? 140 : 40, 150)">
        <text
          x="0"
          y="0"
          fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
          fontWeight="700"
          fontSize="118"
          letterSpacing="6"
          fill="url(#wm-gold)"
          stroke="#1b1b1b"
          strokeWidth="2"
          paintOrder="stroke"
          filter="url(#wm-shadow)"
        >
          CINE-CHANNEL
        </text>
      </g>
    </svg>
  );
}
