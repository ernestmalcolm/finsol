import type { Metadata } from 'next'
import { PageHero }       from '@/components/shared/PageHero'
import { StorySection }   from '@/components/about/StorySection'
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
      <PageHero
        eyebrow="About Finsol T Ltd"
        title="A Different Kind of African Advisory Firm"
        subtitle="We combine deep local market knowledge with institutional-grade financial expertise — built entirely for the African opportunity."
      />
      <StorySection />
      <ValuesSection />
      <LeadershipSection />
      <VerificationSection />
      <PartnersSection />
      <PartnerCTASection />
    </>
  )
}
