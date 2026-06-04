import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { AGRICULTURAL_PRODUCTS } from '@/lib/constants'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function AgriculturalCatalog() {
  return (
    <section className="py-section bg-surface-subtle">
      <div className="section-container">
        <SectionHeader
          eyebrow="Full Agricultural Portfolio"
          title="Every Crop. Verified Origin."
          subtitle="Browse our complete agricultural product range. Each commodity links to detailed availability, seasonal windows, and grade information."
          className="mb-12"
        />

        <div className="grid gap-3">
          {AGRICULTURAL_PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.04}>
              <Link
                href={`/commodities/${product.slug}`}
                className="card-dark p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-[rgba(201,168,76,0.4)] border border-transparent transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-medium text-text-primary group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-1 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-text-muted text-xs font-mono">
                        <MapPin className="w-3 h-3 text-gold/60" />
                        {product.origin.split('—')[0].trim()}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-text-muted text-xs font-mono">
                        <Calendar className="w-3 h-3 text-gold/60" />
                        Peak: {product.exportPeak}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-gold text-sm font-mono tracking-wide flex-shrink-0 sm:ml-4 group-hover:gap-2.5 transition-all duration-300">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
