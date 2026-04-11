'use client'
import { motion } from 'framer-motion'

export function BrandLine() {
  const brandName = "KOTHECHE • "

  return (
    <div className="bg-white py-3 overflow-hidden whitespace-nowrap border-b border-gray-100">
      <motion.div
        className="flex"
        animate={{ x: ['-50%', '0%'] }} // 👉 chạy sang phải
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {/* BLOCK 1 */}
        <div className="flex gap-16">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-900"
            >
              {brandName}
            </span>
          ))}
        </div>

        {/* BLOCK 2 (duplicate để seamless) */}
        <div className="flex gap-16">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-900"
            >
              {brandName}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}