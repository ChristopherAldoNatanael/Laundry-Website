/**
 * Input Sanitization Utilities
 * Untuk mencegah XSS dan injection attacks
 */

/**
 * Sanitize string untuk menghindari XSS
 * @param input - String yang akan disanitasi
 * @returns Sanitized string
 */
export function sanitizeString(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  // Escape HTML special characters
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return input.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Validate dan sanitize URL
 * @param url - URL yang akan divalidasi
 * @returns Valid URL atau empty string
 */
export function sanitizeURL(url: string): string {
  if (!url || typeof url !== "string") {
    return "";
  }

  try {
    // Only allow http(s) protocol
    if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("/")) {
      return "";
    }

    // Basic validation
    new URL(url);
    return url;
  } catch {
    return "";
  }
}

/**
 * Sanitize phone number untuk WhatsApp
 * @param phone - Phone number
 * @returns Sanitized phone number
 */
export function sanitizePhoneNumber(phone: string): string {
  if (!phone || typeof phone !== "string") {
    return "";
  }

  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Validate length (typically 10-15 digits for international)
  if (cleaned.length < 10 || cleaned.length > 15) {
    return "";
  }

  return cleaned;
}

/**
 * Validate email format
 * @param email - Email address
 * @returns True if valid email
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncate string dengan ellipsis
 * @param str - String to truncate
 * @param length - Max length
 * @returns Truncated string
 */
export function truncateString(str: string, length: number = 100): string {
  if (!str || typeof str !== "string") {
    return "";
  }

  if (str.length <= length) {
    return str;
  }

  return str.substring(0, length).trim() + "...";
}

/**
 * Safe JSON parse
 * @param json - JSON string
 * @param fallback - Fallback value if parse fails
 * @returns Parsed object or fallback
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

/**
 * Sanitize input for WhatsApp message
 */
export function sanitizeWhatsAppMessage(message: string): string {
  if (typeof message !== "string") return "";

  return encodeURIComponent(
    message
      .replace(/[<>]/g, "") // Remove HTML-like tags
      .trim()
      .slice(0, 500) // Limit message length
  );
}

/**
 * Rate limiting check (simple in-memory implementation)
 */
const requestCounts = new Map<string, { count: number; timestamp: number }>();

export function checkRateLimit(identifier: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (!record || now - record.timestamp > windowMs) {
    requestCounts.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: string): string {
  if (typeof html !== "string") return "";

  // Remove all HTML tags
  return html.replace(/<[^>]*>/g, "").trim();
}
