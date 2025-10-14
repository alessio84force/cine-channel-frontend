'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StarLogo from '@/components/StarLogo'

type L = 'es'|'en'|'fr'

const LABELS: Record<L, { explore:string; create:string; home:string }> = {
  es: { explore: 'Explorar', create: 'Crear canal', home: 'Cine-Channel' },
  en: { explore: 'Explore',  create: 'Create channel', home: 'Cine-Channel' },
  fr: { explore: 'Explorer', create: 'Créer une chaîne', home: 'Cine-Channel' },
}

function useLocale(): L {
  const p = usePathname() || '/'
  const seg = p.split('/').filter(Boolean)[0]
  return (seg === 'en' || seg === 'fr' || seg === 'es') ? seg : 'es'
}

export default function NavBar() {
  const locale = useLocale()
  const t = LABELS[locale]

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-4">
        {/* Brand: stella + nome, link alla home locale */}
        <Link href={`/${locale}`} prefetch className="flex items-center gap-2 text-brand" aria-label={t.home}>
          <StarLogo className="w-6 h-6" />
          <span className="tracking-wide">{t.home}</span>
        </Link>

        <nav className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            href={`/${locale}/explore`}
            prefetch
            className="rounded-full px-3 py-1.5 text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
          >
            {t.explore}
          </Link>
          <Link
            href={`/${locale}/creator/onboarding`}
            prefetch
            className="rounded-full px-3 py-1.5 text-sm bg-white text-neutral-900 hover:opacity-90"
          >
            {t.create}
          </Link>
        </nav>
      </div>
    </header>
  )
}
