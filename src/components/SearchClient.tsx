"use client";
import { useMemo, useState, useEffect } from 'react';
import { SAMPLE_ITEMS, slugify } from '@/lib/data';
import ChannelCard from '@/components/ChannelCard';

function score(hay: string, needle: string) {
  hay = hay.toLowerCase(); needle = needle.toLowerCase();
  if (!needle) return 0;
  if (hay === needle) return 100;
  if (hay.startsWith(needle)) return 80;
  if (hay.includes(needle)) return 60;
  return 0;
}

export default function SearchClient() {
  const [q, setQ] = useState('');
  const [debounced, setDebounced] = useState('');
  useEffect(()=>{ const t = setTimeout(()=>setDebounced(q), 200); return ()=>clearTimeout(t); }, [q]);

  const results = useMemo(()=>{
    if (!debounced) return [];
    return SAMPLE_ITEMS
      .map(it => ({ it, s: Math.max(score(it.title,debounced), score(it.category,debounced)) }))
      .filter(x => x.s > 0)
      .sort((a,b)=>b.s - a.s || b.it.views - a.it.views)
      .map(x => x.it);
  }, [debounced]);

  return (
    <main id="content" className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold">Buscar</h1>
      <div className="mt-4">
        <input
          autoFocus
          placeholder="Busca por título o categoría…"
          value={q}
          onChange={(e)=>setQ(e.currentTarget.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:outline-none"
          aria-label="Buscar"
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.map(it=>(
          <ChannelCard
            key={it.id}
            href={`/es/channel/${slugify(it.title)}`}
            title={it.title}
            category={it.category}
            thumb={it.thumb}
            date={it.date}
            views={it.views}
          />
        ))}
      </div>

      {debounced && results.length === 0 && (
        <p className="mt-6 text-white/70">Sin resultados.</p>
      )}
    </main>
  );
}
