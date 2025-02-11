"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import TeachersContent from "./teachers/TeachersContent"

const teachers = [
  {
    name: "Sarah Johnson",
    role: "비즈니스 영어 전문",
    experience: "교육 경력 8년",
    description: "글로벌 기업 비즈니스 영어 교육 전문가",
    image: "/images/teachers/teacher1.jpg"
  },
  {
    name: "Michael Brown",
    role: "면접/발음 전문",
    experience: "교육 경력 6년",
    description: "영어 면접 및 발음 교정 전문가",
    image: "/images/teachers/teacher2.jpg"
  },
  {
    name: "Emma Wilson",
    role: "회화/작문 전문",
    experience: "교육 경력 5년",
    description: "실전 영어 회화 및 작문 전문가",
    image: "/images/teachers/teacher3.jpg"
  }
]

export default function Teachers() {
  return (
    <section className="relative bg-[#020817] py-48 md:py-64 -mt-32 md:-mt-48">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <TeachersContent />
    </section>
  )
}
