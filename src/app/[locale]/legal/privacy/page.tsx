export const dynamic = "force-static";

import type { L } from "@/lib/ui";
const TEXT: Record<L, {title:string; body:string[]; updated:string}> = {
  es: {
    title: 'Política de Privacidad',
    body: [
      'En CINE-CHANNEL respetamos tu privacidad. Cumplimos con el RGPD y la normativa aplicable. Solo recopilamos los datos necesarios para gestionar cuentas, canales y pagos.',
      'No vendemos ni compartimos tus datos con terceros sin tu consentimiento. Puedes ejercer tus derechos (acceso, rectificación, supresión, portabilidad y oposición) escribiendo a legal@cine-channel.com.',
      'Algunos servicios (p. ej., pagos con Stripe) actúan como encargados del tratamiento. Formalizamos contratos de encargo y aplicamos medidas de seguridad técnicas y organizativas.'
    ],
    updated: 'Última actualización: Octubre 2025'
  },
  en: {
    title: 'Privacy Policy',
    body: [
      'At CINE-CHANNEL, we respect your privacy. We comply with the GDPR and applicable privacy laws. We only collect data strictly necessary to manage accounts, channels and payments.',
      'We never sell or share your personal data without consent. You may exercise your rights (access, rectification, erasure, portability and objection) by emailing legal@cine-channel.com.',
      'Some processors (e.g., Stripe for payments) act on our behalf. We sign Data Processing Agreements and apply technical and organizational measures.'
    ],
    updated: 'Last updated: October 2025'
  },
  fr: {
    title: 'Politique de confidentialité',
    body: [
      'Chez CINE-CHANNEL, nous respectons votre vie privée. Nous sommes conformes au RGPD et aux lois applicables. Nous collectons uniquement les données nécessaires à la gestion des comptes, des chaînes et des paiements.',
      'Nous ne vendons ni ne partageons vos données personnelles sans votre consentement. Vous pouvez exercer vos droits (accès, rectification, effacement, portabilité, opposition) à legal@cine-channel.com.',
      'Certains sous-traitants (ex. Stripe) agissent pour notre compte. Des accords de traitement sont en place et des mesures de sécurité sont appliquées.'
    ],
    updated: 'Dernière mise à jour : Octobre 2025'
  },
  it: {
    title: 'Informativa sulla Privacy',
    body: [
      'In CINE-CHANNEL rispettiamo la tua privacy. Siamo conformi al GDPR e alle normative vigenti. Raccogliamo solo i dati necessari per gestire account, canali e pagamenti.',
      'Non vendiamo né condividiamo i tuoi dati personali senza consenso. Puoi esercitare i tuoi diritti (accesso, rettifica, cancellazione, portabilità e opposizione) scrivendo a legal@cine-channel.com.',
      'Alcuni fornitori (es. Stripe) trattano dati per nostro conto. Stipuliamo accordi di trattamento e adottiamo misure tecniche e organizzative.'
    ],
    updated: 'Ultimo aggiornamento: Ottobre 2025'
  },
  de: {
    title: 'Datenschutzerklärung',
    body: [
      'Bei CINE-CHANNEL achten wir Ihre Privatsphäre. Wir erfüllen die DSGVO und geltende Datenschutzgesetze. Wir erheben nur Daten, die zur Verwaltung von Konten, Kanälen und Zahlungen erforderlich sind.',
      'Wir verkaufen oder teilen Ihre personenbezogenen Daten nicht ohne Ihre Zustimmung. Sie können Ihre Rechte (Auskunft, Berichtigung, Löschung, Datenübertragbarkeit, Widerspruch) unter legal@cine-channel.com ausüben.',
      'Einige Auftragsverarbeiter (z. B. Stripe) handeln in unserem Auftrag. Es bestehen AV-Verträge und geeignete Sicherheitsmaßnahmen.'
    ],
    updated: 'Letzte Aktualisierung: Oktober 2025'
  },
  pt: {
    title: 'Política de Privacidade',
    body: [
      'Na CINE-CHANNEL respeitamos a sua privacidade. Cumprimos o RGPD e a legislação aplicável. Coletamos apenas os dados necessários para gerir contas, canais e pagamentos.',
      'Não vendemos nem partilhamos os seus dados pessoais sem consentimento. Pode exercer os seus direitos (acesso, retificação, eliminação, portabilidade e oposição) via legal@cine-channel.com.',
      'Alguns processadores (ex.: Stripe) atuam em nosso nome. Celebramos contratos de tratamento e aplicamos medidas técnicas e organizacionais.'
    ],
    updated: 'Última atualização: Outubro de 2025'
  }

  , ar: {
    title: 'سياسة الخصوصية',
    body: ["في CINE-CHANNEL نحترم خصوصيتك ونلتزم باللائحة العامة لحماية البيانات والقوانين المعمول بها. نجمع فقط البيانات اللازمة لإدارة الحسابات والقنوات والمدفوعات.","لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة بدون موافقتك. يمكنك ممارسة حقوقك (الوصول، التصحيح، الحذف، نقل البيانات، الاعتراض) عبر legal@cine-channel.com.","بعض المعالجين (مثل Stripe) يعملون نيابة عنا بموجب اتفاقيات معالجة البيانات وإجراءات أمنية مناسبة."],
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
