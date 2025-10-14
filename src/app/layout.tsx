import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SkipLink from '@/components/SkipLink'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import AnalyticsOnConsent from '@/components/AnalyticsOnConsent'
import SEOInjector from '@/components/SEOInjector'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteName = 'Cine-Channel'
const siteDesc = 'La plataforma para GAMERS, STREAMERS, VIDEOBLOGGERS y CINEASTAS.'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: '%s · Cine-Channel' },
  description: siteDesc,
  applicationName: siteName,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDesc,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Cine-Channel' }]
  },
  twitter: { card: 'summary_large_image', title: siteName, description: siteDesc, images: ['/og.jpg'] },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png' }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        <SkipLink />
        <CookieBanner />
        <AnalyticsOnConsent />
        <SEOInjector />

        <NavBar />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
