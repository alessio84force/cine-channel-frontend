import type { ReactNode } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <section>
        {children}
      </section>
      <Footer />
    </>
  )
}
