export const dynamic = 'force-static';

const TXT = {
  es: {
    title: 'Precios',
    fanTitle: 'Para fans',
    fanDesc: 'Suscríbete a tus creadores favoritos. El precio mensual lo fija cada creador (mínimo 2,50 €).',
    creatorTitle: 'Para creadores',
    creatorOnce: 'Pago único',
    creatorOnceNote: 'para abrir tu canal (sin mensualidad)',
    cta: 'Crear canal'
  },
  en: {
    title: 'Pricing',
    fanTitle: 'For fans',
    fanDesc: 'Subscribe to your favorite creators. Monthly price is set by each creator (minimum €2.50).',
    creatorTitle: 'For creators',
    creatorOnce: 'One-time fee',
    creatorOnceNote: 'to open your channel (no monthly fee)',
    cta: 'Create channel'
  },
  fr: {
    title: 'Tarifs',
    fanTitle: 'Pour les fans',
    fanDesc: 'Abonnez-vous à vos créateurs préférés. Le prix mensuel est fixé par chaque créateur (minimum 2,50 €).',
    creatorTitle: 'Pour les créateurs',
    creatorOnce: 'Paiement unique',
    creatorOnceNote: 'pour ouvrir votre chaîne (sans abonnement mensuel)',
    cta: 'Créer une chaîne'
  }
} as const;

export default async function PricingPage({ params }: { params: Promise<{ locale:string }> }) {
  const { locale } = await params;
  const key = (locale==='en-us' ? 'en' : locale);
  const t = (TXT as any)[key] || TXT.es;

  return (
    <main id="content" className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold">{t.title}</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl ring-1 ring-white/10 p-5">
          <h2 className="text-xl font-bold">{t.fanTitle}</h2>
          <p className="mt-2 text-white/80">{t.fanDesc}</p>
          <ul className="mt-4 text-sm text-white/70 list-disc pl-5">
            <li>Cancelación sencilla</li>
            <li>Contenido ilimitado</li>
            <li>Soporte al cliente</li>
          </ul>
        </section>

        <section className="rounded-2xl ring-1 ring-white/10 p-5">
          <h2 className="text-xl font-bold">{t.creatorTitle}</h2>
          <p className="mt-3">
            <span className="text-4xl font-extrabold">9,99 €</span>
            <span className="ml-2 text-white/70">{t.creatorOnceNote}</span>
          </p>
          <a href={`/${locale}/creator/onboarding`} className="mt-4 inline-block rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
            {t.cta}
          </a>
          <p className="mt-2 text-xs text-white/60">
            Al crear un canal aceptas el <a href={`/${locale}/legal/creators`} className="underline">Acuerdo de Creadores</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
