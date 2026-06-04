import type { Metadata } from 'next'
import Link from 'next/link'
import { REGIONS } from '@/lib/constants'
import { metadataAlternates, SECTOR_COMMODITY_LINKS } from '@/lib/seo'
import { PageHero } from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { AfricaMap } from '@/components/shared/AfricaMap'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

export const metadata: Metadata = {
  title: 'Regions — East, Central & West Africa Markets',
  description:
    'Finsol T Ltd operates across Tanzania, Kenya, Uganda, Malawi, Zambia, DRC, and Nigeria — sourcing sesame, vanilla, coffee, and minerals with on-the-ground intelligence.',
  keywords: [
    'Africa commodity markets',
    'Tanzania Uganda vanilla coffee',
    'East Africa trade finance',
    'Finsol regional coverage',
  ],
  ...metadataAlternates('/regions'),
}

export default function RegionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Operate"
        title="Seven Strategic Markets"
        subtitle="From Dar es Salaam we reach across East, Central, and West Africa — bringing on-the-ground intelligence and established relationships to every engagement."
      />

      <section className="py-section bg-surface-base">
        <div className="section-container">
          <AfricaMap />
        </div>
      </section>

      <section className="py-section bg-surface-subtle">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region, i) => (
              <ScrollReveal key={region.id} delay={i * 0.07}>
                <div className="card-dark p-6 h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-text-primary">
                        {region.name}
                      </h3>
                      <p className="text-text-muted text-sm">{region.city}</p>
                    </div>
                    {region.badge && (
                      <span className="font-mono text-[10px] tracking-widest text-gold border border-gold px-2 py-1">
                        {region.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {region.context}
                  </p>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase mb-2">
                      Key Sectors
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {region.sectors.map((s) => {
                        const href = SECTOR_COMMODITY_LINKS[s]
                        if (href) {
                          return (
                            <Link
                              key={s}
                              href={href}
                              className="font-mono text-[10px] tracking-wider text-gold bg-[rgba(201,168,76,0.1)] px-2 py-1 hover:bg-[rgba(201,168,76,0.2)] transition-colors"
                            >
                              {s}
                            </Link>
                          )
                        }
                        return (
                          <span
                            key={s}
                            className="font-mono text-[10px] tracking-wider text-gold bg-[rgba(201,168,76,0.1)] px-2 py-1"
                          >
                            {s}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerCTASection />
    </>
  )
}
