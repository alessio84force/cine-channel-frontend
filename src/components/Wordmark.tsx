import React from "react";

type Props = {
  className?: string;       // controlla dimensione (es. w-32, w-[180px], ecc.)
  title?: string;
  withStars?: boolean;      // se true, stelle ai due estremi
};

export default function Wordmark({
  className = "",
  title = "CINE-CHANNEL",
  withStars = true,
}: Props) {
  const VIEW_W = 1200;
  const VIEW_H = 220;
  const BASE_Y = 150;
  const TEXT_X = 160;       // start del testo
  const LEFT_STAR_X  = 60;  // stella a SINISTRA del testo
  const RIGHT_STAR_X = 1100;// stella a DESTRA del testo

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold-3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#fff4b0"/>
          <stop offset="15%" stopColor="#ffd36e"/>
          <stop offset="55%" stopColor="#f0b63a"/>
          <stop offset="72%" stopColor="#d4af37"/>
          <stop offset="100%" stopColor="#8c6a10"/>
        </linearGradient>
        <filter id="wm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* Stella SINISTRA prima di "CINE" */}
      {withStars && (
        <g transform={`translate(${LEFT_STAR_X}, 35)`} filter="url(#wm-shadow)">
          <path
            d="M50 2 L61 38 L98 38 L68 59 L79 95 L50 74 L21 95 L32 59 L2 38 L39 38 Z"
            fill="url(#gold-3d)" stroke="#1b1b1b" strokeWidth="2" paintOrder="stroke"
          />
        </g>
      )}

      {/* Testo unico */}
      <g transform={`translate(${TEXT_X}, ${BASE_Y})`}>
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

      {/* Stella DESTRA dopo "CHANNEL" */}
      {withStars && (
        <g transform={`translate(${RIGHT_STAR_X}, 35)`} filter="url(#wm-shadow)">
          <path
            d="M50 2 L61 38 L98 38 L68 59 L79 95 L50 74 L21 95 L32 59 L2 38 L39 38 Z"
            fill="url(#gold-3d)" stroke="#1b1b1b" strokeWidth="2" paintOrder="stroke"
          />
        </g>
      )}
    </svg>
  );
}
