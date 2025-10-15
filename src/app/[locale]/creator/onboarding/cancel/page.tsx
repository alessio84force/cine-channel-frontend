import Link from 'next/link';

export default async function CancelOnboarding() {
  return (
    <main className="min-h-[100dvh] bg-neutral-950 text-white p-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
            Pagamento annullato
          </span>
        </h1>
        <p className="text-white/80">Nessun addebito è stato effettuato. Puoi riprovare quando vuoi.</p>
        <div className="mt-6">
          <Link href="/es/creator/onboarding" className="rounded-full px-5 py-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition">
            Torna all’onboarding
          </Link>
        </div>
      </div>
    </main>
  );
}
