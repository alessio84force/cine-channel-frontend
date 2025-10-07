import Image from 'next/image';

const films = [
  {
    id: 1,
    title: "Il Padrino",
    description: "Un classico del cinema sulla famiglia e il crimine.",
    image: "/images/immagine1.jpeg",
  },
  {
    id: 2,
    title: "La Vita è Bella",
    description: "Una commedia drammatica sull'amore e la speranza.",
    image: "/images/immagine2.jpeg",
  },
  {
    id: 3,
    title: "Inception",
    description: "Un thriller fantascientifico che esplora i sogni.",
    image: "/images/immagine4.jpeg",
  }
];

export default function FilmInEvidenzaPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Film in evidenza</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {films.map((film) => (
          <li key={film.id} style={{ marginBottom: "2rem" }}>
            <Image
              src={film.image}
              alt={film.title}
              width={600}
              height={400}
              style={{ borderRadius: "8px" }}
            />
            <h2>{film.title}</h2>
            <p>{film.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
