"use client";
import React from "react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        {children}
      </article>
    </section>
  );
}
