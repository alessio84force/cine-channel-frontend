import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70dvh] grid place-items-center bg-neutral-950 text-white px-6">
      <div className="text-center">
        <p className="text-sm text-white/60">Error 404</p>
        <h1 className="mt-1 text-3xl font-extrabold">Página no encontrada</h1>
        <p className="mt-2 text-white/70">La página que buscas no existe o fue movida.</p>
        <div className="mt-6">
          <Link href="/es" className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:bg-white/90 transition">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
