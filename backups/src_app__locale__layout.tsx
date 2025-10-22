import type { ReactNode } from 'react'
import NavBar from "@/components/NavBar"
import Footer from '@/components/Footer'
// import CookieBanner from '@/components/CookieBanner'
// import AnalyticsOnConsent from '@/components/AnalyticsOnConsent'
// import SplashGateClient from '@/components/SplashGateClient'

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        <NavBar />
        {/* <SplashGateClient /> */}
        {children}
        <Footer />
        {/* <CookieBanner /> */}
        {/* <AnalyticsOnConsent /> */}
      </body>
    </html>
  )
}
