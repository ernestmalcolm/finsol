import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FEATURED_COMMODITIES, AGRIBUSINESS_SEO, AGRICULTURAL_PRODUCTS } from '@/lib/constants'
import { metadataAlternates } from '@/lib/seo'
import { PageHero } from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'
import { AgriculturalCatalog } from '@/components/commodities/AgriculturalCatalog'
import { SeasonalCalendar } from '@/components/commodities/SeasonalCalendar'
import { CommodityImage } from '@/components/commodities/CommodityImage'
import { JsonLd, buildCommodityListSchema } from '@/components/shared/JsonLd'

export const metadata: Metadata = {
  title: AGRIBUSINESS_SEO.title,
  description: AGRIBUSINESS_SEO.description,
  keywords: AGRIBUSINESS_SEO.keywords,
  openGraph: {
    title: AGRIBUSINESS_SEO.title,
    description: AGRIBUSINESS_SEO.description,
  },
  ...metadataAlternates('/commodities'),
}

const PROCESS_STEPS = [
  { step: '01', title: 'Origin Verification', desc: 'We verify producer credentials, land tenure, and export licences before any engagement.' },
  { step: '02', title: 'Quality Certification', desc: 'Independent quality inspectors certify each shipment against internationally accepted grade standards.' },
  { step: '03', title: 'Logistics Coordination', desc: 'We manage transport, warehousing, and shipping coordination from origin to port of loading.' },
  { step: '04', title: 'Trade Finance', desc: 'We structure DLC, SBLC, or other payment instruments to protect all parties through to settlement.' },
  { step: '05', title: 'Delivery Management', desc: 'Final delivery confirmation, documentation handover, and post-delivery relationship management.' },
]

export default function CommoditiesPage() {
  return (
    <>
      <JsonLd
        data={buildCommodityListSchema(
          AGRICULTURAL_PRODUCTS.map((p) => ({
            name: p.name,
            slug: p.slug,
            description: p.shortDescription,
          })),
        )}
      />

      <PageHero
        eyebrow="What We Trade"
        title="Premium African Commodities"
        subtitle="Every commodity we broker is sourced from verified, traceable origin networks — including sesame, vanilla, coffee, cashew, and grains. Full documentation. Certified quality. End-to-end management."
      />

      {/* Featured commodity grid */}
      <section className="py-section bg-surface-base">
        <div className="section-container">
          <SectionHeader
            eyebrow="Featured"
            title="Key Commodity Lines"
            subtitle="Our primary export corridors — each with dedicated product pages covering availability, grades, and seasonal windows."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_COMMODITIES.map((commodity, i) => (
              <ScrollReveal key={commodity.slug} delay={i * 0.07}>
                <Link
                  href={`/commodities/${commodity.slug}`}
                  className="card-dark overflow-hidden group block hover:border-[rgba(201,168,76,0.4)] border border-transparent transition-colors duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <CommodityImage commodity={commodity} fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,22,35,1)_0%,transparent_60%)]" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                      {commodity.origin}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-text-primary mb-3 group-hover:text-gold transition-colors">
                      {commodity.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                      {commodity.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-gold text-xs font-mono tracking-wide group-hover:gap-2.5 transition-all duration-300">
                      View details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AgriculturalCatalog />
      <SeasonalCalendar />

      {/* Brokerage process */}
      <section className="py-section bg-surface-subtle">
        <div className="section-container">
          <SectionHeader
            eyebrow="How We Work"
            title="Our Brokerage Process"
            subtitle="From source verification to final delivery — we manage every step so you don't have to."
            className="mb-16"
          />
          <div className="relative">
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
