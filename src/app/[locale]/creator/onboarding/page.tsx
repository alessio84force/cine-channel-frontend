import OnboardingForm from './ui/OnboardingForm'
import { t, type Locale } from '@/lib/i18n'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default async function OnboardingPage({ params }: { params: Promise<{ locale: Locale }>}) {
  const { locale } = await params
  const i18n = t(locale)
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{i18n.onboarding.title}</h1>
      <p className="mt-2 text-white/70">{i18n.onboarding.intro}</p>
      <div className="mt-8">
        <OnboardingForm locale={locale} />
      </div>
    </main>
  )
}
