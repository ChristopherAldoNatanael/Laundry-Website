'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { PROMO_BANNER } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(PROMO_BANNER.active)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`${PROMO_BANNER.bgColor} ${PROMO_BANNER.textColor} py-3 px-4 relative z-50`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <p className="text-sm md:text-base font-medium animate-pulse">
              {PROMO_BANNER.message}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
