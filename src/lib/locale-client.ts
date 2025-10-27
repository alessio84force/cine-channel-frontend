'use client'
import { usePathname } from 'next/navigation'
import type { Locale } from './strings'

const LOCALES = new Set<Locale>(['es','en','fr','it','de','pt','ar'])
export function useLocale(): Locale {
  const p = (usePathname() || '/').replace(/\/+$/,'') || '/'
  const seg = p.split('/').filter(Boolean)[0]
  return (LOCALES.has(seg as Locale) ? (seg as Locale) : 'es')
}
