'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SITE, ADD_VERIFICATION } from '@/lib/constants'

export function PartnerCTASection() {
  return (
    <section className="relative py-section bg-surface-base overflow-hidden">
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
      {/* Top + bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />

      <div className="section-container relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-6"
        >
          Ready to Move Capital Into Africa?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-lg font-light text-text-primary mb-6"
        >
          Let's Build Something
          <span className="text-gold-shimmer"> Significant.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary leading-relaxed mb-10"
        >
          Whether you are an investor seeking vetted African exposure, a commodity buyer looking
          for reliable East African supply chains, or a project developer needing financial
          structuring expertise — Finsol T Ltd is your partner. We are verified by{' '}
          <a
            href={ADD_VERIFICATION.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Africa Due Diligence
          </a>
          , and we recommend ADD-verified businesses for faster, safer collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-surface-base font-medium font-body rounded-md hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(201,168,76,0.3)] hover:-translate-y-0.5"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={SITE.profilePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(201,168,76,0.3)] text-text-primary rounded-md hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 font-body"
          >
            Download Company Profile
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-text-muted text-sm"
        >
          <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-colors">
            {SITE.email}
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
            {SITE.phone}
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\s/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            WhatsApp: {SITE.whatsapp}
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span>{SITE.address}</span>
        </motion.div>
      </div>
    </section>
  )
}
