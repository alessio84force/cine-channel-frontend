'use client'
import { useState } from 'react'
import { t, type Locale } from '@/lib/i18n'

export default function OnboardingForm({ locale }: { locale: Locale }) {
  const i18n = t(locale)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setPending(true)
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') || '').trim(),
      description: String(fd.get('description') || '').trim(),
      language: String(fd.get('language') || locale),
    }
    try {
      const res = await fetch('/api/creator/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const j = await res.json()
      if (!res.ok || !j?.ok) {
        setError(j?.error || 'Error')
      } else {
        window.location.assign(`/${j.language}/channel/${j.slug}`)
      }
    } catch (err:any) {
      setError('INTERNAL')
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="language" value={locale} />

      <div>
        <label className="block text-sm text-white/70">{i18n.onboarding.nameLabel}</label>
        <input
          name="name"
          required
          placeholder={i18n.onboarding.namePlaceholder}
          className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70">{i18n.onboarding.descriptionLabel}</label>
        <textarea
          name="description"
          rows={4}
          placeholder={i18n.onboarding.descPlaceholder}
          className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>

      {error && <p className="text-red-400">Error: {String(error)}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-white text-neutral-900 px-4 py-2 hover:opacity-90 disabled:opacity-50"
      >
        {pending ? i18n.onboarding.creating : i18n.onboarding.submit}
      </button>
    </form>
  )
}
