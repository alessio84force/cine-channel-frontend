'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'hidden' | 'in' | 'hold' | 'out'

export default function SplashIntro() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<Phase>('hidden')
  const audioStarted = useRef(false)
  const timeouts = useRef<number[]>([])

  const playHeartbeat = async () => {
    if (audioStarted.current) return
    audioStarted.current = true
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      const ctx = new AudioCtx()

      const makeThump = (when: number) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(55, when)
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(180, when)
        gain.gain.setValueAtTime(0.0001, when)
        osc.connect(filter); filter.connect(gain); gain.connect(ctx.destination)
        gain.gain.exponentialRampToValueAtTime(0.95, when + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.24)
        osc.frequency.linearRampToValueAtTime(44, when + 0.20)
        osc.start(when); osc.stop(when + 0.30)
      }

      const now = ctx.currentTime + 0.02
      makeThump(now)
      makeThump(now + 0.28)
      setTimeout(() => { try { ctx.close() } catch {} }, 1200)
    } catch {}
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const KEY = 'cineSplashDone'
    if (sessionStorage.getItem(KEY) === '1') return
    setVisible(true)
    setPhase('in')
    timeouts.current.push(window.setTimeout(() => setPhase('hold'), 450))
    timeouts.current.push(window.setTimeout(() => setPhase('out'), 1300))
    timeouts.current.push(window.setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem(KEY, '1')
    }, 2100))
    playHeartbeat()
    const onInteract = () => playHeartbeat()
    window.addEventListener('pointerdown', onInteract, { once: true })
    return () => {
      timeouts.current.forEach(clearTimeout)
      window.removeEventListener('pointerdown', onInteract)
    }
  }, [])

  if (!visible) return null

  // Scala iniziale PIÙ GRANDE e shrink deciso in uscita
  const style: React.CSSProperties = {
    transition: 'transform 700ms ease, opacity 550ms ease',
    transform:
      phase === 'in'   ? 'scale(1.8)' :   // entra MOLTO grande
      phase === 'hold' ? 'scale(1.6)' :   // resta enorme un attimo
      phase === 'out'  ? 'scale(0.18)' :  // shrink forte e dissolve
                         'scale(1.8)',
    opacity: phase === 'out' ? 0 : 1,
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="relative splash-box splash-willchange" style={style} aria-label="Intro Cine-Channel">
        {/* Stella a schermo intero: forziamo l'SVG a 100% */}
        <div className="splash-star">
          <StarLogo />
        </div>
        {/* Titolo enorme sopra */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="splash-title font-extrabold tracking-widest">CINE-CHANNEL</span>
        </div>
      </div>
    </div>
  )
}
