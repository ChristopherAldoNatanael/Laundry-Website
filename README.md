# Laundry Modern - Landing Page

Landing page profesional untuk bisnis laundry modern dengan teknologi terkini, desain elegan, dan performa optimal.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)

## ✨ Fitur Utama

### Frontend
- **Modern Design** - Desain clean, elegan, dan profesional dengan gradient warna biru-hijau
- **Responsive** - Mobile-first design, perfect di semua ukuran layar
- **Animasi Smooth** - Framer Motion untuk fade-in, slide-up, hover effects yang mulus
- **Fast Performance** - Next.js 16 dengan Turbopack, optimized images, code splitting
- **SEO Friendly** - Meta tags, structured data, optimized untuk search engines

### Sections
1. **Navbar** - Sticky navigation dengan logo, menu items, dan CTA button
2. **Hero** - Eye-catching hero section dengan headline, subheadline, dua CTA buttons
3. **Services** - Grid 6 layanan dengan icon, deskripsi, hover animation
4. **Why Us** - 6 alasan memilih dengan icon dan trust badges
5. **Pricing** - 3 paket pricing dengan features detail, highlighted recommended plan
6. **Testimonials** - Carousel testimonial dengan drag, auto-rotate, star ratings
7. **CTA** - Call-to-action section dengan motivasi pemesanan
8. **Footer** - Footer lengkap dengan contact info, social media, quick links

### Integration
- **WhatsApp Integration** - Semua tombol CTA terintegrasi dengan WhatsApp Business
- **Environment Variables** - Semua config disimpan di .env.local, mudah customize
- **Clean Architecture** - Component terpisah, reusable, modular

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) atau npm

### Installation

```bash
# Clone atau download project
cd laundry-modern

# Install dependencies
pnpm install

# Setup environment variables
# Copy .env.local dan edit dengan data Anda
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_BUSINESS_NAME=Laundry Modern
# ... lihat .env.local untuk semua variabel

# Run development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📝 Customization

### 1. Update WhatsApp Number (IMPORTANT!)
Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

Format: tanpa `+` dan `0`, contoh: `6281234567890`

### 2. Update Business Info
Edit `.env.local` untuk:
- Business name
- Address
- Phone number
- Email
- Operating hours
- Social media links

### 3. Update Services
Edit `lib/constants.ts`:
```typescript
export const SERVICES = [
  {
    id: 'service-id',
    title: 'Service Name',
    description: 'Description...',
    icon: 'IconName', // dari Lucide Icons
  },
]
```

### 4. Update Pricing
Edit `lib/constants.ts`:
```typescript
export const PRICING_PLANS = [
  {
    id: 'plan-id',
    name: 'Plan Name',
    price: 25000,
    period: 'per kg',
    features: ['Feature 1', 'Feature 2'],
    highlighted: false, // true untuk recommended plan
  },
]
```

### 5. Update Testimonials
Edit `lib/constants.ts`:
```typescript
export const TESTIMONIALS = [
  {
    name: 'Customer Name',
    role: 'Job Title',
    comment: 'Testimonial text...',
    rating: 5,
    image: '/testimonials/image.jpg',
  },
]
```

### 6. Update Brand Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 200 85% 45%;        /* Primary color (HSL) */
  --secondary: 160 75% 45%;      /* Secondary color (HSL) */
  --accent: 200 90% 50%;         /* Accent color */
}
```

Format: `H S% L%` (Hue Saturation Lightness)

