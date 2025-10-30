"use client";
const MIN_PRICE = 2.5;
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useParams, useRouter } from "next/navigation";
import { UI, type L } from "@/lib/ui";

const fieldCls = "w-full bg-neutral-900/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20";
const btnPrimary = "rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90";
const btnGhost = "rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10";
const card = "rounded-2xl border border-white/10 p-5 bg-neutral-950/60";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export default function OnboardingPage() {
  const params = useParams<{ locale?: string }>();
  const locale = (params?.locale as L) || "es";
  const U = (UI[locale] || UI.es);
  const t = U.onboarding;
  const categories = (U.categories || []);
  const router = useRouter();

  const [name, setName] = useState("");
const search = useSearchParams();
const [paid, setPaid] = useState(search.get('paid')==='1');
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0] || "");
  const [busy, setBusy] = useState(false);
  const [price, setPrice] = useState<number>(2.5);
  const [msg, setMsg] = useState<string | null>(null);
  const [avail, setAvail] = useState<'unknown'|'checking'|'yes'|'no'>('unknown');
  const [suggestion, setSuggestion] = useState<string | null>(null);

  useEffect(() => {
    if (!slugTouched) setSlug(slugify(name));
  }, [name, slugTouched]);

  const urlPreview = useMemo(
    () => `/${locale}/channel/${slug || slugify(name)}`,
    [locale, slug, name]
  );

  // Debounced availability check against /api/creator/check-slug
  useEffect(() => {
    const val = (slug || slugify(name)).trim();
    if (!val) { setAvail('unknown'); setSuggestion(null); return; }
    setAvail('checking'); setSuggestion(null);
    const id = setTimeout(async () => {
      try {
        let res = await fetch(`/api/creator/check-slug?slug=${encodeURIComponent(val)}`);
        if (!res.ok) {
          res = await fetch('/api/creator/check-slug', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: val })
          });
        }
        const json = await res.json().catch(() => ({}));
        const available = json.available ?? json.ok ?? json.isAvailable ?? false;
        setAvail(available ? 'yes' : 'no');
        if (!available) setSuggestion(json.suggestion || `${val}-1`);
      } catch {
        setAvail('unknown'); setSuggestion(null);
      }
    }, 400);
    return () => clearTimeout(id);
  }, [slug, name]);

  const createChannel = async () => {
    try {
      setBusy(true); setMsg(null);
      if (price < 2.5) throw new Error("Price too low");
      const effectiveSlug = slug || slugify(name);
      const res = await fetch("/api/creator/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug: effectiveSlug, description, category, locale, priceMonthly: price, platformFee: 2 }),
      });
      if (!res.ok) {
        let j:any = null;
        try { j = await res.json(); } catch {}
        if (j && j.error === "SLUG_TAKEN") {
          setAvail('no');
          setSuggestion(j.suggestion || `${effectiveSlug}-${Math.floor(100+Math.random()*900)}`);
          setMsg(t.availability.taken);
          return;
        }
        setMsg(t.error);
        return;
      }
setMsg(t.success);
      router.push(`/${locale}/channel/${effectiveSlug}/settings`);
    } catch (e) {
      console.error(e);
      setMsg(t.error);
    } finally {
      setBusy(false);
    }
  };

  const connectStripe = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/stripe/connect/create-account", { method: "POST" });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally { setBusy(false); }
  };

  const dashboardStripe = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/stripe/connect/dashboard-link", { method: "POST" });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally { setBusy(false); }
  };

  const disconnectStripe = async () => {
    setBusy(true);
    try {
      await fetch("/api/stripe/connect/status", { method: "DELETE" });
      setMsg("Stripe disconnected");
    } finally { setBusy(false); }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      {!paid && t.onboarding?.payment && (
        <div data-pay-gate className="mb-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <h3 className="font-semibold mb-2">{t.onboarding?.payment?.title}</h3>
          <p className="text-sm opacity-80 mb-3">{t.onboarding?.payment?.required}</p>
          <button onClick={payNow} className="bg-yellow-400 text-black rounded-xl px-4 py-2 hover:opacity-90">
            {t.onboarding?.payment?.cta}
          </button>
        </div>
      )}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
      <p className="text-white/70 mb-8">{t.subtitle}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form */}
        <section className={`md:col-span-2 ${card}`}>
          <div className="grid gap-4">
            {/* Nome canale */}
            <label className="grid gap-2">
              <span className="text-sm text-white/70">{t.name}</span>
              <input
                className={fieldCls}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Mi canal"
              />
            </label>

            {/* Slug con auto-fill + anteprima URL + disponibilità */}
            <label className="grid gap-1">
              <span className="text-sm text-white/70">{t.slug}</span>
              <input
                className={fieldCls}
                value={slug}
                onChange={e => { setSlug(e.target.value); setSlugTouched(true); }}
                placeholder="mi-canal"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50 select-all">URL: {urlPreview}</span>
                <span className="text-xs" aria-live="polite">
                  <span className="text-white/60 mr-2">{t.availability.label}:</span>
                  {avail==='checking' && <em className="text-yellow-300/90">{t.availability.checking}</em>}
                  {avail==='yes' && <strong className="text-green-400">{t.availability.available}</strong>}
                  {avail==='no' && <strong className="text-red-400">{t.availability.taken}</strong>}
                  {suggestion && (
                    <button data-suggestion-row
                      type="button"
                      className="ml-2 inline-flex items-center px-2 py-1 rounded bg-white/10 hover:bg-white/15 text-xs"
                      onClick={() => { setSlug(suggestion!); setSuggestion(undefined); setAvail('checking'); }} disabled={!paid}
                    >
                      {t?.availability?.help || 'Puoi usare questo suggerimento'}: <span className="ml-1 font-semibold">{suggestion}</span>
                    </button>
                  )}
                  {avail==='unknown' && <span className="text-white/50">—</span>}
                </span>
              </div>
              {avail==='no' && (
                <div className="text-xs text-white/60 flex items-center gap-2">
                  <span>{t.availability.help}.</span>
                  {suggestion && (
                    <button
                      type="button"
                      className="underline hover:no-underline"
                      onClick={()=>{ setSlug(suggestion!); setSlugTouched(true); }}
                    >
                      {suggestion}
                    </button>
                  )}
                </div>
              )}
            </label>

            {/* Descrizione */}
            <label className="grid gap-2">
              <span className="text-sm text-white/70">{t.description}</span>
              <textarea
                className={fieldCls}
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
              />
            </label>

            {/* Categoria: SELECT a tendina */}
            <label className="grid gap-2">
              <span className="text-sm text-white/70">{t.category}</span>
              <select
                className={fieldCls}
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {categories.map((c)=>(
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>

            <div className="flex gap-3 pt-2">
              <button
                className={btnPrimary}
                onClick={createChannel}
                disabled={busy || avail==='no' || !(slug || slugify(name)) || price < 2.5}
                title={avail==='no' ? t.availability.taken : undefined}
              >
                {t.create}
              </button>
              <button className={btnGhost} onClick={()=>history.back()} disabled={busy}>{t.cancel}</button>
            </div>

            {msg && <div className="text-sm text-white/80 pt-2">{msg}</div>}
          </div>
        </section>

        {/* Connessioni */}
        <aside className={card}>
          <h2 className="font-semibold mb-3">{UI[locale].onboarding.myConnections}</h2>
          <div className="grid gap-3">
            <button className={btnPrimary} onClick={connectStripe} disabled={busy}>{UI[locale].onboarding.connectStripe}</button>
            <button className={btnGhost} onClick={dashboardStripe} disabled={busy}>{UI[locale].onboarding.dashboardStripe}</button>
            <button className={btnGhost} onClick={disconnectStripe} disabled={busy}>{UI[locale].onboarding.disconnectStripe}</button>
          </div>
        </aside>
      </div>
    </main>
  );
}
