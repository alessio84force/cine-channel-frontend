import * as React from 'react'

type Props = React.SVGProps<SVGSVGElement> & { className?: string }

/**
 * StarLogo minimal, professionale e responsive.
 * - Nessun commento HTML (solo TSX valido).
 * - Usa "currentColor" per il riempimento: lo puoi colorare via CSS/Tailwind.
 *   Esempio: <div className="text-white"><StarLogo/></div> oppure "text-amber-400".
 */
export default function StarLogo({ className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Stella"
      className={className}
      {...rest}
    >
      <polygon
        points="50,5 61.8,35.1 94.5,38.2 69.7,58.6 77.6,90 50,72.5 22.4,90 30.3,58.6 5.5,38.2 38.2,35.1"
        fill="currentColor"
      />
    </svg>
  )
}
