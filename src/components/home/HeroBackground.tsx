import Image from 'next/image'

export function HeroBackground() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/hero-bg.jpg"
        alt="Dar es Salaam port and Indian Ocean coastline, Tanzania"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[rgba(10,8,4,0.45)]" />
    </div>
  )
}
