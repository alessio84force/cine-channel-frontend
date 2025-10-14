import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #000 100%)',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 84,
          fontWeight: 900,
          letterSpacing: 4,
        }}
      >
        CINE-CHANNEL
      </div>
    ),
    size
  )
}
