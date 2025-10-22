import "server-only";
import { promises as fs } from 'fs'
import path from 'path'

const DATA = path.join(process.cwd(), '.data')
const FILE = path.join(DATA, 'channels.json')

export type Channel = {
  id: string
  slug: string
  name: string
  description?: string
  language: string
  createdAt: string
  owner?: { email?: string }
  coverUrl?: string
  avatarUrl?: string
  viewCount?: number
  subscriberCount?: number
}

async function ensure() {
  try { await fs.mkdir(DATA, { recursive: true }) } catch {}
  try { await fs.access(FILE) } catch { await fs.writeFile(FILE, '[]', 'utf-8') }
}

export async function getAllChannels(): Promise<Channel[]> {
  await ensure()
  const raw = await fs.readFile(FILE, 'utf-8')
  let list: Channel[] = []
  try { list = JSON.parse(raw) } catch { list = [] }
  // backfill campi mancanti per vecchi canali
  return list.map(c => ({
    viewCount: 0,
    subscriberCount: 0,
    ...c,
  }))
}

export async function getChannelBySlug(slug: string) {
  const all = await getAllChannels()
  return all.find(c => c.slug === slug) ?? null
}

export async function addChannel(input: Omit<Channel,'id'|'createdAt'|'slug'|'viewCount'|'subscriberCount'> & { slug?: string }) {
  const all = await getAllChannels()
  const slug = (input.slug ?? input.name)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
  if (all.some(c => c.slug === slug)) throw new Error('SLUG_TAKEN')
  const ch: Channel = {
    id: crypto.randomUUID(),
    slug,
    name: input.name,
    description: input.description ?? '',
    language: input.language,
    createdAt: new Date().toISOString(),
    owner: input.owner,
    coverUrl: input.coverUrl,
    avatarUrl: input.avatarUrl,
    viewCount: 0,
    subscriberCount: 0,
  }
  all.push(ch)
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf-8')
  return ch
}
