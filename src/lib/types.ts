export interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export interface Service {
  slug: string
  icon: string
  title: string
  short: string
  description: string
  audience: string
  outputs: string[]
}

export type CommodityCategory = 'agriculture' | 'minerals' | 'precious-minerals'

export interface Commodity {
  slug: string
  name: string
  image?: string
  origin: string
  description: string
  shortDescription: string
  category: CommodityCategory
  featured?: boolean
  availability: string
  harvestSeason: string
  exportPeak: string
  grades?: string[]
  applications?: string[]
  certifications?: string[]
  seoKeywords?: string[]
}

export interface Region {
  id: string
  name: string
  badge?: string
  city: string
  coords: [number, number]
  sectors: string[]
  context: string
}

export interface Instrument {
  acronym: string
  name: string
  desc: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface Value {
  icon: string
  title: string
  desc: string
}

export interface Partner {
  name: string
  role: string
  website: string
  logo: string
}

export interface ContactFormData {
  name: string
  company: string
  email: string
  phone?: string
  country: string
  enquiryType: string
  message: string
}
