"use client";

import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Wordmark from '@/components/Wordmark'

const LOCALES = new Set(['es','en','fr'])

function useLocaleFromPathname() {
  const pathname = usePathname() || '/'
  const seg = pathname.split('/').filter(Boolean)[0] || 'es'
  return (LOCALES.has(seg) ? seg : 'es') as 'es'|'en'|'fr'
}

export default function NavBar() {
  const locale = useLocaleFromPathname()

  const LABELS: Record<'es'|'en'|'fr',{explore:string; create:string}> = {
    es: { explore:'Explorar',  create:'Crear canal' },
    en: { explore:'Explore',   create:'Create channel' },
    fr: { explore:'Explorer',  create:'Créer une chaîne' },
  }

  const t = LABELS[locale]

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
        <Link href={`/${locale}`} prefetch aria-label="Home" className="shrink-0">
          <Wordmark size="sm" />
        </Link>

        <div className="flex-1" />

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

        <div className="ml-2">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
