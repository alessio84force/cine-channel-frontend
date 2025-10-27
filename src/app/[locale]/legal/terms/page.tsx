export const dynamic = "force-static";
import type { L } from "@/lib/ui";
const TEXT: Record<L, {title:string; body:string[]; updated:string}> = {
  es: {
    title: 'Términos de Uso',
    body: [
      'Al usar CINE-CHANNEL aceptas estas condiciones. No publiques contenido ilegal, difamatorio o que infrinja derechos de autor.',
      'Los creadores conservan sus derechos sobre el contenido que suben. Concedes a CINE-CHANNEL una licencia limitada para alojar y mostrar dicho contenido.',
      'Los pagos y suscripciones se procesan a través de Stripe según sus propios términos. Podemos suspender cuentas que incumplan estas normas.'
    ],
    updated: 'Última actualización: Octubre 2025'
  },
  en: {
    title: 'Terms of Use',
    body: [
      'By using CINE-CHANNEL you agree to these terms. Do not post illegal, defamatory or copyright-infringing material.',
      'Creators retain rights to their uploads. You grant CINE-CHANNEL a limited license to host and display your content.',
      'Payments and subscriptions are processed by Stripe under their terms. We may suspend accounts breaching these rules.'
    ],
    updated: 'Last updated: October 2025'
  },
  fr: {
    title: 'Conditions d’utilisation',
    body: [
      'En utilisant CINE-CHANNEL, vous acceptez ces conditions. Ne publiez pas de contenus illégaux, diffamatoires ou contrefaits.',
      'Les créateurs conservent les droits sur leurs œuvres. Vous accordez à CINE-CHANNEL une licence limitée pour héberger et diffuser votre contenu.',
      'Les paiements/abonnements sont traités par Stripe selon leurs conditions. Les comptes en infraction peuvent être suspendus.'
    ],
    updated: 'Dernière mise à jour : Octobre 2025'
  },
  it: {
    title: 'Termini di Utilizzo',
    body: [
      'Usando CINE-CHANNEL accetti questi termini. Non pubblicare contenuti illegali, diffamatori o in violazione di copyright.',
      'I creatori mantengono i diritti sui contenuti caricati. Concedi a CINE-CHANNEL una licenza limitata per ospitare e mostrare tali contenuti.',
      'Pagamenti e abbonamenti sono gestiti da Stripe secondo i loro termini. Possiamo sospendere account in violazione.'
    ],
    updated: 'Ultimo aggiornamento: Ottobre 2025'
  },
  de: {
    title: 'Nutzungsbedingungen',
    body: [
      'Mit der Nutzung von CINE-CHANNEL stimmst du diesen Bedingungen zu. Keine illegalen, verleumderischen oder urheberrechtsverletzenden Inhalte.',
      'Urheber behalten die Rechte an ihren Uploads. Du gewährst CINE-CHANNEL eine eingeschränkte Lizenz zum Hosten/Anzeigen.',
      'Zahlungen/Abos erfolgen über Stripe gemäß deren Bedingungen. Accounts bei Verstößen können gesperrt werden.'
    ],
    updated: 'Letzte Aktualisierung: Oktober 2025'
  },
  pt: {
    title: 'Termos de Uso',
    body: [
      'Ao usar a CINE-CHANNEL, você concorda com estes termos. Não publique material ilegal, difamatório ou que viole direitos autorais.',
      'Os criadores mantêm os direitos sobre seus conteúdos. Você concede à CINE-CHANNEL uma licença limitada para hospedar/exibir.',
      'Pagamentos/assinaturas são processados pela Stripe segundo seus termos. Contas em violação podem ser suspensas.'
    ],
    updated: 'Última atualização: Outubro de 2025'
  }

  , ar: {
    title: 'شروط الاستخدام',
    body: ["باستخدامك CINE-CHANNEL فأنت توافق على هذه الشروط. يُحظر نشر المحتوى غير القانوني أو المُسيء أو المنتهك لحقوق النشر.","يحتفظ المنشئون بحقوقهم في المحتوى. تمنح CINE-CHANNEL ترخيصًا محدودًا لاستضافة المحتوى وعرضه.","يتم معالجة المدفوعات والاشتراكات عبر Stripe وفقًا لشروطهم. قد نقوم بتعليق الحسابات المخالفة."],
    updated: 'آخر تحديث: أكتوبر 2025'
  }};
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
