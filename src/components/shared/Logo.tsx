import Link from 'next/link'
import { cn } from '@/lib/utils'

export const FINSOL_EMBLEM_SRC = '/images/finsol-emblem.svg'

type LogoProps = {
  className?: string
  imgClassName?: string
  href?: string
}

export function Logo({
  className,
  imgClassName = 'h-9 w-auto sm:h-10',
  href = '/',
}: LogoProps) {
  const img = (
    <img
      src={FINSOL_EMBLEM_SRC}
      alt="Finsol T Ltd"
      width={503}
      height={364}
      className={cn('transition-opacity duration-300', imgClassName)}
    />
  )

  if (!href) return <span className={cn('inline-flex items-center', className)}>{img}</span>

  return (
    <Link
      href={href}
      className={cn('inline-flex items-center shrink-0 group', className)}
    >
      <span className="group-hover:opacity-90">{img}</span>
    </Link>
  )
}
