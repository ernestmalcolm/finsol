'use client'
import { useRef, useEffect } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

export function useAnimatedCounter(
  value: number,
  options?: { duration?: number; decimals?: number }
) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const duration = options?.duration ?? 2
  const decimals = options?.decimals ?? 0

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [isInView, motionValue, value, duration])

  useEffect(() => {
    return motionValue.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(decimals)
      }
    })
  }, [motionValue, decimals])

  return ref
}
