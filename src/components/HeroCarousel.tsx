"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const SLIDES = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"] as const;
const INTERVAL_MS = 5000;
const FADE_MS = 900;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion || paused) return;
    timer.current = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS
    );
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, reduceMotion]);

  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ height: "62vh", minHeight: 420 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero rotante"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => {
          const isActive = i === index;
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity"
              style={{ opacity: isActive ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
              aria-hidden={!isActive}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                sizes="(min-width:1280px) 1100px, 100vw"
                className="object-cover [filter:brightness(0.84)]"
              />
            </div>
          );
        })}
      </div>

      {/* Overlay centrata */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow">
          CINE-CHANNEL
        </h1>
        <p className="max-w-3xl mt-3 text-balance text-lg md:text-2xl leading-tight text-white/90">
          La plataforma para gamers, cine y esport con experiencia premium
        </p>
        <div className="pointer-events-auto mt-5">
          <a
            href="/es/creator/onboarding"
            className="rounded-xl bg-white text-neutral-900 px-4 py-2 font-medium hover:opacity-90"
          >
            Crear canal
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setIndex(i)}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
