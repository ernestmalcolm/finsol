import type { Metadata } from 'next'
import { metadataAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact — Commodity Enquiries & Partnerships',
  description:
    'Contact Finsol T Ltd for sesame, vanilla, coffee, and mineral export enquiries, trade finance, or investment advisory. Dar es Salaam, Tanzania.',
  keywords: [
    'contact Finsol Tanzania',
    'commodity enquiry Africa',
    'sesame export enquiry',
    'vanilla supplier contact',
    'Africa trade finance enquiry',
  ],
  ...metadataAlternates('/contact'),
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
