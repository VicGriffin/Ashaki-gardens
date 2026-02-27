import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Ashaki Gardens | Ruiru\'s Ultimate Garden Experience',
  description: 'Premium garden restaurant and entertainment venue in Ruiru, Kenya. Fine dining, live music, private events, and unforgettable nights off Thika Road.',
  keywords: ['restaurant', 'garden', 'Ruiru', 'Kenya', 'fine dining', 'live music', 'events', 'Thika Road'],
  openGraph: {
    title: 'Ashaki Gardens | Ruiru\'s Ultimate Garden Experience',
    description: 'Fine Dining. Live Music. Unforgettable Nights.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2b1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
