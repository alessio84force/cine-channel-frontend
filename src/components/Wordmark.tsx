import React from "react";

type Props = {
  locale?: string;
  withStars?: boolean;
  className?: string;
};

export default function Wordmark({ withStars = true, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-wide ${className}`}>
      <span className="text-2xl md:text-3xl">CINE-CHANNEL</span>
      {withStars && (
        <span aria-hidden="true" className="text-xl md:text-2xl leading-none">
          ★★
        </span>
      )}
    </span>
  );
}
