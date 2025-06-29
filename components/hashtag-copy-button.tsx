"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface HashtagCopyButtonProps {
  hashtags: string
  className?: string
}

export function HashtagCopyButton({ hashtags, className = "" }: HashtagCopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hashtags)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <Button
      onClick={handleCopy}
      className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg transition-all duration-200 ${className}`}
      disabled={copied}
    >
      {copied ? (
        <>
          <Check className="w-5 h-5 mr-2" />
          コピーしました！
        </>
      ) : (
        <>
          <Copy className="w-5 h-5 mr-2" />
          ハッシュタグをコピー
        </>
      )}
    </Button>
  )
}
