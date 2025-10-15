'use client';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const pathnameLocale = (p:string)=>{const seg=(p||'/es').split('/')[1];return ['es','en','fr'].includes(seg)?seg:'es'};
export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Mostra solo se non c'è ancora una scelta
    const choice = typeof window !== 'undefined' ? localStorage.getItem('cc_cookie_choice') : 'essential';
    if (!choice) setShow(true);
  }, []);
  if (!show) return null;

  function acceptEssential() {
    try { localStorage.setItem('cc_cookie_choice', 'essential'); } catch {}
    setShow(false);
  }

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white/90 text-neutral-900 shadow-lg ring-1 ring-black/10 p-4">
        <p className="text-sm">
          Usamos solo cookies <b>estrictamente necesarias</b> para el funcionamiento (p. ej. flujo de alta del canal). 
          No instalamos cookies de marketing/analítica sin tu consentimiento.
          Consulta nuestra <Link className="underline" href={`/${locale}/legal/cookies`}>Política de Cookies</Link>.
        </p>
        <div className="mt-3 flex gap-2">
          <button onClick={acceptEssential} className="rounded-full px-4 py-2 bg-neutral-900 text-white hover:opacity-90 text-sm">
            Vale
          </button>
          <Link href={`/${locale}/legal/cookies`} className="rounded-full px-4 py-2 ring-1 ring-neutral-900/20 text-sm">
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
}
