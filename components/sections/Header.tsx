"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* 글래스모피즘 효과가 있는 배경 */}
      <div className="absolute inset-0 backdrop-blur-md bg-[#020817]/50" />

      {/* 헤더 콘텐츠 */}
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="WillAcademy"
              width={172}
              height={39}
              className="h-[30px] md:h-[39px] w-auto"
              priority
            />
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#benefits" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              특징
            </Link>
            <Link 
              href="#teachers" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              강사진
            </Link>
            <Link 
              href="#courses" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              수업
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity" />
              <button 
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Link href="#booking">
                  무료 레벨 테스트
                </Link>
              </button>
            </div>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute inset-x-0 top-full bg-[#020817]/95 backdrop-blur-md border-t border-gray-800"
            >
              <nav className="flex flex-col p-4">
                <Link 
                  href="#benefits" 
                  className="py-4 text-gray-400 hover:text-white transition-colors text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  특징
                </Link>
                <Link 
                  href="#teachers" 
                  className="py-4 text-gray-400 hover:text-white transition-colors text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  강사진
                </Link>
                <Link 
                  href="#courses" 
                  className="py-4 text-gray-400 hover:text-white transition-colors text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  수업
                </Link>
                <Link 
                  href="#faq" 
                  className="py-4 text-gray-400 hover:text-white transition-colors text-center text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="pt-4 pb-2">
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <Link href="#booking">
                      무료 레벨 테스트
                    </Link>
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 