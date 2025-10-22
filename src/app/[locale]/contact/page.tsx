import { t, type Locale } from '@/lib/i18n'
export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }>}) {
  const { locale } = await params
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{t(locale).titles.contact}</h1>
      <p className="mt-2 text-white/70">—</p>
    </main>
  )
}
