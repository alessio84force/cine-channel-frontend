'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'grow' | 'hold' | 'shrink' | 'hidden'

export default function SplashIntro() {
  const [phase, setPhase] = useState<Phase>('grow')
  const [visible, setVisible] = useState(true)
  const audioStarted = useRef(false)
  const timers = useRef<number[]>([])

  // === Parametri facili da regolare ===
  const GROW_MS   = 900   // da piccola a grande
  const HOLD_MS   = 1400  // tempo a grandezza massima
  const SHRINK_MS = 900   // rimpicciolimento+fade
  const START_S   = 0.35  // scala iniziale (piccola)
  const PEAK_S    = 1.9   // scala massima (grande)
  const END_S     = 0.18  // scala finale (molto piccola mentre svanisce)

  // Heartbeat migliorato (doppio colpo x2 ondate)
  const playHeartbeat = async () => {
    if (audioStarted.current) return
    audioStarted.current = true
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
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
      // onda 1 (inizio grow)
      thump(now)
      thump(now + 0.28)
      // onda 2 (a metà hold)
      thump(now + 1.0)
      thump(now + 1.28)

      // chiudi dopo ~2.2s
      setTimeout(() => { try { ctx.close() } catch {} }, 2200)
    } catch {
      // riproveremo al primo click/tap
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const KEY = 'cineSplashDone'
    if (sessionStorage.getItem(KEY) === '1') {
      setVisible(false)
      return
    }

    // sequenza temporale: grow -> hold -> shrink -> hidden
    timers.current.push(window.setTimeout(() => setPhase('hold'),   GROW_MS))
    timers.current.push(window.setTimeout(() => setPhase('shrink'), GROW_MS + HOLD_MS))
    timers.current.push(window.setTimeout(() => {
      setPhase('hidden'); setVisible(false); sessionStorage.setItem(KEY, '1')
    }, GROW_MS + HOLD_MS + SHRINK_MS))

    // audio subito, retry al primo tap/click se bloccato
    playHeartbeat()
    const onTap = () => playHeartbeat()
    window.addEventListener('pointerdown', onTap, { once: true })
    return () => {
      timers.current.forEach(t => clearTimeout(t))
      window.removeEventListener('pointerdown', onTap)
    }
  }, [])

  if (!visible) return null

  // stile in base alla fase
  const style: React.CSSProperties = {
    transition: `transform ${phase==='grow'?GROW_MS:phase==='hold'?200:SHRINK_MS}ms ease, opacity ${SHRINK_MS}ms ease`,
    transform:
      phase === 'grow'   ? `scale(${PEAK_S})`   : // finisce la crescita a PEAK_S
      phase === 'hold'   ? `scale(${PEAK_S})`   :
      phase === 'shrink' ? `scale(${END_S})`    :
                           `scale(${START_S})`,
    opacity: phase === 'shrink' ? 0 : 1,
    willChange: 'transform, opacity',
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div
        className="relative splash-box splash-willchange"
        style={{ transform: `scale(${START_S})`, ...style }}
        aria-label="Intro Cine-Channel"
      >
        {/* Stella enorme, svg full-size */}
        <div className="splash-star">
          <StarLogo />
        </div>
        {/* Titolo centrale */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="splash-title font-extrabold tracking-widest">CINE-CHANNEL</span>
        </div>
      </div>
    </div>
  )
}
