import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFoundLocale() {
  return (
    <main id="content" className="min-h-[60dvh] px-6 py-16 flex flex-col items-center text-center">
      <div className="inline-block w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-[6px] rotate-45 shadow-[0_0_24px_rgba(251,191,36,.5)]" />
      <h1 className="mt-6 text-4xl font-extrabold">404 · Página no encontrada</h1>
      <p className="mt-2 text-white/70 max-w-xl">
        Lo sentimos, no encontramos esta ruta. Puedes volver al inicio o explorar canales.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/es" className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">Inicio</Link>
        <Link href="/es/explore" className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Explorar</Link>
      </div>
    </main>
  );
}
