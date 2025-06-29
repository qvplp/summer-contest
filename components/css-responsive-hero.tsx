import Image from "next/image"

interface CSSResponsiveHeroProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
  className?: string
}

export function CSSResponsiveHero({ desktopSrc, mobileSrc, alt, className = "" }: CSSResponsiveHeroProps) {
  return (
    <div className={`relative w-full h-screen ${className}`}>
      {/* Desktop Image - Hidden on mobile */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src={desktopSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile Image - Hidden on desktop */}
      <div className="block md:hidden relative w-full h-full">
        <Image src={mobileSrc || "/placeholder.svg"} alt={alt} fill className="object-contain" priority sizes="100vw" />
      </div>
    </div>
  )
}
