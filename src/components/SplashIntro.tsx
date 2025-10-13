'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'grow' | 'hold' | 'shrink' | 'hidden'

export default function SplashIntro() {
  const [phase, setPhase] = useState<Phase>('grow')
  const [visible, setVisible] = useState(true)
  const audioTag = useRef<HTMLAudioElement | null>(null)
  const timers = useRef<number[]>([])
  const triedWebAudio = useRef(false)

  // === Durate & scale (puoi regolarle) ===
  const GROW_MS   = 900
  const HOLD_MS   = 1400
  const SHRINK_MS = 900
  const START_S   = 0.35
  const PEAK_S    = 1.9
  const END_S     = 0.18

  // Fallback WebAudio se l'MP3 non parte
  const playWebAudio = async () => {
    if (triedWebAudio.current) return
    triedWebAudio.current = true
    try {
      const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext
      const ctx = new AudioCtx()
      const thump = (when: number) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const lp = ctx.createBiquadFilter()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(55, when)
        lp.type = 'lowpass'
        lp.frequency.setValueAtTime(200, when)
        gain.gain.setValueAtTime(0.0001, when)
        osc.connect(lp); lp.connect(gain); gain.connect(ctx.destination)
        gain.gain.exponentialRampToValueAtTime(0.95, when + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.24)
        osc.frequency.linearRampToValueAtTime(45, when + 0.20)
        osc.start(when); osc.stop(when + 0.30)
      }
      const now = ctx.currentTime + 0.02
      thump(now); thump(now + 0.28)
      thump(now + 1.00); thump(now + 1.28)
      setTimeout(() => { try { ctx.close() } catch {} }, 2200)
    } catch {}
  }

  // Prova a suonare l'<audio>, altrimenti fallback
  const tryPlayAudio = async () => {
    const el = audioTag.current
    if (!el) return playWebAudio()
    try {
      el.currentTime = 0
      el.volume = 0.9
      await el.play()
    } catch {
      // verrà riprovato su interazione utente
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const KEY = 'cineSplashDone'
    if (sessionStorage.getItem(KEY) === '1') {
      setVisible(false)
      return
    }

    timers.current.push(window.setTimeout(() => setPhase('hold'),   GROW_MS))
    timers.current.push(window.setTimeout(() => setPhase('shrink'), GROW_MS + HOLD_MS))
    timers.current.push(window.setTimeout(() => {
      setPhase('hidden'); setVisible(false); sessionStorage.setItem(KEY, '1')
    }, GROW_MS + HOLD_MS + SHRINK_MS))

    // tenta subito di riprodurre; se bloccato, riprova al primo tap/click
    tryPlayAudio()
    const onTap = () => tryPlayAudio()
    window.addEventListener('pointerdown', onTap, { once: true })
    return () => {
      timers.current.forEach(t => clearTimeout(t))
      window.removeEventListener('pointerdown', onTap)
    }
  }, [])

  if (!visible) return null

  const style: React.CSSProperties = {
    transition: `transform ${phase==='grow'?GROW_MS:phase==='hold'?200:SHRINK_MS}ms ease, opacity ${SHRINK_MS}ms ease`,
    transform:
      phase === 'grow'   ? `scale(${PEAK_S})`   :
      phase === 'hold'   ? `scale(${PEAK_S})`   :
      phase === 'shrink' ? `scale(${END_S})`    :
                           `scale(${START_S})`,
    opacity: phase === 'shrink' ? 0 : 1,
    willChange: 'transform, opacity',
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      {/* Audio MP3: metti il file in /public/audio/heartbeat.mp3 per un suono deciso */}
      <audio
        ref={audioTag}
        src="/audio/heartbeat.mp3"
        preload="auto"
        playsInline
        style={{ display: 'none' }}
      />
      <div
        className="relative splash-box splash-willchange"
        style={{ transform: `scale(${START_S})`, ...style }}
        aria-label="Intro Cine-Channel"
      >
        <div className="splash-star">
          <StarLogo />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="splash-title font-extrabold tracking-widest">CINE-CHANNEL</span>
        </div>
      </div>
    </div>
  )
}
