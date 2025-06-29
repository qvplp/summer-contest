"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface ResponsiveHeroImageProps {
  desktopSrc: string
  mobileSrc: string
  alt: string
  className?: string
}

export function ResponsiveHeroImage({ desktopSrc, mobileSrc, alt, className = "" }: ResponsiveHeroImageProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkScreenSize()

    // Listen for resize events
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className={`relative w-full h-screen ${className}`}>
      <Image src={isMobile ? mobileSrc : desktopSrc} alt={alt} fill className="object-contain" priority sizes="100vw" />
    </div>
  )
}
