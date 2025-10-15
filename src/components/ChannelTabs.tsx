'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

function TabButton({ id, label, active, onClick }: { id:string; label:string; active:boolean; onClick:()=>void }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 transition ${
        active ? 'text-white border-b-2 border-white' : 'text-white/70 hover:text-white'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </button>
  );
}

export default function ChannelTabs({ channelTitle }: { channelTitle: string }) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tab = (sp.get('tab') ?? 'videos') as 'videos'|'sobre'|'comunidad';
  const setTab = (t: 'videos'|'sobre'|'comunidad') => {
    const params = new URLSearchParams(sp.toString());
    params.set('tab', t);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {/* Bar */}
      <div className="flex gap-6 border-b border-white/10 px-6">
        <TabButton id="videos" label="Vídeos" active={tab==='videos'} onClick={()=>setTab('videos')} />
        <TabButton id="sobre" label="Sobre" active={tab==='sobre'} onClick={()=>setTab('sobre')} />
        <TabButton id="comunidad" label="Comunidad" active={tab==='comunidad'} onClick={()=>setTab('comunidad')} />
      </div>

      {/* Content */}
      {tab === 'videos' && (
        <section className="px-6 py-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({length:6}).map((_,i)=>(
            <article key={i} className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02]">
              <div className="aspect-video bg-neutral-800" />
              <div className="p-3">
                <h3 className="font-medium line-clamp-1">{channelTitle} — Vídeo #{i+1}</h3>
                <p className="text-xs text-white/60">Hace 2 días · 1.2K vistas</p>
              </div>
            </article>
          ))}
        </section>
      )}

      {tab === 'sobre' && (
        <section className="px-6 py-6 max-w-3xl">
          <h2 className="text-xl font-bold">Sobre el canal</h2>
          <p className="mt-2 text-white/80">
            {channelTitle} comparte contenido exclusivo para suscriptores. Aquí puedes describir misión,
            calendario de publicaciones, equipo y enlaces.
          </p>
          <ul className="mt-4 list-disc pl-5 text-white/80">
            <li>Enlace externo 1</li>
            <li>Enlace externo 2</li>
          </ul>
        </section>
      )}

      {tab === 'comunidad' && (
        <section className="px-6 py-6 max-w-3xl">
          <h2 className="text-xl font-bold">Comunidad</h2>
          <div className="mt-3 space-y-3">
            {Array.from({length:4}).map((_,i)=>(
              <div key={i} className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4">
                <div className="text-sm text-white/60">Publicado por @autor · Hace {i+1} días</div>
                <div className="mt-1">¡Bienvenidos al canal! Deja tu comentario aquí 👇</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
