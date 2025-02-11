"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Presentation, Video, MessageSquare, BarChart } from "lucide-react"
import CourseFeaturesContent from "./coursefeatures/CourseFeaturesContent"

const features = [
  {
    icon: <Presentation className="w-5 h-5 md:w-6 md:h-6" />,
    title: "실전 비즈니스 영어",
    description: "실제 비즈니스 상황에서 사용되는 영어 표현과 커뮤니케이션 스킬 학습"
  },
  {
    icon: <Video className="w-5 h-5 md:w-6 md:h-6" />,
    title: "화상 1:1 수업",
    description: "원어민 강사와 함께하는 맞춤형 1:1 실시간 화상 영어 수업"
  },
  {
    icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
    title: "자유로운 질문",
    description: "수업 중 궁금한 점을 자유롭게 질문하고 즉각적인 피드백 제공"
  },
  {
    icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" />,
    title: "학습 진도 관리",
    description: "체계적인 학습 진도 관리와 정기적인 성과 분석 리포트 제공"
  }
]

export default function CourseFeatures() {
  return (
    <section className="relative bg-[#020817] py-48 md:py-64 -mt-32 md:-mt-48">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <CourseFeaturesContent />
    </section>
  )
}
