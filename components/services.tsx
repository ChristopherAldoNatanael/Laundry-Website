'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { getServiceWhatsAppLink, openWhatsApp } from '@/lib/whatsapp'
import {
  Droplets,
  Wind,
  Flame,
  Zap,
  Truck,
  Sparkles,
  ShoppingCart,
} from 'lucide-react'

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  // Type-safe icon resolver
  function getIcon(iconName: string) {
    const iconMap: Record<string, React.ComponentType<{ size: number; className: string }>> = {
      Droplets,
      Wind,
      Flame,
      Zap,
      Truck,
      Sparkles,
    }
    const Icon = iconMap[iconName] || ShoppingCart
    return Icon
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan Anda. Semua dengan kualitas premium dan
            harga terjangkau.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon)
            const whatsappLink = getServiceWhatsAppLink(service.title)

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 cursor-pointer"
                onClick={() => openWhatsApp(whatsappLink)}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* CTA Text */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Pesan Sekarang</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
