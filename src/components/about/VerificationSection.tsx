import Link from 'next/link'
import { ShieldCheck, ExternalLink } from 'lucide-react'
import { ADD_VERIFICATION } from '@/lib/constants'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function VerificationSection() {
  return (
    <section className="py-section bg-surface-subtle">
      <div className="section-container">
        <ScrollReveal>
          <div className="card-dark p-8 lg:p-12 border border-[rgba(201,168,76,0.25)]">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-md bg-[rgba(201,168,76,0.1)] text-gold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                    Verified &amp; Vetted
                  </p>
                </div>
                <h2 className="font-display text-display-md font-light text-text-primary mb-4">
                  Trust Before We Transact
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {ADD_VERIFICATION.verifiedStatement}
                </p>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="card-dark p-6 bg-surface-base/50">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">
                    Preliminary Onboarding
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {ADD_VERIFICATION.preliminaryStage}
                  </p>
                </div>

                <div className="card-dark p-6 bg-surface-base/50">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-3">
                    Counterparty Standard
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {ADD_VERIFICATION.recommendation}
                  </p>
                </div>

                <Link
                  href={ADD_VERIFICATION.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm font-mono tracking-wide hover:gap-3 transition-all duration-300"
                >
                  Learn about Africa Due Diligence
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
