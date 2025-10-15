type RouteLocale = 'es'|'en'|'fr'|'en-us';       // locale letto dall'URL
type ContentLocale = 'es'|'en'|'fr';             // locale dei contenuti (en-us -> en)

// Normalizza en-us -> en per i CONTENUTI (mai spagnolo in en-us)
function normalizeContentLocale(loc: RouteLocale): ContentLocale {
  if (loc === 'en-us') return 'en';
  return loc as ContentLocale;
}

// Slug/titoli per lingua di ROUTE (manteniamo en-us distinto)
const MAP: Record<RouteLocale, Record<string, { key: 'legal'|'privacy'|'cookies'|'copyright'|'dsa'|'report', title: string }>> = {
  es: {
    'aviso-legal':   { key:'legal',    title:'Aviso legal · Cine-Channel' },
    'privacidad':    { key:'privacy',  title:'Privacidad · Cine-Channel' },
    'cookies':       { key:'cookies',  title:'Cookies · Cine-Channel' },
    'copyright':     { key:'copyright',title:'Copyright · Cine-Channel' },
    'dsa':           { key:'dsa',      title:'Información DSA · Cine-Channel' },
    'reportar':      { key:'report',   title:'Reportar contenido · Cine-Channel' }
  },
  en: {
    'legal-notice':  { key:'legal',    title:'Legal notice · Cine-Channel' },
    'privacy':       { key:'privacy',  title:'Privacy · Cine-Channel' },
    'cookies':       { key:'cookies',  title:'Cookies · Cine-Channel' },
    'copyright':     { key:'copyright',title:'Copyright · Cine-Channel' },
    'dsa':           { key:'dsa',      title:'DSA Info · Cine-Channel' },
    'report':        { key:'report',   title:'Report content · Cine-Channel' }
  },
  fr: {
    'mentions-legales': { key:'legal',    title:'Mentions légales · Cine-Channel' },
    'confidentialite':  { key:'privacy',  title:'Confidentialité · Cine-Channel' },
    'cookies':          { key:'cookies',  title:'Cookies · Cine-Channel' },
    'droit-dauteur':    { key:'copyright',title:'Droit d’auteur · Cine-Channel' },
    'dsa':              { key:'dsa',      title:'DSA · Cine-Channel' },
    'signalement':      { key:'report',   title:'Signaler un contenu · Cine-Channel' }
  },
  'en-us': {
    'legal-notice':  { key:'legal',    title:'Legal notice · Cine-Channel' },
    'privacy':       { key:'privacy',  title:'Privacy · Cine-Channel' },
    'cookies':       { key:'cookies',  title:'Cookies · Cine-Channel' },
    'copyright':     { key:'copyright',title:'Copyright · Cine-Channel' },
    'dsa':           { key:'dsa',      title:'DSA Info · Cine-Channel' },
    'report':        { key:'report',   title:'Report content · Cine-Channel' }
  }
};

