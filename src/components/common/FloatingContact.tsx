'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  ArrowUp,
  X,
  MessageCircle
} from 'lucide-react'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const inHero = scrollY < 400
      setIsVisible(!inHero)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 md:bottom-10 md:right-8 z-[99] w-10 h-10 md:w-12 md:h-12 bg-brand-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-700 md:hover:-translate-y-2 transition-all duration-300 border border-white/20"
          title="Cuộn lên đầu trang"
        >
          <ArrowUp size={20} className="md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
