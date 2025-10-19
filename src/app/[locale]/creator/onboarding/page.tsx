import CreatorOnboardingClient from '@/components/CreatorOnboardingClient'
import { L } from '@/lib/ui'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc: L = (locale === 'en' || locale === 'fr') ? (locale as L) : 'es'
  return <CreatorOnboardingClient locale={loc} />
}
