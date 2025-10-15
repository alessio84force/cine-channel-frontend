'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import ChannelCard from '@/components/ChannelCard';
import { SAMPLE_ITEMS, slugify } from '@/lib/data';

const TXT = {
  es: {
    title:'Explorar',
    all:'Todos', gamers:'Gamers', streamers:'Streamers', vloggers:'Videobloggers', filmmakers:'Cineastas',
    empty:'No hay resultados con este filtro.'
  },
  en: {
    title:'Explore',
    all:'All', gamers:'Gamers', streamers:'Streamers', vloggers:'Videobloggers', filmmakers:'Filmmakers',
    empty:'No results for this filter.'
  },
  fr: {
    title:'Explorer',
    all:'Tous', gamers:'Gamers', streamers:'Streamers', vloggers:'Vidéoblogueurs', filmmakers:'Cinéastes',
    empty:'Aucun résultat pour ce filtre.'
  }
} as const;

const LOCALES = ['es','en','fr','en-us'] as const;

export default function ExplorePage() {
  const pathname = usePathname() || '/es/explore';
  const seg = pathname.split('/').filter(Boolean)[0];
  const locale = (LOCALES.includes(seg as any) ? (seg as any) : 'es');
  const key = (locale==='en-us' ? 'en' : (locale as keyof typeof TXT));
  const t = (TXT as any)[key];
  const sp = useSearchParams();
  const initial = (sp.get('cat') || 'all') as 'all'|'gamers'|'streamers'|'videobloggers'|'cineastas';

  const [f,setF] = useState(initial);

  useEffect(()=>{ setF(initial); },[initial]);

  const data = useMemo(()=> {
    // mappa categorie demo
    const map:any = {
      gamers: 'gamers',
      streamers: 'streamers',
      videobloggers: 'videoblogger',
      cineastas: 'film'
    };
    const items = SAMPLE_ITEMS.slice();
    if (f==='all') return items;
    return items.filter(it => (it.category||'').toLowerCase().includes(map[f]||''));
  },[f]);

  const tabs = [
    {k:'all', l:t.all},
    {k:'gamers', l:t.gamers},
    {k:'streamers', l:t.streamers},
    {k:'videobloggers', l:t.vloggers},
    {k:'cineastas', l:t.filmmakers},
  ] as const;

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">{t.title}</h1>
        <div className="flex gap-2">
          {tabs.map(x=>(
            <button key={x.k} className={`px-3 py-1.5 rounded-full text-sm ${f===x.k ? 'bg-white/10 ring-1 ring-white/10' : 'text-white/70 hover:text-white'}`} onClick={()=>setF(x.k as any)}>
              {x.l}
            </button>
          ))}
        </div>
      </div>

      {data.length===0 ? (
        <p className="mt-6 text-white/60">{t.empty}</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(it=>(
            <ChannelCard key={it.id}
              href={`/${locale}/channel/${slugify(it.title)}`}
              title={it.title}
              category={it.category}
              thumb={it.thumb}
              date={it.date}
              views={it.views}
            />
          ))}
        </div>
      )}
    </main>
  );
}
