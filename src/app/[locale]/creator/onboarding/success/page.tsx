import Link from 'next/link'
export const dynamic = 'force-dynamic'
export default async function SuccessOnboarding() {
  return (
    <main style={{padding:24}}>
      <h1>Onboarding completato ✅</h1>
      <p>Complimenti! Il tuo account è pronto.</p>
      <p><Link href="../../creator">Vai alla dashboard creator</Link></p>
    </main>
  )
}
