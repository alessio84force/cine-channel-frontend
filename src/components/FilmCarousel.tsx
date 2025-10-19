"use client";
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const films = [
  { title: "Cine of Channel", image: "/images/immagine1.jpeg", date: "10.24" },
  { title: "Crestamlog Resstlanca", image: "/images/immagine2.jpeg", date: "10.24" },
  { title: "Cine-Cha-Channel", image: "/images/immagine4.jpeg", date: "10.22" },
  { title: "Ciras alldahacrcl", image: "/images/immagine1.jpeg", date: "10.24" },
  { title: "Cine cof Patalnel", image: "/images/immagine1.jpeg", date: "10.22" },
  { title: "Cilemrafiñiel Picinto", image: "/images/immagine2.jpeg", date: "10.21" },
  { title: "Cliteramifiia Patlenin", image: "/images/immagine4.jpeg", date: "10.24" },
  { title: "Cine oatadla Pateln", image: "/images/immagine2.jpeg", date: "10.24" },
];

export default function FilmCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: 'start', slidesToScroll: 1 });

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        background: '#191622',
        borderRadius: '18px',
        padding: '1.3rem 0.7rem'
      }}>
      <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div
          className="embla__container"
          style={{ display: 'flex', gap: '1.3rem' }}>
          {films.map((film, idx) => (
            <div
              className="embla__slide"
              key={idx}
              style={{
                minWidth: '210px',
                background: '#232331',
                borderRadius: '12px',
                padding: '0.7rem 0.3rem 0.4rem 0.3rem',
                textAlign: 'center',
                boxShadow: '0 2px 20px #12001b70'
              }}>
              <Image
                src={film.image}
                alt={film.title}
                width={210}
                height={120}
                style={{ borderRadius: "9px", objectFit: "cover" }}
              />
              <div style={{ fontWeight: 600, fontSize: "1.08rem", margin: "0.8rem 0 0.25rem", color: "#fff" }}>
                {film.title}
              </div>
              <div style={{ fontSize: "0.98rem", color: "#ccc" }}>{film.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
