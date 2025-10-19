"use client";
const data: Record<string, {q:string;a:string}[]> = {
  gamers: [
    { q: '¿Qué juegos se aceptan?', a: 'Cualquier título legalmente distribuido. Respeta las licencias.' },
    { q: '¿Puedo subir VODs?', a: 'Sí, siempre que tengas los derechos necesarios.' },
  ],
  streamers: [
    { q: '¿Se permiten directos?', a: 'Sí, puedes enlazar directos y subir resúmenes.' },
    { q: 'Alertas y overlays', a: 'Eres libre de personalizar tus videos con overlays propios.' },
  ],
  videobloggers: [
    { q: '¿Contenido diario?', a: 'Perfecto para vlogs diarios o semanales.' },
    { q: '¿Música en clips?', a: 'Usa música con licencia o libre de derechos.' },
  ],
  cineastas: [
    { q: '¿Formatos soportados?', a: 'Los formatos web habituales (mp4/h264/h265) y subtítulos.' },
    { q: 'Festivales y premieres', a: 'Puedes anunciar premieres privadas para suscriptores.' },
  ],
};

export default function CategoryFAQ({ cat }: { cat: 'gamers'|'streamers'|'videobloggers'|'cineastas' }) {
  const list = data[cat] || [];
  if (!list.length) return null;
  return (
    <section className="px-6 py-8 max-w-3xl">
      <h2 className="text-xl font-bold mb-3">Preguntas sobre {cat}</h2>
      <div className="divide-y divide-white/10 rounded-xl ring-1 ring-white/10 overflow-hidden">
        {list.map((f,i)=>(
          <div key={i} className="bg-white/[0.02]">
            <div className="px-4 py-3 font-medium">{f.q}</div>
            <div className="px-4 pb-3 text-white/80">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
