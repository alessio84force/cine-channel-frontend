export const dynamic = 'force-dynamic';

export default async function ChannelCommunity() {
  return (
    <main id="content" className="px-6 py-6 max-w-3xl">
      <h2 className="text-xl font-bold">Comunidad</h2>
      <div className="mt-3 space-y-3">
        {Array.from({length:4}).map((_,i)=>(
          <div key={i} className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4">
            <div className="text-sm text-white/60">Publicado por @autor · Hace {i+1} días</div>
            <div className="mt-1">¡Bienvenidos al canal! Deja tu comentario aquí 👇</div>
          </div>
        ))}
      </div>
    </main>
  );
}
