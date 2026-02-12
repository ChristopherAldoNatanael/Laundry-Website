# Quick Reference - Laundry Modern

Panduan cepat untuk common tasks dan customizations.

## Quick Start (30 seconds)

```bash
# 1. Install
pnpm install

# 2. Configure
# Edit .env.local dengan nomor WhatsApp Anda

# 3. Run
pnpm dev

# 4. Open browser
# http://localhost:3000
```

## Most Important Files

| File | Purpose | What to Edit |
|------|---------|-------------|
| `.env.local` | Environment variables | WhatsApp number, business info |
| `lib/constants.ts` | Content data | Services, pricing, testimonials |
| `app/globals.css` | Colors & styling | Brand colors, design tokens |
| `app/page.tsx` | Main page | Section order, layout |
| `components/` | UI Components | Individual sections |

## Common Customizations

### 1. Change WhatsApp Number

**File**: `.env.local`

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=62812345678901
```

⚠️ **Format**: No `+`, no leading `0`. Example: `6281234567890`

### 2. Update Business Name

**File**: `.env.local`

```env
NEXT_PUBLIC_BUSINESS_NAME=Nama Bisnis Anda
```

### 3. Add/Edit Services

**File**: `lib/constants.ts`

```typescript
export const SERVICES = [
  {
    id: 'service-1',
    title: 'Nama Layanan',
    description: 'Deskripsi',
    icon: 'IconName', // Lucide icon
  },
  // Tambah lebih banyak
]
```

Available icons: `Droplets`, `Wind`, `Flame`, `Zap`, `Truck`, `Sparkles`

### 4. Update Pricing

**File**: `lib/constants.ts`

```typescript
export const PRICING_PLANS = [
  {
    id: 'plan-1',
    name: 'Nama Paket',
    price: 25000,  // Rp
    period: 'per kg',
    features: ['Feature 1', 'Feature 2'],
    highlighted: true, // Makes it stand out
  },
]
```

### 5. Change Brand Colors

**File**: `app/globals.css`

```css
:root {
  --primary: 200 85% 45%;      /* H S% L% */
  --secondary: 160 75% 45%;
}
```

**Color format**: HSL (Hue Saturation Lightness)
- Hue: 0-360
- Saturation: 0-100%
- Lightness: 0-100%

### 6. Add Testimonial

**File**: `lib/constants.ts`

```typescript
export const TESTIMONIALS = [
  {
    name: 'Nama Pelanggan',
    role: 'Profesi',
    comment: 'Komentar positif mereka...',
    rating: 5,
    image: '/testimonials/image.jpg', // optional
  },
]
```

### 7. Change Text Content

**Hero Section**: `components/hero.tsx`
**Services Section**: `components/services.tsx`
**Pricing Section**: `components/pricing.tsx`
**Why Us Section**: `components/why-us.tsx`
**CTA Section**: `components/cta.tsx`
**Footer**: `components/footer.tsx`

Just edit the text strings directly.

## Styling Cheatsheet

### Common Tailwind Classes

```tsx
// Sizing
<div className="w-full h-screen">  // Width, Height
<div className="max-w-7xl">        // Max width

// Spacing
<div className="p-4 m-2">          // Padding, Margin
<div className="gap-4">            // Gap (flex/grid)

// Colors
<div className="bg-primary text-white">
<div className="bg-secondary/30">      // With opacity
<div className="border border-border">

// Typography
<h1 className="text-4xl font-bold">
<p className="text-muted-foreground">

// Flexbox
<div className="flex items-center justify-between">
<div className="flex flex-col gap-4">

// Grid
<div className="grid grid-cols-3 gap-4">
<div className="grid md:grid-cols-2 lg:grid-cols-3">

// Responsive
<div className="hidden md:block">  // Hidden mobile, visible desktop
<div className="md:text-xl lg:text-2xl">

// Hover/States
<button className="hover:bg-primary active:scale-95">
<div className="transition-all duration-300">

// Rounded
<div className="rounded-lg">      // 0.5rem
<div className="rounded-2xl">     // 1rem
<div className="rounded-full">    // 50%
```

Reference: [Tailwind Docs](https://tailwindcss.com)

## Components Available

### From ShadCN

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
// ... and many more

<Button variant="outline" size="lg">Click</Button>
<Card className="p-4">Card content</Card>
```

### From Lucide Icons

