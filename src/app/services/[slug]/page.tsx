import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Target, Shield, Package, Search, Banknote, ShieldCheck, BookOpen, CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import { SERVICES, AGRICULTURAL_PRODUCTS, AGRIBUSINESS_SEO, FUNDING_PRODUCTS, FUNDING_PARTNERS, ADD_VERIFICATION, PITCH_DECK_GUIDE, IPP_GUIDE } from '@/lib/constants'
import { metadataAlternates } from '@/lib/seo'
import { PageHero }    from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'
import { SeasonalCalendar } from '@/components/commodities/SeasonalCalendar'

const iconMap: Record<string, React.ElementType> = { Target, Shield, Package, Search, Banknote }

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  if (slug === 'commodity-brokerage') {
    return {
      title: service.title,
      description: AGRIBUSINESS_SEO.description,
      keywords: AGRIBUSINESS_SEO.keywords,
      ...metadataAlternates(`/services/${slug}`),
    }
  }
  return {
    title: service.title,
    description: service.description,
    ...metadataAlternates(`/services/${slug}`),
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] ?? Target
  const others = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow={slug === 'funding-solutions' ? 'Core Product' : 'Our Services'}
        title={service.title}
        subtitle={service.short}
      />

      <section className="py-section bg-surface-base">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <div className="card-dark p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-display text-xl font-medium text-text-primary">Overview</h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="card-dark p-8">
                  <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
                    Who This Is For
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{service.audience}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="card-dark p-8">
                  <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
                    What You Receive
                  </h3>
                  <div className="space-y-3">
                    {service.outputs.map((output, i) => (
                      <div key={output} className="flex items-center gap-4">
                        <span className="font-mono text-xs text-gold">0{i + 1}</span>
                        <span className="text-text-secondary">{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {slug === 'commodity-brokerage' && (
                <ScrollReveal delay={0.2}>
                  <div className="card-dark p-8">
                    <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
                      Agricultural Products We Broker
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      Our agribusiness portfolio covers {AGRICULTURAL_PRODUCTS.length} agricultural
                      commodities across Tanzania and East Africa — each with dedicated product pages
                      covering availability, grades, and seasonal export windows.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {AGRICULTURAL_PRODUCTS.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/commodities/${product.slug}`}
                          className="flex items-center justify-between p-3 rounded-md hover:bg-[rgba(201,168,76,0.05)] transition-colors group"
                        >
                          <span className="text-text-secondary text-sm group-hover:text-gold transition-colors">
                            {product.name}
                          </span>
                          <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/commodities"
                      className="inline-flex items-center gap-2 mt-6 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
                    >
                      Full commodities catalog <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </ScrollReveal>
              )}

              {slug === 'due-diligence' && (
                <ScrollReveal delay={0.2}>
                  <div className="card-dark p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-text-primary font-medium">ADD Provider™ Status</h3>
                        <p className="font-mono text-[10px] text-gold tracking-wider uppercase mt-0.5">
                          {ADD_VERIFICATION.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-8">
                      {ADD_VERIFICATION.verifiedStatement}
                    </p>

                    <h4 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">
                      The ADD Ecosystem
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3 mb-8">
                      {ADD_VERIFICATION.ecosystem.map((tier) => (
                        <div
                          key={tier.role}
                          className="p-4 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]"
                        >
                          <p className="text-gold font-mono text-xs font-medium mb-1">{tier.role}</p>
                          <p className="text-text-muted text-xs leading-relaxed">{tier.desc}</p>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">
                      Onboarding Process
                    </h4>
                    <div className="space-y-4 mb-8">
                      {ADD_VERIFICATION.onboardingSteps.map((item) => (
                        <div key={item.step} className="flex gap-4 items-start">
                          <span className="font-mono text-xs text-gold min-w-8">{item.step}</span>
                          <div>
                            <p className="text-text-primary text-sm font-medium">{item.title}</p>
                            <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={ADD_VERIFICATION.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
                    >
                      Visit Africa Due Diligence <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </ScrollReveal>
              )}

              {slug === 'funding-solutions' && (
                <>
                  {/* About Our Partners */}
                  <ScrollReveal delay={0.2}>
                    <div className="card-dark p-8">
                      <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
                        About Our Partners
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-8">
                        {FUNDING_PARTNERS.body}
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {FUNDING_PARTNERS.highlights.map((h) => (
                          <div
                            key={h.label}
                            className="p-4 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]"
                          >
                            <p className="text-gold font-mono text-xs font-medium mb-2">{h.label}</p>
                            <p className="text-text-muted text-xs leading-relaxed">{h.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Flexible Funding Solutions — product matrix */}
                  <ScrollReveal delay={0.25}>
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                        Flexible Funding Solutions
                      </h3>
                      {FUNDING_PRODUCTS.map((cat) => (
                        <div key={cat.category} className="card-dark p-8">
                          <div className="flex items-center justify-between mb-6">
                            <h4 className="text-text-primary font-medium">{cat.category}</h4>
                            {cat.currency && (
                              <span className="font-mono text-xs text-gold bg-[rgba(201,168,76,0.08)] px-2.5 py-1 rounded">
                                {cat.currency}
                              </span>
                            )}
                          </div>
                          <div className="space-y-4">
                            {cat.products.map((product, i) => (
                              <div
                                key={product.name}
                                className={`flex items-start justify-between gap-6 ${
                                  i < cat.products.length - 1
                                    ? 'pb-4 border-b border-[rgba(255,255,255,0.06)]'
                                    : ''
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-text-primary text-sm font-medium">
                                      {product.name}
                                    </span>
                                    {'badge' in product && product.badge && (
                                      <span className="font-mono text-[10px] bg-[rgba(201,168,76,0.15)] text-gold px-2 py-0.5 rounded uppercase tracking-wider">
                                        {product.badge}
                                      </span>
                                    )}
                                  </div>
                                  {product.note && (
                                    <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                                      {product.name === 'IPP Project Funding' ? (
                                        <>
                                          Independent Power Producer — clean energy projects.{' '}
                                          <a href="#ipp-requirements" className="text-gold hover:underline">
                                            See requirements ↓
                                          </a>
                                        </>
                                      ) : (
                                        product.note
                                      )}
                                    </p>
                                  )}
                                </div>
                                {product.range && (
                                  <span className="font-mono text-xs text-gold whitespace-nowrap">
                                    {product.range}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* IPP — Independent Power Producer */}
                  <ScrollReveal delay={0.28}>
                    <div id="ipp-requirements" className="card-dark p-8 border-l-2 border-[rgba(201,168,76,0.3)]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] text-gold tracking-wider uppercase mb-1">
                            Specialist Funding · Clean Energy / Electric Project
                          </p>
                          <h3 className="text-text-primary font-medium">{IPP_GUIDE.title}</h3>
                          <p className="text-text-muted text-xs mt-1">{IPP_GUIDE.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-8">
                        {IPP_GUIDE.intro}
                      </p>

                      <h4 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-2">
                        {IPP_GUIDE.summaryHeading}
                      </h4>
                      <div className="space-y-3 mb-6">
                        {IPP_GUIDE.summaryItems.map((item, i) => (
                          <div key={item.label} className="flex gap-4 items-start">
                            <span className="font-mono text-xs text-gold min-w-8">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <span className="text-text-primary text-sm font-medium">{item.label}</span>
                              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4 p-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
                        <p className="text-text-secondary text-xs leading-relaxed">
                          <span className="text-gold font-medium">Signatory — </span>
                          {IPP_GUIDE.signatory}
                        </p>
                      </div>

                      <div className="p-4 rounded-md bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)]">
                        <p className="text-text-muted text-xs leading-relaxed italic">
                          <span className="text-gold font-medium not-italic">Note — </span>
                          {IPP_GUIDE.exclusivityNote}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Investment Pitch Deck — suggestions */}
                  <ScrollReveal delay={0.3}>
                    <div className="card-dark p-8 border-l-2 border-[rgba(201,168,76,0.3)]">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] text-gold tracking-wider uppercase mb-1">
                            Investment Pitch Deck
                          </p>
                          <h3 className="text-text-primary font-medium">{PITCH_DECK_GUIDE.title}</h3>
                          <p className="text-text-muted text-xs mt-1">{PITCH_DECK_GUIDE.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-8">
                        {PITCH_DECK_GUIDE.intro}
                      </p>
                      <h4 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">
                        Winning Slide Formula
                      </h4>
                      <div className="space-y-3">
                        {PITCH_DECK_GUIDE.slides.map((slide, i) => (
                          <div key={slide.label} className="flex gap-4 items-start">
                            <span className="font-mono text-xs text-gold min-w-8">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <span className="text-text-primary text-sm font-medium">{slide.label}</span>
                              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{slide.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Investment Funders Requirements */}
                  <ScrollReveal delay={0.35}>
                    <div className="card-dark p-8">
                      <h3 className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-6">
                        What Funders Require
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {PITCH_DECK_GUIDE.investorChecklist.map((item) => (
                          <div
                            key={item.point}
                            className="flex gap-3 items-start p-4 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <div>
                              <p className="text-text-primary text-sm font-medium">{item.point}</p>
                              <p className="text-text-muted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-md bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.15)]">
                        <p className="text-text-muted text-xs leading-relaxed">
                          <span className="text-gold font-medium">Preparation note — </span>
                          {PITCH_DECK_GUIDE.prepNote}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </>
              )}
            </div>

            {/* Sidebar — other services */}
            <div className="space-y-4">
              <ScrollReveal delay={0.2}>
                <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">
                  Other Services
                </p>
                {others.map((s) => {
                  const OtherIcon = iconMap[s.icon] ?? Target
                  return (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="card-dark p-5 flex gap-3 items-start group hover:border-[rgba(201,168,76,0.4)] border border-transparent transition-colors duration-300 mb-3 block"
                    >
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                        <OtherIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-text-primary text-sm font-medium group-hover:text-gold transition-colors">
                          {s.title}
                        </p>
                        <p className="text-text-muted text-xs mt-0.5 leading-relaxed line-clamp-2">
                          {s.short}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {slug === 'commodity-brokerage' && <SeasonalCalendar />}

      <PartnerCTASection />
    </>
  )
}
