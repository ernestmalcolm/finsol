import { SITE } from './constants'

export const SITE_URL = SITE.url

export function canonical(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`
}

export function metadataAlternates(path: string) {
  return { alternates: { canonical: canonical(path) } }
}

export const FOOTER_COMMODITIES = [
  { label: 'Sesame', href: '/commodities/sesame' },
  { label: 'Vanilla', href: '/commodities/vanilla' },
  { label: 'Coffee', href: '/commodities/coffee' },
  { label: 'Cashewnuts', href: '/commodities/cashewnuts' },
  { label: 'Sisal', href: '/commodities/sisal' },
  { label: 'Soybean', href: '/commodities/soybean' },
  { label: 'Minerals', href: '/commodities/minerals' },
]

/** Maps region sector labels to commodity detail pages for internal linking */
export const SECTOR_COMMODITY_LINKS: Record<string, string> = {
  Coffee: '/commodities/coffee',
  Cashewnuts: '/commodities/cashewnuts',
  Sisal: '/commodities/sisal',
  Sesame: '/commodities/sesame',
  Vanilla: '/commodities/vanilla',
  Gold: '/commodities/precious-minerals',
  Tanzanite: '/commodities/precious-minerals',
  Agriculture: '/commodities',
  'Agro-processing': '/commodities',
  'Commodity export': '/commodities',
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/finsol-emblem.png`,
    description:
      'Strategic advisory, financial structuring, and premium commodity brokerage connecting global investors with African opportunities.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dar es Salaam',
      addressCountry: 'TZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: ['English'],
    },
    knowsAbout: [
      'Africa Due Diligence verified business',
      'KYC and counterparty validation',
    ],
    sameAs: [],
    areaServed: [
      { '@type': 'Country', name: 'Tanzania' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Malawi' },
      { '@type': 'Country', name: 'Zambia' },
      { '@type': 'Country', name: 'Nigeria' },
    ],
  }
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  }
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
