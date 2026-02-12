'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { generateWhatsAppLink, openWhatsApp } from '@/lib/whatsapp'
import { MessageCircle } from 'lucide-react'

export function CTA() {
  const whatsappLink = generateWhatsAppLink('Saya ingin pesan laundry sekarang!')

  return (
    <section id="cta" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 pointer-events-none" />

      {/* Animated Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground leading-tight"
          >
            Siap Laundry Tanpa Ribet?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Hubungi kami sekarang dan dapatkan penawaran spesial untuk pelanggan baru. Proses
            mudah, cepat, dan terpercaya!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button
              onClick={() => openWhatsApp(whatsappLink)}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-2xl text-white font-bold text-lg px-8 py-6 md:px-12 md:py-8 group"
            >
              <MessageCircle className="mr-3 group-hover:animate-bounce" size={24} />
              Pesan Sekarang via WhatsApp
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-8 pt-8 border-t border-border/50"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-2">Respon Cepat</p>
              <p className="text-lg font-semibold text-foreground">Dalam 5 Menit</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Tersedia</p>
              <p className="text-lg font-semibold text-foreground">24/7 Setiap Hari</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Gratis Konsultasi</p>
              <p className="text-lg font-semibold text-foreground">Tanpa Komitmen</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
