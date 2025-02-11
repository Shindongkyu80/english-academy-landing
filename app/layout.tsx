import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "원어민 1:1 화상 영어 | 비즈니스 영어 전문",
  description: "원어민과 함께하는 1:1 맞춤형 화상 영어 수업. 비즈니스와 면접에 특화된 실전 영어 회화를 배워보세요.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-[#020817]`}>
        {children}
      </body>
    </html>
  )
}
