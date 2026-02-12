'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WHY_US } from '@/lib/constants'
import {
  Zap,
  Cpu,
  Leaf,
  CheckCircle,
  Navigation,
  Clock,
  Star,
} from 'lucide-react'

export function WhyUs() {
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
      Zap,
      Cpu,
      Leaf,
      CheckCircle,
      Navigation,
      Clock,
    }
    const Icon = iconMap[iconName] || Star
    return Icon
  }

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
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
            Kenapa Pilih Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami memberikan yang terbaik dengan komitmen pada kepuasan pelanggan dan standar
            kualitas tertinggi.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {WHY_US.map((feature, index) => {
            const Icon = getIcon(feature.icon)

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-white border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-300">
                  <Icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Bottom accent */}
                <div className="mt-6 h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-12 transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary font-poppins">500+</p>
              <p className="text-muted-foreground mt-2">Pelanggan Aktif</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary font-poppins">2K+</p>
              <p className="text-muted-foreground mt-2">Transaksi Bulanan</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent font-poppins">98%</p>
              <p className="text-muted-foreground mt-2">Rating Kepuasan</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-poppins">5+</p>
              <p className="text-muted-foreground mt-2">Tahun Pengalaman</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
