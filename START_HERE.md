# START HERE - Laundry Modern

Selamat datang! File ini akan memandu Anda untuk setup dan mulai menggunakan Laundry Modern Landing Page.

## What You Got

Sebuah landing page profesional untuk bisnis laundry dengan:
- **8 Sections**: Navbar, Hero, Services, Pricing, Why Us, Testimonials, CTA, Footer
- **Modern Design**: Biru-hijau gradient, clean layout, smooth animations
- **Responsive**: Perfect di mobile, tablet, desktop
- **WhatsApp Integration**: Semua buttons terintegrasi dengan WhatsApp Business
- **Fast & SEO-Friendly**: Next.js 16, Tailwind CSS, optimized performance

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
pnpm install
# atau: npm install
```

### 2. Setup WhatsApp Number
Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```
**Format**: Tanpa `+`, tanpa `0`. Example: `6281234567890` (bukan `+6281234567890`)

### 3. Run Development Server
```bash
pnpm dev
```

### 4. Open Browser
Pergi ke [http://localhost:3000](http://localhost:3000)

## Next Steps

### Customize Your Website

1. **Business Info** - Edit `.env.local`:
   ```env
   NEXT_PUBLIC_BUSINESS_NAME=Nama Bisnis Anda
   NEXT_PUBLIC_BUSINESS_ADDRESS=Alamat
   NEXT_PUBLIC_BUSINESS_PHONE=Nomor
   ```

2. **Services** - Edit `lib/constants.ts`:
   - Add/edit layanan Anda
   - Change icons
   - Update descriptions

3. **Pricing** - Edit `lib/constants.ts`:
   - Set harga Anda
   - Add/edit paket
   - Highlight recommended plan

4. **Colors** - Edit `app/globals.css`:
   - Change primary color (HSL format)
   - Change secondary color
   - Customize to match branding

5. **Testimonials** - Edit `lib/constants.ts`:
   - Add customer reviews
   - Set ratings
   - Add customer names

### Test Everything

- [ ] Open [http://localhost:3000](http://localhost:3000)
- [ ] Click "Pesan Sekarang" buttons
- [ ] Should open WhatsApp chat
- [ ] Try on phone (responsive)
- [ ] Check all sections visible

### Deploy to Production

When ready:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then go to [vercel.com/new](https://vercel.com/new) to deploy.

## Documentation Files

Read in this order:

### 1. **QUICK_REFERENCE.md** ← Start here!
- 30-second quick start
- Common customizations
- Styling tips
- Troubleshooting

### 2. **INSTALLATION.md** ← Setup guide
- Step-by-step installation
- Project structure
- Common issues
- Development commands

### 3. **SETUP.md** ← Detailed customization
- Comprehensive guide
- Color system
- Content updates
- WhatsApp integration
- Deployment

### 4. **LAUNCH_CHECKLIST.md** ← Before launching
- Pre-launch checklist
- Testing checklist
- Performance checks
- Security verification

### 5. **README.md** ← Project overview
- Features
- Browser support
- Resources
- General info

### 6. **PROJECT_SUMMARY.md** ← Complete reference
- All files created
- Architecture
- File locations

## Most Important Files

| File | Purpose | When to Edit |
|------|---------|-------------|
| `.env.local` | Config & secrets | Set WhatsApp number first! |
| `lib/constants.ts` | All data | Services, pricing, testimonials |
| `app/globals.css` | Colors & styling | Brand colors |
| `components/` | UI sections | Individual pages |

## Common Tasks

### Change WhatsApp Number
Edit `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=62...
```

### Add a Service
Edit `lib/constants.ts` → `SERVICES` array

### Update Pricing
Edit `lib/constants.ts` → `PRICING_PLANS` array

### Change Brand Colors
Edit `app/globals.css` → `:root` color values

### Update Business Name
Edit `.env.local` → `NEXT_PUBLIC_BUSINESS_NAME`

## Useful Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Run production build
pnpm lint             # Check for code issues
```

## Troubleshooting

### WhatsApp link not working?
- Check `.env.local` format: `62...` (no `+`, no `0`)
- Verify number is active on WhatsApp Business
- Restart dev server

### Styling looks wrong?
- Restart dev server: `Ctrl+C` then `pnpm dev`
- Clear cache: `rm -rf .next`

### Can't see changes?
- Make sure dev server is running
- Refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check `.env.local` if env variables changed

## Project Structure (at a glance)

```
laundry-modern/
├── .env.local              ← Configure WhatsApp & business info HERE
├── app/
│   ├── page.tsx           ← Main page with all sections
│   ├── layout.tsx         ← SEO & metadata
│   └── globals.css        ← Global styles & colors
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── services.tsx
│   ├── pricing.tsx
│   ├── testimonials.tsx
│   └── ...
├── lib/
│   ├── constants.ts       ← Edit services, pricing, testimonials HERE
│   └── ...
├── README.md              ← Project documentation
├── QUICK_REFERENCE.md     ← Quick tips & tricks
└── ... other guides
```

## Common Mistakes

❌ **Don't do this:**
- `NEXT_PUBLIC_WHATSAPP_NUMBER=+6281234567890` (wrong format)
- `NEXT_PUBLIC_WHATSAPP_NUMBER=081234567890` (wrong format)
- Commit `.env.local` to Git

✅ **Do this instead:**
- `NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890` (correct)
- Keep `.env.local` private (in .gitignore)
- Restart dev server after env changes

## Next Actions

1. **Right now**:
   - [ ] Read QUICK_REFERENCE.md (5 min)
   - [ ] Edit `.env.local` with WhatsApp number
   - [ ] Run `pnpm dev`

2. **In 30 minutes**:
   - [ ] Customize services
   - [ ] Customize pricing
   - [ ] Update colors

3. **Before deployment**:
   - [ ] Read SETUP.md
   - [ ] Use LAUNCH_CHECKLIST.md
   - [ ] Test on mobile
   - [ ] Deploy to Vercel

## Get Help

If stuck:
1. Check browser console (F12)
2. Read QUICK_REFERENCE.md
3. Check error messages
4. Restart dev server
5. Clear cache: `rm -rf .next`

## Resources

- [Next.js Docs](https://nextjs.org)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## Success Path

```
1. Install ✓
2. Setup WhatsApp ✓
3. Run dev server ✓
4. Test in browser ✓
5. Customize content ✓
6. Update colors ✓
7. Test on mobile ✓
8. Deploy ✓
```

## Summary

You have a professional, modern landing page ready to customize!

**Next step**: Open `QUICK_REFERENCE.md` or `INSTALLATION.md`

---

**Let's build something awesome! 🚀**

Questions? Check the documentation files listed above.

Happy building! 🧺✨
