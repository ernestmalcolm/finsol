import type { Metadata } from 'next'
import { COMMODITIES } from '@/lib/constants'
import { PageHero }    from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

export const metadata: Metadata = {
  title: 'Commodities',
  description: 'Premium African commodities sourced from verified producer networks — sisal, coffee, cashewnuts, grains, minerals, and precious minerals.',
}

const PROCESS_STEPS = [
  { step: '01', title: 'Origin Verification',     desc: 'We verify producer credentials, land tenure, and export licences before any engagement.' },
  { step: '02', title: 'Quality Certification',   desc: 'Independent quality inspectors certify each shipment against internationally accepted grade standards.' },
  { step: '03', title: 'Logistics Coordination',  desc: 'We manage transport, warehousing, and shipping coordination from origin to port of loading.' },
  { step: '04', title: 'Trade Finance',            desc: 'We structure DLC, SBLC, or other payment instruments to protect all parties through to settlement.' },
  { step: '05', title: 'Delivery Management',     desc: 'Final delivery confirmation, documentation handover, and post-delivery relationship management.' },
]

export default function CommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Trade"
        title="Premium African Commodities"
        subtitle="Every commodity we broker is sourced from verified, traceable origin networks. Full documentation. Certified quality. End-to-end management."
      />

      {/* Commodity grid */}
      <section className="py-section bg-surface-base">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMODITIES.map((commodity, i) => (
              <ScrollReveal key={commodity.slug} delay={i * 0.07}>
                <div className="card-dark overflow-hidden group">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={commodity.image}
                      alt={commodity.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,22,35,1)_0%,transparent_60%)]" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                      {commodity.origin}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-text-primary mb-3">
                      {commodity.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {commodity.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-section bg-surface-subtle">
        <div className="section-container">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Brokerage Process"
            subtitle="From source verification to final delivery — we manage every step so you don't have to."
            className="mb-16"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)] hidden sm:block" />
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.08}>
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] bg-surface-card z-10">
                      <span className="font-mono text-xs text-gold">{step.step}</span>
                    </div>
                    <div className="card-dark p-6 flex-1">
                      <h4 className="font-display text-lg font-medium text-text-primary mb-2">
                        {step.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnerCTASection />
    </>
  )
}
