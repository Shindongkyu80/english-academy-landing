"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroContent from "./hero/HeroContent"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">
      {/* 비메오 배경 영상 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1053392892?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          />
        </div>
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-[#020817]/70 backdrop-blur-sm" />
      </div>

      {/* 컨텐츠 */}
      <HeroContent />
    </section>
  )
}

