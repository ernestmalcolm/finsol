'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(options?: { once?: boolean; margin?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: (options?.margin ?? '-80px') as Parameters<typeof useInView>[1] extends { margin?: infer M } ? M : never,
  })
  return { ref, isInView }
}
