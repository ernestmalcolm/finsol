import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { SITE, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-base border-t border-border">
      {/* Gold top line */}
      <div className="h-px bg-gold-gradient opacity-40" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" imgClassName="h-11 w-auto" />
            <p className="font-mono text-xs tracking-[0.2em] text-text-muted uppercase mb-4">
              Bridging Capital. Unlocking Africa.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              A premier Strategic Advisory and Financial Structuring firm connecting global
              investors with high-value African opportunities.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-gold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-text-secondary hover:text-gold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                {SITE.phone}
              </a>
              <span className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                {SITE.address}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-gold uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Strategic Advisory',    href: '/services/strategic-advisory' },
                { label: 'Financial Structuring', href: '/services/financial-structuring' },
                { label: 'Commodity Brokerage',   href: '/services/commodity-brokerage' },
                { label: 'Due Diligence',         href: '/services/due-diligence' },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={SITE.profilePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold border border-[rgba(201,168,76,0.3)] px-4 py-2 rounded-md hover:bg-[rgba(201,168,76,0.08)] transition-colors"
              >
                Company Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {year} Finsol T Ltd. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Dar es Salaam, Tanzania · Registered Company
          </p>
        </div>
      </div>
    </footer>
  )
}
