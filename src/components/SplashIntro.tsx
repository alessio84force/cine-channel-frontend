'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'pre' | 'grow' | 'hold' | 'shrink' | 'hidden'

export default function SplashIntro() {
  // Rispetta preferenze utente sui movimenti
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  // Mostra una sola volta per sessione
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return sessionStorage.getItem('cineSplashDone') === '1' ? false : true
  })
  const [phase, setPhase] = useState<Phase>('pre')
  const audioTag = useRef<HTMLAudioElement | null>(null)
  const timers = useRef<number[]>([])

  // Tempi (versione più scattante)
  const GROW_MS   = prefersReduced ? 0   : 700
  const HOLD_MS   = prefersReduced ? 150 : 500
  const SHRINK_MS = prefersReduced ? 200 : 700
  const START_S   = 0.35
  const PEAK_S    = 1.9
  const END_S     = 0.18

  // Autorizzazione audio (da tuo toggler: localStorage 'audioAllowed' === '1')
  const canPlayAudio = () => {
    if (typeof window === 'undefined') return false
    try { return localStorage.getItem('audioAllowed') === '1' } catch { return false }
  }

  const playWebAudio = async () => {
    if (!canPlayAudio()) return
    try {
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext
      const ctx = new AudioCtx()
      const thump = (when: number) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const lp = ctx.createBiquadFilter()
        osc.type = 'sine'; osc.frequency.setValueAtTime(55, when)
        lp.type = 'lowpass'; lp.frequency.setValueAtTime(200, when)
        gain.gain.setValueAtTime(0.0001, when)
        osc.connect(lp); lp.connect(gain); gain.connect(ctx.destination)
        gain.gain.exponentialRampToValueAtTime(0.95, when + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.24)
        osc.frequency.linearRampToValueAtTime(45, when + 0.20)
        osc.start(when); osc.stop(when + 0.30)
      }
      const now = ctx.currentTime + 0.02
      thump(now); thump(now + 0.28)
      thump(now + 0.80); thump(now + 1.06)
      setTimeout(() => { try { ctx.close() } catch {} }, 2200)
    } catch {}
  }

  const tryPlayAudio = async () => {
    if (!canPlayAudio()) return
    const el = audioTag.current
    if (el) {
      try { el.currentTime = 0; el.volume = 0.9; await el.play(); return } catch {}
    }
    // fallback discreto
    playWebAudio()
  }

  useEffect(() => {
    if (!visible) return
    if (typeof window === 'undefined') return

    // Salta animazioni se reduced motion
    if (prefersReduced) {
      setPhase('hidden'); setVisible(false)
      sessionStorage.setItem('cineSplashDone', '1')
      return
    }

    // Sequenza small→big→small
    timers.current.push(window.setTimeout(() => setPhase('grow'), 20))
    timers.current.push(window.setTimeout(() => setPhase('hold'),   20 + GROW_MS))
    timers.current.push(window.setTimeout(() => setPhase('shrink'), 20 + GROW_MS + HOLD_MS))
    timers.current.push(window.setTimeout(() => {
      setPhase('hidden'); setVisible(false); sessionStorage.setItem('cineSplashDone', '1')
    }, 20 + GROW_MS + HOLD_MS + SHRINK_MS))

    // Suono: solo se consentito
    tryPlayAudio()
    const onTap = () => tryPlayAudio()
    window.addEventListener('pointerdown', onTap, { once: true })
    return () => {
      timers.current.forEach(t => clearTimeout(t))
      window.removeEventListener('pointerdown', onTap)
    }
  }, [visible])

  if (!visible) return null

  const style: React.CSSProperties = (() => {
    if (phase === 'pre') return { transform: `scale(${START_S})`, opacity: 1 }
    const duration = phase === 'grow' ? GROW_MS : phase === 'hold' ? 180 : SHRINK_MS
    return {
      transition: `transform ${duration}ms ease, opacity ${SHRINK_MS}ms ease`,
      transform:
        phase === 'grow'   ? `scale(${PEAK_S})` :
        phase === 'hold'   ? `scale(${PEAK_S})` :
        phase === 'shrink' ? `scale(${END_S})`  :
                             `scale(${START_S})`,
      opacity: phase === 'shrink' ? 0 : 1,
      willChange: 'transform, opacity',
    }
  })()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black" aria-hidden="true">
      {/* Metti un file reale per sentire forte: /public/audio/heartbeat.mp3 */}
      <audio ref={audioTag} src="/audio/heartbeat.mp3" preload="auto" playsInline style={{ display: 'none' }} />
      <div className="relative splash-box splash-willchange" style={style}>
        <div className="splash-star text-brand z-10">
          <StarLogo />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <span className="splash-title text-white title-outline font-extrabold tracking-widest">
            CINE-CHANNEL
          </span>
        </div>
      </div>
    </div>
  )
}
