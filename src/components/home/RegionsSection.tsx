import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { REGIONS } from '@/lib/constants'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { AfricaMap } from '@/components/shared/AfricaMap'

export function RegionsSection() {
  return (
    <section className="py-section bg-surface-base">
      <div className="section-container">
        <SectionHeader
          eyebrow="Where We Operate"
          title="Seven Strategic Markets"
          subtitle="From our Dar es Salaam headquarters, we operate across East, Central, and West Africa — bringing on-the-ground intelligence to every engagement."
          className="mb-16"
        />

        <AfricaMap />

        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-gold transition-colors font-mono tracking-wide"
          >
            Explore all regions <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
