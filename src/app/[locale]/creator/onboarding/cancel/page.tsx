import Link from 'next/link'
export const dynamic = 'force-dynamic'
export default async function CancelOnboarding() {
  return (
    <main style={{padding:24}}>
      <h1>Onboarding cancellato</h1>
      <p>Operazione annullata. Puoi riprovare quando vuoi.</p>
      <p><Link href="../">Torna all'onboarding</Link></p>
    </main>
  )
}
