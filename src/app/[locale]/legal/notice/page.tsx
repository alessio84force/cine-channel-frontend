export const dynamic = "force-static";

import type { L } from "@/lib/ui";

const TEXT: Record<L, { title: string; body: string[]; updated: string }> = {
  es: {
    title: 'Aviso Legal',
    body: [
      'CINE-CHANNEL es una plataforma para publicar contenido audiovisual. Cada creador es responsable del contenido que sube.',
      'Para notificaciones de infracción (copyright, derechos de imagen, marcas), escríbenos a legal@cine-channel.com con la documentación correspondiente.'
    ],
    updated: 'Última actualización: Octubre 2025'
  },
  en: {
    title: 'Legal Notice',
    body: [
      'CINE-CHANNEL is a platform for publishing audiovisual content. Creators are responsible for the content they upload.',
      'For infringement notices (copyright, image rights, trademarks), email legal@cine-channel.com with supporting documentation.'
    ],
    updated: 'Last updated: October 2025'
  },
  fr: {
    title: 'Mentions légales',
    body: [
      'CINE-CHANNEL est une plateforme de publication de contenus audiovisuels. Chaque créateur est responsable des contenus qu’il met en ligne.',
      'Pour signaler une violation (droits d’auteur, droit à l’image, marques), contactez legal@cine-channel.com avec les justificatifs.'
    ],
    updated: 'Dernière mise à jour : Octobre 2025'
  },
  it: {
    title: 'Note legali',
    body: [
      'CINE-CHANNEL è una piattaforma per la pubblicazione di contenuti audiovisivi. Ogni creatore è responsabile dei contenuti caricati.',
      'Per segnalazioni di violazione (copyright, diritti d’immagine, marchi), scrivi a legal@cine-channel.com allegando la documentazione.'
    ],
    updated: 'Ultimo aggiornamento: Ottobre 2025'
  },
  de: {
    title: 'Impressum / Rechtliche Hinweise',
    body: [
      'CINE-CHANNEL ist eine Plattform zur Veröffentlichung audiovisueller Inhalte. Für hochgeladene Inhalte sind die Ersteller verantwortlich.',
      'Für Hinweise auf Rechtsverletzungen (Urheberrecht, Bildrechte, Marken) wenden Sie sich mit Nachweisen an legal@cine-channel.com.'
    ],
    updated: 'Letzte Aktualisierung: Oktober 2025'
  },
  pt: {
    title: 'Aviso Legal',
    body: [
      'CINE-CHANNEL é uma plataforma para publicar conteúdo audiovisual. Cada criador é responsável pelo conteúdo que envia.',
      'Para notificações de infração (direitos autorais, imagem, marcas), escreva para legal@cine-channel.com com a documentação de suporte.'
    ],
    updated: 'Última atualização: Outubro de 2025'
  },
  ar: {
    title: 'إشعار قانوني',
    body: [
      'CINE-CHANNEL هي منصة لنشر المحتوى السمعي البصري. يتحمل المنشئون مسؤولية المحتوى الذي يرفعونه.',
      'لإرسال إشعارات الانتهاك (حقوق النشر، حقوق الصورة، العلامات التجارية)، راسلنا على legal@cine-channel.com مرفقًا بالأدلة.'
    ],
    updated: 'آخر تحديث: أكتوبر 2025'
  }
};

export default async function Page({ params }: { params: Promise<{ locale: L }> }) {
  const { locale } = await params;
  const lc = (['es','en','fr','it','de','pt','ar'] as L[]).includes(locale) ? locale : 'es';
  const t = TEXT[lc];
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      {t.body.map((p, i) => <p key={i} className="text-white/80">{p}</p>)}
      <p className="text-sm text-white/60 mt-8">{t.updated}</p>
    </main>
  );
}
