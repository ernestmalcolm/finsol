// ─── SITE ────────────────────────────────────────────────────────────────────
export const SITE = {
  name:       'Finsol T Ltd',
  tagline:    'Bridging Capital. Unlocking Africa.',
  subTagline: 'Strategic Advisory & Financial Structuring for Global Investment in Africa',
  url:        'https://finsoltz.com',
  email:      'info@finsol.africa',
  phone:      '+255 754 780 467',
  address:    'Dar es Salaam, Tanzania',
  profilePDF: '/finsol-company-profile.pdf',
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Commodities', href: '/commodities' },
  { label: 'Regions',     href: '/regions' },
  { label: 'Contact',     href: '/contact' },
]

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug:        'funding-solutions',
    icon:        'Banknote',
    core:        true,
    title:       'Flexible Funding Solutions',
    short:       'Unsecured capital from US$100k to US$200m — equity, loans, trade finance, IPP clean energy project funding, and regional instruments across Africa, South Africa, and Namibia.',
    description: 'We connect businesses with the right capital without the burden of traditional security. Our funding network spans global USD routes — equity investment, corporate loans, trade funding (via 5050 Trade Facility or up to 70%), LC/SBLC instruments, and specialist IPP clean energy project finance — as well as regional products in South Africa (ZAR) and Namibia (NAD). From a R100k small business loan to a US$200m equity raise, we match your stage, sector, and jurisdiction to the right funding structure and the right funders.',
    audience:    'SMEs, project developers, commodity traders, clean energy IPP developers, and growth-stage companies across Africa seeking unsecured or instrument-backed capital.',
    bullets:     ['Equity access from US$100k to US$200m — no traditional security required', 'Specialist IPP funding for Independent Power Producer clean energy projects', 'Regional instruments in ZAR and NAD covering South Africa and Namibia', 'Backed by credentialed global financing partners with a proven institutional track record'],
    outputs:     ['Equity placement (US$100k–$200m)', 'IPP Project Funding (Clean Energy)', 'Corporate loan facilitation', 'Trade funding — 5050 Trade Facility or up to 70%', 'LC/SBLC issuance', 'Purchase order funding', 'Invoice discounting', 'Small business loans', 'Credit insurance', 'Guarantees & bonds'],
  },
  {
    slug:        'strategic-advisory',
    icon:        'Target',
    title:       'Strategic Advisory & Deal Origination',
    short:       'Identifying and qualifying high-potential projects in infrastructure, agriculture, energy and minerals.',
    description: 'We identify, evaluate, and qualify high-potential investment opportunities across infrastructure, agriculture, energy, and minerals in Africa. Our deal origination process is rigorous — we bring only vetted, bankable opportunities to our international partners, saving time and reducing risk at every stage.',
    audience:    'International investors, private equity funds, development finance institutions, and family offices seeking structured African exposure.',
    bullets:     ['Rigorous deal screening — only bankable, vetted opportunities reach our partners', 'Coverage across infrastructure, agriculture, energy, and minerals', 'End-to-end origination from identification through to partner introduction'],
    outputs:     ['Investment memoranda', 'Deal term sheets', 'Project feasibility summaries', 'Partner introductions'],
  },
  {
    slug:        'financial-structuring',
    icon:        'Shield',
    title:       'Financial Structuring',
    short:       'Structuring secure transactions using DLC, SBLC, Bank Guarantees, asset financing, and other financial instruments.',
    description: 'We design and implement financial structures that make cross-border transactions secure, compliant, and executable. Our expertise covers the full range of international trade finance instruments, ensuring that both buyers and sellers are protected from origination through to settlement.',
    audience:    'Importers, exporters, project developers, and commodity buyers and sellers operating across borders.',
    bullets:     ['Full suite of trade finance instruments: DLC, SBLC, Bank Guarantees', 'Both buyer and seller protected from origination through to settlement', 'Compliant, executable structures for cross-border transactions of any size'],
    outputs:     ['DLC', 'SBLC', 'Bank Guarantees', 'Tripartite Agreements', 'Asset Financing'],
  },
  {
    slug:        'commodity-brokerage',
    icon:        'Package',
    title:       'Commodity Brokerage & Agribusiness',
    short:       'Sourcing and managing premium agricultural commodities and minerals with end-to-end supply chain solutions.',
    description: 'We source, verify, and broker premium African commodities from trusted producer networks in Tanzania and across East and Central Africa — including coffee, sesame, vanilla, cashew, sisal, grains, and industrial minerals. We manage the entire process from origin verification to delivery: quality certification, seasonal contract planning, logistics coordination, and trade finance arrangement. Whether you are securing a sesame harvest window or building a long-term vanilla supply relationship, our on-the-ground networks give you verified origin, certified quality, and executable contracts.',
    audience:    'International commodity buyers, importers, trading houses, food manufacturers, flavour houses, and industrial processors seeking reliable African agricultural supply.',
    bullets:     ['20+ verified agricultural commodities across Tanzania and East Africa', 'Origin verification, quality certification, and seasonal contract planning included', 'Integrated logistics coordination and trade finance — one partner, full supply chain'],
    outputs:     ['Source verification', 'Quality certification', 'Seasonal contract planning', 'Logistics coordination', 'Trade finance arrangement', 'Delivery management'],
  },
  {
    slug:        'due-diligence',
    icon:        'Search',
    title:       'Regional Due Diligence',
    short:       'ADD Provider™-verified risk assessment, KYC/KYB counterparty intelligence, and market entry frameworks across seven African markets.',
    description: 'Finsol operates as an ADD Provider™ on the Africa Due Diligence platform — the Gold Standard for African Business Intelligence™. Our due diligence engagements cover political and regulatory risk, counterparty KYC and KYB verification, market sizing, sector analysis, and competitive landscape mapping across our seven operating markets. Every engagement begins with onboarding through the ADD platform: identity and business verification is completed within 48 hours, giving both parties a verified foundation before formal collaboration begins.',
    audience:    'International businesses (ADD Seekers™) conducting first-entry or expansion into East, Central, or West Africa — and counterparties requiring verified, credible local intelligence.',
    bullets:     ['Finsol is an ADD Provider™ — verified on the Gold Standard African intelligence platform', 'KYC and KYB counterparty checks completed within 48 hours via the ADD platform', 'Political, regulatory, and sector risk coverage across seven operating markets'],
    outputs:     ['Political & regulatory risk reports', 'KYC / KYB counterparty verification', 'Market entry frameworks', 'Sector & competitive analysis', 'ADD-verified onboarding', 'Regulatory compliance reviews'],
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

// ─── FUNDING PRODUCTS ─────────────────────────────────────────────────────────
export const FUNDING_PRODUCTS = [
  {
    category: 'Global & USD Routes',
    currency: 'USD',
    products: [
      { name: 'Equity Investment',    range: 'US$ 100k – US$ 200m', note: 'Requires: Pitch Deck' },
      { name: 'IPP Project Funding',  range: 'Project basis',        note: 'Independent Power Producer — clean energy projects. Requires: 1-page IPP Summary (see requirements below ↓)', badge: 'SPECIALIST' as const },
      { name: 'Corporate Loan',       range: 'US$ 3m – US$ 100m',   note: 'Requires: Detailed Business Plan' },
      { name: 'Trade Funding',        range: 'US$ 1.5m – US$ 25m',  note: 'Options: 5050 Trade Facility · Up to 70% of purchase amount' },
      { name: 'LC / SBLC Services',   range: 'Min US$ 100k',         note: 'Sight & usance; goods coverage' },
    ],
  },
  {
    category: 'South Africa',
    currency: 'ZAR',
    products: [
      { name: 'Purchase Order Funding', range: 'R 400k – R 10m', note: 'For goods procurement' },
      { name: 'Invoice Discounting',    range: 'R 350k – R 10m', note: 'Unlock unpaid invoice value' },
      { name: 'Small Business Loans',   range: 'R 100k – R 6m',  note: '' },
    ],
  },
  {
    category: 'Namibia',
    currency: 'NAD',
    products: [
      { name: 'Small Business Loans', range: 'N$ 100k – N$ 6m', note: '' },
    ],
  },
  {
    category: 'Specialized Instruments',
    currency: '',
    products: [
      { name: 'Credit Insurance',   range: '', note: 'Protect accounts receivable against non-payment', badge: 'NEW' as const },
      { name: 'Guarantees & Bonds', range: '', note: 'Tender Guarantees, Performance Bonds, Advance Payment Guarantees' },
    ],
  },
]

// ─── FUNDING PARTNERS ─────────────────────────────────────────────────────────
export const FUNDING_PARTNERS = {
  headline:   'Backed by Credentialed Global Financing Partners',
  body:       'We structure and facilitate funding access in partnership with a global network of institutional funders, accredited investment firms, and specialist capital providers — each vetted for credibility, track record, and the ability to deploy capital into African markets. Our financing partners bring decades of institutional-grade advisory experience, a proven record across complex cross-border transactions, and established relationships with equity investors, development finance institutions, and trade finance desks operating globally.',
  highlights: [
    { label: 'Institutional grade',   desc: 'Every funding route is structured to meet the documentation and compliance standards that international funders require.' },
    { label: 'Proven track record',   desc: 'Partners with decades of cross-border transaction advisory experience and an unblemished record on bankable business plans.' },
    { label: 'Global capital reach',  desc: 'Access to equity investors, development finance institutions, and trade finance providers operating across multiple markets.' },
  ],
}

// ─── PITCH DECK GUIDE ─────────────────────────────────────────────────────────
export const PITCH_DECK_GUIDE = {
  title:    'Mastering Your Investment Pitch Deck',
  subtitle: 'Required for Equity Investment applications (US$100k – US$200m)',
  intro:    'The primary goal of your pitch deck is not to secure final funding on the spot — it is to spark investor interest and secure the next step: a Q&A discussion. Keep it short: 10–12 slides delivered over a 5-minute presentation. Build trust, don\'t try to educate.',
  slides: [
    { label: 'Cover Slide',              desc: 'Company name, country, and a brief snapshot of the opportunity.' },
    { label: 'Executive Summary',        desc: 'Funding amount requested, Return on Investment (ROI), and key financial metrics.' },
    { label: 'Business Opportunity',     desc: 'Problem, solution, pricing, market size (TAM, SAM, SOM), and competitor analysis. 2–3 slides.' },
    { label: 'Leadership Team',          desc: 'Full-time Directors, relevant experience, and professional photos.' },
    { label: 'Use of Funds',             desc: 'Specific amount (no ranges), broken down with a clear pie chart.' },
    { label: 'Financial Projections',    desc: '3–5 year annual Revenue & Profit shown as a clean graph.' },
    { label: 'Closing Slide',            desc: '"Thank You," contact info, and a clear invitation for input.' },
  ],
  investorChecklist: [
    { point: 'Clear Milestones',       desc: 'What exactly will this round accomplish over the next 9–18 months?' },
    { point: 'Traction Over Concepts', desc: 'Show current revenue, profit, customers — or MVPs, LOIs, and architect drawings if early-stage.' },
    { point: 'Tangibility',            desc: 'Include geographic maps. Location impacts logistics, demand, and raw materials.' },
    { point: 'Accountability',         desc: 'Only feature full-time leaders who are legally accountable for investor capital.' },
  ],
  designRules: [
    'Use large fonts, short bullet points — max 6 bullets, 6 words each. Let them listen, not read.',
    'Round all figures to the nearest 10,000 or 100,000 in US$, £ Sterling, or Euros.',
    'Classify staff costs under functional areas (Marketing, Operations) — not as general salaries.',
  ],
  prepNote: 'Raising large unsecured rounds typically requires a preparation budget of US$4,000–US$5,000 to cover legal and structuring fees.',
}

// ─── IPP FUNDING GUIDE ────────────────────────────────────────────────────────
export const IPP_GUIDE = {
  title:    'IPP Project Funding — Independent Power Producer',
  subtitle: 'Specialist clean energy project finance for private power generators',
  intro:    'An Independent Power Producer (IPP) is a private entity that develops, owns, and operates electricity generating assets — solar, wind, hydro, gas, or hybrid — and sells power to a utility or offtaker via a Power Purchase Agreement (PPA). This is specialist project finance, distinct from a corporate loan or equity raise, and requires a dedicated funder with deep energy sector expertise.',
  summaryHeading: 'Our Specialist IPP Funder Requires a 1-Page Summary on Company Letterhead',
  summaryItems: [
    { label: 'Revenue',                    desc: 'Current or projected revenue figures for the project entity.' },
    { label: 'Profits',                    desc: 'Current or projected profit figures.' },
    { label: 'Funding Required',           desc: 'Total capital requirement for the project.' },
    { label: 'PPA & Grid Connectivity',    desc: 'Confirmation of the Power Purchase Agreement status and grid connectivity arrangement.' },
    { label: 'Debt / Equity Split',        desc: 'The financing structure you are targeting — proportion of debt vs equity.' },
    { label: 'Permit Progress',            desc: 'How far you are with Environmental Impact Assessment (EIA), Water permits, and any other required permits.' },
  ],
  signatory:    'The 1-page summary must be signed by the Owner / CEO.',
  exclusivityNote: 'This funder will request exclusivity once they engage. Specific exceptions can be listed and agreed at the outset.',
}

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
  tagline:     'The Gold Standard for African Business Intelligence™',
  verifiedStatement:
    'Finsol T Ltd is an ADD Provider™ — verified by Africa Due Diligence (ADD), the AI-powered platform for KYC, KYB, counterparty validation, and risk intelligence across Africa\'s 54 markets.',
  ecosystem: [
    { role: 'ADD Seekers™',   desc: 'International businesses and investors entering African markets.' },
    { role: 'ADD Providers™', desc: 'African enterprises like Finsol, verified and listed on the platform.' },
    { role: 'ADD Verifiers™', desc: 'Independent on-the-ground experts conducting the vetting process.' },
  ],
  onboardingSteps: [
    { step: '01', title: 'Download the ADD App',        desc: 'Available on iOS and Android from africaduediligence.com.' },
    { step: '02', title: 'Video ID & Photo Submission', desc: 'Record a short video identification and submit a photo for verification.' },
    { step: '03', title: 'Account Approval',            desc: 'Verification completes within 48 hours — both parties are verified before any formal engagement begins.' },
  ],
  preliminaryStage:
    'Before we work together, every engagement begins with a preliminary onboarding stage: identity verification (KYC), business validation (KYB), and counterparty checks conducted through the Africa Due Diligence platform. This protects all parties and ensures every introduction is built on verified foundations.',
  recommendation:
    'We recommend and prefer working with businesses that are verified by Africa Due Diligence. ADD-verified counterparties benefit from faster onboarding, stronger institutional confidence, and smoother cross-border transaction structuring.',
}

// ─── PARTNERS ─────────────────────────────────────────────────────────────────
export const PARTNERS = [
  {
    name:    'Africa Due Diligence (ADD)',
    role:    'Verification and due diligence partner. Finsol T Ltd is ADD-verified, and we use the ADD platform for KYC, counterparty validation, and risk intelligence across African markets.',
    website: 'https://africaduediligence.com',
    logo:    '/images/partners/add.webp',
  },
  {
    name:    'BeamAfrique',
    role:    "Pan-African media partner for sharing completed investments, deal milestones, and opportunities across the continent — projecting Africa's economic story to a global audience.",
    website: 'https://beamafrique.com',
    logo:    '/images/partners/beamafrique.webp',
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
    logo:    '/images/partners/gbr.webp',
  },
  {
    name:    'Business Network International (BNI)',
    role:    'Professional network supporting trusted referrals and business development across sectors.',
    website: 'https://www.bni.com',
    logo:    '/images/partners/bni.webp',
  },
]
