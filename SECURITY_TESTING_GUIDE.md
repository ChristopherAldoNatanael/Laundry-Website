# 🧪 SECURITY TESTING GUIDE

## Manual Security Testing Checklist

### 🔴 XSS (Cross-Site Scripting) Tests

#### Test 1: Basic Script Injection
**Target:** Contact Form (all fields)

```javascript
// Test Payloads:
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg/onload=alert('XSS')>
javascript:alert('XSS')
<iframe src="javascript:alert('XSS')">
```

**Expected Result:** ✅ Input sanitized, HTML stripped

**How to Test:**
1. Open contact form
2. Enter payload in Name field
3. Submit form
4. Verify: No alert box appears
5. Check WhatsApp message: Payload should be plain text

---

#### Test 2: DOM-based XSS
**Target:** URL parameters, localStorage

```javascript
// In browser console:
localStorage.setItem('test', '<script>alert(1)</script>');
SecureStorage.getItem('test'); // Should be sanitized
```

**Expected Result:** ✅ Malicious content blocked/removed

---

#### Test 3: Stored XSS
**Target:** localStorage persistence

```javascript
// Test:
localStorage.setItem('hydration-warning-dismissed', '<img src=x onerror=alert(1)>');
// Refresh page

// Expected: No alert, value sanitized
```

---

### 🟡 Open Redirect Tests

#### Test 1: WhatsApp Redirect
**Target:** Contact form submission

```javascript
// In message field, enter:
Check this out: https://malicious-site.com

// Expected: URL validated against whitelist, or marked as [URL REMOVED]
```

---

#### Test 2: External Link Validation
**Target:** Social media links

```javascript
// Try to modify BUSINESS_CONFIG.instagram to evil URL
// Expected: sanitizeUrl() blocks non-whitelisted domains
```

---

### 🟢 Clickjacking Tests

#### Test 1: Frame Embedding
**Test Page:** Create HTML file with:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Clickjacking Test</h1>
  <iframe src="http://localhost:3000" width="800" height="600"></iframe>
</body>
</html>
```

**Expected Result:** 
- ✅ X-Frame-Options blocks embedding from other origins
- ✅ CSP frame-ancestors prevents framing

**How to Test:**
1. Save HTML file
2. Open in browser
3. Check if site loads in iframe
4. Open DevTools console for errors

---

### 🔵 Cookie Security Tests

#### Test 1: Cookie Flags
**Target:** Sidebar state cookie

```javascript
// In DevTools Console:
document.cookie = "sidebar:state=true";

// In DevTools → Application → Cookies
// Verify flags:
// ✅ SameSite: Lax
// ✅ Secure: (on HTTPS only)
// ✅ HttpOnly: Not set (client-side cookie, expected)
```

---

#### Test 2: CSRF Protection
**Test:** Try to set cookie from external domain

```javascript
// Expected: SameSite=Lax prevents cross-origin cookie setting
```

---

### 🟣 Input Validation Tests

#### Test 1: Name Field Validation
**Target:** Contact form name input

```javascript
// Test cases:
"John Doe" // ✅ Valid
"John123" // ❌ Invalid (numbers)
"A" // ✅ Valid (1 character)
"A".repeat(101) // ❌ Invalid (too long)
"<script>alert(1)</script>" // ❌ Sanitized
"John-Paul O'Brien" // ✅ Valid (hyphens, apostrophes)
```

---

#### Test 2: Email Validation
**Target:** Contact form email input

```javascript
// Test cases:
"test@example.com" // ✅ Valid
"invalid-email" // ❌ Invalid
"test@" // ❌ Invalid
"test@domain" // ❌ Invalid
"a".repeat(255) + "@test.com" // ❌ Too long
"test+alias@example.com" // ✅ Valid
```

---

#### Test 3: Phone Validation
**Target:** Contact form phone input

```javascript
// Test cases:
"08123456789" // ✅ Valid
"123" // ❌ Too short
"1".repeat(20) // ❌ Too long
"abc123" // ❌ Non-numeric
"+6281234567890" // ✅ Valid (international format)
```

---

#### Test 4: Message Field
**Target:** Contact form message textarea

```javascript
// Test cases:
"Hello, I need help" // ✅ Valid
"Hi" // ❌ Too short (< 10 chars)
"X".repeat(1001) // ❌ Too long (> 1000 chars)
"<script>alert(1)</script>" // ❌ Sanitized
"https://example.com" // ✅ Valid URL (whitelisted)
"https://evil.com" // ⚠️ Validated or marked
```

---

### 🟠 Rate Limiting Tests

#### Test 1: Form Submission Rate Limit
**Target:** Contact form

```javascript
// Steps:
1. Submit form 3 times rapidly
2. On 4th attempt within 60 seconds
3. Expected: Error "Too many attempts"
4. Wait 60 seconds
5. Try again: Should work
```

**Note:** ⚠️ Client-side only, can be bypassed by clearing localStorage or using incognito

---

### 🔴 Security Headers Tests

#### Test 1: Verify All Headers

**Tool:** Browser DevTools Network tab

```bash
# Expected headers:
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
Content-Security-Policy: (see full policy in next.config.mjs)
```

**How to Test:**
1. Open DevTools → Network
2. Refresh page
3. Click on document request
4. Go to Headers tab
5. Verify all security headers present

---

#### Test 2: CSP Compliance

**Tool:** Browser DevTools Console

```javascript
// Try to violate CSP:
eval("alert('CSP Test')"); // Should be blocked if eval blocked

