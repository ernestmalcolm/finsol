'use client'
import { motion } from 'framer-motion'
import { INSTRUMENTS } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUpVariants } from '@/lib/motion'

const containerVariants = staggerContainer
const cardVariants = fadeUpVariants

export function InstrumentsSection() {
  return (
    <section className="py-section bg-surface-subtle">
      <div className="section-container">
        <SectionHeader
          eyebrow="How We Structure Deals"
          title="Financial Instruments"
          subtitle="We work with the full range of international trade finance instruments to make cross-border transactions secure from origination to settlement."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INSTRUMENTS.map((inst) => (
            <motion.div
              key={inst.acronym}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="card-dark p-7 flex flex-col gap-4 group border border-transparent hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-2xl font-medium text-gold">{inst.acronym}</span>
                <div className="h-px flex-1 bg-[rgba(201,168,76,0.2)]" />
              </div>
              <h3 className="font-display text-lg font-medium text-text-primary leading-tight">
                {inst.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{inst.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
