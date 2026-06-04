import type { Commodity } from './types'

export function getCommodityFaqs(commodity: Commodity): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [
    {
      question: `Where does Finsol source ${commodity.name} from?`,
      answer: `We source ${commodity.name} from ${commodity.origin}, working with verified producer networks and licensed exporters across East and Central Africa.`,
    },
    {
      question: `When is the best time to export ${commodity.name} from Africa?`,
      answer: `Harvest season: ${commodity.harvestSeason}. Peak export window: ${commodity.exportPeak}. ${commodity.availability}.`,
    },
    {
      question: `What grades of ${commodity.name} does Finsol T Ltd broker?`,
      answer: commodity.grades?.length
        ? `Available grades include: ${commodity.grades.join(', ')}. Contact us for current availability and specifications.`
        : `We broker ${commodity.name} to buyer specifications. Contact us for grade options and current availability.`,
    },
    {
      question: `How does Finsol verify ${commodity.name} quality and origin?`,
      answer:
        'Every shipment goes through origin verification, independent quality inspection, and full export documentation — including phytosanitary certificates where required.',
    },
    {
      question: `How do I enquire about ${commodity.name} supply from Tanzania or East Africa?`,
      answer:
        'Submit an enquiry via our contact page with your required grade, volume, and destination port. Our team responds with availability, pricing framework, and contract terms.',
    },
  ]

  if (commodity.certifications?.length) {
    faqs.push({
      question: `What certifications are available for ${commodity.name}?`,
      answer: `Certifications available through our producer networks include: ${commodity.certifications.join(', ')}.`,
    })
  }

  return faqs
}