// Check console for CSP violation reports
// Expected: No violations (or only expected ones from dependencies)
```

---

### 🟢 External Link Security Tests

#### Test 1: Tabnabbing Prevention

```html
<!-- All external links should have: -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link
</a>
```

**How to Test:**
1. Click external link (Instagram, Facebook, etc.)
2. In opened tab, check `window.opener`
3. Expected: `null` (no access to parent window)

---

### 🔵 Dependency Security Tests

#### Test 1: Known Vulnerabilities

```bash
# Run in terminal:
pnpm audit

# Expected: No high/critical vulnerabilities
```

---

#### Test 2: Outdated Packages

```bash
# Check outdated packages:
pnpm outdated

# Review and update as needed
```

---

## 🤖 Automated Testing

### Setup Security Testing Script

Create `scripts/security-test.js`:

```javascript
// Example automated tests
const testXSS = () => {
  const payloads = [
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    'javascript:alert(1)',
  ];

  payloads.forEach(payload => {
    const sanitized = sanitizeTextInput(payload);
    if (sanitized.includes('<script') || sanitized.includes('javascript:')) {
      console.error('❌ XSS test failed:', payload);
    } else {
      console.log('✅ XSS test passed:', payload);
    }
  });
};

// Run tests
testXSS();
```

---

## 🔍 Browser Security Audit Tools

### 1. Chrome DevTools Security Tab
**Access:** DevTools → Security

**Check:**
- ✅ Valid HTTPS certificate
- ✅ Secure connection
- ✅ No mixed content warnings

---

### 2. Lighthouse Security Audit
**Access:** DevTools → Lighthouse → Best Practices

**Run audit and verify:**
- ✅ HTTPS enabled
- ✅ No vulnerabilities detected
- ✅ Best practices score > 90

---

### 3. SecurityHeaders.com
**URL:** https://securityheaders.com/

**Steps:**
1. Enter your production URL
2. Click "Scan"
3. Target grade: **A** or higher

---

### 4. Mozilla Observatory
**URL:** https://observatory.mozilla.org/

**Steps:**
1. Enter your production URL
2. Click "Scan Me"
3. Target score: **B+** or higher

---

## 📊 Security Testing Report Template

```markdown
# Security Test Report

**Date:** [Date]
**Tester:** [Name]
**Environment:** [Dev/Staging/Prod]

## Test Results

### XSS Tests
- [ ] Basic script injection: PASS/FAIL
- [ ] DOM-based XSS: PASS/FAIL
- [ ] Stored XSS: PASS/FAIL

### Open Redirect Tests
- [ ] WhatsApp redirect: PASS/FAIL
- [ ] External links: PASS/FAIL

### Clickjacking Tests
- [ ] Frame embedding: PASS/FAIL

### Cookie Security Tests
- [ ] Cookie flags: PASS/FAIL
- [ ] CSRF protection: PASS/FAIL

### Input Validation Tests
- [ ] Name validation: PASS/FAIL
- [ ] Email validation: PASS/FAIL
- [ ] Phone validation: PASS/FAIL
- [ ] Message validation: PASS/FAIL

### Rate Limiting Tests
- [ ] Form submission: PASS/FAIL

### Security Headers Tests
- [ ] All headers present: PASS/FAIL
- [ ] CSP compliance: PASS/FAIL

### External Link Tests
- [ ] Tabnabbing prevention: PASS/FAIL

### Dependency Tests
- [ ] No vulnerabilities: PASS/FAIL

## Issues Found
1. [Issue description]
2. [Issue description]

## Recommendations
1. [Recommendation]
2. [Recommendation]

## Overall Status
✅ PASS / ❌ FAIL

**Signature:** [Name]
```

---

## 🚨 Vulnerability Reporting

### If You Find a Vulnerability

1. **DO NOT** publicly disclose
2. Document thoroughly
3. Create private security advisory
4. Notify security team: security@laundrymodern.com
5. Wait for fix before disclosure

### Vulnerability Report Template

```markdown
# Security Vulnerability Report

**Vulnerability Type:** [XSS/CSRF/etc]
**Severity:** [Low/Medium/High/Critical]
**CVSS Score:** [0-10]

## Description
[Detailed description]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Impact
[What can attacker do?]

## Proof of Concept
[Code or screenshot]

## Suggested Fix
[How to fix]

## References
[Related CVEs, articles]
```

---

## 🎯 Security Testing Schedule

### Daily (Development)
- [ ] Input validation on new forms
- [ ] XSS tests on new features

### Weekly
- [ ] `pnpm audit`
- [ ] Manual form testing
- [ ] Header verification

### Monthly
- [ ] Full security test suite
- [ ] Dependency updates
- [ ] Third-party scan (SecurityHeaders.com)

### Quarterly
- [ ] Comprehensive security audit
- [ ] Penetration testing (if applicable)
- [ ] Update SECURITY_AUDIT_REPORT.md

---

## 📚 Resources

### Testing Tools
- **OWASP ZAP:** https://www.zaproxy.org/
- **Burp Suite:** https://portswigger.net/burp
- **SQLMap:** https://sqlmap.org/ (N/A for this app)
- **Nikto:** https://github.com/sullo/nikto

### Online Scanners
- **SecurityHeaders:** https://securityheaders.com/
- **Mozilla Observatory:** https://observatory.mozilla.org/
- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **CSP Evaluator:** https://csp-evaluator.withgoogle.com/

### Learning
- **PortSwigger Academy:** https://portswigger.net/web-security
- **OWASP Testing Guide:** https://owasp.org/www-project-web-security-testing-guide/

---

**Last Updated:** February 12, 2026  
**Maintained By:** Security Team