// CONTENUTI (solo es/en/fr); en-us usa en tramite normalizeContentLocale
const BODY: Record<'legal'|'privacy'|'cookies'|'copyright'|'dsa'|'report', Record<ContentLocale, { h1:string; p:string }>> = {
  legal: {
    es:{h1:'Aviso legal',p:'Esta página ofrece información legal básica de la plataforma.'},
    en:{h1:'Legal notice',p:'This page provides the basic legal information of the platform.'},
    fr:{h1:'Mentions légales',p:'Cette page présente les informations légales de base de la plateforme.'}
  },
  privacy: {
    es:{h1:'Política de privacidad',p:
`Responsable (Controller): [YOUR ENTITY] · privacy@cine-channel.com

Finalidades: prestación del servicio, gestión de cuentas y pagos, seguridad y prevención de abusos, atención al usuario.

Base jurídica: contrato (Art. 6(1)(b) RGPD), interés legítimo (seguridad, Art. 6(1)(f)), consentimiento para cookies no esenciales (en su caso, Art. 6(1)(a)).

Destinatarios / encargados: Stripe (pagos), proveedores de hosting y otros encargados necesarios. Se firmarán DPA y, si hay transferencias fuera del EEE, SCC.

Conservación: durante la relación y los plazos legales.

Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad. Contacto: privacy@cine-channel.com.

Cookies: solo esenciales por defecto. Ver Política de Cookies.`},
    en:{h1:'Privacy Policy',p:
`Controller: [YOUR ENTITY] · privacy@cine-channel.com

Purposes: providing the service, managing accounts and payments, security and abuse prevention, user support.

Legal bases: contract (Art. 6(1)(b) GDPR), legitimate interests (security, Art. 6(1)(f)), consent for non-essential cookies (if any, Art. 6(1)(a)).

Recipients / processors: Stripe (payments), hosting providers, and other necessary processors. We will sign DPAs and, where transfers occur outside the EEA, implement SCCs.

Retention: for the duration of the relationship and as required by law.

Your rights: access, rectification, erasure, objection, restriction and portability. Contact: privacy@cine-channel.com.

Cookies: essential only by default. See the Cookies Policy.`},
    fr:{h1:'Politique de confidentialité',p:
`Responsable: [VOTRE ENTITÉ] · privacy@cine-channel.com

Finalités : fournir le service, gérer les comptes et paiements, sécurité et prévention des abus, support utilisateur.

Base juridique : contrat (art. 6(1)(b) RGPD), intérêt légitime (sécurité, art. 6(1)(f)), consentement pour les cookies non essentiels (le cas échéant, art. 6(1)(a)).

Destinataires / sous-traitants : Stripe (paiements), hébergeurs et autres sous-traitants nécessaires. ATD (DPA) et, si transferts hors EEE, CCT (SCC).

Conservation : pendant la relation et les délais légaux.

Vos droits : accès, rectification, effacement, opposition, limitation et portabilité. Contact : privacy@cine-channel.com.

Cookies : essentiels par défaut. Voir la Politique Cookies.`}
  },
  cookies: {
    es:{h1:'Cookies',p:
`Por defecto solo usamos cookies esenciales para el funcionamiento técnico (balanceo, sesión básica). No empleamos cookies de publicidad ni analítica sin tu consentimiento.

Puedes gestionar o revocar el consentimiento desde tu navegador o, cuando proceda, desde nuestro banner de cookies.

Para más detalles sobre nombres, duraciones y finalidades, ver la lista técnica cuando se habiliten cookies no esenciales.`},
    en:{h1:'Cookies Policy',p:
`By default we only use essential cookies required for technical operation (load balancing, basic session). We do not use advertising or analytics cookies without your consent.

You can manage or withdraw your consent at any time from your browser settings or (when applicable) from our cookie banner.

For details about names, durations and purposes, see the technical list if/when non-essential cookies are enabled.`},
    fr:{h1:'Politique Cookies',p:
`Par défaut, nous n’utilisons que des cookies essentiels au fonctionnement technique (répartition de charge, session basique). Aucun cookie publicitaire ou analytique sans votre consentement.

Vous pouvez gérer ou retirer votre consentement via le navigateur ou, le cas échéant, via notre bandeau cookies.

Pour les noms, durées et finalités, voir la liste technique si des cookies non essentiels sont activés.`}
  },
  copyright: {
    es:{h1:'Copyright',p:
`Respeta la propiedad intelectual de terceros. Si algún contenido infringe tus derechos, reporta aportando:

• URL exacta del contenido
• Descripción de la obra
• Prueba de titularidad o autorización
• Datos de contacto

Tras la revisión, podremos retirar el contenido y notificar al titular del canal.`},
    en:{h1:'Copyright',p:
`Respect third-party intellectual property. If you believe content infringes your rights, please report it including:

• Exact URL of the content
• Description of the protected work
• Proof of ownership or authorization
• Contact details

After review, we may remove the content and notify the channel owner.`},
    fr:{h1:'Droit d’auteur',p:
`Respectez la propriété intellectuelle des tiers. Si vous pensez qu’un contenu porte atteinte à vos droits, signalez-le avec :

• URL exacte du contenu
• Description de l’œuvre protégée
• Preuve de titularité / autorisation
• Coordonnées

Après examen, nous pourrons retirer le contenu et prévenir le propriétaire du canal.`}
  },
  dsa: {
    es:{h1:'Información DSA',p:
`Transparencia: publicaremos informes de moderación cuando proceda.

Punto de contacto: support@cine-channel.com (también para autoridades).

Notificación y acción: usa “Reportar” e incluye URLs, motivo y evidencias.

Medidas: podremos limitar o retirar contenidos/cuentas que incumplan la ley o nuestras políticas.`},
    en:{h1:'DSA Info',p:
`Transparency: we will publish moderation transparency reports when applicable.

Point of contact: support@cine-channel.com (also for authorities).

Notice & action: use the “Report” page and include URLs, reason and any evidence.

Measures: we may limit or remove content/accounts that breach the law or our policies.`},
    fr:{h1:'DSA',p:
`Transparence : nous publierons des rapports de modération, le cas échéant.

Point de contact : support@cine-channel.com (autorités incluses).

Notification & action : utilisez “Signalement” (URLs, motif, preuves).

Mesures : nous pourrons limiter/retirer des contenus/comptes en cas d’infraction.`}
  },
  report: {
    es:{h1:'Reportar contenido',p:'Describe el problema e incluye URLs. Nuestro equipo lo revisará.'},
    en:{h1:'Report content',p:'Describe the issue and include URLs. Our team will review it.'},
    fr:{h1:'Signaler un contenu',p:'Décrivez le problème et ajoutez des URLs. Notre équipe examinera.'}
  }
};

function renderParas(text: string) {
  return text.split(/\n\s*\n/).map((chunk, i) => (
    <p key={i} className="mt-3 text-white/80 whitespace-pre-line">{chunk}</p>
  ));
}

export async function generateMetadata({ params }:{ params: Promise<{ locale:string; slug:string }> }) {
  const { locale, slug } = await params;
  const loc = (['es','en','fr','en-us'].includes(locale) ? (locale as RouteLocale) : 'en');
  const m = MAP[loc][slug];
  return { title: m ? m.title : 'Cine-Channel' };
}

export default async function Page({ params }:{ params: Promise<{ locale:string; slug:string }> }) {
  const { locale, slug } = await params;
  const routeLoc = (['es','en','fr','en-us'].includes(locale) ? (locale as RouteLocale) : 'en');
  const contentLoc = normalizeContentLocale(routeLoc);
  const hit = MAP[routeLoc][slug];

  if (!hit) {
    return (
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold">404</h1>
        <p className="mt-2 text-white/80">Not found</p>
      </main>
    );
  }

  const body = BODY[hit.key][contentLoc];

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold">{body.h1}</h1>
      {renderParas(body.p)}
    </main>
  );
}
