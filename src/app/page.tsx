import { HeroSection }       from '@/components/home/HeroSection'
import { ServicesSection }    from '@/components/home/ServicesSection'
import { WhyAfricaSection }   from '@/components/home/WhyAfricaSection'
import { CommoditiesSection } from '@/components/home/CommoditiesSection'
import { RegionsSection }     from '@/components/home/RegionsSection'
import { InstrumentsSection } from '@/components/home/InstrumentsSection'
import { PartnerCTASection }  from '@/components/home/PartnerCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyAfricaSection />
      <CommoditiesSection />
      <RegionsSection />
      <InstrumentsSection />
      <PartnerCTASection />
    </>
  )
}
