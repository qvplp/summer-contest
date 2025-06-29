import Image from "next/image"

export function SimpleResponsiveExample() {
  return (
    <div className="w-full">
      {/* Simple responsive hero with your actual images */}
      <div className="relative w-full h-screen bg-gray-100">
        {/* Desktop Image - Shows on md screens and up (768px+) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/hero-pc.png"
            alt="Desktop hero image"
            fill
            className="object-contain"
            priority
            sizes="(min-width: 768px) 100vw, 0px"
          />
        </div>

        {/* Mobile Image - Shows on screens smaller than md (767px and below) */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/hero-mobile.png"
            alt="Mobile hero image"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 767px) 100vw, 0px"
          />
        </div>
      </div>

      {/* Content below hero */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Content Below Hero</h1>
          <p className="text-gray-600">
            The hero image above automatically switches between desktop and mobile versions while maintaining full
            visibility and aspect ratio.
          </p>
        </div>
      </div>
    </div>
  )
}
