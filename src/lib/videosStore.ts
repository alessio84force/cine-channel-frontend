import fs from 'fs/promises'
import path from 'path'

export type VideoMeta = {
  id: string
  key: string        // storage key (es. raw/uuid.mp4)
  filename: string
  size: number
  contentType: string
  status: 'uploading'|'processing'|'ready'|'failed'
  createdAt: string
  posterUrl?: string
  playbackUrl?: string
}

const FILE = path.join(process.cwd(), 'data', 'videos.json')

async function ensureFile() {
  try { await fs.access(FILE) } catch {
    await fs.mkdir(path.dirname(FILE), { recursive: true })
    await fs.writeFile(FILE, '[]', 'utf8')
  }
}

export async function listVideos(): Promise<VideoMeta[]> {
  await ensureFile()
  const raw = await fs.readFile(FILE, 'utf8')
  try { return JSON.parse(raw) as VideoMeta[] } catch { return [] }
}

export async function addOrUpdate(v: VideoMeta) {
  await ensureFile()
  const all = await listVideos()
  const i = all.findIndex(x => x.id === v.id)
  if (i >= 0) all[i] = v
  else all.unshift(v)
  await fs.writeFile(FILE, JSON.stringify(all, null, 2), 'utf8')
  return v
}
