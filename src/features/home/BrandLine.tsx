'use client'
import { motion } from 'framer-motion'

export function BrandLine() {
  const brandName = "KOTHECHE • "

  return (
    <div className="bg-white py-3 overflow-hidden whitespace-nowrap border-b border-gray-100">
      <div className="flex animate-marquee-rev min-w-max">
        {/* BLOCK 1 */}
        <div className="flex gap-16">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-900 shrink-0"
            >
              {brandName}
            </span>
          ))}
        </div>

        {/* BLOCK 2 (duplicate để seamless) */}
        <div className="flex gap-16 pl-16">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-gray-900 shrink-0"
            >
              {brandName}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}