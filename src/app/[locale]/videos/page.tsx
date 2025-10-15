import { listVideos } from '@/lib/videosStore'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function VideosPage() {
  const vids = await listVideos()
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Mis vídeos (demo)</h1>
      <p className="mt-2 text-white/70 text-sm">Questa lista usa lo store file-based (solo dev). In prod usa DB.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        {vids.map(v => (
          <div key={v.id} className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
            <div className="relative aspect-video bg-white/5">
              {v.posterUrl ? (
                v.posterUrl.endsWith('.svg') ? (
                  <Image src={v.posterUrl} alt="" fill className="object-contain p-6" />
                ) : (
                  <Image src={v.posterUrl} alt="" fill className="object-cover" />
                )
              ) : (
                <div className="absolute inset-0 grid place-items-center text-white/60">No poster</div>
              )}
            </div>
            <div className="p-4 text-sm">
              <div className="font-medium line-clamp-1">{v.filename}</div>
              <div className="text-white/60 mt-1">{v.status} · {(v.size/1_000_000).toFixed(1)} MB</div>
              <div className="mt-2 text-white/60 text-xs break-all">key: {v.key}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/es/upload" className="rounded-full px-4 py-2 bg-white text-neutral-900">Subir otro</Link>
      </div>
    </main>
  )
}
