"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  BookOpen, 
  MessageCircle, 
  Video, 
  FileText, 
  BarChart, 
  Headphones 
} from "lucide-react"

const features = [
  {
    title: "실시간 화상 수업",
    description: "원어민 강사와 1:1 실시간 화상 수업으로 실전 영어 회화 능력을 향상시킵니다.",
    icon: Video
  },
  {
    title: "비즈니스 영어 특화",
    description: "업무에서 자주 사용되는 표현과 상황별 대화를 집중적으로 학습합니다.",
    icon: MessageCircle
  },
  {
    title: "맞춤형 교재",
    description: "학습자의 수준과 목표에 맞는 맞춤형 교재와 학습 자료를 제공합니다.",
    icon: BookOpen
  },
  {
    title: "진도 관리",
    description: "체계적인 진도 관리와 피드백으로 꾸준한 실력 향상을 도와드립니다.",
    icon: BarChart
  },
  {
    title: "발음 교정",
    description: "원어민의 정확한 발음 교정으로 자연스러운 영어 발음을 익힙니다.",
    icon: Headphones
  },
  {
    title: "학습 자료 제공",
    description: "수업 후에도 복습할 수 있는 다양한 학습 자료를 제공합니다.",
    icon: FileText
  }
]

export default function CourseFeaturesContent() {
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
          수업 특징
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          효과적인 영어 학습을 위한 다양한 기능을 제공합니다
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-blue-950/50 border-blue-900/50 backdrop-blur-sm">
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 