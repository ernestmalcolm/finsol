import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Shield, Package, Search, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { PageHero }    from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Finsol T Ltd offers Strategic Advisory, Financial Structuring, Commodity Brokerage, and Regional Due Diligence services across Africa.',
}

const iconMap: Record<string, React.ElementType> = { Target, Shield, Package, Search }

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Four integrated service lines designed to move capital into Africa — and move African opportunity to the world."
      />

      <section className="py-section bg-surface-base">
        <div className="section-container space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Target
            const isEven = i % 2 === 0
            return (
              <ScrollReveal key={service.slug} delay={0.05 * i}>
                <div className={`card-dark p-8 lg:p-12 grid lg:grid-cols-5 gap-8 items-start ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase">
                        Service 0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-display-md font-light text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <div className="gold-line mb-6" />
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
                    >
                      Full details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className={`lg:col-span-3 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-5`}>
                    <p className="text-text-secondary leading-relaxed">{service.description}</p>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase mb-3">
                        Typical Clients
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed">{service.audience}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase mb-3">
                        Outputs
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.outputs.map((o) => (
                          <span
                            key={o}
                            className="font-mono text-[11px] tracking-wide text-gold bg-[rgba(201,168,76,0.1)] px-3 py-1.5"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <PartnerCTASection />
    </>
  )
}
