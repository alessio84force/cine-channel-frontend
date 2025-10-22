'use client'
import { usePathname } from 'next/navigation'

const TEXTS: Record<string, string> = {
  es: 'Contenido en tendencia',
  en: 'Trending content',
  fr: 'Contenu tendance',
}

export default function TrendingHeading() {
  const path = usePathname() || '/es'
  const locale = (path.split('/')[1] || 'es') as 'es'|'en'|'fr','it','de','pt'
  return <>{TEXTS[locale] ?? TEXTS.es}</>
}
