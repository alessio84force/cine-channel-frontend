'use client';
import React from 'react';

export default function StarLogo({
  size = 20,
  className = ''
}: { size?: number; className?: string }) {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`ccStarGrad-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
      </defs>
      <polygon
        points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
        fill={`url(#ccStarGrad-${id})`}
      />
    </svg>
  );
}
