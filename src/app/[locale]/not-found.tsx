import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-neutral-950 text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">404</h1>
      <p className="mt-3 text-white/80 max-w-xl">
        Página no encontrada · Page not found · Page introuvable
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
