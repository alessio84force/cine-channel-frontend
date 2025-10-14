'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const LOCALES = ['es','en','fr'] as const
type L = typeof LOCALES[number]

function splitLocale(pathname: string): { locale: L; rest: string } {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/'
  const parts = clean.split('/').filter(Boolean) // ["es","..."]
  const maybe = parts[0]
  const isLocale = (LOCALES as readonly string[]).includes(maybe || '')
  const locale = (isLocale ? maybe : 'es') as L
  const rest = '/' + (isLocale ? parts.slice(1) : parts).join('/')
  return { locale, rest: rest === '/' ? '' : rest }
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const search = useSearchParams()
  const { locale: current, rest } = splitLocale(pathname)
  const qs = search?.toString()
  const suffix = qs && qs.length ? `?${qs}` : ''

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-1">
      {LOCALES.map((loc) => {
        const href = `/${loc}${rest}${suffix}`
        const active = loc === current
        return (
          <Link
            key={loc}
            href={href}
            prefetch
            lang={loc}
            hrefLang={loc}
            aria-current={active ? 'page' : undefined}
            className={
              active
                ? 'rounded-full px-2.5 py-1 text-xs font-medium bg-white text-neutral-900'
                : 'rounded-full px-2.5 py-1 text-xs font-medium bg-white/5 ring-1 ring-white/10 hover:bg-white/10'
            }
          >
            {loc.toUpperCase()}
          </Link>
        )
      })}
    </nav>
  )
}
