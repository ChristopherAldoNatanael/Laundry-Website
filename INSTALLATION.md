# Installation Guide - Laundry Modern

Panduan lengkap untuk menginstall dan menjalankan Laundry Modern Landing Page.

## System Requirements

- **Node.js**: 18.17 atau lebih tinggi
- **npm**: 9+ atau pnpm 8+ (recommended pnpm)
- **OS**: Windows, macOS, atau Linux

### Check Node Version

```bash
node --version    # harus v18.17 atau lebih tinggi
npm --version     # atau pnpm --version
```

Jika belum install, download dari [nodejs.org](https://nodejs.org)

## Installation Steps

### 1. Clone atau Download Project

**Option A: Git Clone**
```bash
git clone <repository-url>
cd laundry-modern
```

**Option B: Download ZIP**
- Download ZIP dari repository
- Extract ke folder
- Buka terminal di folder tersebut

### 2. Install Dependencies

**Dengan pnpm (Recommended)**
```bash
pnpm install
```

**Dengan npm**
```bash
npm install
```

**Dengan yarn**
```bash
yarn install
```

Proses ini akan download semua dependencies yang diperlukan (Next.js, React, Tailwind, etc.).

### 3. Setup Environment Variables

Copy `.env.local` dan sesuaikan dengan data bisnis Anda:

```bash
cp .env.local .env.local.example  # Backup
```

Edit `.env.local`:

```env
# WhatsApp Number (PENTING! Gunakan format benar)
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890

# Business Configuration
NEXT_PUBLIC_BUSINESS_NAME=Laundry Modern
NEXT_PUBLIC_BUSINESS_ADDRESS=Jl. Sudirman No. 123, Jakarta Pusat
NEXT_PUBLIC_BUSINESS_PHONE=+62-812-3456-7890
NEXT_PUBLIC_BUSINESS_EMAIL=info@laundrymodern.com
NEXT_PUBLIC_OPERATION_HOURS=Senin - Minggu: 07:00 - 20:00 WIB

# Social Media (Optional)
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/laundrymodern
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/laundrymodern
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@laundrymodern
```

### 4. Run Development Server

```bash
pnpm dev
```

Output:
```
> next dev

  ▲ Next.js 16.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.3s
```

Buka browser dan pergi ke [http://localhost:3000](http://localhost:3000)

## Verify Installation

Pastikan:
- ✅ Website load tanpa errors
- ✅ Navbar muncul dan sticky
- ✅ Semua sections visible (Hero, Services, Pricing, etc.)
- ✅ Tombol CTA bisa diklik dan buka WhatsApp
- ✅ No red errors di browser console

Buka DevTools (F12 atau Cmd+Option+I) dan check Console tab.

## Customize Content

Sebelum develop, customisasi konten:

### 1. Update Business Data

Edit `.env.local`:
```env
NEXT_PUBLIC_BUSINESS_NAME=Nama Bisnis Anda
NEXT_PUBLIC_WHATSAPP_NUMBER=62812345678901  # Nomor Anda
```

### 2. Update Services

Edit `lib/constants.ts`:
```typescript
export const SERVICES = [
  {
    id: 'service-id',
    title: 'Nama Layanan',
    description: 'Deskripsi singkat',
    icon: 'IconName', // dari Lucide
  },
]
```

### 3. Update Pricing

Edit `lib/constants.ts`:
```typescript
export const PRICING_PLANS = [
  {
    id: 'plan-id',
    name: 'Nama Paket',
    price: 25000,  // dalam Rupiah
    features: ['Feature 1', 'Feature 2'],
  },
]
```

### 4. Update Testimonials

Edit `lib/constants.ts`:
```typescript
export const TESTIMONIALS = [
  {
    name: 'Nama Pelanggan',
    role: 'Profesi',
    comment: 'Testimonial mereka...',
    rating: 5,
  },
]
```

### 5. Update Colors

Edit `app/globals.css`:
```css
:root {
  --primary: 200 85% 45%;    /* Ubah ke warna Anda */
  --secondary: 160 75% 45%;  /* Ubah ke warna Anda */
}
```

Untuk color picker, gunakan [HSL Picker](https://www.hsluv.org/)

## Project Structure

Pahami struktur folder:

```
app/
├── layout.tsx        # Root layout, metadata
├── page.tsx          # Main page dengan semua sections
└── globals.css       # Global styles dan design tokens

components/
├── navbar.tsx        # Navigation bar
├── hero.tsx          # Hero section
├── services.tsx      # Services grid
├── pricing.tsx       # Pricing table
├── why-us.tsx        # Why us section
├── testimonials.tsx  # Testimonials carousel
├── cta.tsx           # Call-to-action
├── footer.tsx        # Footer
└── ui/               # ShadCN UI components

lib/
├── constants.ts      # Data (services, pricing, testimonials)
├── whatsapp.ts       # WhatsApp utilities
├── sanitize.ts       # Security functions
└── scroll.ts         # Scroll utilities

.env.local           # Environment variables (GIT IGNORE)
```

## Development Commands

```bash
# Start dev server
pnpm dev

# Build untuk production
pnpm build

# Start production build
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format
```

## Editing Components

Untuk edit component:

1. Buka file di `components/`
2. Edit JSX/styling
3. Dev server auto-refresh (HMR)
4. Check changes di browser

Contoh edit `components/hero.tsx`:
```tsx
// Ubah headline
<h1>Laundry Cepat, Bersih, dan Wangi</h1>  // Edit text ini
```

## Styling dengan Tailwind

Semua styling menggunakan Tailwind CSS classes:

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg">
  <p className="text-xl font-bold text-primary">
    Styling dengan Tailwind
  </p>
</div>
```

Referensi: [Tailwind Docs](https://tailwindcss.com)

## Using Components

Semua ShadCN UI components ready di `components/ui/`:

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

Lebih banyak components: [ShadCN UI Docs](https://ui.shadcn.com)

## Icons (Lucide)

Gunakan icons dari Lucide React:

```tsx
import { Heart, Star, Zap, Users } from 'lucide-react'

<Heart size={24} className="text-red-500" />
<Star size={20} />
<Zap size={24} />
```

Browse icons: [Lucide Icons](https://lucide.dev)

## Build untuk Production

```bash
# Build optimization
pnpm build

# Check output
ls -la .next/

# Start production server
pnpm start
```

Production build akan:
- Minify dan optimize code
- Pre-render static pages
- Generate optimized images
- Create deployment bundle

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process yang pakai port 3000
# On macOS/Linux
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Atau ubah port:
```bash
pnpm dev -p 3001  # Run di port 3001
```

### Module Not Found Error

```bash
# Clear node_modules dan reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Build Error

```bash
# Check build error
pnpm build

# Clear Next.js cache
rm -rf .next
pnpm build
```

### Styling Not Applied

```bash
# Restart dev server
# Press Ctrl+C
# pnpm dev

# Jika masih tidak bekerja:
rm -rf node_modules .next
pnpm install
pnpm dev
```

### WhatsApp Link Not Working

Check `.env.local`:
- ✅ Nomor format benar: `62...` (tanpa +, tanpa 0)
- ✅ Nomor aktif di WhatsApp Business
- ✅ Restart dev server setelah edit .env.local

## Performance Tips

1. **Monitor build time**: `pnpm build` jangan > 60 detik
2. **Check bundle size**: `npm run analyze` (jika configured)
3. **Use HMR**: Changes auto-reflect di browser
4. **Disable extensions**: Browser extensions bisa slow dev server

## Next Steps

1. ✅ Setup sesuai panduan ini
2. ✅ Customize content di `lib/constants.ts`
3. ✅ Update `.env.local` dengan data bisnis
4. ✅ Edit colors di `app/globals.css`
5. ✅ Test semua features
6. 📖 Read [SETUP.md](./SETUP.md) untuk customization lanjut
7. ✅ Use [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) sebelum deploy

## Getting Help

Jika ada masalah:

1. **Check browser console** (F12 → Console tab)
2. **Read error message** dengan teliti
3. **Check `.env.local`** configuration
4. **Restart dev server** (Ctrl+C then `pnpm dev`)
5. **Clear cache** (`rm -rf .next node_modules`)
6. **Read documentation** di [README.md](./README.md) dan [SETUP.md](./SETUP.md)

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [ShadCN UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

Selamat! Website Anda sudah siap untuk dikembangkan dan di-customize sesuai kebutuhan.

**Next: Baca [SETUP.md](./SETUP.md) untuk customization lebih lanjut!**
