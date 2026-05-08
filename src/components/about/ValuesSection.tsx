'use client'
import { motion } from 'framer-motion'
import { Shield, Award, TrendingUp } from 'lucide-react'
import { VALUES } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUpVariants } from '@/lib/motion'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  TrendingUp,
  Handshake: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ),
}

const containerVariants = staggerContainer
const cardVariants = fadeUpVariants

export function ValuesSection() {
  return (
    <section className="py-section bg-surface-subtle">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Stand For"
          title="Our Values"
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUES.map((value) => {
            const Icon = iconMap[value.icon] ?? Shield
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="card-dark p-7 text-center flex flex-col items-center gap-4 border border-transparent hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-text-primary">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
