import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, MapPin, Package, Tag } from 'lucide-react'
import {
  COMMODITIES,
  AGRICULTURAL_PRODUCTS,
  getCommodity,
} from '@/lib/constants'
import { PageHero } from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'
import { CommodityImage } from '@/components/commodities/CommodityImage'
import { JsonLd, buildCommodityProductSchema } from '@/components/shared/JsonLd'
import { getCommodityFaqs } from '@/lib/commodity-faqs'
import { metadataAlternates, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/seo'
import { CommodityFaq } from '@/components/commodities/CommodityFaq'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return COMMODITIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const commodity = getCommodity(slug)
  if (!commodity) return {}

  const keywords = commodity.seoKeywords ?? [
    `${commodity.name} export Africa`,
    `${commodity.name} broker Tanzania`,
  ]

  return {
    title: `${commodity.name} Export — African Commodity Brokerage`,
    description: commodity.shortDescription,
    keywords,
    openGraph: {
      title: `${commodity.name} | Finsol T Ltd`,
      description: commodity.shortDescription,
      ...(commodity.image && { images: [{ url: commodity.image, alt: commodity.name }] }),
    },
    ...metadataAlternates(`/commodities/${slug}`),
  }
}

export default async function CommodityDetailPage({ params }: Props) {
  const { slug } = await params
  const commodity = getCommodity(slug)
  if (!commodity) notFound()

  const related = AGRICULTURAL_PRODUCTS.filter(
    (c) => c.slug !== slug && c.category === commodity.category,
  ).slice(0, 4)
  const faqs = getCommodityFaqs(commodity)

  return (
    <>
      <JsonLd
        data={[
          buildCommodityProductSchema(commodity),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Commodities', path: '/commodities' },
            { name: commodity.name, path: `/commodities/${slug}` },
          ]),
          buildFaqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow={commodity.category === 'agriculture' ? 'Agricultural Commodity' : 'Commodity'}
        title={commodity.name}
        subtitle={commodity.shortDescription}
      />

      <section className="py-section bg-surface-base">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {commodity.image && (
                <ScrollReveal>
                  <div className="relative h-64 sm:h-80 rounded-card overflow-hidden">
                    <CommodityImage commodity={commodity} fill className="object-cover" />
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal delay={0.05}>
                <div className="card-dark p-8">
                  <h2 className="font-display text-xl font-medium text-text-primary mb-4">
                    Overview
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{commodity.description}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="card-dark p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gold" />
                      <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                        Harvest Season
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm">{commodity.harvestSeason}</p>
                  </div>
                  <div className="card-dark p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="w-4 h-4 text-gold" />
                      <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                        Export Peak
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm">{commodity.exportPeak}</p>
                  </div>
                </div>
              </ScrollReveal>

              {commodity.grades && commodity.grades.length > 0 && (
                <ScrollReveal delay={0.15}>
                  <div className="card-dark p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-gold" />
                      <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                        Available Grades
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {commodity.grades.map((grade) => (
                        <span
                          key={grade}
                          className="font-mono text-[11px] tracking-wide text-gold bg-[rgba(201,168,76,0.1)] px-3 py-1.5"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {commodity.applications && commodity.applications.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="card-dark p-8">
                    <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">
                      Applications
                    </h3>
                    <ul className="space-y-2">
                      {commodity.applications.map((app) => (
                        <li
                          key={app}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal delay={0.25}>
                <CommodityFaq faqs={faqs} />
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="card-dark p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-gold" />
                    <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                      Origin
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{commodity.origin}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="card-dark p-6">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">
                    Availability
                  </h3>
                  <p className="text-text-secondary text-sm">{commodity.availability}</p>
                </div>
              </ScrollReveal>

              {commodity.certifications && commodity.certifications.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="card-dark p-6">
                    <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">
                      Certifications
                    </h3>
                    <ul className="space-y-2">
                      {commodity.certifications.map((cert) => (
                        <li key={cert} className="text-text-secondary text-sm">
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal delay={0.25}>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gold text-surface-base font-medium rounded-md hover:bg-gold-light transition-colors"
                >
                  Enquire about {commodity.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>

              {related.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">
                    Related Products
                  </p>
                  <div className="space-y-2">
                    {related.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/commodities/${item.slug}`}
                        className="card-dark p-4 block hover:border-[rgba(201,168,76,0.4)] border border-transparent transition-colors"
                      >
                        <p className="text-text-primary text-sm font-medium">{item.name}</p>
                        <p className="text-text-muted text-xs mt-0.5 line-clamp-1">
                          {item.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      <PartnerCTASection />
    </>
  )
}
