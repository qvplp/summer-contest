import Image from "next/image"

interface FlexibleResponsiveHeroProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
  containerHeight?: string
  className?: string
}

export function FlexibleResponsiveHero({
  desktopSrc,
  mobileSrc,
  alt,
  containerHeight = "h-screen",
  className = "",
}: FlexibleResponsiveHeroProps) {
  return (
    <div className={`relative w-full ${containerHeight} bg-gray-50 ${className}`}>
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src={desktopSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(min-width: 768px) 100vw, 0px"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden relative w-full h-full">
        <Image
          src={mobileSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 767px) 100vw, 0px"
        />
      </div>
    </div>
  )
}
