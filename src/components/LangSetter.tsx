"use client";
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SUPPORTED = new Set(['en','es','fr'])

export default function LangSetter() {
  const pathname = usePathname() || '/'
  useEffect(() => {
    // Prende il primo segmento (/es/..., /en/..., /fr/...)
    const seg = pathname.split('/').filter(Boolean)[0]
    const lang = SUPPORTED.has(seg) ? seg : 'es'
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', lang)
    }
  }, [pathname])
  return null
}
