import React from "react";

type Props = {
  className?: string;
  withStars?: boolean;
  title?: string;
};

export default function Wordmark({
  className = "",
  withStars = true,
  title = "CINE-CHANNEL",
}: Props) {
  const VIEW_W = 1200;
  const VIEW_H = 220;
  const BASE_Y = 150;        // baseline del testo
  const START_X = withStars ? 160 : 24; // testo più a destra se ci sono le stelle

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Oro metallico multi-stop (chat3) */}
        <linearGradient id="gold-3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#fff4b0"/>
          <stop offset="15%" stopColor="#ffd36e"/>
          <stop offset="55%" stopColor="#f0b63a"/>
          <stop offset="72%" stopColor="#d4af37"/>
          <stop offset="100%" stopColor="#8c6a10"/>
        </linearGradient>

        {/* Leggera ombra come profondità */}
        <filter id="wm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* Stelle opzionali a sinistra (doppia stella come in chat3) */}
      {withStars && (
        <g transform="translate(26,28)" filter="url(#wm-shadow)">
          <path
            d="M50 2 L61 38 L98 38 L68 59 L79 95 L50 74 L21 95 L32 59 L2 38 L39 38 Z"
            fill="url(#gold-3d)" stroke="#1b1b1b" strokeWidth="2" paintOrder="stroke"
          />
          <g transform="translate(66,-6) scale(0.88)">
            <path
              d="M50 2 L61 38 L98 38 L68 59 L79 95 L50 74 L21 95 L32 59 L2 38 L39 38 Z"
              fill="url(#gold-3d)" stroke="#1b1b1b" strokeWidth="2" paintOrder="stroke"
            />
          </g>
        </g>
      )}

      {/* TESTO UNICO (niente triplicazioni) */}
      <g transform={`translate(${START_X}, ${BASE_Y})`}>
        <text
          x="0" y="0"
          fontFamily="Cinzel, 'Trajan Pro', serif"
          fontWeight="700"
          fontSize="132"
          letterSpacing="6"
          fill="url(#gold-3d)"
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
