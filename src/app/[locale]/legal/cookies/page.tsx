export const dynamic = "force-static";
import type { L } from "@/lib/ui";
const TEXT: Record<L, {title:string; body:string[]; updated:string}> = {
  es: {
    title: 'Política de Cookies',
    body: [
      'Usamos cookies necesarias para el funcionamiento del sitio y cookies analíticas anónimas para mejorar el servicio.',
      'Puedes gestionar el consentimiento de cookies en el banner o en la configuración del navegador. Respetamos “Do Not Track” cuando es posible.'
    ],
    updated: 'Última actualización: Octubre 2025'
  },
  en: {
    title: 'Cookie Policy',
    body: [
      'We use strictly necessary cookies for site functionality and anonymous analytics cookies to improve our services.',
      'You can manage consent via the cookie banner or your browser settings. We honor “Do Not Track” where feasible.'
    ],
    updated: 'Last updated: October 2025'
  },
  fr: {
    title: 'Politique des cookies',
    body: [
      'Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques anonymes.',
      'Vous pouvez gérer votre consentement via la bannière ou les paramètres du navigateur. Nous respectons “Do Not Track” lorsque possible.'
    ],
    updated: 'Dernière mise à jour : Octobre 2025'
  },
  it: {
    title: 'Politica sui Cookie',
    body: [
      'Utilizziamo cookie strettamente necessari al funzionamento del sito e cookie di analisi anonimi per migliorare il servizio.',
      'Puoi gestire il consenso tramite il banner cookie o dalle impostazioni del browser. Rispettiamo il “Do Not Track” quando possibile.'
    ],
    updated: 'Ultimo aggiornamento: Ottobre 2025'
  },
  de: {
    title: 'Cookie-Richtlinie',
    body: [
      'Wir verwenden unbedingt erforderliche Cookies für die Funktionalität sowie anonyme Analyse-Cookies zur Verbesserung.',
      'Sie können die Einwilligung über das Cookie-Banner oder die Browser-Einstellungen verwalten. “Do Not Track” wird wenn möglich berücksichtigt.'
    ],
    updated: 'Letzte Aktualisierung: Oktober 2025'
  },
  pt: {
    title: 'Política de Cookies',
    body: [
      'Utilizamos cookies estritamente necessárias para o funcionamento do site e cookies analíticos anónimos para melhoria.',
      'Pode gerir o consentimento através do banner de cookies ou das definições do navegador. Respeitamos “Do Not Track” sempre que possível.'
    ],
    updated: 'Última atualização: Outubro de 2025'
  }

  , ar: {
    title: 'سياسة ملفات تعريف الارتباط (الكوكيز)',
    body: ["نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع، بالإضافة إلى ملفات تحليلية مجهولة لتحسين الخدمة.","يمكنك إدارة الموافقة عبر لافتة الكوكيز أو إعدادات المتصفح. نحترم \"عدم التعقب\" عندما يكون ذلك ممكنًا."],
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
