'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'pre' | 'grow' | 'hold' | 'shrink' | 'hidden'

export default function SplashIntro() {
  const [phase, setPhase] = useState<Phase>('pre')   // <<< parte "piccola"
  const [visible, setVisible] = useState(true)
  const audioTag = useRef<HTMLAudioElement | null>(null)
  const timers = useRef<number[]>([])
  const triedWebAudio = useRef(false)

  // === Durate & scale ===
  const GROW_MS   = 700
  const HOLD_MS   = 500
  const SHRINK_MS = 700
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

  const tryPlayAudio = async () => {
    const el = audioTag.current
    if (!el) return playWebAudio()
    try {
      el.currentTime = 0
      el.volume = 0.9
      await el.play()
    } catch {
      // riproveremo al primo tap/click
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const KEY = 'cineSplashDone'
    if (sessionStorage.getItem(KEY) === '1') {
      setVisible(false)
      return
    }

    // 1) Primo tick: passa da 'pre' a 'grow' così la transizione parte da START_S
    timers.current.push(window.setTimeout(() => setPhase('grow'), 20))

    // 2) Sequenza temporale
    timers.current.push(window.setTimeout(() => setPhase('hold'),   20 + GROW_MS))
    timers.current.push(window.setTimeout(() => setPhase('shrink'), 20 + GROW_MS + HOLD_MS))
    timers.current.push(window.setTimeout(() => {
      setPhase('hidden'); setVisible(false); sessionStorage.setItem(KEY, '1')
    }, 20 + GROW_MS + HOLD_MS + SHRINK_MS))

    // Audio: prova subito, retry al primo tap/click
    tryPlayAudio()
    const onTap = () => tryPlayAudio()
    window.addEventListener('pointerdown', onTap, { once: true })
    return () => {
      timers.current.forEach(t => clearTimeout(t))
      window.removeEventListener('pointerdown', onTap)
    }
  }, [])

  if (!visible) return null

  // Stile in base alla fase: 'pre' = START_S senza transizione
  const style: React.CSSProperties = (() => {
    if (phase === 'pre') {
      return { transform: `scale(${START_S})`, opacity: 1 } // niente transition qui
    }
    const duration =
      phase === 'grow' ? GROW_MS :
      phase === 'hold' ? 200 :
      SHRINK_MS
    return {
      transition: `transform ${duration}ms ease, opacity ${SHRINK_MS}ms ease`,
      transform:
        phase === 'grow'   ? `scale(${PEAK_S})`   :
        phase === 'hold'   ? `scale(${PEAK_S})`   :
        phase === 'shrink' ? `scale(${END_S})`    :
                             `scale(${START_S})`,
      opacity: phase === 'shrink' ? 0 : 1,
      willChange: 'transform, opacity',
    }
  })()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      {/* MP3 opzionale: metti un file in /public/audio/heartbeat.mp3 */}
      <audio
        ref={audioTag}
        src="/audio/heartbeat.mp3"
        preload="auto"
        playsInline
        style={{ display: 'none' }}
      />
      <div
        className="relative splash-box splash-willchange"
        style={style}
        aria-label="Intro Cine-Channel"
      >
        <div className="splash-star splash-star-color">
          <StarLogo />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="splash-title font-extrabold tracking-widest">CINE-CHANNEL</span>
        </div>
      </div>
    </div>
  )
}
