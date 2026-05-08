import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Target, Shield, Package, Search } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { PageHero }    from '@/components/shared/PageHero'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { PartnerCTASection } from '@/components/home/PartnerCTASection'

const iconMap: Record<string, React.ElementType> = { Target, Shield, Package, Search }

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
  return {
    title: service.title,
    description: service.description,
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
        eyebrow="Our Services"
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
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
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

      <PartnerCTASection />
    </>
  )
}
