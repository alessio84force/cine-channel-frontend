"use client";
import { useEffect, useState } from 'react';

export default function AudioToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const ok = typeof window !== 'undefined' && localStorage.getItem('audioAllowed') === '1';
    setEnabled(ok);
  }, []);

  const primeAudio = async () => {
    try {
      const Ctx: any = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start();
      ctx.resume();
    } catch {}
  };

  const toggle = async () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      localStorage.setItem('audioAllowed', '1');
      primeAudio();
    } else {
      localStorage.removeItem('audioAllowed');
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      title={enabled ? 'Audio al inicio: ON' : 'Audio al inicio: OFF'}
      className={[
        'rounded-full px-3 py-1.5 text-xs ring-1 transition',
        enabled
          ? 'bg-white/90 text-neutral-900 ring-white hover:bg-white'
          : 'bg-white/5 text-white/80 ring-white/10 hover:bg-white/10'
      ].join(' ')}
    >
      {enabled ? '🔊 Audio ON' : '🔇 Audio OFF'}
    </button>
  );
}
