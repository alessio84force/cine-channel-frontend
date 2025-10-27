"use client";
import Link from "next/link";
import { UI, type L } from "@/lib/ui";

type Props = { locale: L; href?: string; withStars?: boolean; className?: string };

export default function Wordmark({ locale, href, withStars=false, className="" }: Props) {
  const t = UI[locale] ?? UI.es;
  const brand = t.brand ?? "CINE-CHANNEL";
  const [left, right] = brand.split("-");

  const logo = (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Mark compact (play-in-a-square) */}
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" className="shrink-0">
        <rect width="24" height="24" rx="5" className="fill-white/95" />
        <path d="M10 7l7 5-7 5V7z" className="fill-black" />
      </svg>

      {/* Wordmark */}
      <span
        data-wordmark
        className={withStars ? "wordmark hero-wordmark" : "wordmark"}
      >
        <span className="wm-left">{left ?? "CINE"}</span>
        {withStars ? (
          <>
            <span className="star">★</span>
            <span className="dash">-</span>
            <span className="star">★</span>
          </>
        ) : (
          <span className="dash">-</span>
        )}
        <span className="wm-right">{right ?? "CHANNEL"}</span>
      </span>
    </span>
  );

  return href ? (
    <Link href={href} className="inline-flex items-center">{logo}</Link>
  ) : (
    logo
  );
}
