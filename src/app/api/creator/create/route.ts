function suggestSlug(base:string){ const n=Math.floor(100+Math.random()*900); return `${base}-${n}`; }
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { addChannel } from '@/lib/channel-store'

export async function POST(req: Request) {
  try {
    const { name, description = '', language = 'es' } = await req.json()
    if (!name || !String(name).trim()) {
      return NextResponse.json({ ok:false, error:'NAME_REQUIRED' }, { status: 400 })
    }
    const ch = await addChannel({ name: String(name).trim(), description: String(description).trim(), language: String(language).trim() || 'es' })
    return NextResponse.json({ ok:true, slug: ch.slug, language: ch.language })
  } catch (e:any) {
    // gestisci slug duplicato
    if (e?.message === 'SLUG_TAKEN') {
      return NextResponse.json({ ok:false, error:'SLUG_TAKEN' }, { status: 409 })
    }
    return NextResponse.json({ ok:false, error: 'INTERNAL' }, { status: 500 })
  }
}
