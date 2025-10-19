"use client"
import { useMemo } from 'react'
import { useLocale } from '@/lib/locale-client'
import ChannelCard from '@/components/ChannelCard'
import { SAMPLE_ITEMS, slugify } from '@/lib/data'

export default function ExploreClient() {
  const locale = (useLocale() as 'es'|'en'|'fr') || 'es'
  const items = useMemo(() => SAMPLE_ITEMS, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        {locale==='en' ? 'Explore channels'
         : locale==='fr' ? 'Explorer les chaînes'
         : 'Explorar canales'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <ChannelCard
            key={i}
            href={`/${locale}/channel/${slugify(it.title)}`}
            title={it.title}
            category={it.category}
            thumb={it.thumb}
            date={it.date}
            views={it.views}
          />
        ))}
      </div>
    </section>
  )
}
