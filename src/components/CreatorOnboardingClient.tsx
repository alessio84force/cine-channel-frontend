'use client';
import { useEffect, useMemo, useState } from 'react';

type Category = 'gamers'|'streamers'|'videobloggers'|'cineastas';

function slugify(t: string) {
  return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}
function asNumberOrNull(v: string) {
  const n = Number(v.replace(',','.'));
  return Number.isFinite(n) ? n : null;
}

export default function CreatorOnboardingClient({ locale }: { locale: string }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<Category>('gamers');
  const [priceStr, setPriceStr] = useState('2.50'); // stringa per input
  const price = useMemo(()=>asNumberOrNull(priceStr) ?? NaN,[priceStr]);

  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);
  const [creating, setCreating] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Prefill bozza
  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        const r = await fetch('/api/creator/draft', { cache: 'no-store' });
        const j = await r.json();
        if (!aborted && j?.draft) {
          const d = j.draft;
          if (d.name) setName(d.name);
          if (d.slug) setSlug(d.slug);
          if (d.category) setCategory(d.category);
          if (typeof d.priceMonthly === 'number') setPriceStr(String(d.priceMonthly.toFixed(2)));
        }
      } catch {}
    })();
    return () => { aborted = true; };
  }, []);

  // Debounced slug check
  useEffect(() => {
    if (!slug) { setAvailable(null); return; }
    const handle = setTimeout(async () => {
      setChecking(true);
      try {
        const r = await fetch(`/api/creator/check-slug?slug=${encodeURIComponent(slug)}`);
        const j = await r.json();
        setAvailable(Boolean(j?.available));
      } catch {
        setAvailable(null);
      } finally {
        setChecking(false);
      }
    }, 300);
    return () => clearTimeout(handle);
  }, [slug]);

  const priceValid = Number.isFinite(price) && price >= 2.5;
  const nameValid = name.trim().length >= 3;
  const slugValid = slug.length >= 3 && available === true;
  const formValid = nameValid && slugValid && priceValid;

  async function saveDraft() {
    setSaving(true);
    setErr(null);
    try {
      await fetch('/api/creator/draft', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name, slug, category, priceMonthly: Number(price.toFixed(2)),
        })
      });
    } catch (e:any) {
      setErr('No se pudo guardar el borrador.');
    } finally {
      setSaving(false);
    }
  }

  async function goStripeConnect() {
    setCreating(true); setErr(null);
    try {
      const r = await fetch('/api/stripe/connect/create-account', { method:'POST' });
      const j = await r.json();
      if (!j?.accountId && j?.note) {
        // primer toque puede setear cookie; permitir reintento
      }
      const r2 = await fetch('/api/stripe/connect/account-link', {
        method:'POST', headers: {'content-type':'application/json'},
        body: JSON.stringify({ accountId: j?.accountId })
      });
      const j2 = await r2.json();
      if (j2?.url) window.location.href = j2.url;
      else setErr('No se pudo crear el enlace de onboarding de Stripe.');
    } catch {
      setErr('Error de conexión con Stripe.');
    } finally {
      setCreating(false);
    }
  }

  async function goPayOnboarding() {
    if (!formValid) return;
    setCreating(true); setErr(null);
    try {
      const r = await fetch('/api/payments/creator-onboarding', {
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
          name, slug, category, priceMonthly: Number(price.toFixed(2))
        })
      });
      const j = await r.json();
      if (j?.url) window.location.href = j.url;
      else setErr(j?.error || 'Error en el pago.');
    } catch {
      setErr('Error en el pago.');
    } finally {
      setCreating(false);
    }
  }

  return (
    <main id="content" className="px-6 py-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-white/70">
        <ol className="flex items-center gap-2">
          <li><a className="hover:underline" href={`/${locale}`}>Inicio</a></li>
          <li>›</li>
          <li><a className="hover:underline" href={`/${locale}/creator/onboarding`}>Crear canal</a></li>
        </ol>
      </nav>

      <h1 className="mt-4 text-3xl font-extrabold">Crear canal</h1>
      <p className="text-white/70">Completa los datos y continúa con el pago único de 9,99 €.</p>

      {/* Info mínima para creadores */}
      <div className="mt-4 rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-4">
        <div className="text-sm">
          <div className="font-semibold">Información</div>
          <ul className="mt-1 list-disc pl-4 text-white/80">
            <li>Precio mensual mínimo recomendado: <b>2,50 €</b>.</li>
            <li>Puedes ajustar el precio cuando quieras.</li>
          </ul>
        </div>
      </div>

      {/* Form */}
      <form className="mt-6 grid gap-4" onSubmit={(e)=>{e.preventDefault();}}>
        <div>
          <label className="block text-sm mb-1">Nombre del canal</label>
          <input
            value={name}
            onChange={(e)=>{ setName(e.currentTarget.value); setSlug(slugify(e.currentTarget.value)); }}
            placeholder="Mi canal increíble"
            className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none"
          />
          {!nameValid && <p className="text-xs text-red-400 mt-1">Mínimo 3 caracteres.</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Slug (URL pública)</label>
          <div className="flex items-center gap-2">
            <input
              value={slug}
              onChange={(e)=>setSlug(slugify(e.currentTarget.value))}
              placeholder="mi-canal-increible"
              className="flex-1 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none"
            />
            <span className="text-xs text-white/60">/{locale}/channel/{slug || 'mi-canal'}</span>
          </div>
          <div className="mt-1 text-xs">
            {checking && <span className="text-white/60">Comprobando disponibilidad…</span>}
            {available === true && slug.length>=3 && <span className="text-green-400">Disponible ✅</span>}
            {available === false && <span className="text-red-400">No disponible</span>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Categoría</label>
          <select
            value={category}
            onChange={(e)=>setCategory(e.currentTarget.value as Category)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none"
          >
            <option value="gamers">Gamers</option>
            <option value="streamers">Streamers</option>
            <option value="videobloggers">Videobloggers</option>
            <option value="cineastas">Cineastas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Precio mensual (mín. 2,50 €)</label>
          <div className="flex items-center gap-2">
            <input
              inputMode="decimal"
              value={priceStr}
              onChange={(e)=>setPriceStr(e.currentTarget.value)}
              placeholder="2.50"
              className="w-40 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 focus:outline-none"
            />
            {!priceValid && <span className="text-xs text-red-400">Mínimo 2,50 €</span>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={saveDraft}
            disabled={saving}
            className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 disabled:opacity-50"
          >
            {saving ? 'Guardando…' : 'Guardar borrador'}
          </button>

          <button
            type="button"
            onClick={goStripeConnect}
            disabled={creating}
            className="rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 disabled:opacity-50"
          >
            Conectar Stripe
          </button>

          <div className="flex-1" />

          <button
            type="button"
            onClick={goPayOnboarding}
            disabled={!formValid || creating}
            className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90 disabled:opacity-60"
            title={!formValid ? 'Completa los datos válidos' : 'Pagar 9,99 €'}
          >
            {creating ? 'Procesando…' : 'Pagar 9,99 €'}
          </button>
        </div>

        {err && <div className="text-sm text-red-400">{err}</div>}
      </form>
    </main>
  );
}
