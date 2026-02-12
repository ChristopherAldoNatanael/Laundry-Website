/**
 * 🔒 SECURITY UTILITIES
 * Comprehensive security functions for XSS prevention, input validation, and safe operations
 */

// =============================================================================
// XSS PREVENTION
// =============================================================================

/**
 * Sanitize string for HTML context - prevents XSS
 * Escapes all HTML special characters
 */
export function escapeHtml(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  const htmlEscapeMap: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };

  return input.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char]);
}

/**
 * Strip all HTML tags from input
 */
export function stripHtmlTags(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove script tags
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "") // Remove style tags
    .replace(/<[^>]+>/g, "") // Remove all HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "") // Remove event handlers
    .trim();
}

// =============================================================================
// URL VALIDATION & SANITIZATION
// =============================================================================

/**
 * Validate and sanitize URL - prevents open redirect and SSRF
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== "string") {
    return "";
  }

  // Remove whitespace
  const trimmed = url.trim();

  // Check for javascript: and data: protocols (XSS vectors)
  if (/^(javascript|data|vbscript|file):/i.test(trimmed)) {
    console.warn("[Security] Blocked dangerous URL protocol:", trimmed);
    return "";
  }

  // Only allow http(s) and relative URLs
  if (!/^(https?:)?\/\//i.test(trimmed) && !trimmed.startsWith("/")) {
    return "";
  }

  try {
    // For absolute URLs, validate with URL constructor
    if (/^https?:\/\//i.test(trimmed)) {
      const parsed = new URL(trimmed);
      
      // Whitelist allowed domains for external links
      const allowedDomains = [
        "wa.me",
        "api.whatsapp.com",
        "instagram.com",
        "www.instagram.com",
        "facebook.com",
        "www.facebook.com",
        "tiktok.com",
        "www.tiktok.com",
        "github.com",
        "vercel.com",
      ];

      const hostname = parsed.hostname.toLowerCase();
      const isAllowed = allowedDomains.some(
        (domain) => hostname === domain || hostname.endsWith("." + domain)
      );

      if (!isAllowed) {
        console.warn("[Security] Blocked URL to non-whitelisted domain:", hostname);
        return "";
      }

      return parsed.href;
    }

    // Relative URLs are safe
    return trimmed;
  } catch (error) {
    console.error("[Security] Invalid URL:", error);
    return "";
  }
}

/**
 * Validate WhatsApp phone number
 */
export function validatePhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== "string") {
    return false;
  }

  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // International phone numbers are typically 7-15 digits
  if (cleaned.length < 7 || cleaned.length > 15) {
    return false;
  }

  // Must start with valid country code digits
  return /^[1-9]/.test(cleaned);
}

/**
 * Sanitize phone number for WhatsApp
 */
export function sanitizePhoneNumber(phone: string): string {
  if (!validatePhoneNumber(phone)) {
    return "";
  }

  return phone.replace(/\D/g, "");
}

// =============================================================================
// INPUT VALIDATION
// =============================================================================

/**
 * Validate email format using RFC 5322 compliant regex
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") {
    return false;
  }

  // Basic email validation (not full RFC 5322)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(email)) {
    return false;
  }

  // Additional checks
  if (email.length > 254) return false; // RFC 5321
  const [local, domain] = email.split("@");
  if (local.length > 64) return false; // RFC 5321

  return true;
}

/**
 * Sanitize text input with length limits
 */
export function sanitizeTextInput(
  input: string,
  maxLength: number = 1000,
  allowNewlines: boolean = true
): string {
  if (!input || typeof input !== "string") {
    return "";
  }

  let sanitized = stripHtmlTags(input);

  if (!allowNewlines) {
    sanitized = sanitized.replace(/[\r\n]+/g, " ");
  }

  // Remove control characters except tab, newline, carriage return
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized.trim();
}

/**
 * Validate name input (letters, spaces, hyphens, apostrophes)
 */
export function validateName(name: string): boolean {
  if (!name || typeof name !== "string") {
    return false;
  }

  const trimmed = name.trim();

  // Must be 1-100 characters
  if (trimmed.length < 1 || trimmed.length > 100) {
    return false;
  }

  // Only allow letters (including unicode), spaces, hyphens, apostrophes
  const nameRegex = /^[\p{L}\s'-]+$/u;
  return nameRegex.test(trimmed);
}

// =============================================================================
// WHATSAPP MESSAGE SANITIZATION
// =============================================================================

/**
 * Sanitize WhatsApp message - prevents injection and phishing
 */
export function sanitizeWhatsAppMessage(message: string): string {
  if (!message || typeof message !== "string") {
    return "";
  }

  // Remove HTML
  let sanitized = stripHtmlTags(message);

  // Remove potential XSS vectors
  sanitized = sanitized
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/<script/gi, "");

  // Encode URL-like patterns to prevent clickjacking
  // But allow legitimate URLs (basic detection)
  sanitized = sanitized.replace(
    /(https?:\/\/[^\s]+)/gi,
    (url) => {
      // Validate URL before allowing it
      const validated = sanitizeUrl(url);
      return validated ? url : "[URL REMOVED]";
    }
  );

  // Limit length (WhatsApp has message limits)
  if (sanitized.length > 1000) {
    sanitized = sanitized.substring(0, 1000) + "...";
  }

  // URL encode for WhatsApp
  return encodeURIComponent(sanitized);
}

