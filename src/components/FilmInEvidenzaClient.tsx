'use client'

import { useLocale } from '@/lib/locale-client'

export default function FilmInEvidenzaClient() {
  const loc = (useLocale() as 'es'|'en'|'fr') || 'es'
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold">
        {loc === 'en' ? 'Featured Films' : loc === 'fr' ? 'Films à la une' : 'Películas destacadas'}
      </h1>
      <p className="mt-4 text-white/70">
        {loc === 'en'
          ? 'This section will showcase the most relevant films soon.'
          : loc === 'fr'
          ? 'Cette section présentera bientôt les films les plus pertinents.'
          : 'Esta sección mostrará pronto las películas más destacadas.'}
      </p>
    </main>
  )
}
