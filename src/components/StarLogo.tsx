import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & { className?: string }

/**
 * StarLogo dorato "metallico".
 * - Responsive: riempie il contenitore (width/height 100% ereditati via className esterna).
 * - Riempimento: gradiente oro multi-stop + leggera texture e specularità.
 * - Nessuna dimensione fissa: usa il box genitore (es. .splash-star { width:100%; height:100%; }).
 */
export default function StarLogo({ className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Stella Cine-Channel"
      className={className}
      {...rest}
    >
      <defs>
        {/* Gradiente oro multi-stop */}
        <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%"   stopColor="#7f5d00" />
          <stop offset="18%"  stopColor="#b67e10" />
          <stop offset="38%"  stopColor="#d4af37" />
          <stop offset="55%"  stopColor="#fff1b0" />
          <stop offset="72%"  stopColor="#d1a441" />
          <stop offset="85%"  stopColor="#ad8325" />
          <stop offset="100%" stopColor="#704f00" />
        </linearGradient>

        {/* Leggerissimo “grain” per effetto metallico */}
        <filter id="goldGrain" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8" result="noise" />
          <feColorMatrix type="saturate" values="0.2" in="noise" result="desat" />
          <feBlend mode="soft-light" in="SourceGraphic" in2="desat" />
        </filter>

        {/* Specularità per highlight */}
        <filter id="goldSpec" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="2" specularConstant="0.6" specularExponent="25" lightingColor="#ffffff" result="spec">
            <fePointLight x="-60" y="-40" z="120" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceGraphic" operator="in" result="specMask" />
          <feComposite in="SourceGraphic" in2="specMask" operator="arithmetic" k1="0" k2="1" k3="0.5" k4="0" />
        </filter>
      </defs>

      {/* Stella a 5 punte */}
      <g filter="url(#goldGrain)">
        <polygon
          points="50,5 61.8,35.1 94.5,38.2 69.7,58.6 77.6,90 50,72.5 22.4,90 30.3,58.6 5.5,38.2 38.2,35.1"
          fill="url(#goldGrad)"
          filter="url(#goldSpec)"
        />
      </g>

      {/* Testo centrale opzionale (disabilitato di default) */}
      {false && (
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontWeight="800"
          fontSize="12"
          letterSpacing=".12em"
          fill="#fff8dc"
          style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,.35)', strokeWidth: 0.6 }}
        >
          CINE-CHANNEL
        </text>
      )}
    </svg>
  )
}
