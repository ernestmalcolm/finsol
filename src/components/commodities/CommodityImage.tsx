import Image from 'next/image'
import type { Commodity } from '@/lib/types'
import { Leaf } from 'lucide-react'

interface CommodityImageProps {
  commodity: Commodity
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
}

export function CommodityImage({
  commodity,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
}: CommodityImageProps) {
  if (commodity.image) {
    if (fill) {
      return (
        <Image
          src={commodity.image}
          alt={`${commodity.name} — ${commodity.origin}`}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      )
    }

    return (
      <Image
        src={commodity.image}
        alt={`${commodity.name} — ${commodity.origin}`}
        width={1400}
        height={900}
        priority={priority}
        sizes={sizes}
        className={className}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center bg-[linear-gradient(135deg,rgba(201,168,76,0.15)_0%,rgba(15,22,35,1)_100%)] ${className}`}
      aria-hidden
    >
      <Leaf className="w-12 h-12 text-gold/40" />
    </div>
  )
}
