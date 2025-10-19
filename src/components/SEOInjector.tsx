"use client";
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import SEOJsonLd from '@/components/SEOJsonLd'

type Channel = {
  name?: string
  description?: string
  avatarUrl?: string
}

export default function SEOInjector() {
  const pathname = usePathname()
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const [channel, setChannel] = useState<Channel | null>(null)

  // Estrai { locale, slug } da /{locale}/channel/{slug}
  const { locale, isHome, isChannel, slug } = useMemo(() => {
    // normalizza: rimuovi eventuale slash finale
    const p = (pathname || '').replace(/\/+$/, '') || '/'
    const parts = p.split('/').filter(Boolean) // ['es','channel','mi-canal'] ...
    const loc = parts[0] || 'es'
    const home = parts.length === 1
    const channelRoute = parts.length >= 3 && parts[1] === 'channel'
    const sl = channelRoute ? parts[2] : undefined
    return { locale: loc, isHome: home, isChannel: channelRoute, slug: sl }
  }, [pathname])

  // Se siamo su una pagina canale, prova a recuperare i dati pubblici per il JSON-LD
  useEffect(() => {
    let cancelled = false
    async function run() {
      if (!isChannel || !slug) { setChannel(null); return }
      try {
        const res = fetch(`/api/channel/public?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' })
        if (!res.ok) return
        const data = res.json()
        if (cancelled) return
        // accetta { channel: {...} } o simile, con fallback
        const ch = data?.channel || data
        setChannel({
          name: ch?.name || slug.replace(/-/g,' '),
          description: ch?.description || 'Canal en Cine-Channel',
          avatarUrl: ch?.avatarUrl || '/icon.svg'
        })
      } catch {
        if (!cancelled) setChannel({
          name: slug.replace(/-/g,' '), description: 'Canal en Cine-Channel', avatarUrl: '/icon.svg'
        })
      }
    }
    run()
    return () => { cancelled = true }
  }, [isChannel, slug])

  // JSON-LD per home (WebSite)
  if (isHome) {
    const json = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Cine-Channel',
      url: `${base}/${locale}`,
      inLanguage: locale,
    }
    return <SEOJsonLd json={json} />
  }

  // JSON-LD per pagina canale (Organization)
  if (isChannel && slug) {
    const json = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: channel?.name || slug.replace(/-/g,' '),
      url: `${base}/${locale}/channel/${slug}`,
      logo: channel?.avatarUrl || '/icon.svg',
      description: channel?.description || 'Canal en Cine-Channel'
    }
    return <SEOJsonLd json={json} />
  }

  return null
}
