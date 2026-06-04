// ─── SITE ────────────────────────────────────────────────────────────────────
export const SITE = {
  name:       'Finsol T Ltd',
  tagline:    'Bridging Capital. Unlocking Africa.',
  subTagline: 'Strategic Advisory & Financial Structuring for Global Investment in Africa',
  url:        'https://finsoltz.com',
  email:      'Finsol.tz@gmail.com',
  phone:      '+255 754 780 467',
  address:    'Dar es Salaam, Tanzania',
  profilePDF: '/finsol-company-profile.pdf',
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Strategic Advisory',    href: '/services/strategic-advisory' },
      { label: 'Financial Structuring', href: '/services/financial-structuring' },
      { label: 'Commodity Brokerage',   href: '/services/commodity-brokerage' },
      { label: 'Due Diligence',         href: '/services/due-diligence' },
    ],
  },
  { label: 'Commodities', href: '/commodities' },
  { label: 'Regions',     href: '/regions' },
  { label: 'Contact',     href: '/contact' },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug:        'strategic-advisory',
    icon:        'Target',
    title:       'Strategic Advisory & Deal Origination',
    short:       'Identifying and qualifying high-potential projects in infrastructure, agriculture, energy and minerals.',
    description: 'We identify, evaluate, and qualify high-potential investment opportunities across infrastructure, agriculture, energy, and minerals in Africa. Our deal origination process is rigorous — we bring only vetted, bankable opportunities to our international partners, saving time and reducing risk at every stage.',
    audience:    'International investors, private equity funds, development finance institutions, and family offices seeking structured African exposure.',
    outputs:     ['Investment memoranda', 'Deal term sheets', 'Project feasibility summaries', 'Partner introductions'],
  },
  {
    slug:        'financial-structuring',
    icon:        'Shield',
    title:       'Financial Structuring',
    short:       'Structuring secure transactions using DLC, SBLC, Bank Guarantees, asset financing, and other financial instruments.',
    description: 'We design and implement financial structures that make cross-border transactions secure, compliant, and executable. Our expertise covers the full range of international trade finance instruments, ensuring that both buyers and sellers are protected from origination through to settlement.',
    audience:    'Importers, exporters, project developers, and commodity buyers and sellers operating across borders.',
    outputs:     ['DLC', 'SBLC', 'Bank Guarantees', 'Tripartite Agreements', 'Asset Financing'],
  },
  {
    slug:        'commodity-brokerage',
    icon:        'Package',
    title:       'Commodity Brokerage & Agribusiness',
    short:       'Sourcing and managing premium agricultural commodities and minerals with end-to-end supply chain solutions.',
    description: 'We source, verify, and broker premium African commodities from trusted producer networks in Tanzania and across East and Central Africa — including coffee, sesame, vanilla, cashew, sisal, grains, and industrial minerals. We manage the entire process from origin verification to delivery: quality certification, seasonal contract planning, logistics coordination, and trade finance arrangement. Whether you are securing a sesame harvest window or building a long-term vanilla supply relationship, our on-the-ground networks give you verified origin, certified quality, and executable contracts.',
    audience:    'International commodity buyers, importers, trading houses, food manufacturers, flavour houses, and industrial processors seeking reliable African agricultural supply.',
    outputs:     ['Source verification', 'Quality certification', 'Seasonal contract planning', 'Logistics coordination', 'Trade finance arrangement', 'Delivery management'],
  },
  {
    slug:        'due-diligence',
    icon:        'Search',
    title:       'Regional Due Diligence',
    short:       'Providing in-depth risk assessment and market intelligence for informed decisions.',
    description: 'Finsol provides comprehensive due diligence — covering political and regulatory risk, counterparty verification, market sizing, sector analysis, and competitive landscape mapping across our seven operating markets. Engagements are aligned with Africa Due Diligence (ADD) standards, and preliminary onboarding includes KYC and validation through the ADD platform before formal collaboration.',
    audience:    'Any international business or investor conducting first-entry or expansion into East, Central, or West Africa.',
    outputs:     ['Risk reports', 'Counterparty assessments', 'Market entry frameworks', 'Regulatory compliance reviews'],
  },
]

// ─── COMMODITIES ─────────────────────────────────────────────────────────────
export {
  COMMODITIES,
  AGRICULTURAL_PRODUCTS,
  FEATURED_COMMODITIES,
  AGRIBUSINESS_SEO,
  SEASONAL_CALENDAR,
  getCommodity,
} from './commodities'

