"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroContent() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container relative z-20 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          당신의 영어 실력을
          <br />
          <span className="text-blue-500">다음 레벨</span>로
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          체계적인 커리큘럼과 전문 강사진이 함께합니다.
          <br />
          지금 바로 무료 레벨 테스트를 시작하세요.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#booking" onClick={scrollToBooking}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-500 text-lg"
            >
              무료 레벨 테스트 신청하기
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 