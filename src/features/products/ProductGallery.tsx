'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface ProductGalleryProps {
  images?: string[]
  productName: string
  badge?: string
  badgeSlug?: string
}

export function ProductGallery({ images, productName, badge, badgeSlug }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!images || images.length === 0) return null

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full min-h-[400px]">
      {/* Thumbnails Row/Column */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto w-full md:w-24 order-2 md:order-1 scrollbar-hide py-2 px-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative flex-shrink-0 w-20 h-24 md:w-full md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${currentIndex === i
              ? 'border-brand-600 shadow-md scale-95 opacity-100'
              : 'border-transparent opacity-60 hover:opacity-100 hover:border-brand-200'
              }`}
          >
            <Image src={img} alt={`Thumbnail ${i}`} fill sizes="100px" className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Preview Image */}
      <div className="relative flex-1 rounded-[2rem] overflow-hidden order-1 md:order-2 bg-white border border-slate-100 shadow-sm">
        <div
          className="relative w-full aspect-square md:h-full rounded-2xl overflow-hidden bg-brand-50/50 cursor-zoom-in group"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-700 group-hover:scale-105 p-6"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </div>

        {/* Product Badge */}
        {badge && (
          <div className="absolute top-6 left-6 pointer-events-none">
            <Badge variant={badgeSlug === 'dragon-fruit' ? 'brand' : 'orange'} className="text-[10px] md:text-[11px] px-3 py-1 shadow-md">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Fullscreen Modal omitted for brevity, but stays same internally */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full z-10"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-[2rem] overflow-hidden bg-transparent flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`${productName} fullscreen`}
                fill
                className="object-contain drop-shadow-2xl"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
