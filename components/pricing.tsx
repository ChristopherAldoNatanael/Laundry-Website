'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PRICING_PLANS } from '@/lib/constants'
import { getPricingWhatsAppLink, openWhatsApp } from '@/lib/whatsapp'
import { Check } from 'lucide-react'

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
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
            Paket Harga Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Transparansi harga tanpa
            biaya tersembunyi.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {PRICING_PLANS.map((plan) => {
            const whatsappLink = getPricingWhatsAppLink(plan.name)

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-primary to-secondary shadow-2xl ring-2 ring-primary/50'
                    : 'bg-white border-2 border-border shadow-lg'
                }`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      REKOMENDASI
                    </span>
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? 'text-white' : ''}`}>
                  {/* Header */}
                  <h3 className="text-2xl font-bold font-poppins mb-2">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold">
                      Rp {plan.price.toLocaleString('id-ID')}
                    </span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => openWhatsApp(whatsappLink)}
                    className={`w-full mb-8 font-semibold ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className={`text-sm font-semibold mb-4 ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                      Yang Anda Dapatkan:
                    </p>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-white' : 'text-secondary'
                          }`}
                        />
                        <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Butuh paket custom? Hubungi kami untuk penawaran khusus!
          </p>
          <a href={getPricingWhatsAppLink('Konsultasi Paket Custom')}>
            <Button variant="outline" size="lg">
              Hubungi Sales Kami
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
