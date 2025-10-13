'use client'

import { useEffect, useRef, useState } from 'react'
import StarLogo from '@/components/StarLogo'

type Phase = 'hidden' | 'in' | 'hold' | 'out'

/**
 * Splash fullscreen:
 * - mostra overlay nero fullscreen
 * - stella enorme (70vmin) con "CINE-CHANNEL"
 * - anima in -> hold -> out
 * - heartbeat: WebAudio con filtro + doppio "thump", retry al primo click/tap
 * - una sola volta per sessione (sessionStorage 'cineSplashDone' = '1')
 */
export default function SplashIntro() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<Phase>('hidden')
  const audioStarted = useRef(false)
  const timeouts = useRef<number[]>([])

  // Heartbeat con suono più "cinematografico"
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

        // catena: osc -> filtro lowpass -> gain -> out
        osc.type = 'sine'
        osc.frequency.setValueAtTime(55, when) // basso
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(180, when)
        gain.gain.setValueAtTime(0.0001, when)

        osc.connect(filter)
        filter.connect(gain)
        gain.connect(ctx.destination)

        // inviluppo "boom"
        gain.gain.exponentialRampToValueAtTime(0.9, when + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.22)

        // leggero pitch drop per punch
        osc.frequency.linearRampToValueAtTime(48, when + 0.18)

        osc.start(when)
        osc.stop(when + 0.28)
        osc.onended = () => {
          try { osc.disconnect(); filter.disconnect(); gain.disconnect() } catch {}
        }
      }

      const now = ctx.currentTime + 0.02
      makeThump(now)           // tum
      makeThump(now + 0.26)    // tum

      // chiudi dopo ~1s
      setTimeout(() => { try { ctx.close() } catch {} }, 1000)
    } catch {
      // ignoriamo se bloccato dal browser: riproveremo su interazione
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const KEY = 'cineSplashDone'
    const once = sessionStorage.getItem(KEY) === '1'
    if (once) return

    setVisible(true)
    setPhase('in')

    // sequenza animazioni
    timeouts.current.push(window.setTimeout(() => setPhase('hold'), 500))
    timeouts.current.push(window.setTimeout(() => setPhase('out'), 1300))
    timeouts.current.push(window.setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem(KEY, '1')
    }, 2000))

    // tenta subito il suono + retry al primo tap/click
    playHeartbeat()
    const onInteract = () => playHeartbeat()
    window.addEventListener('pointerdown', onInteract, { once: true })
    return () => {
      timeouts.current.forEach(t => clearTimeout(t))
      window.removeEventListener('pointerdown', onInteract)
    }
  }, [])

  if (!visible) return null

  // calcola stile di transizione fasi
  const style: React.CSSProperties = {
    transition: 'transform 600ms ease, opacity 500ms ease',
    animation: phase === 'in' ? 'splash-pop 450ms ease-out' as any : undefined,
    transform:
      phase === 'in'  ? 'scale(1.0)' :
      phase === 'hold'? 'scale(1.0)' :
      phase === 'out' ? 'scale(0.2)' : 'scale(1.0)',
    opacity:
      phase === 'out' ? 0 : 1,
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="splash-box splash-willchange" style={style} aria-label="Intro Cine-Channel">
        {/* Stella enorme */}
        <div className="w-full h-full flex items-center justify-center">
          <StarLogo />
        </div>
        {/* Titolo sopra la stella */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="splash-title font-extrabold tracking-widest">
            CINE-CHANNEL
          </span>
        </div>
      </div>
    </div>
  )
}