Untuk customize, lihat [SETUP.md](./SETUP.md) untuk panduan lengkap.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout, metadata, SEO
│   ├── page.tsx                # Main page dengan semua sections
│   └── globals.css             # Global styles, design tokens, animations
├── components/
│   ├── navbar.tsx              # Navigation bar
│   ├── hero.tsx                # Hero section
│   ├── services.tsx            # Services grid
│   ├── pricing.tsx             # Pricing table
│   ├── why-us.tsx              # Why us section
│   ├── testimonials.tsx        # Testimonials carousel
│   ├── cta.tsx                 # Call-to-action section
│   ├── footer.tsx              # Footer
│   └── ui/                     # ShadCN UI components
├── lib/
│   ├── constants.ts            # Semua data (services, pricing, testimonials)
│   ├── whatsapp.ts             # WhatsApp integration utilities
│   └── utils.ts                # Helper functions
├── .env.local                  # Environment variables
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
├── SETUP.md                    # Setup & customization guide (BACA INI!)
└── README.md                   # Documentation ini
```

## 🎨 Design System

### Colors
- **Primary**: Biru (200 85% 45%)
- **Secondary**: Hijau (160 75% 45%)
- **Accent**: Biru terang (200 90% 50%)
- **Background**: Putih
- **Foreground**: Dark (15% brightness)

### Typography
- **Headings**: Poppins (bold)
- **Body**: Inter (regular)

### Spacing & Layout
- Tailwind CSS scale (4px base unit)
- Flexbox untuk most layouts
- Grid untuk complex layouts
- Mobile-first responsive

## 🔐 Security Features

✅ **Implemented:**
- Environment variables untuk API keys & sensitive data
- Sanitasi input untuk WhatsApp links
- No `dangerouslySetInnerHTML`
- XSS prevention (React built-in)
- Safe external links dengan `rel="noopener noreferrer"`
- Type-safe dengan TypeScript

## ⚡ Performance Optimization

- **Next.js 16** dengan Turbopack bundler
- **Code splitting** - Components lazy load
- **Image optimization** - Ready untuk lazy loading
- **CSS optimization** - Tailwind purge unused styles
- **Animation performance** - Framer Motion GPU accelerated

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 12+, Android 8+

## 🧪 Testing Checklist

Sebelum deploy, pastikan:

- [ ] WhatsApp number dikonfigurasi di `.env.local`
- [ ] Business info ter-update (nama, alamat, jam operasional)
- [ ] Services, pricing, testimonials sudah dikustomisasi
- [ ] Cek responsive di mobile (iPhone 12, Android)
- [ ] Test WhatsApp links (klik tombol CTA)
- [ ] Cek smooth scroll bekerja
- [ ] Cek animasi berjalan di semua sections
- [ ] Dark mode (jika enabled)
- [ ] SEO metadata ter-update

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

```bash
# 1. Push ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Buka https://vercel.com/new
# 3. Import repository GitHub
# 4. Configure environment variables:
#    - NEXT_PUBLIC_WHATSAPP_NUMBER
#    - NEXT_PUBLIC_BUSINESS_NAME
#    - ... semua variables dari .env.local
# 5. Deploy!
```

### Deploy ke hosting lain

Semua hosting yang support Next.js bisa digunakan:
- Netlify
- Firebase Hosting
- Self-hosted VPS
- Docker

## 📊 Analytics & Monitoring

Untuk track performance & user behavior:

1. **Google Analytics** - Add di metadata
2. **Vercel Analytics** - Built-in jika deploy ke Vercel
3. **Search Console** - Monitor SEO performance

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Setup guide & customization lengkap (BACA INI!)
- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [ShadCN UI Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 🐛 Troubleshooting

### WhatsApp link tidak bisa diklik
- Pastikan `NEXT_PUBLIC_WHATSAPP_NUMBER` format benar (tanpa + dan 0)
- Verify nomor valid di WhatsApp Business

### Styling aneh / colors tidak sesuai
- Rebuild: `pnpm dev`
- Clear cache: `pnpm clean && pnpm install`

### Animasi tidak berjalan
- Cek browser support di console
- Restart dev server: `Ctrl+C` kemudian `pnpm dev`

### Mobile view butuh scroll horizontal
- Cek responsive classes di Tailwind
- Test di berbagai ukuran dengan DevTools

## 💡 Best Practices

1. ✅ Update `.env.local` SEBELUM deploy
2. ✅ Test di mobile SEBELUM launch
3. ✅ Backup data testimonials & pricing
4. ✅ Monitor WhatsApp orders
5. ✅ Update content regularly
6. ✅ Monitor performance metrics

## 📞 Support

Jika ada pertanyaan atau issue:

1. Baca [SETUP.md](./SETUP.md) terlebih dahulu
2. Check browser console untuk errors
3. Verify `.env.local` configuration
4. Test di development server dulu

## 📄 License

Template ini dibuat untuk digunakan oleh bisnis laundry. Silakan customize sesuai kebutuhan.

## 🙏 Credits

Built with:
- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [ShadCN UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

**Happy laundrying! 🧺✨**

Dibuat dengan care untuk membantu bisnis laundry Anda berkembang.
