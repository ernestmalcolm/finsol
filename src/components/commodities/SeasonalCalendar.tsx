import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { SEASONAL_CALENDAR } from '@/lib/constants'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeader } from '@/components/shared/SectionHeader'

export function SeasonalCalendar() {
  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <SectionHeader
          eyebrow="Seasonal Intelligence"
          title="African Crop Calendar"
          subtitle="Plan your sourcing windows ahead of peak harvest and export periods across East Africa."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEASONAL_CALENDAR.map((period, i) => (
            <ScrollReveal key={period.months} delay={i * 0.08}>
              <div className="card-dark p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                    {period.months}
                  </span>
                </div>
                <ul className="space-y-2">
                  {period.products.map((item) => (
                    <li key={item} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(201,168,76,0.3)] text-text-primary rounded-md hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 font-body text-sm"
          >
            Request seasonal contract terms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
