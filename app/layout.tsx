import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Laundry Modern | Layanan Cuci Cepat, Bersih, dan Wangi',
  description:
    'Layanan laundry profesional dengan teknologi modern. Cuci kering, setrika, express 3 jam, dan antar-jemput gratis. Deterjen premium dan garansi kebersihan.',
  keywords: [
    'laundry',
    'cuci pakaian',
    'setrika',
    'antar jemput',
    'laundry express',
    'layanan laundry',
  ],
  authors: [{ name: 'Laundry Modern' }],
  creator: 'Laundry Modern',
  publisher: 'Laundry Modern',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laundry Modern',
    description: 'Layanan laundry profesional dengan teknologi modern',
  },
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
  return (
    <html lang="id">
      <body className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
