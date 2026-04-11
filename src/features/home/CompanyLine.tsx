'use client'
import { motion } from 'framer-motion'

export function CompanyLine() {
  const companyName = "CÔNG TY TNHH VIỆT NAM CƯỜNG THỊNH • "

  return (
    <div className="bg-[#8B4513] text-white py-3 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center min-w-full"
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
            {companyName}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
