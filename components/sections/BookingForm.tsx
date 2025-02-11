"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

// Google Apps Script 웹 앱 URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzpaxAxdM6cgDdbs1hRWPqJ2bp7RYMEzqByquFyuUXzsGlZp-5qVrR2VcU-Y5yTR-aZ/exec";

// 팝업 컴포넌트
function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999]">
      {/* 배경 오버레이 */}
      <div 
        className="fixed inset-0 bg-black/70" 
        onClick={onClose}
      />
      
      {/* 팝업 내용 */}
      <div className="relative z-[100000] bg-white rounded-xl p-8 shadow-2xl w-[90%] max-w-sm mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <svg 
              className="h-6 w-6 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            제출되었습니다
          </h3>
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setShowPopup(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      preferredTime: formData.get('preferredTime'),
      message: formData.get('message')
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (form) {
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="relative bg-[#020817] py-48 md:py-64 -mt-32 md:-mt-48">
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
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            무료 레벨 테스트 신청
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            지금 바로 무료 레벨 테스트를 신청하고
            <br className="hidden sm:block" />
            나에게 맞는 맞춤형 학습을 시작하세요
          </p>
        </motion.div>

        {/* 폼 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card className="relative overflow-hidden">
            {/* 카드 배경 효과 */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg md:rounded-xl blur opacity-20" />
            
            {/* 폼 컨텐츠 */}
            <div className="relative p-4 md:p-6 bg-blue-950/80 border border-blue-800/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      이름
                    </label>
                    <Input 
                      name="name"
                      type="text"
                      required
                      placeholder="홍길동"
                      className="bg-blue-900/50 border-blue-700/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      연락처
                    </label>
                    <Input 
                      name="phone"
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      className="bg-blue-900/50 border-blue-700/50 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    이메일
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="bg-blue-900/50 border-blue-700/50 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    희망 수업 시간대
                  </label>
                  <Input 
                    name="preferredTime"
                    type="text"
                    required
                    placeholder="예) 평일 저녁, 주말 오전 등"
                    className="bg-blue-900/50 border-blue-700/50 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    문의사항
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="문의하실 내용을 입력해주세요."
                    className="bg-blue-900/50 border-blue-700/50 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '제출 중...' : '무료 레벨 테스트 신청하기'}
                </button>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* 팝업 - 클라이언트 사이드에서만 렌더링 */}
      {isMounted && showPopup && (
        <Popup onClose={() => setShowPopup(false)} />
      )}
    </section>
  )
}
