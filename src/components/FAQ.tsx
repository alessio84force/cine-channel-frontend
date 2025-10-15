'use client';
import { useState } from 'react';

const faqs = [
  { q: '¿Qué es Cine-Channel?', a: 'Una plataforma donde creadores abren su canal y publican vídeos para sus suscriptores.' },
  { q: '¿Cuánto cuesta abrir un canal?', a: 'Un pago único de apertura. Luego tú eliges el precio mensual para tus suscriptores.' },
  { q: '¿Qué categorías hay?', a: 'Gamers, Streamers, Videobloggers y Cineastas.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
      <div className="divide-y divide-white/10 rounded-xl ring-1 ring-white/10 overflow-hidden">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="bg-white/[0.02]">
              <button
                onClick={()=>setOpen(isOpen ? null : i)}
                className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-white/[0.04] transition"
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-white/50">{isOpen ? '–' : '+'}</span>
              </button>
              {isOpen && <div className="px-4 pb-4 text-white/80">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