```tsx
import { 
  Heart, Star, Zap, Users, Settings,
  Menu, X, ChevronLeft, ChevronRight,
  // ... hundreds more
} from 'lucide-react'

<Heart size={24} className="text-red-500" />
<Star size={20} className="fill-yellow-400" />
```

Browse all icons: [lucide.dev](https://lucide.dev)

## Deploy Commands

```bash
# Production build
pnpm build

# Test production locally
pnpm start

# Deploy to Vercel
git push origin main
# Then go to vercel.com to deploy
```

## Debugging

### Check Console Errors
Press `F12` (DevTools) → Console tab

### Check Environment Variables
```bash
# Add to components to verify env vars loaded
console.log(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| WhatsApp link not working | Check number format: `62...` no `+` or `0` |
| Styling looks wrong | Restart dev server: `Ctrl+C` then `pnpm dev` |
| Colors not changing | Clear `.next` folder: `rm -rf .next && pnpm dev` |
| Carousel not working | Check browser console for errors |
| Slow performance | Check Lighthouse in DevTools |

## File Locations

Quick reference for file locations:

```
Root Files:
- .env.local               ← Environment variables (DON'T COMMIT)
- package.json             ← Dependencies
- tailwind.config.ts       ← Tailwind config
- app/globals.css          ← Global styles & colors

Content to Edit:
- lib/constants.ts         ← Services, pricing, testimonials data
- components/*.tsx         ← Individual section components
- .env.local              ← Business info

Keep As Is:
- app/layout.tsx           ← Don't change
- components/ui/           ← ShadCN components
- tailwind.config.ts       ← Tailwind config (usually ok)
```

## Useful Commands

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Build for production
pnpm start            # Run production build

# Maintenance
pnpm lint             # Check code issues
pnpm install          # Install dependencies
rm -rf .next          # Clear Next.js cache
rm -rf node_modules   # Clear node_modules (full reinstall)

# Specific port
pnpm dev -p 3001      # Run on port 3001 instead of 3000
```

## Color Converter

Want to use a specific color? Convert from common formats:

```
HEX to HSL:
#3B82F6 → 217 98% 61%

RGB to HSL:
rgb(59, 130, 246) → 217 98% 61%

Use at: https://www.hsluv.org/
```

## SEO Quick Tips

- Update page title in `app/layout.tsx`
- Update meta description in `app/layout.tsx`
- Add keywords relevant to your business
- Keep heading hierarchy (h1 → h2 → h3)
- Add alt text for images
- Ensure fast page load (< 3 seconds)

## WhatsApp Message Templates

**Default** (general inquiry):
```
Halo 👋 Saya ingin pesan layanan laundry. Bisa bantu?
```

**Service Specific**:
```
Halo 👋 Saya ingin pesan layanan "[Service Name]". Bisa bantu?
```

**Pricing Specific**:
```
Halo 👋 Saya tertarik dengan paket "[Plan Name]". Bisa informasi lebih detail?
```

Customize in `lib/constants.ts` and `lib/whatsapp.ts`

## Testing Checklist

Quick test before launching:

- [ ] WhatsApp links work on desktop
- [ ] WhatsApp links work on mobile
- [ ] All sections visible without horizontal scroll
- [ ] Navbar sticky scroll works
- [ ] Testimonial carousel works
- [ ] All buttons clickable
- [ ] Text readable on small screens
- [ ] No console errors (F12 → Console)

## Deployment Pre-Checklist

Before deploying to production:

- [ ] `.env.local` configured with correct WhatsApp number
- [ ] All services updated
- [ ] Pricing correct
- [ ] Testimonials reviewed
- [ ] Brand colors match
- [ ] Tested on mobile
- [ ] No console errors
- [ ] `pnpm build` succeeds without errors

## Reading Order

1. **First time?** → Read [INSTALLATION.md](./INSTALLATION.md)
2. **Setup complete?** → Read [SETUP.md](./SETUP.md)
3. **Ready to launch?** → Use [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)
4. **Need help?** → Check [README.md](./README.md)

## Resources

- [Next.js Docs](https://nextjs.org)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [HSL Color Picker](https://www.hsluv.org/)

---

**TL;DR**: Edit `.env.local`, `lib/constants.ts`, and `app/globals.css`. That's 80% of customization! 

For detailed guides, read INSTALLATION.md → SETUP.md → LAUNCH_CHECKLIST.md
