// Shared easing and variant helpers to satisfy framer-motion v12 strict typing.
import type { Transition, Variants } from 'framer-motion'

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } as Transition },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
