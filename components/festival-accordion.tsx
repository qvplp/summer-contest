"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface AccordionItem {
  title: string
  content: string
  icon?: React.ReactNode
  color?: string
}

interface FestivalAccordionProps {
  items: AccordionItem[]
}

export function FestivalAccordion({ items }: FestivalAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AnimatedSection key={index} animation="scaleUp" delay={index * 100}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all duration-300 festival-card">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color || "bg-gradient-to-br from-purple-500 to-pink-500"}`}
                  >
                    {item.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed">{item.content}</div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
