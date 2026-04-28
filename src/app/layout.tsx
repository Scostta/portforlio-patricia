import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Cursor } from '~/components/cursor.client'
import { ScrollProgress } from '~/components/scroll-progress.client'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Patricia Bayona — Product Manager & UX Lead',
    template: '%s — Patricia Bayona',
  },
  description:
    'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Patricia Bayona',
    title: 'Patricia Bayona — Product Manager & UX Lead',
    description:
      'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Patricia Bayona — Product Manager & UX Lead' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patricia Bayona — Product Manager & UX Lead',
    description:
      'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans min-h-screen flex flex-col">
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
