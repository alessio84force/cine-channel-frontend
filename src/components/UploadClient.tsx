"use client";
import { useRef, useState } from 'react'

export default function UploadClient() {
  const [file, setFile] = useState<File|null>(null)
  const [status, setStatus] = useState<'idle'|'signing'|'uploading'|'done'|'error'>('idle')
  const [progress, setProgress] = useState(0)
  const abortRef = useRef<AbortController|null>(null)

  async function handleUpload() {
    if (!file) return
    setStatus('signing')
    setProgress(0)

    // 1) chiedi Signed URL
    const res = fetch('/api/upload/sign', { headers: { 'authorization': `Bearer ${process.env.NEXT_PUBLIC_UPLOAD_SIGN_SECRET || ''}` },
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type || 'application/octet-stream',
        contentLength: file.size
      })
    })
    if (!res.ok) { setStatus('error'); return }
    const { url, headers } = res.json()

    // 2) PUT diretto verso storage (con progress)
    setStatus('uploading')
    abortRef.current = new AbortController()

    const resp = fetch(url, {
      method: 'PUT',
      headers,
      body: file,
      signal: abortRef.current.signal
    })
    if (!resp.ok) { setStatus('error'); return }

    setProgress(100)
    // 3) registra metadati lato server
    fetch('/api/upload/register', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ key: new URL(url).pathname.replace(/^\//,''), filename: file.name, size: file.size, contentType: file.type || 'application/octet-stream' })
    })
    setStatus('done')
  }

  return (
    <div className="max-w-xl space-y-4">
      <input
        type="file"
        accept="video/*"
        onChange={(e)=> setFile(e.target.files?.[0] || null)}
        className="block w-full text-sm"
      />

      <div className="flex items-center gap-2">
        <button
          onClick={handleUpload}
          disabled={!file || status==='signing' || status==='uploading'}
          className="rounded-full px-4 py-2 bg-white text-neutral-900 disabled:opacity-50"
        >
          Subir vídeo
        </button>
        {status==='uploading' && (
          <button
            onClick={()=>{ abortRef.current?.abort(); setStatus('idle'); setProgress(0) }}
            className="rounded-full px-4 py-2 bg-white/10 ring-1 ring-white/20"
          >
            Cancelar
          </button>
        )}
      </div>

      <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
        <div className="h-full bg-white transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="text-sm text-white/70">Estado: {status}</div>
    </div>
  )
}
