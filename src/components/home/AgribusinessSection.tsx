'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sprout } from 'lucide-react'
import { AGRICULTURAL_PRODUCTS, SEASONAL_CALENDAR } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { fadeUpVariants } from '@/lib/motion'

export function AgribusinessSection() {
  const highlightProducts = ['Sesame', 'Vanilla', 'Coffee', 'Cashewnuts']

  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <SectionHeader
          eyebrow="Agribusiness"
          title="East Africa's Agricultural Export Corridor"
          subtitle="From sesame harvests in Dodoma to vanilla curing in Uganda — we connect global buyers to verified African agricultural supply with seasonal intelligence and end-to-end export management."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="card-dark p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-text-primary">
                {AGRICULTURAL_PRODUCTS.length} Agricultural Products
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our agribusiness portfolio spans coffee, sesame, vanilla, cashew, sisal, grains, tea,
              cotton, and spices — each with verified origin documentation, grade certification, and
              seasonal contract planning.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {highlightProducts.map((name) => (
                <span
                  key={name}
                  className="font-mono text-[11px] tracking-wide text-gold bg-[rgba(201,168,76,0.1)] px-3 py-1.5"
                >
                  {name}
                </span>
              ))}
              <span className="font-mono text-[11px] tracking-wide text-text-muted px-3 py-1.5">
                +{AGRICULTURAL_PRODUCTS.length - highlightProducts.length} more
              </span>
            </div>
            <Link
              href="/commodities"
              className="inline-flex items-center gap-2 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
            >
              Browse full agricultural catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="card-dark p-8"
          >
            <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
              Seasonal Momentum — Now
            </h3>
            <div className="space-y-4">
              {SEASONAL_CALENDAR.slice(0, 2).map((period) => (
                <div key={period.months}>
                  <p className="font-mono text-xs text-gold mb-2">{period.months}</p>
                  <ul className="space-y-1">
                    {period.products.map((item) => (
                      <li key={item} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/services/commodity-brokerage"
              className="inline-flex items-center gap-2 mt-6 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
            >
              Commodity brokerage services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
