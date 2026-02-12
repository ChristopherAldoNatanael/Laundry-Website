'use client'

import { motion } from 'framer-motion'
import { BUSINESS_CONFIG } from '@/lib/constants'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

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

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-foreground/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 font-poppins font-bold text-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LM</span>
              </div>
              <span className="text-foreground">Laundry Modern</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Layanan laundry profesional dengan teknologi modern untuk kepuasan Anda.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {BUSINESS_CONFIG.instagram && (
                <a
                  href={BUSINESS_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-primary" />
                </a>
              )}
              {BUSINESS_CONFIG.facebook && (
                <a
                  href={BUSINESS_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-primary" />
                </a>
              )}
              {BUSINESS_CONFIG.tiktok && (
                <a
                  href={BUSINESS_CONFIG.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <Send size={20} className="text-primary" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-4 font-poppins">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#home')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Beranda
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#services')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Layanan
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Harga
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#testimonials')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Testimoni
              </a>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-4 font-poppins">Kontak</h3>
            <div className="space-y-4">
              {BUSINESS_CONFIG.businessAddress && (
                <div className="flex gap-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{BUSINESS_CONFIG.businessAddress}</p>
                </div>
              )}
              {BUSINESS_CONFIG.businessPhone && (
                <div className="flex gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${BUSINESS_CONFIG.businessPhone}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {BUSINESS_CONFIG.businessPhone}
                  </a>
                </div>
              )}
              {BUSINESS_CONFIG.businessEmail && (
                <div className="flex gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${BUSINESS_CONFIG.businessEmail}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {BUSINESS_CONFIG.businessEmail}
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-4 font-poppins">Jam Operasional</h3>
            <div className="flex gap-3">
              <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {BUSINESS_CONFIG.operationHours || 'Senin - Minggu: 07:00 - 20:00 WIB'}
              </p>
            </div>
            <Button
              size="sm"
              className="mt-4 bg-gradient-to-r from-primary to-secondary w-full"
              onClick={() => {
                const phone = BUSINESS_CONFIG.whatsappNumber
                window.open(`https://wa.me/${phone}?text=Halo`, '_blank')
              }}
            >
              Chat dengan Kami
            </Button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 py-8">
          {/* Bottom Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6"
          >
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm border-t border-border/30 pt-6"
          >
            <p>
              &copy; {currentYear} Laundry Modern. Semua hak cipta dilindungi. Dibuat dengan care
              untuk Anda.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
