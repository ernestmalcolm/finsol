import { cn } from '@/lib/utils'
import { ScrollReveal } from './ScrollReveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase mb-4">{eyebrow}</p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-display-lg font-light text-text-primary mb-4">{title}</h2>
      </ScrollReveal>
      {align === 'left' && (
        <ScrollReveal delay={0.15}>
          <div className="gold-line mb-6" />
        </ScrollReveal>
      )}
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary leading-relaxed max-w-2xl">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
