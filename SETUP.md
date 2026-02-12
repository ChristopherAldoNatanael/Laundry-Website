# Laundry Modern - Setup & Customization Guide

Panduan lengkap untuk setup dan customize Landing Page Laundry Modern.

## Struktur Project

```
laundry-modern/
├── app/
│   ├── layout.tsx           # Root layout dengan SEO metadata
│   ├── page.tsx             # Main page yang mengintegrasikan semua section
│   └── globals.css          # Global styles dan design tokens
├── components/
│   ├── navbar.tsx           # Navigation bar dengan sticky behavior
│   ├── hero.tsx             # Hero section dengan CTA
│   ├── services.tsx         # Services grid dengan 6 layanan
│   ├── pricing.tsx          # Pricing table dengan 3 paket
│   ├── why-us.tsx           # Why us section dengan 6 features
│   ├── testimonials.tsx     # Testimonial carousel dengan swipe
│   ├── cta.tsx              # Call-to-action section
│   ├── footer.tsx           # Footer dengan contact info
│   └── ui/                  # ShadCN UI components
├── lib/
│   ├── constants.ts         # Semua data (services, pricing, testimonials)
│   ├── whatsapp.ts          # WhatsApp integration utilities
│   └── utils.ts             # Utility functions
├── .env.local               # Environment variables template
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── README.md                # Documentation
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment Variables

Edit `.env.local` dan sesuaikan dengan data bisnis Anda:

```env
# WhatsApp Number (gunakan format internasional tanpa +)
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890

# Business Info
NEXT_PUBLIC_BUSINESS_NAME=Laundry Modern
NEXT_PUBLIC_BUSINESS_ADDRESS=Jl. Sudirman No. 123, Jakarta Pusat
NEXT_PUBLIC_BUSINESS_PHONE=+62-812-3456-7890
NEXT_PUBLIC_BUSINESS_EMAIL=info@laundrymodern.com
NEXT_PUBLIC_OPERATION_HOURS=Senin - Minggu: 07:00 - 20:00 WIB

# Social Media Links
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/laundrymodern
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/laundrymodern
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@laundrymodern
```

### 3. Run Development Server
```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📝 Customization Guide

### 1. Update Logo & Brand Colors

Edit `app/globals.css` untuk mengubah design tokens:

```css
:root {
  /* Primary Color (Biru) */
  --primary: 200 85% 45%;           /* Ubah nilai HSL */
  
  /* Secondary Color (Hijau) */
  --secondary: 160 75% 45%;         /* Ubah nilai HSL */
  
  /* Dan seterusnya... */
}
```

**Format Warna**: HSL (Hue Saturation Lightness)
- Hue: 0-360 (tingkat warna)
- Saturation: 0-100% (intensitas warna)
- Lightness: 0-100% (terang-gelap)

### 2. Update Business Data

Edit `lib/constants.ts`:

```typescript
export const SERVICES = [
  {
    id: 'cuci-kering',
    title: 'Cuci Kering',
    description: 'Layanan cuci lengkap dengan mesin otomatis',
    icon: 'Droplets', // dari Lucide Icons
  },
  // Tambah atau ubah sesuai kebutuhan
]

export const PRICING_PLANS = [
  {
    id: 'regular',
    name: 'Paket Reguler',
    price: 15000,        // dalam Rupiah
    period: 'per kg',
    features: ['Feature 1', 'Feature 2'],
    highlighted: false,
  },
  // Ubah harga dan fitur sesuai kebutuhan
]
```

### 3. Update Testimonials

Edit `lib/constants.ts` dan tambahkan testimonial:

```typescript
export const TESTIMONIALS = [
  {
    name: 'Nama Pelanggan',
    role: 'Profesi/Pekerjaan',
    comment: 'Komentar positif pelanggan...',
    rating: 5,
    image: '/testimonials/image.jpg', // (optional untuk saat ini)
  },
]
```

### 4. Update Navbar Links

Edit `lib/constants.ts`:

```typescript
export const NAV_LINKS = [
  { href: '#home', label: 'Beranda' },
  { href: '#services', label: 'Layanan' },
  // Tambah atau ubah sesuai kebutuhan
]
```

