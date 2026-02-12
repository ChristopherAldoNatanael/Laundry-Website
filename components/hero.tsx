"use client";

import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export function Hero() {
  const whatsappLink = generateWhatsAppLink();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handlePricingClick = () => {
    const element = document.querySelector("#pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      {/* Animated Background Elements - Hidden on mobile untuk prevent lag */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob hidden md:block" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 hidden md:block" />
      <div className="absolute -bottom-8 right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground leading-tight">
                Laundry <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cepat, Bersih</span>, dan Wangi
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground">
              Nikmati layanan laundry profesional dengan teknologi modern, deterjen premium, dan jaminan kepuasan 100%. Tidak perlu repot, kami yang urus!
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:shadow-xl">
                  Pesan Sekarang via WhatsApp
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={handlePricingClick} className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 bg-transparent">
                Lihat Harga
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Pelanggan Puas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Kepuasan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Layanan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="relative hidden md:block">
            <div className="relative w-full aspect-square">
              {/* Laundry Illustration */}
              <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-950 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop" alt="Laundry Modern - Layanan Cuci Professional" className="w-full h-full object-cover" loading="lazy" />
              </div>
              {/* Decorative shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
