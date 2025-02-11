"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "수업은 어떻게 진행되나요?",
    answer: "화상 회의 플랫폼을 통해 1:1로 진행됩니다. 원어민 강사와 실시간으로 대화하며 학습합니다."
  },
  {
    question: "수업 시간은 어떻게 되나요?",
    answer: "평일 오전 9시부터 오후 10시까지 원하시는 시간에 예약이 가능합니다. 주말 수업도 가능합니다."
  },
  {
    question: "수업 교재는 어떤 것을 사용하나요?",
    answer: "학습자의 수준과 목표에 맞는 맞춤형 교재를 제공합니다. 비즈니스 영어, 일상 회화 등 목적에 따라 다양한 교재를 활용합니다."
  },
  {
    question: "레벨 테스트는 어떻게 진행되나요?",
    answer: "무료 레벨 테스트는 원어민 강사와 1:1로 약 20분간 진행됩니다. 간단한 대화를 통해 현재 실력을 진단하고 학습 방향을 제시해드립니다."
  },
  {
    question: "수업 예약과 취소는 어떻게 하나요?",
    answer: "웹사이트나 앱을 통해 원하시는 시간에 자유롭게 예약하실 수 있습니다. 수업 24시간 전까지 취소가 가능합니다."
  }
]

export default function FAQContent() {
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
          자주 묻는 질문
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          궁금하신 점을 확인해보세요
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  )
} 