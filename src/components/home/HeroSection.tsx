'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants, Transition } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EASE } from '@/lib/motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } as Transition },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Dar es Salaam port at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[rgba(10,8,4,0.45)]" />
      </div>

      {/* Animated top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60 z-10"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 section-container text-center max-w-5xl"
      >
        <motion.p variants={item} className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-6">
          Strategic Advisory &amp; Financial Structuring
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-display-2xl font-light text-text-primary leading-[1.05] mb-2"
        >
          Bridging Capital.
        </motion.h1>
        <motion.h1
          variants={item}
          className="font-display text-display-2xl font-light text-gold-shimmer leading-[1.05] mb-8"
        >
          Unlocking Africa.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Finsol T Ltd connects global investors with high-value African projects — through
          vetted deal origination, financial structuring, and end-to-end commodity brokerage.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-surface-base font-medium font-body rounded-md hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(201,168,76,0.25)] hover:-translate-y-0.5"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(201,168,76,0.3)] text-text-primary rounded-md hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-[linear-gradient(to_bottom,rgba(201,168,76,0.6),transparent)]"
        />
      </motion.div>
    </section>
  )
}
