import { Suspense } from 'react'
import FilmInEvidenzaClient from '@/components/FilmInEvidenzaClient'

// Disattiva prerender statico per evitare l’errore useLocale
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function Page() {
  return (
    <Suspense fallback={<main className="p-10 text-center">Cargando...</main>}>
      <FilmInEvidenzaClient />
    </Suspense>
  )
}
