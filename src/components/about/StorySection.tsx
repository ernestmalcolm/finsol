import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function StorySection() {
  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Built for Africa's Moment"
            />
            <ScrollReveal delay={0.25} className="mt-2 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                Finsol T Ltd was founded on a single conviction: that Africa's greatest era of
                economic transformation is underway — and that the gap between global capital and
                African opportunity is still far too wide.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We built Finsol to close that gap. Headquartered in Dar es Salaam, Tanzania, we
                combine deep local market knowledge with institutional-grade financial expertise to
                connect investors, developers, and commodity buyers with the right partners and
                structures to get deals done.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our approach is methodical, transparent, and relationship-driven. We do not chase
                volume. We build long-term partnerships that create real, measurable impact for
                every party involved.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            {[
              {
                year:  'Focus',
                title: 'East & Central Africa',
                text:  'Our primary operating theatre spans Tanzania, Kenya, Uganda, Malawi, Zambia, DRC, and Nigeria — markets we know deeply and navigate with confidence.',
              },
              {
                year:  'Approach',
                title: 'Rigorous. Transparent. Partnership-First.',
                text:  'Every engagement begins with listening. We understand your objectives before we propose a solution, and we structure transactions that protect all parties.',
              },
              {
                year:  'Mission',
                title: 'Bridging Capital. Unlocking Africa.',
                text:  "Africa's development story is being written now. Finsol T Ltd exists to ensure that capital finds its way to the projects that will shape that story.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="card-dark p-6 flex gap-5">
                  <div className="w-px bg-gold flex-shrink-0 self-stretch" />
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase mb-1">
                      {item.year}
                    </p>
                    <h4 className="font-display text-lg font-medium text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
