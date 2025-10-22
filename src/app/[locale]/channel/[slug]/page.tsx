import { notFound } from 'next/navigation'
import { getChannelBySlug } from '@/lib/channel-store'
import Link from 'next/link'
import { t, fmtNumber, type Locale } from '@/lib/i18n'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default async function ChannelPage({ params, searchParams }: {
  params: Promise<{ locale: Locale; slug: string }>,
  searchParams?: Promise<Record<string,string>>
}) {
  const { locale, slug } = await params
  const sp = await (searchParams ?? Promise.resolve({}))
  const i18n = t(locale)
  const channel = await getChannelBySlug(slug)
  if (!channel) return notFound()

  const showSubscribedHint = sp?.subscribe === '1'

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <header className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-white/10 grid place-items-center text-xl font-bold">
          {channel.name.slice(0,1).toUpperCase()}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{channel.name}</h1>
          <p className="text-white/70">{channel.description || i18n.channel.descriptionFallback}</p>
          <div className="mt-2 text-white/70 text-sm flex items-center gap-3">
            <span>{fmtNumber(channel.viewCount, locale)} {i18n.explore.views}</span>
            <span>•</span>
            <span>{fmtNumber(channel.subscriberCount, locale)} {i18n.explore.subscribers}</span>
          </div>
        </div>
      </header>

      {showSubscribedHint && (
        <div className="mt-6 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/30 px-4 py-3 text-emerald-300">
          {i18n.channel.subscribedOK}
        </div>
      )}

      <div className="mt-6">
        <Link
          href={`/${locale}/channel/${channel.slug}?subscribe=1`}
          className="rounded-md bg-white text-neutral-900 px-4 py-2 hover:opacity-90"
        >
          {i18n.explore.subscribe}
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">{i18n.channel.videos}</h2>
        <p className="text-white/60 mt-2">—</p>
      </section>
    </main>
  )
}