// ─── REGIONS ─────────────────────────────────────────────────────────────────
export const REGIONS = [
  {
    id:      'TZ',
    name:    'Tanzania',
    badge:   'HQ',
    city:    'Dar es Salaam',
    coords:  [-6.7924, 39.2083] as [number, number],
    sectors: ['Sisal', 'Coffee', 'Cashewnuts', 'Sesame', 'Vanilla', 'Gold', 'Tanzanite', 'Infrastructure'],
    context: "Finsol's home market and primary operating base. Stable investment environment, rapidly growing commodity export sector, and gateway to East and Central Africa.",
  },
  {
    id:      'KE',
    name:    'Kenya',
    city:    'Nairobi',
    coords:  [-1.2921, 36.8219] as [number, number],
    sectors: ['Trade finance', 'Financial services', 'Agro-processing'],
    context: "East Africa's financial hub and home to major regional headquarters of international banks and development finance institutions.",
  },
  {
    id:      'UG',
    name:    'Uganda',
    city:    'Kampala',
    coords:  [0.3476, 32.5825] as [number, number],
    sectors: ['Agriculture', 'Energy', 'Commodity export'],
    context: 'Emerging agricultural and energy market with a growing coffee, vanilla, and minerals export sector.',
  },
  {
    id:      'MW',
    name:    'Malawi',
    city:    'Lilongwe',
    coords:  [-13.9626, 33.7741] as [number, number],
    sectors: ['Agriculture', 'Mining', 'Infrastructure'],
    context: "One of Africa's leading agricultural producers with growing interest in diversified export crops.",
  },
  {
    id:      'ZM',
    name:    'Zambia',
    city:    'Lusaka',
    coords:  [-15.4166, 28.2833] as [number, number],
    sectors: ['Copper & base metals', 'Agriculture', 'Energy'],
    context: "Africa's second-largest copper producer and an increasingly active investment destination.",
  },
  {
    id:      'CD',
    name:    'DRC',
    city:    'Kinshasa',
    coords:  [-4.3276, 15.3136] as [number, number],
    sectors: ['Mining', 'Minerals', 'Infrastructure'],
    context: "Holds some of the world's largest reserves of cobalt, copper, coltan, and timber. High-potential market requiring specialist on-the-ground intelligence.",
  },
  {
    id:      'NG',
    name:    'Nigeria',
    city:    'Lagos',
    coords:  [6.5244, 3.3792] as [number, number],
    sectors: ['Trade finance', 'Energy', 'Commodities trading', 'Financial services'],
    context: "Africa's largest economy and the continent's premier commercial hub.",
  },
]

// ─── FINANCIAL INSTRUMENTS ────────────────────────────────────────────────────
export const INSTRUMENTS = [
  { acronym: 'SBLC', name: 'Standby Letters of Credit',     desc: 'Bank-backed payment guarantees that protect sellers if a buyer defaults.' },
  { acronym: 'DLC',  name: 'Documentary Letters of Credit', desc: 'Secure payment mechanisms for international trade, released against verified shipping documents.' },
  { acronym: 'BG',   name: 'Bank Guarantees',               desc: 'Institutional guarantees ensuring contract obligations are met. Secure. Reliable. Global.' },
  { acronym: 'TA',   name: 'Tripartite Agreements',         desc: 'Three-party contracts aligning buyer, seller, and financial institution. Transparent. Effective.' },
]

// ─── STATS (Why Africa section) ───────────────────────────────────────────────
export const AFRICA_STATS = [
  { value: 29,  suffix: 'T',  label: 'Projected GDP by 2050 (USD)' },
  { value: 1.4, suffix: 'B',  label: 'Population — fastest growing middle class' },
  { value: 100, suffix: 'B+', label: 'Annual infrastructure financing gap (USD)' },
  { value: 54,  suffix: '',   label: 'Markets. One partner to navigate them.' },
]

// ─── VALUES ───────────────────────────────────────────────────────────────────
export const VALUES = [
  { icon: 'Shield',     title: 'Integrity',   desc: 'We uphold the highest standards of ethics, transparency, and accountability in every relationship and every transaction.' },
  { icon: 'Award',      title: 'Excellence',  desc: 'Our team brings deep industry knowledge and hands-on experience to deliver smart, effective solutions for our partners.' },
  { icon: 'Handshake',  title: 'Partnership', desc: "We build lasting relationships based on collaboration, respect, and shared success — because our partners' growth is our growth." },
  { icon: 'TrendingUp', title: 'Impact',      desc: 'We are dedicated to creating measurable, sustainable impact across Africa and beyond — driving economic growth that lasts for generations.' },
]

// ─── AFRICA DUE DILIGENCE (ADD) ───────────────────────────────────────────────
export const ADD_VERIFICATION = {
  platformUrl: 'https://africaduediligence.com',
  verifiedStatement:
    'Finsol T Ltd is verified by Africa Due Diligence (ADD) — an independent platform for KYC, counterparty validation, and risk intelligence across African markets.',
  preliminaryStage:
    'Before we work together, every engagement begins with a preliminary onboarding stage: identity verification (KYC), business validation, and counterparty checks conducted through the Africa Due Diligence platform. This protects all parties and ensures every introduction is built on verified foundations.',
  recommendation:
    'We recommend and prefer working with businesses that are verified by Africa Due Diligence. ADD-verified counterparties benefit from faster onboarding, stronger institutional confidence, and smoother cross-border transaction structuring.',
}

// ─── PARTNERS ─────────────────────────────────────────────────────────────────
export const PARTNERS = [
  {
    name:    'Africa Due Diligence (ADD)',
    role:    'Verification and due diligence partner. Finsol T Ltd is ADD-verified, and we use the ADD platform for KYC, counterparty validation, and risk intelligence across African markets.',
    website: 'https://africaduediligence.com',
    logo:    '/images/partners/add.png',
  },
  {
    name:    'BeamAfrique',
    role:    "Pan-African media partner for sharing completed investments, deal milestones, and opportunities across the continent — projecting Africa's economic story to a global audience.",
    website: 'https://beamafrique.com',
    logo:    '/images/partners/beamafrique.jpg',
  },
  {
    name:    'Joe Tom Capital',
    role:    'Capital markets and financial structuring partnership bringing institutional-grade deal architecture to African transactions.',
    website: 'https://www.joetomcapital.com',
    logo:    '/images/partners/joetom.webp',
  },
  {
    name:    'Global Business Roundtable (GBR)',
    role:    'Strategic membership giving our clients access to a robust ecosystem of vetted global professionals.',
    website: 'https://thegbr.org',
    logo:    '/images/partners/gbr.png',
  },
  {
    name:    'Business Network International (BNI)',
    role:    'Professional network supporting trusted referrals and business development across sectors.',
    website: 'https://www.bni.com',
    logo:    '/images/partners/bni.png',
  },
]
