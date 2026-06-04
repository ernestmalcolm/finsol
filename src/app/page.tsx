import type { Metadata } from 'next'
import { HeroSection }       from '@/components/home/HeroSection'
import { ServicesSection }    from '@/components/home/ServicesSection'
import { WhyAfricaSection }   from '@/components/home/WhyAfricaSection'
import { CommoditiesSection } from '@/components/home/CommoditiesSection'
import { AgribusinessSection }  from '@/components/home/AgribusinessSection'
import { RegionsSection }     from '@/components/home/RegionsSection'
import { InstrumentsSection } from '@/components/home/InstrumentsSection'
import { PartnerCTASection }  from '@/components/home/PartnerCTASection'
import { metadataAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'African Commodity Brokerage & Investment Advisory',
  description:
    'Finsol T Ltd brokers sesame, vanilla, coffee, cashew, and minerals from Tanzania and East Africa. Trade finance, due diligence, and end-to-end commodity sourcing for global buyers.',
  keywords: [
    'African commodity brokerage',
    'sesame export Tanzania',
    'vanilla export Uganda',
    'Tanzania investment advisory',
    'trade finance Africa',
    'agribusiness export East Africa',
  ],
  ...metadataAlternates('/'),
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyAfricaSection />
      <CommoditiesSection />
      <AgribusinessSection />
      <RegionsSection />
      <InstrumentsSection />
      <PartnerCTASection />
    </>
  )
}
