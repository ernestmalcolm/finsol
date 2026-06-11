import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Shield, Package, Search, Banknote, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { metadataAlternates } from '@/lib/seo'
import { PageHero }    from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

export const metadata: Metadata = {
  title: 'Services — Flexible Funding Solutions & Advisory for Africa',
  description:
    'Finsol T Ltd provides flexible unsecured funding from US$100k to US$200m, alongside Strategic Advisory, Financial Structuring, Commodity Brokerage, and Due Diligence across Africa.',
  ...metadataAlternates('/services'),
}

const iconMap: Record<string, React.ElementType> = { Target, Shield, Package, Search, Banknote }

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Flexible funding is at the heart of what we do — backed by credentialed global partners and complemented by advisory, structuring, brokerage, and due diligence across Africa."
      />

      <section className="py-section bg-surface-base">
        <div className="section-container space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Target
            const isEven = i % 2 === 0
            const isCore = 'core' in service && service.core
            return (
              <ScrollReveal key={service.slug} delay={0.05 * i}>
                <div className={`card-dark p-8 lg:p-12 grid lg:grid-cols-5 gap-8 items-start ${isCore ? 'border border-[rgba(201,168,76,0.25)]' : ''} ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      {isCore ? (
                        <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase bg-[rgba(201,168,76,0.12)] px-3 py-1 rounded">
                          Core Product
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase">
                          Service 0{i + 1}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-display-md font-light text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <div className="gold-line mb-6" />
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-2 text-sm font-mono tracking-wide transition-all duration-300 hover:gap-3 ${
                        isCore
                          ? 'px-5 py-2.5 bg-gold text-surface-base rounded-md hover:bg-gold-light'
                          : 'text-gold'
                      }`}
                    >
                      {isCore ? 'Explore Funding Options' : 'View Service'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className={`lg:col-span-3 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                    <p className="text-text-secondary leading-relaxed">{service.description}</p>

                    {'bullets' in service && service.bullets && (
                      <ul className="space-y-2">
                        {(service.bullets as string[]).map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span className="text-text-secondary text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

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
