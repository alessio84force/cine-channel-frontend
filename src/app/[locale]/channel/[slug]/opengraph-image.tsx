import { ImageResponse } from 'next/og';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function ImageOG({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g,' ');
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#000',
          color: '#fff',
          fontSize: 60,
          fontFamily: 'sans-serif',
          position: 'relative'
        }}
      >
        {/* Stella semplice */}
        <div style={{
          position:'absolute', left:80, top:80, width:180, height:180,
          background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: '0 0 40px rgba(251,191,36,.5)'
        }} />
        <div style={{margin:'auto 80px auto 300px', display:'flex', flexDirection:'column'}}>
          <div style={{fontSize:32, opacity:.7}}>Cine-Channel</div>
          <div style={{fontSize:72, fontWeight:800, textTransform:'capitalize', lineHeight:1.1}}>{title}</div>
        </div>
      </div>
    ),
    size
  );
}
