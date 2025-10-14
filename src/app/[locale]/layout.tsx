import type { ReactNode } from 'react'
import type { Metadata } from 'next'

const locales = ['en','es','fr'] as const

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return {
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
        fr: `${base}/fr`,
      },
    },
  }
}

export default function LocaleLayout({
  children,
}: {
  children: ReactNode
}) {
  // NIENTE <html>/<body> qui! Lasciamo gestire tutto al root layout.
  return children
}
