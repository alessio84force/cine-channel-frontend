import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'public-channels.json');

export type PublicChannel = {
  slug: string;
  name: string;
  category: 'gamers'|'streamers'|'videobloggers'|'cineastas';
  description?: string;
  priceMonthly?: number;
  avatarUrl?: string;
  bannerUrl?: string;
  views?: number;
  updatedAt?: string;
};

async function ensureFile() {
  try { await fs.access(filePath); }
  catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify({}), 'utf8');
  }
}

export async function readPublicMap(): Promise<Record<string, PublicChannel>> {
  await ensureFile();
  const raw = await fs.readFile(filePath, 'utf8');
  try { return JSON.parse(raw) as Record<string, PublicChannel>; }
  catch { return {}; }
}

export async function writePublicMap(map: Record<string, PublicChannel>) {
  await ensureFile();
  await fs.writeFile(filePath, JSON.stringify(map, null, 2), 'utf8');
}

export async function upsertPublicChannel(ch: PublicChannel) {
  const map = await readPublicMap();
  map[ch.slug] = { ...map[ch.slug], ...ch, updatedAt: new Date().toISOString() };
  await writePublicMap(map);
  return map[ch.slug];
}

export async function getPublicBySlug(slug: string) {
  const map = await readPublicMap();
  return map[slug] || null;
}
