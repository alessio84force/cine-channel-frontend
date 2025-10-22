import Link from "next/link"
import { getAllChannels } from "@/lib/channel-store"
import { t, fmtNumber, type Locale } from "@/lib/i18n"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

function Card({ locale, ch }: { locale: Locale, ch: any }) {
  const i18n = t(locale)
  const href = `/${locale}/channel/${ch.slug}`
  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
      <div className="aspect-[16/9] bg-white/5">
        {ch.coverUrl
          ? <img src={ch.coverUrl} alt={ch.name} className="w-full h-full object-cover" />
          : <div className="w-full h-full grid place-items-center text-white/60 text-5xl">📺</div>
        }
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{ch.name}</h3>
        <p className="mt-1 text-white/70 text-sm line-clamp-2">{ch.description || t(locale).channel.descriptionFallback}</p>
        <div className="mt-3 flex items-center gap-4 text-white/70 text-sm">
          <span>{fmtNumber(ch.viewCount, locale)} {i18n.explore.views}</span>
          <span>•</span>
          <span>{fmtNumber(ch.subscriberCount, locale)} {i18n.explore.subscribers}</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Link href={href} className="rounded-md bg-white text-neutral-900 px-3 py-1.5 hover:opacity-90">
            {i18n.explore.view}
          </Link>
          <Link href={`${href}?subscribe=1`} className="rounded-md ring-1 ring-white/20 px-3 py-1.5 hover:bg-white/10">
            {i18n.explore.subscribe}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default async function ExplorePage({ params }: { params: Promise<{ locale: Locale }>}) {
  const { locale } = await params
  const i18n = t(locale)
  const channels = await getAllChannels()

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{i18n.explore.title}</h1>

      {channels.length === 0 ? (
        <div className="mt-10 text-white/70">
          {i18n.explore.empty}{" "}
          <Link href={`/${locale}/creator/onboarding`} className="underline">
            {i18n.explore.createFirst}
          </Link>.
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch) => <Card key={ch.id} locale={locale} ch={ch} />)}
        </div>
      )}
    </main>
  )
}
