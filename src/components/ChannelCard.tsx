"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-client'
import { formatDate, formatViews } from '@/lib/format'

type Cat = 'gamers'|'streamers'|'videobloggers'|'cineastas'

export default function ChannelCard({
  href,
  title,
  category,
  thumb,
  date,
  views,
}: {
  href: string
  title: string
  category: Cat
  thumb: string
  date?: string | Date
  views?: number
}) {
  const locale = (useLocale() as 'es'|'en'|'fr') || 'es'
  const when = date ? formatDate(locale, date) : ''
  const v = typeof views === 'number' ? formatViews(locale, views) : ''
  const viewsLabel = locale === 'en' ? 'views' : locale === 'fr' ? 'vues' : 'vistas'

  return (
    <article className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] group">
      <Link href={href} className="block">
        <div className="relative aspect-video">
          <Image src={thumb} alt={title} fill className="object-cover" />
        </div>
        <div className="p-3">
          <h3 className="font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-white/60 mt-1">
            {category}
            {when ? ` · ${when}` : ''}
            {v ? ` · ${v} ${viewsLabel}` : ''}
          </p>
        </div>
      </Link>
    </article>
  )
}
