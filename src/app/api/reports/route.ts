import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'reports.json');

async function ensureFile() {
  try { await fs.access(filePath); }
  catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify([]), 'utf8');
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, contentUrl, reason, details, declaration } = body || {};
    if (!name || !email || !contentUrl || !reason || !declaration) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 });
    }
    await ensureFile();
    const raw = await fs.readFile(filePath, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push({ id: String(Date.now()), name, email, contentUrl, reason, details, createdAt: new Date().toISOString() });
    await fs.writeFile(filePath, JSON.stringify(arr, null, 2), 'utf8');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }
}
