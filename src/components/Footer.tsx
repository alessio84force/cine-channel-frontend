'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SUPPORTED = new Set(['en','es','fr'])

function useLocale() {
  const pathname = usePathname() || '/'
  const seg = pathname.split('/').filter(Boolean)[0]
  return SUPPORTED.has(seg) ? seg : 'es'
}

export default function Footer() {
  const locale = useLocale()
  const year = new Date().getFullYear()

  const t = {
    es: {
      legal: 'Aviso legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      copyright: 'Copyright',
      dsa: 'Información DSA',
      report: 'Reportar contenido',
      contact: 'Contacto',
      support: 'Soporte',
      rights: `© ${year} Cine-Channel — Todos los derechos reservados.`,
      contactDesc: 'Punto de contacto',
    },
    en: {
      legal: 'Legal notice',
      privacy: 'Privacy',
      cookies: 'Cookies',
      copyright: 'Copyright',
      dsa: 'DSA Info',
      report: 'Report content',
      contact: 'Contact',
      support: 'Support',
      rights: `© ${year} Cine-Channel — All rights reserved.`,
      contactDesc: 'Point of contact',
    },
    fr: {
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      copyright: 'Droit d’auteur',
      dsa: 'DSA',
      report: 'Signaler un contenu',
      contact: 'Contact',
      support: 'Support',
      rights: `© ${year} Cine-Channel — Tous droits réservés.`,
      contactDesc: 'Point de contact',
    },
  }[locale]

  const base = `/${locale}/legal`
  const link = (slug: string, label: string) => (
    <li key={slug}>
      <Link href={`${base}/${slug}`} className="hover:underline">
        {label}
      </Link>
    </li>
  )

  return (
    <footer className="mt-16 border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/80">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Columna 1: descripción breve */}
          <div>
            <div className="font-semibold">Cine-Channel</div>
            <p className="mt-2 text-white/60">
              Gamers, streamers, videobloggers y cineastas. Lanza tu canal en minutos.
            </p>
          </div>

          {/* Columna 2: legales */}
          <div>
            <div className="font-semibold">{t.legal}</div>
            <ul className="mt-2 space-y-1">
              {link(locale === 'es' ? 'aviso-legal' : locale === 'en' ? 'legal-notice' : 'mentions-legales', t.legal)}
              {link(locale === 'es' ? 'privacidad' : locale === 'en' ? 'privacy' : 'confidentialite', t.privacy)}
              {link('cookies', t.cookies)}
              {link(locale === 'es' ? 'copyright' : locale === 'en' ? 'copyright' : 'droit-dauteur', t.copyright)}
              {link('dsa', t.dsa)}
              {link(locale === 'es' ? 'reportar' : locale === 'en' ? 'report' : 'signalement', t.report)}
            </ul>
          </div>

          {/* Columna 3: contacto */}
          <div>
            <div className="font-semibold">{t.contact}</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href={`/${locale}/contact`} className="hover:underline">{t.contact}</Link>
              </li>
              <li>
                <a href="mailto:support@cine-channel.com" className="hover:underline">{t.support} · support@cine-channel.com</a>
              </li>
              <li className="text-white/60">{t.contactDesc}: legal@cine-channel.com · privacy@cine-channel.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/60">
          {t.rights}
        </div>
      </div>
    </footer>
  )
}
