import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  arrow?: boolean
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  arrow = false,
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 px-8 py-4 font-body font-medium rounded-md transition-all duration-300',
        variant === 'primary' &&
          'bg-gold text-surface-base hover:bg-gold-light hover:shadow-xl hover:shadow-[rgba(201,168,76,0.25)] hover:-translate-y-0.5',
        variant === 'outline' &&
          'border border-[rgba(201,168,76,0.3)] text-text-primary hover:border-[rgba(201,168,76,0.6)] hover:bg-[rgba(201,168,76,0.05)]',
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </Link>
  )
}
