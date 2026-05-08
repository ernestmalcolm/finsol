'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Target, Shield, Package, Search, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { staggerContainer, fadeUpVariants } from '@/lib/motion'

const iconMap: Record<string, React.ElementType> = {
  Target,
  Shield,
  Package,
  Search,
}

const containerVariants = staggerContainer
const cardVariants = fadeUpVariants

export function ServicesSection() {
  return (
    <section className="py-section bg-surface-subtle">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Services"
          subtitle="Four integrated service lines designed to move capital into Africa — and move African opportunity to the world."
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Target
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="card-dark p-6 flex flex-col gap-4 group border border-transparent hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-text-primary leading-tight">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{service.short}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-gold text-sm font-mono tracking-wide group-hover:gap-2 transition-all duration-300"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors font-mono tracking-wide"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
