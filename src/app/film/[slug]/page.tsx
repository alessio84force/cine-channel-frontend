'use client';

import Image from 'next/image';

const films = [
  { slug: "cine-of-channel", title: "Cine of Channel", image: "/images/immagine1.jpeg", date: "10.24", description: "Descrizione completa del film Cine of Channel" },
  { slug: "crestamlog-resstlanca", title: "Crestamlog Resstlanca", image: "/images/immagine2.jpeg", date: "10.24", description: "Descrizione completa del film Crestamlog Resstlanca" },
  { slug: "cine-cha-channel", title: "Cine-Cha-Channel", image: "/images/immagine4.jpeg", date: "10.22", description: "Descrizione completa del film Cine-Cha-Channel" },
];

export default function FilmDetailPage({ params }: { params: { slug: string } }) {
  const film = films.find(f => f.slug === params.slug);

  if (!film) {
    return <div>Film non trovato</div>;
  }

  return (
    <div style={{ padding: '2rem', color: '#fff', backgroundColor: '#111' }}>
      <h1>{film.title}</h1>
      <Image src={film.image} alt={film.title} width={400} height={240} style={{ borderRadius: 10 }} />
      <p><strong>Data:</strong> {film.date}</p>
      <p>{film.description}</p>
    </div>
  );
}
