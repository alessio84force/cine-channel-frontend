export const dynamic = "force-static";
import type { L } from "@/lib/ui";
const TEXT: Record<L, {title:string; body:string; name:string; email:string; msg:string; send:string; alt:string}> = {
  ar: { title:'اتصل بنا', body:'أسئلة قانونية أو خصوصية أو DMCA؟ اكتب إلينا.', name:'الاسم', email:'البريد الإلكتروني', msg:'الرسالة', send:'إرسال', alt:'أو راسلنا على legal@cine-channel.com' },
  es: { title:'Contacto', body:'¿Tienes dudas legales, de privacidad o DMCA? Escríbenos.', name:'Nombre', email:'Correo', msg:'Mensaje', send:'Enviar', alt:'O escríbenos a legal@cine-channel.com' },
  en: { title:'Contact', body:'Questions about legal, privacy or DMCA? Write to us.', name:'Name', email:'Email', msg:'Message', send:'Send', alt:'Or email legal@cine-channel.com' },
  fr: { title:'Contact', body:'Questions juridiques, confidentialité ou DMCA ? Écrivez-nous.', name:'Nom', email:'E-mail', msg:'Message', send:'Envoyer', alt:'Ou écrivez à legal@cine-channel.com' },
  it: { title:'Contatti', body:'Domande legali, privacy o DMCA? Scrivici.', name:'Nome', email:'Email', msg:'Messaggio', send:'Invia', alt:'Oppure scrivi a legal@cine-channel.com' },
  de: { title:'Kontakt', body:'Fragen zu Recht, Datenschutz oder DMCA? Schreiben Sie uns.', name:'Name', email:'E-Mail', msg:'Nachricht', send:'Senden', alt:'Oder per E-Mail an legal@cine-channel.com' },
  pt: { title:'Contato', body:'Dúvidas legais, privacidade ou DMCA? Fale conosco.', name:'Nome', email:'Email', msg:'Mensagem', send:'Enviar', alt:'Ou envie para legal@cine-channel.com' }
};
export default async function Page({ params }: { params: Promise<{ locale: L }> }) {
  const { locale } = await params;
  const lc = (['es','en','fr','it','de','pt','ar'] as L[]).includes(locale) ? locale : 'es';
  const t = TEXT[lc];
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-white/80">{t.body}</p>
      <form className="grid gap-3 max-w-xl">
        <input className="w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3" placeholder={t.name} />
        <input type="email" className="w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3" placeholder={t.email} />
        <textarea className="w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3" rows={5} placeholder={t.msg} />
        <button type="submit" className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90">{t.send}</button>
      </form>
      <p className="text-white/60 text-sm">{t.alt}</p>
    </main>
  );
}
