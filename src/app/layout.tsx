import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://finsoltz.com'),
  title: {
    default: 'Finsol T Ltd — Strategic Advisory & Financial Structuring for Africa',
    template: '%s | Finsol T Ltd',
  },
  description:
    'Finsol T Ltd connects global investors with high-value African projects through vetted deal origination, financial structuring, and premium commodity brokerage. Headquartered in Dar es Salaam, Tanzania.',
  keywords: [
    'Africa investment',
    'Tanzania advisory',
    'trade finance Africa',
    'commodity brokerage Tanzania',
    'SBLC DLC Africa',
    'African deal origination',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://finsoltz.com',
    siteName: 'Finsol T Ltd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finsol T Ltd — Bridging Capital. Unlocking Africa.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finsol T Ltd — Bridging Capital. Unlocking Africa.',
    description: 'Strategic Advisory & Financial Structuring for Global Investment in Africa.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-surface-base text-text-primary antialiased"
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
