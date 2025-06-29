import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Poppins, M_PLUS_Rounded_1c } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-m-plus-rounded",
  display: "swap",
})

export const metadata: Metadata = {
  title: "コラボ撮影コンテスト - 真夏の水着祭 × Pinyogram",
  description: "プロ審査員参加の写真コンテスト開催！豪華賞品をゲットしよう！",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${poppins.variable} ${mPlusRounded.variable}`}>
      <body className="font-noto antialiased">{children}</body>
    </html>
  )
}
