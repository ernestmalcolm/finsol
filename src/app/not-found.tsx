import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-base flex items-center justify-center">
      <div className="text-center section-container max-w-xl">
        <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-6">404</p>
        <h1 className="font-display text-display-xl font-light text-text-primary mb-4">
          Page Not Found
        </h1>
        <div className="gold-line mx-auto mb-6" />
        <p className="text-text-secondary mb-10 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us take you
          somewhere useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-surface-base font-medium font-body rounded-md hover:bg-gold-light transition-all duration-300"
          >
            Go Home <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(201,168,76,0.3)] text-text-primary rounded-md hover:border-[rgba(201,168,76,0.6)] transition-all duration-300 font-body"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
