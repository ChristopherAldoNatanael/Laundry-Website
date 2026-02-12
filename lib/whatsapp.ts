// 🔒 SECURE WhatsApp Integration Utility
import { BUSINESS_CONFIG, WHATSAPP_MESSAGE } from "./constants";
import { sanitizePhoneNumber, sanitizeWhatsAppMessage, sanitizeUrl } from "./security";

/**
 * Generate secure WhatsApp link with sanitized message
 * @param customMessage - Optional custom message to send
 * @returns WhatsApp link URL or empty string if invalid
 */
export function generateWhatsAppLink(customMessage?: string): string {
  const baseUrl = "https://wa.me";
  const phoneNumber = sanitizePhoneNumber(BUSINESS_CONFIG.whatsappNumber);

  if (!phoneNumber) {
    console.error("[WhatsApp] Phone number not configured or invalid");
    return "";
  }

  const message = customMessage ? sanitizeWhatsAppMessage(customMessage) : WHATSAPP_MESSAGE;

  const url = `${baseUrl}/${phoneNumber}?text=${message}`;

  // Validate the constructed URL
  const validatedUrl = sanitizeUrl(url);
  return validatedUrl || "";
}

/**
 * Get secure WhatsApp link for ordering specific service
 * @param serviceName - Name of the service (will be sanitized)
 * @returns WhatsApp link URL
 */
export function getServiceWhatsAppLink(serviceName: string): string {
  if (!serviceName || typeof serviceName !== "string") {
    return "";
  }

  // Sanitize service name to prevent injection
  const safeName = serviceName.substring(0, 100).trim();
  const message = `Halo 👋 Saya ingin pesan layanan "${safeName}". Bisa bantu?`;

  return generateWhatsAppLink(message);
}

/**
 * Get secure WhatsApp link for ordering specific pricing plan
 * @param planName - Name of the pricing plan (will be sanitized)
 * @returns WhatsApp link URL
 */
export function getPricingWhatsAppLink(planName: string): string {
  if (!planName || typeof planName !== "string") {
    return "";
  }

  // Sanitize plan name to prevent injection
  const safeName = planName.substring(0, 100).trim();
  const message = `Halo 👋 Saya tertarik dengan paket "${safeName}". Bisa informasi lebih detail?`;

  return generateWhatsAppLink(message);
}

/**
 * Safe link opener that validates URL before navigation
 * Prevents open redirect and clickjacking attacks
 * @param url - URL to navigate to
 */
export function openWhatsApp(url: string): void {
  if (!url || typeof url !== "string") {
    console.error("[WhatsApp] Invalid URL");
    return;
  }

  // Validate URL before opening
  const validatedUrl = sanitizeUrl(url);
  if (!validatedUrl) {
    console.error("[WhatsApp] URL failed security validation");
    return;
  }

  try {
    // Open with security flags to prevent tabnabbing
    window.open(validatedUrl, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("[WhatsApp] Error opening link:", error);
  }
}
