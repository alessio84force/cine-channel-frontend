type Props = { withStars?: boolean; className?: string };

export default function Wordmark({ withStars = false, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1600 240"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="CINE-CHANNEL"
      className={`isolate mix-blend-normal h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "none", opacity: 1, transform: "translateZ(0)" }}
    >
      <defs>
        <linearGradient id="gold-3d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6db" />
          <stop offset="14%" stopColor="#f6da7b" />
          <stop offset="32%" stopColor="#d4af37" />
          <stop offset="55%" stopColor="#8c6a10" />
          <stop offset="72%" stopColor="#d4af37" />
          <stop offset="88%" stopColor="#f3cf6b" />
          <stop offset="100%" stopColor="#a97c15" />
        </linearGradient>
        <filter id="bevel" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.9" specularExponent="22" lightingColor="#ffffff" result="spec">
            <fePointLight x="-200" y="-240" z="260" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          <feMerge>
            <feMergeNode in="specOut" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="specular" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="52%" stopColor="#ffffff" stopOpacity="0.50" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <mask id="softHighlight">
          <rect width="1600" height="240" fill="url(#specular)" />
        </mask>
        <symbol id="cineStar" viewBox="0 0 190 190">
          <path d="M95 10 L113 70 L175 70 L125 105 L143 165 L95 130 L47 165 L65 105 L15 70 L77 70 Z" />
        </symbol>
      </defs>

      {/* TESTO */}
      <g>
        <text x="800" y="150" textAnchor="middle" fontFamily="Cinzel, 'Trajan Pro', serif" fontWeight="800" fontSize="132" fill="#000" opacity="0.30">CINE-CHANNEL</text>
        <text x="800" y="148" textAnchor="middle" fontFamily="Cinzel, 'Trajan Pro', serif" fontWeight="800" fontSize="132" fill="none" stroke="#3f2a06" strokeWidth="6" strokeLinejoin="round">CINE-CHANNEL</text>
        <text x="800" y="148" textAnchor="middle" fontFamily="Cinzel, 'Trajan Pro', serif" fontWeight="800" fontSize="132" fill="url(#gold-3d)" filter="url(#bevel)" letterSpacing="6">CINE-CHANNEL</text>
        <text x="800" y="148" textAnchor="middle" fontFamily="Cinzel, 'Trajan Pro', serif" fontWeight="800" fontSize="132" fill="url(#specular)" mask="url(#softHighlight)">CINE-CHANNEL</text>
      </g>

      {/* STELLE SOLO AGLI ESTREMI (posizione assoluta, nessuna trasformazione ereditabile) */}
      {withStars && (
        <>
          {/* Sinistra: x=20, y=25 (star 190px di larghezza => resta dentro al viewBox) */}
          <use href="#cineStar" x="20" y="25" width="190" height="190" fill="url(#gold-3d)" filter="url(#bevel)" />
          <use href="#cineStar" x="20" y="25" width="190" height="190" fill="none" stroke="#3f2a06" strokeWidth="3" />

          {/* Destra: 1600 - 190 - 20 = 1390 */}
          <use href="#cineStar" x="1390" y="25" width="190" height="190" fill="url(#gold-3d)" filter="url(#bevel)" />
          <use href="#cineStar" x="1390" y="25" width="190" height="190" fill="none" stroke="#3f2a06" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}
