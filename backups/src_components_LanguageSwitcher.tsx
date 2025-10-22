'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LOCALES = ['es','en','fr','it','de','pt'] as const
type L = typeof LOCALES[number]

function swapLocale(pathname: string, target: L) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${target}`
  if (LOCALES.includes(parts[0] as L)) parts[0] = target
  else parts.unshift(target)
  return '/' + parts.join('/')
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/es'
  const current = (() => {
    const seg = pathname.split('/').filter(Boolean)[0]
    return (LOCALES.includes(seg as L) ? (seg as L) : 'es') as L
  })()

  return (
    <div className="inline-flex gap-1 rounded-md bg-white/5 ring-1 ring-white/10 p-1">
      {LOCALES.map((l) => {
        const active = l === current
        return (
          <Link
            key={l}
            href={swapLocale(pathname, l)}
            className={[
              'px-2 py-1 rounded-md text-xs uppercase tracking-wide',
              active ? 'bg-white text-neutral-900' : 'text-white/80 hover:bg-white/10'
            ].join(' ')}
          >
            {l}
          </Link>
        )
      })}
    </div>
  )
}
