import { PARTNERS } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function PartnersSection() {
  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Network"
          title="Strategic Partners"
          subtitle="Finsol T Ltd operates within a curated network of world-class partners — giving our clients access to deep expertise across markets, sectors, and institutions."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.1}>
              <div className="card-dark p-7 flex gap-5 group border border-transparent hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300">
                {/* Initials badge */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-card bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)]">
                  <span className="font-mono text-xs font-medium text-gold">
                    {partner.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-text-primary mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{partner.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
