"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import FAQContent from "./faq/FAQContent"

const faqs = [
  {
    question: "수업은 어떻게 진행되나요?",
    answer: "화상 회의 플랫폼을 통해 1:1 실시간 수업으로 진행됩니다. 원어민 강사와 함께 45분간 맞춤형 수업이 이루어집니다."
  },
  {
    question: "수업 예약은 어떻게 하나요?",
    answer: "온라인 예약 시스템을 통해 원하시는 시간에 자유롭게 예약하실 수 있습니다. 24시간 예약이 가능하며, 최소 2시간 전까지 예약 변경이 가능합니다."
  },
  {
    question: "수업 교재는 어떻게 제공되나요?",
    answer: "학습자의 수준과 목표에 맞는 맞춤형 교재가 온라인으로 제공됩니다. 비즈니스, 일상회화, 시험 대비 등 목적에 따라 다양한 교재가 준비되어 있습니다."
  },
  {
    question: "레벨 테스트는 어떻게 진행되나요?",
    answer: "원어민 강사와 1:1 화상 테스트로 진행되며, 약 20분 정도 소요됩니다. 말하기, 듣기 능력을 종합적으로 평가하여 최적의 학습 방향을 제시해 드립니다."
  }
]

export default function FAQ() {
  return (
    <section className="relative bg-[#020817] py-48 md:py-64 -mt-32 md:-mt-48">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020817] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <FAQContent />
    </section>
  )
}
