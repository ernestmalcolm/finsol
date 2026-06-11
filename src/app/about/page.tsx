import type { Metadata } from 'next'
import { AboutHero }      from '@/components/about/AboutHero'
import { ValuesSection }  from '@/components/about/ValuesSection'
import { LeadershipSection } from '@/components/home/LeadershipSection'
import { PartnersSection } from '@/components/about/PartnersSection'
import { VerificationSection } from '@/components/about/VerificationSection'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

import { metadataAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About — African Advisory & Commodity Expertise',
  description:
    'Learn about Finsol T Ltd — our story, values, leadership, and strategic partners extending our reach across Africa.',
  ...metadataAlternates('/about'),
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* pt-16 clears the overlapping pillar cards from the hero */}
      <div className="pt-16">
        <ValuesSection />
      </div>
      <LeadershipSection />
      <VerificationSection />
      <PartnersSection />
      <PartnerCTASection />
    </>
  )
}
