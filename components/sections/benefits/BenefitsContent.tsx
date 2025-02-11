"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Zap, 
  Users, 
  Calendar, 
  BarChart4, 
  GraduationCap, 
  MessageCircle 
} from "lucide-react"

const benefits = [
  {
    title: "맞춤형 학습",
    description: "학습자의 수준과 목표에 맞는 1:1 맞춤형 커리큘럼을 제공합니다.",
    icon: Users
  },
  {
    title: "유연한 스케줄",
    description: "원하는 시간에 언제든 수업을 예약하고 조정할 수 있습니다.",
    icon: Calendar
  },
  // ... 나머지 benefits 배열
]

export default function BenefitsContent() {
  return (
    <div className="container relative z-10 px-4">
      <div className="text-center mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          왜 WillAcademy인가요?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          최고의 강사진과 함께하는 효과적인 영어 학습
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-blue-950/50 border-blue-900/50 backdrop-blur-sm">
              <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 