### 5. Update WhatsApp Number

Ini adalah yang paling penting! Update di `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=62812345678901  # Format: kode negara + nomor
```

**Format WhatsApp:**
- Indonesia dimulai dengan 62 (tanpa 0)
- Contoh: `628123456789` (bukan `0812...` atau `+62812...`)

### 6. Add Gradient/Animation

Untuk mengubah animasi blob di Hero, edit `app/globals.css`:

```css
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  /* Ubah translate dan scale untuk efek berbeda */
}
```

## 🎨 Design System

### Color Tokens Tersedia

Gunakan di komponen dengan class Tailwind:

```tsx
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary text-secondary-foreground">
<div className="bg-accent text-accent-foreground">
<div className="border-border">
```

### Available Icons (Lucide React)

Semua icons dari [Lucide Icons](https://lucide.dev) tersedia.

Contoh:
```typescript
import { Heart, Users, Zap, Star } from 'lucide-react'
```

## 🔒 Security Features

✅ **Implemented:**
- Environment variables untuk config sensitif
- Sanitasi WhatsApp links
- No inline JavaScript injection
- Safe component rendering
- XSS prevention dengan React built-in

## 📱 Responsive Design

- Mobile-first approach
- Tested pada:
  - Mobile (320px - 640px)
  - Tablet (641px - 1024px)
  - Desktop (1025px+)

## ⚡ Performance Optimization

- Code splitting dengan Next.js 16
- Image lazy loading ready
- Framer Motion untuk smooth animations
- Turbopack bundler (default di Next.js 16)
- CSS modules dan Tailwind optimization

## 🔄 WhatsApp Integration

### Cara Kerja

1. User klik tombol "Pesan Sekarang"
2. Link WhatsApp otomatis generated dari `NEXT_PUBLIC_WHATSAPP_NUMBER`
3. Chat window membuka dengan pre-filled message
4. User bisa langsung chat dengan business

### Customize Message

Edit `lib/whatsapp.ts`:

```typescript
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Halo 👋 Saya ingin pesan layanan laundry. Bisa bantu?'
)
```

Atau gunakan custom message di component:

```typescript
const link = getServiceWhatsAppLink('Nama Layanan')
```

## 🌍 SEO Configuration

Meta tags sudah configured di `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Laundry Modern | Layanan Cuci Cepat, Bersih, dan Wangi',
  description: '...',
  keywords: ['laundry', 'cuci pakaian', ...],
  // Dan lainnya
}
```

**Untuk update SEO:**
1. Edit title dan description di layout.tsx
2. Update keywords sesuai bisnis
3. Test dengan [Google Search Console](https://search.google.com/search-console)

## 📦 Deployment

### Deploy ke Vercel (Recommended)

```bash
# 1. Push ke GitHub
git add .
git commit -m "Initial commit"
git push

# 2. Buka https://vercel.com/new
# 3. Import repository
# 4. Add environment variables di Vercel dashboard
# 5. Deploy!
```

### Environment Variables di Vercel

Tambahkan di Vercel Project Settings:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_BUSINESS_NAME=Laundry Modern
# ... semua variables dari .env.local
```

## 🐛 Troubleshooting

### WhatsApp Link Tidak Bekerja
- Cek format nomor (harus tanpa + dan 0)
- Pastikan nomor valid dan aktif di WhatsApp Business

### Styling Aneh
- Clear cache: `pnpm clean`
- Rebuild: `pnpm dev`

### Animasi Tidak Berjalan
- Pastikan framer-motion terinstall: `pnpm install framer-motion`
- Cek browser support

## 📚 Resources

- [Next.js 16 Docs](https://nextjs.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [ShadCN UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 💡 Tips & Best Practices

1. **Update `.env.local` dulu** sebelum deploy
2. **Test di mobile** sebelum launch
3. **Cek WhatsApp link** dengan klik manual
4. **Monitor performance** dengan Vercel Analytics
5. **Regular updates** untuk konten & harga

## 🤝 Support

Jika ada pertanyaan atau issue:
1. Cek dokumentasi di atas
2. Cek error messages di browser console
3. Verify environment variables

---

Happy laundrying! 🧺✨
