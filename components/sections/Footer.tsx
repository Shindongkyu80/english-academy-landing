"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import FooterContent from "./footer/FooterContent"

const navigation = {
  company: [
    { name: "회사 소개", href: "#" },
    { name: "이용약관", href: "#" },
    { name: "개인정보처리방침", href: "#" }
  ],
  support: [
    { name: "자주 묻는 질문", href: "#" },
    { name: "학습 가이드", href: "#" },
    { name: "고객센터", href: "#" }
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Youtube", icon: Youtube, href: "#" }
  ]
}

// 연도를 정적으로 설정
const CURRENT_YEAR = "2024";

export default function Footer() {
  return (
    <footer className="relative bg-[#020817] border-t border-blue-900/50 py-24 md:py-32 -mt-32 md:-mt-48">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <FooterContent />
    </footer>
  )
}
