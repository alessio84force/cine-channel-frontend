import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const locales = ['en','es','fr'] as const

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: string } // <-- non Promise
}) {
  const { locale } = params
  if (!(locales as readonly string[]).includes(locale)) {
    // opzionale: lascia l'handling al not-found del segmento
  }

  // IMPORTANTISSIMO: stessa className del root layout (font + bg + text)
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
