import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { generateBusinessSchema, generateServiceSchema } from '@/lib/schema'
import { FAQS } from '@/lib/constants'
import { generateFAQSchema } from '@/lib/schema'
import { HydrationFix } from '@/components/hydration-fix'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://laundrymodern.com'),
  title: {
    default: 'Laundry Modern | Layanan Cuci Cepat, Bersih, dan Wangi',
    template: '%s | Laundry Modern'
  },
  description:
    'Layanan laundry profesional dengan teknologi modern. Cuci kering, setrika, express 3 jam, dan antar-jemput gratis. Deterjen premium dan garansi kebersihan 100%. Melayani Jakarta dan sekitarnya.',
  keywords: [
    'laundry',
    'cuci pakaian',
    'setrika',
    'antar jemput',
    'laundry express',
    'layanan laundry',
    'dry cleaning',
    'laundry kiloan',
    'cuci karpet',
    'cuci selimut',
    'laundry 24 jam',
    'laundry terdekat',
    'laundry Jakarta',
  ],
  authors: [{ name: 'Laundry Modern', url: 'https://laundrymodern.com' }],
  creator: 'Laundry Modern',
  publisher: 'Laundry Modern',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://laundrymodern.com',
    siteName: 'Laundry Modern',
    title: 'Laundry Modern | Layanan Cuci Cepat, Bersih, dan Wangi',
    description:
      'Layanan laundry profesional dengan teknologi modern. Cuci kering, setrika, express 3 jam, dan antar-jemput gratis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laundry Modern - Layanan Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laundry Modern',
    description: 'Layanan laundry profesional dengan teknologi modern',
    images: ['/og-image.jpg'],
    creator: '@laundrymodern',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://laundrymodern.com',
  },
  category: 'business',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const businessSchema = generateBusinessSchema()
  const serviceSchema = generateServiceSchema()
  const faqSchema = generateFAQSchema(FAQS)

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <HydrationFix />
        {children}
      </body>
    </html>
  )
}
