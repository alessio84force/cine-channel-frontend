"use client";
import React from "react";
import { UI, type L } from "@/lib/ui";

export default function VideosClient({ locale, slug }: { locale: L; slug: string }) {
  const t = UI[locale];
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold mb-4">{t.channel.videos || "Gestión de videos"}</h1>
      <input type="file" accept="video/*" className="mb-4" />
      <p className="text-white/60">{t.channel.videoHint || "Sube tus videos, trailers o contenido premium aquí."}</p>
    </main>
  );
}
