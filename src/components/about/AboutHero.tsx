'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const PILLARS = [
  {
    label: 'Focus',
    title: 'East & Central Africa',
    text:  '7 active markets — Tanzania, Kenya, Uganda, Malawi, Zambia, DRC, and Nigeria.',
  },
  {
    label: 'Approach',
    title: 'Rigorous. Transparent.',
    text:  'Every engagement is built on verified foundations — KYC, KYB, and ADD-certified onboarding before any engagement begins.',
  },
  {
    label: 'Mission',
    title: 'Bridging Capital. Unlocking Africa.',
    text:  "We exist to ensure global capital finds its way to Africa's best opportunities — and that African opportunity reaches the world.",
  },
]

export function AboutHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Aerial view of Dar es Salaam, Tanzania — Finsol's home market"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#080C14]/72" />

      {/* Gold radial glow top-left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.1)_0%,transparent_55%)]" />

      {/* Subtle bottom fade to surface */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080C14] to-transparent" />

      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60"
      />

      {/* Main headline content */}
      <div className="section-container relative z-10 pt-44 pb-16 flex-1">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-5"
        >
          About Finsol T Ltd
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-xl font-light text-text-primary mb-6 max-w-3xl"
        >
          A Different Kind of African Advisory Firm
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
          className="gold-line mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-lg leading-relaxed max-w-xl mb-10"
        >
          Deep local knowledge. Institutional-grade expertise. Built entirely for the African opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-surface-base text-sm font-medium font-mono rounded-md hover:bg-gold-light transition-all duration-300"
          >
            Partner With Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(201,168,76,0.4)] text-gold text-sm font-mono rounded-md hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Pillar cards — float at hero bottom */}
      <div className="section-container relative z-10 pb-0">
        <div className="grid sm:grid-cols-3 gap-4 translate-y-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-card/90 backdrop-blur-sm border border-[rgba(201,168,76,0.2)] border-t-2 border-t-gold p-6 rounded-sm"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase mb-2">
                {pillar.label}
              </p>
              <h3 className="font-display text-base font-medium text-text-primary mb-2">
                {pillar.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Space below cards so they're not flush to section end */}
      <div className="h-16" />
    </section>
  )
}
