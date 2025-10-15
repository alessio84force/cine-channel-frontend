'use client'

import UploadClient from '@/components/UploadClient'
import { usePathname } from 'next/navigation'

function useLocale() {
  const seg = (usePathname() || '/').split('/').filter(Boolean)[0]
  return ['es','en','fr'].includes(seg) ? seg : 'es'
}

export default function UploadDemoPage() {
  const locale = useLocale()
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Sube tu vídeo (demo)</h1>
      <p className="mt-2 text-white/70 text-sm">
        Ruta demo para validar l’upload diretto su storage. Dopo il caricamento, il file è nel bucket sotto <code>raw/</code>.
      </p>
      <div className="mt-6">
        <UploadClient />
      </div>
      <div className="mt-8 text-sm text-white/60">
        Nota: imposta le variabili in <code>.env.local</code> come in <code>.env.example</code>.
      </div>
    </main>
  )
}
