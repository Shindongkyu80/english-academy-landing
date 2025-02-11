"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Clock, Users } from "lucide-react"
import BenefitsContent from "./benefits/BenefitsContent"

const benefits = [
  {
    icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
    title: "맞춤형 커리큘럼",
    description: "비즈니스 상황별 맞춤 학습으로 실전에서 바로 써먹는 영어 습득"
  },
  {
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
    title: "유연한 스케줄",
    description: "24시간 자유로운 수업 예약으로 바쁜 직장인도 부담 없이 수강"
  },
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "원어민 강사진",
    description: "검증된 원어민 강사와 함께하는 실전 영어 회화 트레이닝"
  },
  {
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
    title: "체계적인 관리",
    description: "수업 녹화 및 피드백으로 지속적인 실력 향상 도모"
  }
]

export default function Benefits() {
  return (
    <section className="relative bg-[#020817] py-48 md:py-64 -mt-32 md:-mt-48">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <BenefitsContent />
    </section>
  )
}
