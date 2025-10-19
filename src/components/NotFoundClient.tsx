'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-client'
import { UI } from '@/lib/ui'

export default function NotFound() {
  const loc = (useLocale() as 'es' | 'en' | 'fr') || 'es'
  const t = UI[loc]
  const msg =
    loc === 'en'
      ? 'Page not found'
      : loc === 'fr'
      ? 'Page introuvable'
      : 'Página no encontrada'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="mt-3 text-white/80">{msg}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href={`/${loc}`}
          className="rounded-md px-4 py-2 bg-white text-neutral-900 hover:opacity-90"
        >
          {t.explore}
        </Link>
        <Link
          href={`/${loc}/contact`}
          className="rounded-md px-4 py-2 ring-1 ring-white/10 hover:bg-white/10"
        >
          {t.support}
        </Link>
      </div>
    </main>
  )
}
