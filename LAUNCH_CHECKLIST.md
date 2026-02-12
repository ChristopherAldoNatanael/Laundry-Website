# Launch Checklist - Laundry Modern

Gunakan checklist ini untuk memastikan website siap diluncurkan ke production.

## Pre-Launch Configuration

### Environment Variables
- [ ] Edit `.env.local` dengan data bisnis
- [ ] Update `NEXT_PUBLIC_WHATSAPP_NUMBER` dengan nomor yang benar
- [ ] Verify format: `62XXXXXXXXXX` (tanpa +, tanpa 0)
- [ ] Test WhatsApp link manual

### Business Information
- [ ] Update business name di `.env.local`
- [ ] Update alamat bisnis
- [ ] Update nomor telepon (format: +62-...)
- [ ] Update email bisnis
- [ ] Update jam operasional
- [ ] Update social media links (Instagram, Facebook, TikTok)

### Services & Pricing
- [ ] Review dan update semua services di `lib/constants.ts`
- [ ] Verify harga yang benar untuk setiap paket
- [ ] Check fitur yang ditampilkan di pricing
- [ ] Highlight paket yang recommended
- [ ] Test link WhatsApp untuk setiap pricing plan

### Content Updates
- [ ] Update testimonials dengan pelanggan real
- [ ] Update foto/avatar testimonials (jika ada)
- [ ] Review semua copy/text untuk typo
- [ ] Verify brand colors cocok dengan branding bisnis
- [ ] Update logo (jika ada di navbar)

### SEO & Meta Tags
- [ ] Update page title yang SEO-friendly
- [ ] Update meta description
- [ ] Update keywords yang relevan
- [ ] Check Open Graph meta tags
- [ ] Test preview di social media sharing

## Desktop Testing

- [ ] Navbar: sticky scroll bekerja
- [ ] Navbar: semua menu links smooth scroll ke section
- [ ] Navbar: CTA button bisa diklik dan buka WhatsApp
- [ ] Hero: animasi fade-in berjalan smooth
- [ ] Hero: dua buttons bekerja
- [ ] Services: cards hover effect berjalan
- [ ] Services: click cards open WhatsApp
- [ ] Pricing: highlighted plan terlihat jelas
- [ ] Pricing: setiap button buka WhatsApp dengan pesan yang tepat
- [ ] Why Us: animasi scroll berjalan
- [ ] Testimonials: carousel bisa drag dan auto-rotate
- [ ] Testimonials: next/prev buttons bekerja
- [ ] CTA: button bisa diklik
- [ ] Footer: semua links bekerja
- [ ] Footer: social media icons buka link yang benar

## Mobile Testing (iPhone 12 / Android)

- [ ] Responsive layout: tidak ada horizontal scroll
- [ ] Navbar: mobile menu buka/tutup berjalan
- [ ] Navbar: mobile menu links bekerja
- [ ] Hero: layout mobile terlihat bagus
- [ ] Services: cards tidak terlalu kecil
- [ ] Pricing: pricing cards readable di mobile
- [ ] Testimonials: carousel bisa di-swipe
- [ ] Buttons: semua buttons touchable (>44px height)
- [ ] Text: readable tanpa perlu zoom
- [ ] Images: tidak oversized untuk mobile

## WhatsApp Integration

- [ ] Test "Pesan Sekarang" di hero (regular message)
- [ ] Test "Pesan Sekarang" di services (service-specific message)
- [ ] Test "Pesan Sekarang" di pricing (pricing-specific message)
- [ ] Test "Pesan Sekarang" di CTA section
- [ ] Verify message pre-filled dengan text yang relevan
- [ ] Test dari berbagai devices (desktop, mobile, tablet)
- [ ] Confirm nomor WhatsApp aktif dan bisa menerima pesan

## Performance & Speed

- [ ] Load time < 3 detik (check dengan DevTools)
- [ ] Lighthouse score > 80 untuk Performance
- [ ] Lighthouse score > 90 untuk SEO
- [ ] Lighthouse score > 90 untuk Accessibility
- [ ] No console errors atau warnings
- [ ] No memory leaks (check DevTools Memory tab)

## Browser Compatibility

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Security Check

- [ ] No API keys exposed di code
- [ ] `.env.local` not committed (dalam .gitignore)
- [ ] No inline JavaScript
- [ ] External links punya `rel="noopener noreferrer"`
- [ ] Form inputs sanitized (jika ada)
- [ ] No sensitive data di localStorage

## Analytics Setup (Optional)

- [ ] Google Analytics installed (jika mau)
- [ ] Conversion tracking untuk WhatsApp clicks
- [ ] Page view tracking untuk setiap section
- [ ] Test tracking bekerja di DevTools

## Deployment Preparation

### Before Deploying to Production

- [ ] Semua checklist di atas sudah done
- [ ] Test build locally: `pnpm build`
- [ ] Test production preview: `pnpm start`
- [ ] No build errors atau warnings
- [ ] All environment variables set up

### Vercel Deployment

- [ ] GitHub repository created dan pushed
- [ ] New project di Vercel via vercel.com/new
- [ ] Environment variables configured di Vercel
- [ ] Build settings correct (Next.js)
- [ ] Domain configured (jika ada custom domain)
- [ ] SSL/TLS enabled (automatic di Vercel)

### Post-Deployment

- [ ] Test live website di production URL
- [ ] Repeat desktop testing di production URL
- [ ] Repeat mobile testing di production URL
- [ ] Test WhatsApp links dari production
- [ ] Monitor error logs di Vercel dashboard
- [ ] Monitor performance metrics

## Post-Launch Monitoring

Dalam minggu pertama setelah launch:

- [ ] Monitor WhatsApp messages
- [ ] Check analytics untuk traffic sources
- [ ] Monitor bounce rate
- [ ] Check user engagement metrics
- [ ] Fix any bugs yang muncul
- [ ] Respond to customer inquiries

## Maintenance Schedule

- **Weekly**: Check WhatsApp messages, respond customers
- **Bi-weekly**: Review analytics, check performance
- **Monthly**: Update testimonials, review pricing
- **Quarterly**: SEO audit, security check, performance review

## Emergency Contacts

Jika ada masalah:

1. **WhatsApp not working** → Check nomor di `.env.local`
2. **Styling issues** → Clear cache, rebuild
3. **Performance slow** → Check DevTools, monitor Vercel metrics
4. **Errors di console** → Check browser console, Vercel logs
5. **Deployment issues** → Check Vercel build logs

## Launch Sign-Off

- [ ] Project owner reviewed semua content
- [ ] Semua checklist items sudah done
- [ ] Ready to go live!

**Launch Date**: ________________

**Deployed By**: ________________

**Sign Off**: ________________

---

**Good luck with your launch! 🚀**

Jika ada pertanyaan, refer ke README.md dan SETUP.md.
