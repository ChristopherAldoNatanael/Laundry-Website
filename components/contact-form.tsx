"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Phone, MessageSquare, Send, MapPin, Clock, AlertTriangle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import {
  sanitizeTextInput,
  sanitizeWhatsAppMessage,
  validateEmail,
  validateName,
  validatePhoneNumber,
  sanitizePhoneNumber,
  checkRateLimit,
} from "@/lib/security";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    const sanitizedName = sanitizeTextInput(formData.name, 100, false);
    if (!sanitizedName) {
      newErrors.name = "Nama wajib diisi";
    } else if (!validateName(sanitizedName)) {
      newErrors.name = "Nama hanya boleh berisi huruf, spasi, dan tanda hubung";
    }

    // Validate phone
    const sanitizedPhone = sanitizePhoneNumber(formData.phone);
    if (!sanitizedPhone) {
      newErrors.phone = "Nomor telepon tidak valid";
    } else if (!validatePhoneNumber(sanitizedPhone)) {
      newErrors.phone = "Format nomor telepon salah (7-15 digit)";
    }

    // Validate email
    const sanitizedEmail = sanitizeTextInput(formData.email, 254, false);
    if (!sanitizedEmail) {
      newErrors.email = "Email wajib diisi";
    } else if (!validateEmail(sanitizedEmail)) {
      newErrors.email = "Format email tidak valid";
    }

    // Validate message
    const sanitizedMessage = sanitizeTextInput(formData.message, 1000, true);
    if (!sanitizedMessage) {
      newErrors.message = "Pesan wajib diisi";
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validasi Gagal",
        description: "Mohon perbaiki kesalahan pada form",
        variant: "destructive",
      });
      return;
    }

    // Rate limiting check (client-side only)
    const rateLimitCheck = checkRateLimit("contact-form", 3, 60000);
    if (!rateLimitCheck.allowed) {
      toast({
        title: "Terlalu Banyak Percobaan",
        description: `Mohon tunggu ${rateLimitCheck.retryAfter} detik sebelum mengirim lagi`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Sanitize all inputs
    const safeName = sanitizeTextInput(formData.name, 100, false);
    const safePhone = sanitizePhoneNumber(formData.phone);
    const safeEmail = sanitizeTextInput(formData.email, 254, false);
    const safeMessage = sanitizeTextInput(formData.message, 1000, true);

    // Build WhatsApp message with sanitized data
    const messageText = `Halo! Saya ingin bertanya:\n\nNama: ${safeName}\nPhone: ${safePhone}\nEmail: ${safeEmail}\n\nPesan:\n${safeMessage}`;
    
    // Sanitize for WhatsApp URL
    const encodedMessage = sanitizeWhatsAppMessage(messageText);

    // Validate WhatsApp number
    const safeWhatsAppNumber = sanitizePhoneNumber(BUSINESS_CONFIG.whatsappNumber);
    if (!safeWhatsAppNumber) {
      toast({
        title: "Error Konfigurasi",
        description: "Nomor WhatsApp tidak valid. Hubungi administrator.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Open WhatsApp with secure parameters
    const whatsappUrl = `https://wa.me/${safeWhatsAppNumber}?text=${encodedMessage}`;
    
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      toast({
        title: "Pesan Terkirim!",
        description: "Kami akan segera menghubungi Anda melalui WhatsApp.",
      });

      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal membuka WhatsApp. Mohon coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Basic client-side sanitization on input
    let sanitizedValue = value;
    
    if (name === "name") {
      sanitizedValue = sanitizeTextInput(value, 100, false);
    } else if (name === "email") {
      sanitizedValue = sanitizeTextInput(value, 254, false);
    } else if (name === "message") {
      sanitizedValue = sanitizeTextInput(value, 1000, true);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">Hubungi Kami</h2>
          <p className="text-lg text-muted-foreground">Ada pertanyaan? Kami siap membantu Anda 24/7</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                    <p className="text-muted-foreground">{BUSINESS_CONFIG.businessAddress}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telepon</h4>
                    <a href={`tel:${BUSINESS_CONFIG.businessPhone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {BUSINESS_CONFIG.businessPhone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href={`mailto:${BUSINESS_CONFIG.businessEmail}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {BUSINESS_CONFIG.businessEmail}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Jam Operasional</h4>
                    <p className="text-muted-foreground">{BUSINESS_CONFIG.operationHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                {BUSINESS_CONFIG.instagram && (
                  <a
                    href={BUSINESS_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {BUSINESS_CONFIG.facebook && (
                  <a
                    href={BUSINESS_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/40 hover:to-secondary/40 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-lg border border-border">              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                    placeholder="Masukkan nama Anda"
                    maxLength={100}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertTriangle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                    placeholder="08xxxxxxxxxx"
                    maxLength={15}
                    pattern="[0-9]*"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertTriangle size={14} />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="email@example.com"
                    maxLength={254}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertTriangle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`pl-10 min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p id="message-error" className="text-sm text-red-500 flex items-center gap-1">
                      <AlertTriangle size={14} />
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/1000 karakter
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg" size="lg">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
