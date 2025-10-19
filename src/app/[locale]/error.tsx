"use client";
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <main className="min-h-[70dvh] grid place-items-center bg-neutral-950 text-white px-6">
      <div className="text-center">
        <p className="text-sm text-white/60">Ha ocurrido un error</p>
        <h1 className="mt-1 text-3xl font-extrabold">Algo salió mal</h1>
        <p className="mt-2 text-white/70 break-all">{error?.message || 'Error inesperado'}</p>
        <div className="mt-6">
          <button onClick={reset} className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:bg-white/90 transition">
            Reintentar
          </button>
        </div>
      </div>
    </main>
  );
}
