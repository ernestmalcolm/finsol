'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { COMMODITIES } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { fadeUpVariants, EASE } from '@/lib/motion'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const cardVariants = fadeUpVariants

export function CommoditiesSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-section bg-surface-light">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Trade"
          title="Premium African Commodities"
          subtitle="Sourced from verified producer networks across Tanzania and East Africa. Every shipment carries full origin documentation and quality certification."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {COMMODITIES.map((commodity) => (
            <motion.div
              key={commodity.slug}
              variants={cardVariants}
              onMouseEnter={() => setHovered(commodity.slug)}
              onMouseLeave={() => setHovered(null)}
              className="relative overflow-hidden rounded-card border border-border group cursor-pointer"
              style={{ minHeight: '280px' }}
            >
              {/* Image layer */}
              <div className="absolute inset-0">
                <img
                  src={commodity.image}
                  alt={commodity.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,12,20,0.95)_0%,rgba(8,12,20,0.5)_60%,rgba(8,12,20,0.1)_100%)]" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                  {commodity.origin}
                </p>
                <h3 className="font-display text-2xl font-medium text-text-primary mb-2">
                  {commodity.name}
                </h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    hovered === commodity.slug
                      ? { opacity: 1, height: 'auto' }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="text-text-secondary text-sm leading-relaxed overflow-hidden"
                >
                  {commodity.description}
                </motion.p>
              </div>

              {/* Gold border on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === commodity.slug ? 1 : 0 }}
                className="absolute inset-0 rounded-card border border-gold pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/commodities"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(201,168,76,0.3)] text-text-primary rounded-md hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 font-body"
          >
            View All Commodities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
