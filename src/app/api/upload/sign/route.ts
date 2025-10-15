import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { createSignedPutUrl } from '@/lib/storage'

export const runtime = 'nodejs' // firma via aws-sdk; edge non necessario qui


// ----- rate limit base (dev) -----
const bucket = new Map<string,{count:number, reset:number}>()
function rateOk(ip:string, limit=20, windowMs=60_000){
  const now = Date.now()
  const b = bucket.get(ip) || { count:0, reset: now + windowMs }
  if (now > b.reset) { b.count = 0; b.reset = now + windowMs }
  b.count++
  bucket.set(ip, b)
  return { ok: b.count <= limit, remaining: Math.max(0, limit - b.count), reset: b.reset }
}

export async function POST(req: Request) {
  const auth = req.headers.get('authorization') || '';
  const expected = `Bearer ${process.env.UPLOAD_SIGN_SECRET || ''}`;
  if (!process.env.UPLOAD_SIGN_SECRET || auth != expected) {
    return NextResponse.json({ ok:false, error:'unauthorized' }, { status: 401 });
  }
  try {
    const ip = (req.headers.get('x-forwarded-for')||'').split(',')[0] || 'local'
    const rl = rateOk(ip)
    if (!rl.ok) return NextResponse.json({ error:'Too Many Requests' }, { status: 429 })
    const body = await req.json()
    const MAX_BYTES = Number(process.env.UPLOAD_MAX_BYTES || 1610612736)
    if (typeof body.size === 'number' && body.size > MAX_BYTES) {
      return NextResponse.json({ ok:false, error:'file-too-large', max: MAX_BYTES }, { status: 413 })
    }
    const { filename, contentType, contentLength } = body || {}
    if (!filename || !contentType || typeof contentLength !== 'number') {
      return NextResponse.json({ error: 'Bad request' }, { status: 400 })
    }

    // key canonicale (es. user/uuid.ext) — qui semplice UUID
    const ext = (filename.split('.').pop() || 'bin').toLowerCase()
    const key = `raw/${randomUUID()}.${ext}`

    const { url, headers } = await createSignedPutUrl({
      key, contentType, contentLength
    })

    return NextResponse.json({ key, url, headers, ttl: Number(process.env.UPLOAD_URL_TTL_SECONDS || 900) })
  } catch (err:any) {
    const status = err?.status || 500
    return NextResponse.json({ error: err?.message || 'Error' }, { status })
  }
}
