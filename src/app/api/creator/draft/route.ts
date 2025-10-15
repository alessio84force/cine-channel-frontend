import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';
import {promises as fs} from 'fs';
import path from 'path';
import {randomUUID} from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Draft = {
  channelName?: string;
  category?: 'gamers'|'streamers'|'videobloggers'|'cineastas';
  slug?: string;
  updatedAt?: string;
};

const DATA_DIR = path.join(process.cwd(), 'data', 'drafts');

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}
async function readDraft(id: string): Promise<Draft | null> {
  try {
    const p = path.join(DATA_DIR, `${id}.json`);
    const raw = await fs.readFile(p, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
async function writeDraft(id: string, draft: Draft) {
  await ensureDir();
  const p = path.join(DATA_DIR, `${id}.json`);
  await fs.writeFile(p, JSON.stringify(draft, null, 2), 'utf8');
}

function normalizeDraft(body: any): Draft {
  const out: Draft = {};
  if (typeof body?.channelName === 'string') {
    const v = body.channelName.trim();
    if (v.length >= 1 && v.length <= 120) out.channelName = v;
  }
  const cat = body?.category;
  if (cat === 'gamers' || cat === 'streamers' || cat === 'videobloggers' || cat === 'cineastas') {
    out.category = cat;
  }
  if (typeof body?.slug === 'string') {
    const s = body.slug.toLowerCase();
    if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s) && s.length >= 3 && s.length <= 60) {
      out.slug = s;
    }
  }
  out.updatedAt = new Date().toISOString();
  return out;
}

export async function GET() {
  const jar = await cookies();
  let id = jar.get('cc_draft')?.value;
  let setCookie = false;
  if (!id) {
    id = randomUUID();
    setCookie = true;
  }
  const draft = (await readDraft(id)) ?? {};
  const res = NextResponse.json({ id, draft });
  if (setCookie) {
    res.cookies.set('cc_draft', id, {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30
    });
  }
  return res;
}

export async function POST(req: Request) {
  const jar = await cookies();
  let id = jar.get('cc_draft')?.value;
  let setCookie = false;
  if (!id) {
    id = randomUUID();
    setCookie = true;
  }
  const body = await req.json().catch(() => ({}));
  const draft = normalizeDraft(body);
  const current = (await readDraft(id)) ?? {};
  const merged: Draft = { ...current, ...draft, updatedAt: new Date().toISOString() };
  await writeDraft(id, merged);

  const res = NextResponse.json({ id, draft: merged });
  if (setCookie) {
    res.cookies.set('cc_draft', id, {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30
    });
  }
  return res;
}
