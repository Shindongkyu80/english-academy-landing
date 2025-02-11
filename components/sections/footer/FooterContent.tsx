"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram
  },
  {
    name: "Youtube",
    href: "https://youtube.com",
    icon: Youtube
  }
]

export default function FooterContent() {
  return (
    <div className="container relative z-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-2"
        >
          <h2 className="text-xl font-bold text-white mb-4">WillAcademy</h2>
          <p className="text-gray-400 mb-6">
            원어민과 함께하는 1:1 맞춤형 화상 영어 수업.<br />
            비즈니스와 면접에 특화된 실전 영어 회화를 배워보세요.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">연락처</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>이메일: contact@willacademy.com</li>
            <li>전화: 02-1234-5678</li>
            <li>운영시간: 09:00 - 22:00</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">바로가기</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                수업 특징
              </Link>
            </li>
            <li>
              <Link href="#teachers" className="text-gray-400 hover:text-white transition-colors">
                강사진 소개
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                자주 묻는 질문
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 pt-8 border-t border-blue-900/50 text-center text-sm text-gray-400"
      >
        © 2024 WillAcademy. All rights reserved.
      </motion.div>
    </div>
  )
} 