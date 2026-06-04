import { ExternalLink, ShieldCheck } from 'lucide-react'
import { PARTNERS, ADD_VERIFICATION } from '@/lib/constants'
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
          className="mb-10"
        />

        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-md border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.05)]">
            <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="text-text-secondary text-sm leading-relaxed flex-1">
              {ADD_VERIFICATION.recommendation}
            </p>
            <a
              href={ADD_VERIFICATION.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wide text-gold hover:text-gold-light whitespace-nowrap transition-colors"
            >
              africaduediligence.com →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.1}>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark p-7 flex flex-col gap-5 group border border-transparent hover:border-[rgba(201,168,76,0.4)] transition-all duration-300 block"
              >
                {/* Logo */}
                <div className="h-14 flex items-center">
                  <div className="px-3 py-2 rounded-md bg-white/90 group-hover:bg-white transition-colors duration-300 inline-flex items-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-[200px] w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border group-hover:bg-[rgba(201,168,76,0.3)] transition-colors duration-300" />

                {/* Info */}
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-medium text-text-primary group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-gold flex-shrink-0 transition-colors duration-300" />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{partner.role}</p>
                </div>

                {/* Link label */}
                <p className="font-mono text-[10px] tracking-[0.2em] text-text-muted group-hover:text-gold uppercase transition-colors duration-300">
                  {partner.website.replace('https://', '')}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
