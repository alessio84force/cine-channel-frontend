import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 3600

type L = 'es'|'en'|'fr'
const TITLES: Record<L, Record<string,string>> = {
  es: {
    privacidad: 'Política de Privacidad',
    cookies: 'Política de Cookies',
    copyright: 'Derechos de Autor',
    dsa: 'DSA',
    reportar: 'Reportar contenido',
    'aviso-legal': 'Aviso Legal',
  },
  en: {
    privacy: 'Privacy Policy',
    cookies: 'Cookies Policy',
    copyright: 'Copyright',
    dsa: 'DSA',
    report: 'Report content',
    'legal-notice': 'Legal Notice',
  },
  fr: {
    confidentialite: 'Politique de confidentialité',
    cookies: 'Cookies',
    copyright: 'Droit d’auteur',
    dsa: 'DSA',
    signaler: 'Signaler un contenu',
    'mentions-legales': 'Mentions légales',
  },
}

const BODY: Record<L, Record<string, JSX.Element>> = {
  es: {
    privacidad: (
      <>
        <p className="mt-4 text-white/80">Explicamos qué datos recogemos, la base legal, el tiempo de conservación y tus derechos (acceso, rectificación, supresión, oposición, portabilidad).</p>
        <h2 className="mt-6 font-semibold">Datos que tratamos</h2>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Datos de cuenta (email, nombre, contraseña hash).</li>
          <li>Datos de pago a través de Stripe (no almacenamos tu tarjeta).</li>
          <li>Datos de uso (páginas vistas, suscripciones, informes de abuso).</li>
        </ul>
      </>
    ),
    cookies: (
      <>
        <p className="mt-4 text-white/80">Usamos cookies esenciales para el funcionamiento del sitio y, con tu consentimiento, analíticas para mejorar la experiencia.</p>
        <h2 className="mt-6 font-semibold">Tipos</h2>
        <ol className="list-decimal list-inside text-white/80 space-y-1">
          <li>Esenciales (sesión, preferencias).</li>
          <li>Analíticas (métricas de uso agregadas).</li>
        </ol>
      </>
    ),
    copyright: (
      <>
        <p className="mt-4 text-white/80">Respeta los derechos de autor. Puedes denunciar infracciones con el formulario de Reportar.</p>
      </>
    ),
    dsa: (
      <>
        <p className="mt-4 text-white/80">Información relativa al Reglamento de Servicios Digitales (DSA): canal de contacto, moderación de contenidos, y transparencia.</p>
      </>
    ),
    reportar: (
      <>
        <p className="mt-4 text-white/80">Para denunciar contenido infractor, detalla la URL del contenido, el motivo y tu información de contacto.</p>
      </>
    ),
    'aviso-legal': (
      <>
        <p className="mt-4 text-white/80">Información del servicio, titularidad, contacto y condiciones de uso.</p>
      </>
    ),
  },
  en: {
    privacy: (
      <>
        <p className="mt-4 text-white/80">We explain what data we collect, legal basis, retention times, and your rights (access, rectification, deletion, objection, portability).</p>
        <h2 className="mt-6 font-semibold">Data we process</h2>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Account data (email, name, password hash).</li>
          <li>Payment data via Stripe (we don’t store your card).</li>
          <li>Usage data (page views, subscriptions, abuse reports).</li>
        </ul>
      </>
    ),
    cookies: (
      <>
        <p className="mt-4 text-white/80">We use essential cookies to run the site and, with your consent, analytics to improve the experience.</p>
        <h2 className="mt-6 font-semibold">Types</h2>
        <ol className="list-decimal list-inside text-white/80 space-y-1">
          <li>Essential (session, preferences).</li>
          <li>Analytics (aggregated usage metrics).</li>
        </ol>
      </>
    ),
    copyright: (
      <>
        <p className="mt-4 text-white/80">Respect copyright. You can report infringements via the Report page.</p>
      </>
    ),
    dsa: (
      <>
        <p className="mt-4 text-white/80">Information regarding the Digital Services Act (DSA): contact channel, content moderation, and transparency.</p>
      </>
    ),
    report: (
      <>
        <p className="mt-4 text-white/80">To report infringing content, provide the content URL, reason, and your contact details.</p>
      </>
    ),
    'legal-notice': (
      <>
        <p className="mt-4 text-white/80">Service information, ownership, contact, and terms of use.</p>
      </>
    ),
  },
  fr: {
    confidentialite: (
      <>
        <p className="mt-4 text-white/80">Nous expliquons quelles données sont collectées, la base légale, la durée de conservation et vos droits.</p>
        <h2 className="mt-6 font-semibold">Données traitées</h2>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Données de compte (email, nom, mot de passe haché).</li>
          <li>Données de paiement via Stripe (nous ne stockons pas votre carte).</li>
          <li>Données d’usage (pages vues, abonnements, signalements).</li>
        </ul>
      </>
    ),
    cookies: (
      <>
        <p className="mt-4 text-white/80">Nous utilisons des cookies essentiels au fonctionnement et, avec votre consentement, des cookies d’analyse.</p>
        <h2 className="mt-6 font-semibold">Types</h2>
        <ol className="list-decimal list-inside text-white/80 space-y-1">
          <li>Essentiels (session, préférences).</li>
          <li>Analyse (métriques d’usage agrégées).</li>
        </ol>
      </>
    ),
    copyright: (
      <>
        <p className="mt-4 text-white/80">Respectez le droit d’auteur. Vous pouvez signaler des infractions via la page Signaler.</p>
      </>
    ),
    dsa: (
      <>
        <p className="mt-4 text-white/80">Informations relatives au DSA : canal de contact, modération de contenus et transparence.</p>
      </>
    ),
    signaler: (
      <>
        <p className="mt-4 text-white/80">Pour signaler un contenu, indiquez l’URL, le motif et vos coordonnées.</p>
      </>
    ),
    'mentions-legales': (
      <>
        <p className="mt-4 text-white/80">Informations sur le service, la titularité, le contact et les conditions d’utilisation.</p>
      </>
    ),
  },
}

function normalizeLocale(locale: string): L {
  return (locale === 'en' || locale === 'fr') ? locale : 'es'
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = normalizeLocale(locale)
  const title = TITLES[loc][slug] || 'Legal'
  return { title: `${title} · Cine-Channel` }
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params
  const loc = normalizeLocale(locale)
  const title = TITLES[loc][slug] || 'Legal'
  const body = BODY[loc][slug] || (
    <p className="mt-4 text-white/80">
      Página legal informativa. / Informational legal page. / Page légale d’information.
    </p>
  )

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">{title}</h1>
      {body}
      <div className="mt-8 text-sm text-white/50">
        Cine-Channel® — {(loc==='es' && 'Todos los derechos reservados') || (loc==='fr' && 'Tous droits réservés') || 'All rights reserved'}.
      </div>
    </main>
  )
}
