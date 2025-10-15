import Link from 'next/link';

export default async function SuccessOnboarding({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const isMock = !!(await searchParams)?.mock;

  return (
    <main className="min-h-[100dvh] bg-neutral-950 text-white p-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
            Onboarding completato!
          </span>
        </h1>
        <p className="text-white/80">
          Grazie! La fee una tantum di <strong>€9,99</strong> è stata registrata{isMock ? ' (modalità demo)' : ''}.
        </p>
        <p className="mt-2 text-white/70">Ora puoi completare il payout onboarding e creare il tuo canale.</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href={`/${(await params).locale}`} className="rounded-full px-5 py-2 bg-red-600 hover:bg-red-500 active:bg-red-700 transition shadow">
            Torna alla home
          </Link>
          <Link href={`/${(await params).locale}/creator/onboarding`} className="rounded-full px-5 py-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition">
            Torna all’onboarding
          </Link>
        </div>
      </div>
    </main>
  );
}
