'use server'

import { redirect } from 'next/navigation'
import { addChannel } from '@/lib/channel-store'

export async function createChannel(prevState: any, formData: FormData) {
  const name = String(formData.get('name') || '').trim()
  const description = String(formData.get('description') || '').trim()
  const language = String(formData.get('language') || 'es').trim() || 'es'
  if (!name) return { ok:false, error:'Il nome è obbligatorio.' }

  try {
    const ch = await addChannel({ name, description, language })
    redirect(`/${language}/channel/${ch.slug}`)
  } catch (e:any) {
    if (e?.message === 'SLUG_TAKEN') return { ok:false, error:'Esiste già un canale con questo nome.' }
    return { ok:false, error:'Errore inatteso. Riprova.' }
  }
}
