'use client';
import {useMemo} from 'react';
import Link from 'next/link';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import { SAMPLE_ITEMS, type Cat, slugify } from '@/lib/data';
import CategoryFAQ from '@/components/CategoryFAQ';
import ChannelCard from '@/components/ChannelCard';

function useQueryState() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const locale = pathnameLocale(usePathname()||'/es');
  const set = (patch: Record<string, string|undefined>) => {
    const params = new URLSearchParams(sp?.toString());
    Object.entries(patch).forEach(([k,v]) => {
      if (v == null || v === '') params.delete(k);
      else params.set(k, String(v));
    });
    router.push(`${pathname}?${params.toString()}`);
  };
  return { sp, set };
}

export default function ExploreClient() {
  const { sp, set } = useQueryState();
  const cat = (sp?.get('cat') ?? '') as Cat | '';
  const ordenar = sp?.get('orden') ?? 'recientes';
  const q = (sp?.get('q') ?? '').toLowerCase();

  const items = useMemo(() => {
    let arr = [...SAMPLE_ITEMS];
    if (cat && ['gamers','streamers','videobloggers','cineastas'].includes(cat)) {
      arr = arr.filter(i => i.category === cat);
    }
    if (q) arr = arr.filter(i => i.title.toLowerCase().includes(q));
    if (ordenar === 'populares') arr.sort((a,b)=>b.views-a.views);
    else if (ordenar === 'antiguos') arr.sort((a,b)=>a.date.localeCompare(b.date));
    else arr.sort((a,b)=>b.date.localeCompare(a.date)); // recientes
    return arr;
  }, [cat, ordenar, q]);

  return (
    <main id="content" className="px-6 py-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Explorar canales</h1>
          <p className="text-white/70">Filtra por categoría, ordena y busca.</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            aria-label="Buscar canales"
            placeholder="Buscar..."
            defaultValue={sp?.get('q') ?? ''}
            onChange={(e)=>set({ q: e.currentTarget.value })}
            className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none"
          />
          <select
            aria-label="Ordenar"
            value={ordenar}
            onChange={(e)=>set({ orden: e.target.value })}
            className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10"
          >
            <option value="recientes">Más recientes</option>
            <option value="populares">Más populares</option>
            <option value="antiguos">Más antiguos</option>
          </select>
        </div>
      </div>

      {/* Chips categoría */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={`/${locale}/explore`} className={`px-3 py-1.5 rounded-full ring-1 ring-white/10 ${!cat ? 'bg-white text-neutral-900' : 'bg-white/5 hover:bg-white/10'}`}>Todos</Link>
        {(['gamers','streamers','videobloggers','cineastas'] as Cat[]).map((c)=>(
          <Link key={c} href={`/es/explore?cat=${c}`} className={`px-3 py-1.5 rounded-full ring-1 ring-white/10 ${cat===c ? 'bg-white text-neutral-900' : 'bg-white/5 hover:bg-white/10'}`}>
            {c[0].toUpperCase()+c.slice(1)}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(it=>(
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
        {items.length===0 && (
          <div className="col-span-full text-white/70">No hay resultados.</div>
        )}
      </div>

      {cat && <CategoryFAQ cat={cat as any} />}
    </main>
  );
}
