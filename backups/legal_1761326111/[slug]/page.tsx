import type { Metadata } from 'next'

type L = 'es'|'en'|'fr'|'it'|'de'|'pt'

const TITLES: Record<L, Record<string,string>> = {
  es: { privacy: 'Política de Privacidad', terms: 'Términos y Condiciones', cookies: 'Política de Cookies' },
  en: { privacy: 'Privacy Policy', terms: 'Terms and Conditions', cookies: 'Cookie Policy' },
  fr: { privacy: 'Politique de Confidentialité', terms: 'Conditions Générales', cookies: 'Politique de cookies' },
  it: { privacy: 'Informativa sulla Privacy', terms: 'Termini e Condizioni', cookies: 'Politica sui Cookie' },
  de: { privacy: 'Datenschutzerklärung', terms: 'Allgemeine Geschäftsbedingungen', cookies: 'Cookie-Richtlinie' },
  pt: { privacy: 'Política de Privacidade', terms: 'Termos e Condições', cookies: 'Política de Cookies' },
}

// (opzionale) SEO base
export async function generateMetadata({ params }: { params: Promise<{ locale:L, slug:string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const title = TITLES[locale]?.[slug] ?? 'Legal'
  return { title }
}

export default async function LegalPage({ params }: { params: Promise<{ locale:L, slug:string }>}) {
  const { locale, slug } = await params
  const t = TITLES[locale] || TITLES.es
  const title = t[slug] ?? 'Legal'
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-white/70">
        {/* Contenuto placeholder per evitare 500; sostituisci con i tuoi testi */}
        {title} — contenido en preparación. Si necesitas el texto definitivo, indícamelo y lo cargo aquí.
      </p>
    </main>
  )
}
