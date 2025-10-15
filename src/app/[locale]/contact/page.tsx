export const metadata = { title: 'Contact · Cine-Channel' } as const;

const TXT = {
  es: { title:'Contacto', desc:'Elige el canal adecuado para tu consulta.', support:'Soporte', legal:'Legal / DSA', privacy:'Privacidad (GDPR)', report:'Reportar contenido' },
  en: { title:'Contact',  desc:'Pick the right channel for your request.',   support:'Support', legal:'Legal / DSA', privacy:'Privacy (GDPR)', report:'Report content' },
  fr: { title:'Contact',  desc:'Choisissez le bon canal pour votre demande.', support:'Support', legal:'Juridique / DSA', privacy:'Confidentialité (RGPD)', report:'Signaler un contenu' },
} as const;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const key = (locale==='en-us' ? 'en' : locale);
  const t = (TXT as any)[key] || TXT.es;

  return (
    <main id="content" className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold">{t.title}</h1>
      <p className="mt-2 text-white/80">{t.desc}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="mailto:soporte@cine-channel.com" className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">{t.support}</a>
        <a href="mailto:legal@cine-channel.com" className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10">{t.legal}</a>
        <a href="mailto:privacy@cine-channel.com" className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10">{t.privacy}</a>
        <a href={`/${locale}/legal/reportar`} className="rounded-full px-4 py-2 bg-amber-300 text-neutral-900 hover:opacity-90">{t.report}</a>
      </div>
    </main>
  );
}
