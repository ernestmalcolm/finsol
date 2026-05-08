import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function LeadershipSection() {
  return (
    <section className="py-section bg-surface-card">
      <div className="section-container">
        <SectionHeader
          eyebrow="Leadership"
          title="The Team Behind Finsol"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] bg-surface-light border border-border-gold rounded-card flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-mono text-xs tracking-[0.2em] text-text-muted uppercase mb-2">
                    Photo Pending
                  </p>
                  <p className="text-text-muted text-sm">MD Portrait</p>
                  <p className="text-text-muted text-xs mt-1">400 × 500 px</p>
                </div>
              </div>
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[rgba(201,168,76,0.2)] rounded-card -z-10" />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-2">
                  Managing Director
                </p>
                <h3 className="font-display text-display-md font-light text-text-primary mb-1">
                  Finsol T Ltd
                </h3>
                <div className="gold-line mt-4 mb-6" />
              </div>

              <p className="text-text-secondary leading-relaxed">
                Finsol T Ltd is led by a team of seasoned professionals with deep roots in East
                African finance, trade, and investment. Our leadership brings decades of combined
                experience structuring cross-border transactions, navigating African regulatory
                environments, and building lasting relationships between international capital and
                African opportunity.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We operate at the intersection of institutional rigour and on-the-ground knowledge —
                a combination that is rare, and essential, for anyone serious about doing business
                in Africa.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                {[
                  { label: 'Years in Market',     value: '10+' },
                  { label: 'Transactions Advised', value: '50+' },
                  { label: 'Active Markets',       value: '7'   },
                  { label: 'Partner Network',      value: 'Global' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold pl-4">
                    <p className="font-display text-2xl font-medium text-gold">{stat.value}</p>
                    <p className="text-text-muted text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
