'use client'
import { AFRICA_STATS } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'

export function WhyAfricaSection() {
  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <SectionHeader
              eyebrow="The Africa Opportunity"
              title="Why Africa. Why Now."
              subtitle="Africa is the world's fastest-growing investment frontier. A young population, vast natural resources, and deepening capital markets are creating opportunities that simply don't exist anywhere else on earth."
            />
            <ScrollReveal delay={0.3} className="mt-8">
              <p className="text-text-secondary leading-relaxed">
                The challenge is not opportunity — it is access. Navigating regulatory frameworks,
                identifying reliable local partners, and structuring bankable transactions requires
                deep in-market expertise. That is precisely what Finsol T Ltd provides.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-6">
            {AFRICA_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="card-dark p-6">
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    className="font-display text-4xl font-light text-gold"
                  />
                </div>
                <p className="text-text-secondary text-sm leading-snug">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
