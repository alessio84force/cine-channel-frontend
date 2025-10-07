'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CreatorOnboardingPage() {
  const [loading, setLoading] = useState(false);

  // Stub: qui poi chiameremo l'API /api/payments/creator-onboarding (Stripe)
  const handlePay = async () => {
    setLoading(true);
    try {
      alert('Stub: qui partirà il checkout una tantum da €9,99.');
      // const res = await fetch('/api/payments/creator-onboarding', { method: 'POST' });
      // const { url } = await res.json();
      // window.location.href = url;
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-neutral-950 text-white p-4">
      <div className="mx-auto max-w-3xl">
        <Link href="/es" className="text-sm text-white/70 hover:text-white/90 underline underline-offset-4">
          ← Volver
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">
            Crea il tuo canale professionale
          </span>
        </h1>

        <p className="mt-3 text-white/70">
          Per aprire il canale è richiesto un pagamento <strong>una tantum</strong> di <strong>€9,99</strong>.
          Potrai poi impostare il <strong>prezzo mensile</strong> per i tuoi abbonati.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <h2 className="font-semibold mb-2">Cosa ottieni</h2>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-1">
              <li>Canale professionale su Cine-Channel</li>
              <li>Upload video illimitati*</li>
              <li>Gestione abbonamenti e analytics</li>
            </ul>
            <p className="mt-2 text-xs text-white/50">
              * soggetto a fair-use tecnico (storage e bandwidth)
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <h2 className="font-semibold mb-2">Revenue share</h2>
            <p className="text-sm text-white/70">
              Decidi tu il prezzo mensile. Per ogni abbonato attivo, <strong>€2</strong> vanno alla piattaforma,
              il resto va a te (al netto delle commissioni di pagamento e imposte).
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <h2 className="font-semibold mb-3">Passi successivi</h2>
          <ol className="list-decimal pl-6 space-y-2 text-white/70">
            <li>Paga la fee di onboarding <strong>€9,99</strong> (una tantum).</li>
            <li>Completa il payout onboarding (KYC) per ricevere i pagamenti.</li>
            <li>Imposta il prezzo mensile del canale e pubblica i tuoi video.</li>
          </ol>

          <button
            onClick={handlePay}
            disabled={loading}
            className="mt-5 rounded-full px-5 py-2 bg-red-600 hover:bg-red-500 active:bg-red-700 transition shadow disabled:opacity-60"
          >
            {loading ? 'Preparando checkout…' : 'Paga €9,99 e continua'}
          </button>
        </div>
      </div>
    </main>
  );
}
