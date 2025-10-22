import React from 'react';

type Props = { className?: string };

export default function Wordmark({ className = '' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CINE-CHANNEL"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="wm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9e7b1" />
          <stop offset="45%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a37c1a" />
        </linearGradient>
        <filter id="wm-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#wm-shadow)">
        <path
          fill="url(#wm-gold)"
          d="M95 20 L112 78 L172 78 L124 110 L140 168 L95 132 L50 168 L66 110 L18 78 L78 78 Z"
        />
        <text
          x="210" y="140"
          fontFamily="Cinzel, 'Trajan Pro', serif"
          fontWeight="700"
          fontSize="132"
          letterSpacing="6"
          fill="url(#wm-gold)"
          stroke="#6b4e12"
          strokeWidth="2"
          paintOrder="stroke"
        >
          CINE-CHANNEL
        </text>
      </g>
    </svg>
  );
}
