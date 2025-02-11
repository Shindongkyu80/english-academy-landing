"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "레벨 테스트 예약",
    description: "무료 레벨 테스트를 통해 현재 실력을 진단하고 학습 목표를 설정합니다."
  },
  {
    number: 2,
    title: "무료 체험 수업",
    description: "원어민 강사와 1:1 체험 수업을 통해 맞춤형 학습 방법을 경험해보세요."
  },
  {
    number: 3,
    title: "커리큘럼 설계",
    description: "개인의 목표와 수준에 맞는 최적화된 학습 커리큘럼을 제공합니다."
  },
  {
    number: 4,
    title: "정규 수업 시작",
    description: "원하는 시간에 원어민과 함께 1:1 맞춤형 화상 영어 수업을 시작합니다."
  }
]

export default function HowItWorks() {
  return (
    <section className="relative bg-[#020817] py-24 md:py-32 -mt-48 md:-mt-64">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            어떻게 시작하나요?
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            4단계의 간단한 과정으로 나에게 맞는 영어 학습을 시작해보세요.
          </p>
        </motion.div>

        {/* 스텝 리스트 */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 md:mb-12 last:mb-0"
            >
              {/* 연결선 */}
              {index !== steps.length - 1 && (
                <div className="absolute left-5 sm:left-6 top-16 bottom-0 w-px bg-blue-600/20 -z-10" />
              )}

              {/* 숫자 뱃지 */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-semibold text-lg flex-shrink-0">
                {step.number}
              </div>

              {/* 컨텐츠 */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
