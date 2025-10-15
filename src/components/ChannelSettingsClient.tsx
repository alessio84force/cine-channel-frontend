'use client';
import { useEffect, useMemo, useState } from 'react';

type Category = 'gamers'|'streamers'|'videobloggers'|'cineastas';
function asNumberOrNull(v: string) {
  const n = Number(v.replace(',','.'));
  return Number.isFinite(n) ? n : null;
}

export default function ChannelSettingsClient({ locale, slug }: { locale: string; slug: string }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>('gamers');
  const [desc, setDesc] = useState('');
  const [priceStr, setPriceStr] = useState('2.50');
  const [avatarUrl, setAvatarUrl] = useState('/icon.svg');
  const [bannerUrl, setBannerUrl] = useState('/categories/tutti.jpeg');

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const price = useMemo(()=>asNumberOrNull(priceStr) ?? NaN,[priceStr]);
  const priceValid = Number.isFinite(price) && price >= 2.5;
  const nameValid = name.trim().length >= 3;

  // Prefill from draft if exists
  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        const r = await fetch('/api/creator/draft', { cache: 'no-store' });
        const j = await r.json();
        if (!aborted && j?.draft) {
          const d = j.draft;
          if (d.name) setName(d.name);
          if (d.category) setCategory(d.category);
          if (typeof d.priceMonthly === 'number') setPriceStr(String(d.priceMonthly.toFixed(2)));
          if (d.description) setDesc(d.description);
          if (d.avatarUrl) setAvatarUrl(d.avatarUrl);
          if (d.bannerUrl) setBannerUrl(d.bannerUrl);
        } else {
          // default name from slug
          setName(slug.replace(/-/g,' '));
        }
      } catch {
        setName(slug.replace(/-/g,' '));
      }
    })();
    return () => { aborted = true; };
  }, [slug]);

  async function save() {
    setSaving(true); setSaved(false); setErr(null);
    try {
      const r = await fetch('/api/creator/draft', {
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          name, slug, category,
          priceMonthly: Number(price.toFixed(2)),
          description: desc,
          avatarUrl, bannerUrl
        })
      });
      if (!r.ok) throw new Error('save failed');
      setSaved(true);
    } catch {
      setErr('No se pudo guardar.');
    } finally {
      setSaving(false);
      setTimeout(()=>setSaved(false), 2000);
    }
  }

  return (
    <main id="content" className="px-6 py-8 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-sm text-white/70">
        <ol className="flex items-center gap-2">
          <li><a className="hover:underline" href={`/${locale}`}>Inicio</a></li>
          <li>›</li>
          <li><a className="hover:underline" href={`/${locale}/channel/${slug}`}>Canal</a></li>
          <li>›</li>
          <li>Ajustes</li>
        </ol>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold">Ajustes del canal</h1>
      <p className="text-white/70">Actualiza la información pública y tu precio mensual (mín. 2,50 €).</p>

      {/* Apariencia */}
      <section className="mt-6 rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-bold">Apariencia</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm mb-1">Avatar (URL)</label>
            <input value={avatarUrl} onChange={e=>setAvatarUrl(e.currentTarget.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none" />
            <p className="text-xs text-white/60 mt-1">Sube tu imagen a /public o usa una URL absoluta.</p>
          </div>
          <div>
            <label className="block text-sm mb-1">Banner (URL)</label>
            <input value={bannerUrl} onChange={e=>setBannerUrl(e.currentTarget.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none" />
            <p className="text-xs text-white/60 mt-1">Ej: /categories/tutti.jpeg</p>
          </div>
        </div>
      </section>

      {/* Información básica */}
      <section className="mt-6 rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-6">
        <h2 className="text-xl font-bold">Información básica</h2>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="block text-sm mb-1">Nombre del canal</label>
            <input value={name} onChange={e=>setName(e.currentTarget.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none" />
            {!nameValid && <p className="text-xs text-red-400 mt-1">Mínimo 3 caracteres.</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Descripción</label>
            <textarea rows={4} value={desc} onChange={e=>setDesc(e.currentTarget.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Categoría</label>
              <select value={category} onChange={e=>setCategory(e.currentTarget.value as Category)} className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none">
                <option value="gamers">Gamers</option>
                <option value="streamers">Streamers</option>
                <option value="videobloggers">Videobloggers</option>
                <option value="cineastas">Cineastas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Precio mensual (mín. 2,50 €)</label>
              <input value={priceStr} onChange={e=>setPriceStr(e.currentTarget.value)} inputMode="decimal" className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none" />
              {!priceValid && <p className="text-xs text-red-400 mt-1">Mínimo 2,50 €</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Acciones */}
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={saving || !nameValid || !priceValid}
          className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90 disabled:opacity-60"
        >
          {saving ? 'Guardando…' : 'Guardar cambios'}
        </button>
        {saved && <span className="text-green-400 text-sm">Guardado ✅</span>}
        {err && <span className="text-red-400 text-sm">{err}</span>}

        <div className="flex-1" />
        <a href={`/${locale}/channel/${slug}`} className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Ver canal</a>
      </div>
    </main>
  );
}
