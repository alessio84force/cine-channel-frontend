import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
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
  params,
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const { locale } = params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
