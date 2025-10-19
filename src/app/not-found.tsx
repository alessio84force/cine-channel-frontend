import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold">404</h1>
      <p className="mt-3 text-white/80">Page not found.</p>
      <div className="mt-6">
        <Link href="/es" className="rounded-md px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
