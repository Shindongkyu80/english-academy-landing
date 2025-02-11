"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const teachers = [
  {
    name: "Sarah Johnson",
    role: "비즈니스 영어 전문",
    image: "/teachers/teacher1.jpg",
    description: "10년 이상의 비즈니스 영어 교육 경력을 보유한 전문 강사입니다."
  },
  {
    name: "Michael Brown",
    role: "회화 전문",
    image: "/teachers/teacher2.jpg",
    description: "자연스러운 발음과 회화 교육에 특화된 원어민 강사입니다."
  },
  {
    name: "Emma Wilson",
    role: "시험 대비 전문",
    image: "/teachers/teacher3.jpg",
    description: "TOEIC, IELTS 등 각종 영어 시험 대비를 도와드립니다."
  }
]

export default function TeachersContent() {
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
          전문 강사진 소개
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          풍부한 경험을 가진 원어민 강사진이 함께합니다
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-blue-950/50 border-blue-900/50 backdrop-blur-sm">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{teacher.name}</h3>
              <p className="text-blue-400 mb-2">{teacher.role}</p>
              <p className="text-gray-400">{teacher.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 