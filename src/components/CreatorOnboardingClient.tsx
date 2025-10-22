import { usePathname } from 'next/navigation'
"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { UI, L } from '@/lib/ui'
import { usePathname } from 'next/navigation'

type Category = 'gamers'|'streamers'|'videobloggers'|'cineastas';

export default function CreatorOnboardingClient({ locale }: { locale: L }) {
  const loc: L = (locale === 'en' || locale === 'fr') ? locale : 'es'
  const T = UI[loc].onboarding

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<Category>('gamers');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState<number>(2.5);

  useEffect(() => {
    // best-effort: calcola slug dal nome
    setSlug(name.toLowerCase().trim().replace(/[^a-z0-9]+/gi,'-').replace(/^-+|-+$/g,''));
  }, [name])

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">{T.title}</h1>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm text-white/70">{T.name}</span>
          <input className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10"
                 value={name} onChange={e=>setName(e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm text-white/70">{T.slug}</span>
          <input className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10"
                 value={slug} onChange={e=>setSlug(e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm text-white/70">{T.category}</span>
          <select className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10"
                  value={category} onChange={e=>setCategory(e.target.value as Category)}>
            <option value="gamers">gamers</option>
            <option value="streamers">streamers</option>
            <option value="videobloggers">videobloggers</option>
            <option value="cineastas">cineastas</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-white/70">{T.description}</span>
          <textarea className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10"
                    rows={4} value={desc} onChange={e=>setDesc(e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm text-white/70">{T.price}</span>
          <input type="number" min="2.5" step="0.5"
                 className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10"
                 value={price} onChange={e=>setPrice(parseFloat(e.target.value))} />
        </label>

        <div className="flex gap-3 pt-2">
          <button className="rounded-full px-4 py-2 bg-white text-neutral-900 hover:opacity-90">
            {T.continue}
          </button>
          <a href="#" className="rounded-full px-4 py-2 ring-1 ring-white/10 hover:bg-white/10">
            {T.cancel}
          </a>
        </div>
      </div>
    </main>
  )
}
