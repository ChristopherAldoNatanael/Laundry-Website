// WhatsApp Integration Utility
import { BUSINESS_CONFIG, WHATSAPP_MESSAGE } from './constants'

/**
 * Generate WhatsApp link with optional custom message
 * @param customMessage - Optional custom message to send
 * @returns WhatsApp link URL
 */
export function generateWhatsAppLink(customMessage?: string): string {
  const baseUrl = 'https://wa.me'
  const phoneNumber = BUSINESS_CONFIG.whatsappNumber

  if (!phoneNumber) {
    console.error('[WhatsApp] Phone number not configured')
    return '#'
  }

  const message = customMessage ? encodeURIComponent(customMessage) : WHATSAPP_MESSAGE
  return `${baseUrl}/${phoneNumber}?text=${message}`
}

/**
 * Get WhatsApp link for ordering specific service
 * @param serviceName - Name of the service
 * @returns WhatsApp link URL
 */
export function getServiceWhatsAppLink(serviceName: string): string {
  const message = encodeURIComponent(
    `Halo 👋 Saya ingin pesan layanan "${serviceName}". Bisa bantu?`
  )
  const phoneNumber = BUSINESS_CONFIG.whatsappNumber
  return `https://wa.me/${phoneNumber}?text=${message}`
}

/**
 * Get WhatsApp link for ordering specific pricing plan
 * @param planName - Name of the pricing plan
 * @returns WhatsApp link URL
 */
export function getPricingWhatsAppLink(planName: string): string {
  const message = encodeURIComponent(
    `Halo 👋 Saya tertarik dengan paket "${planName}". Bisa informasi lebih detail?`
  )
  const phoneNumber = BUSINESS_CONFIG.whatsappNumber
  return `https://wa.me/${phoneNumber}?text=${message}`
}

/**
 * Safe link opener that validates URL before navigation
 * @param url - URL to navigate to
 */
export function openWhatsApp(url: string): void {
  if (!url || typeof url !== 'string') {
    console.error('[WhatsApp] Invalid URL')
    return
  }

  try {
    window.open(url, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('[WhatsApp] Error opening link:', error)
  }
}
