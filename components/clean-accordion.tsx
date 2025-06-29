"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AccordionItem {
  title: string
  content: string
  icon?: React.ReactNode
}

interface CleanAccordionProps {
  items: AccordionItem[]
}

export function CleanAccordion({ items }: CleanAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="border border-gray-200 hover-lift">
          <CardContent className="p-0">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">{item.icon}</div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{item.content}</div>}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