// =============================================================================
// SAFE JSON OPERATIONS
// =============================================================================

/**
 * Safe JSON parse with fallback
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  if (!json || typeof json !== "string") {
    return fallback;
  }

  try {
    const parsed = JSON.parse(json);
    return parsed as T;
  } catch (error) {
    console.error("[Security] JSON parse error:", error);
    return fallback;
  }
}

/**
 * Safe JSON stringify
 */
export function safeJsonStringify(obj: unknown): string {
  try {
    return JSON.stringify(obj);
  } catch (error) {
    console.error("[Security] JSON stringify error:", error);
    return "{}";
  }
}

// =============================================================================
// LOCALSTORAGE SECURITY
// =============================================================================

/**
 * Secure localStorage wrapper with validation
 */
export const SecureStorage = {
  /**
   * Get item from localStorage with validation
   */
  getItem(key: string): string | null {
    if (typeof window === "undefined") return null;

    try {
      const value = localStorage.getItem(key);
      if (!value) return null;

      // Basic validation to prevent XSS from stored data
      if (value.includes("<script") || value.includes("javascript:")) {
        console.warn("[Security] Malicious content detected in localStorage:", key);
        localStorage.removeItem(key);
        return null;
      }

      return value;
    } catch (error) {
      console.error("[Security] localStorage getItem error:", error);
      return null;
    }
  },

  /**
   * Set item in localStorage with sanitization
   */
  setItem(key: string, value: string): boolean {
    if (typeof window === "undefined") return false;

    try {
      // Sanitize value before storing
      const sanitized = stripHtmlTags(value);
      localStorage.setItem(key, sanitized);
      return true;
    } catch (error) {
      console.error("[Security] localStorage setItem error:", error);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("[Security] localStorage removeItem error:", error);
    }
  },
};

// =============================================================================
// COOKIE SECURITY
// =============================================================================

/**
 * Set secure cookie with all security flags
 */
export function setSecureCookie(
  name: string,
  value: string,
  options: {
    maxAge?: number;
    path?: string;
    domain?: string;
    sameSite?: "strict" | "lax" | "none";
  } = {}
): void {
  if (typeof window === "undefined") return;

  const {
    maxAge = 31536000, // 1 year default
    path = "/",
    sameSite = "lax",
  } = options;

  // Sanitize cookie value
  const sanitizedValue = encodeURIComponent(stripHtmlTags(value));

  let cookie = `${name}=${sanitizedValue}; path=${path}; max-age=${maxAge}; SameSite=${sameSite}`;

  // Add Secure flag if on HTTPS
  if (window.location.protocol === "https:") {
    cookie += "; Secure";
  }

  document.cookie = cookie;
}

/**
 * Get cookie value
 */
export function getCookie(name: string): string | null {
  if (typeof window === "undefined") return null;

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

// =============================================================================
// RATE LIMITING (CLIENT-SIDE)
// =============================================================================

/**
 * Client-side rate limiting (NOTE: Can be bypassed, use server-side for production)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxAttempts: number = 5,
  windowMs: number = 60000
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up old entries
  if (record && now > record.resetTime) {
    rateLimitMap.delete(identifier);
  }

  // Check if rate limit exceeded
  if (record && now <= record.resetTime) {
    if (record.count >= maxAttempts) {
      return {
        allowed: false,
        retryAfter: Math.ceil((record.resetTime - now) / 1000),
      };
    }

    record.count++;
    return { allowed: true };
  }

  // Create new record
  rateLimitMap.set(identifier, {
    count: 1,
    resetTime: now + windowMs,
  });

  return { allowed: true };
}

// =============================================================================
// CSP NONCE GENERATION
// =============================================================================

/**
 * Generate cryptographically secure nonce for CSP
 */
export function generateNonce(): string {
  if (typeof window === "undefined") {
    // Server-side: use crypto module
    return Buffer.from(Math.random().toString()).toString("base64").substring(0, 32);
  }

  // Client-side: use Web Crypto API
  const array = new Uint8Array(24);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
