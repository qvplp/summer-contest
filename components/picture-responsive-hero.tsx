interface PictureResponsiveHeroProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
  className?: string
}

export function PictureResponsiveHero({ desktopSrc, mobileSrc, alt, className = "" }: PictureResponsiveHeroProps) {
  return (
    <div className={`relative w-full h-screen flex items-center justify-center ${className}`}>
      <picture className="w-full h-full">
        <source media="(min-width: 768px)" srcSet={desktopSrc} />
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <img
          src={desktopSrc || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </picture>
    </div>
  )
}
