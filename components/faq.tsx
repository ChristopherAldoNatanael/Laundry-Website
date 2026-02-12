"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQS } from "@/lib/constants";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="text-lg text-muted-foreground">Temukan jawaban untuk pertanyaan umum tentang layanan kami</p>
        </motion.div>

        {/* FAQ List */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors">
                <span className="font-semibold text-foreground text-base md:text-lg">{faq.question}</span>
                <div className="flex-shrink-0">{openIndex === index ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-muted-foreground" />}</div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-12 text-center p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-lg text-foreground mb-4">Masih punya pertanyaan lain?</p>
          <p className="text-muted-foreground mb-6">Tim customer service kami siap membantu Anda 24/7</p>
          <a
            href={`https://wa.me/${FAQS[0] ? "6281234567890" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Hubungi Kami via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
