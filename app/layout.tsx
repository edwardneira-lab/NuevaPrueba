import React from "react"
import type { Metadata } from 'next'
import { Gantari, Abel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const gantari = Gantari({ 
  subsets: ["latin"],
  variable: '--font-gantari',
  display: 'swap',
});

const abel = Abel({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-abel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Boostart Angel Network 2026 | Invertí en Startups de IA',
  description: 'Red exclusiva de inversionistas ángeles para el Batch 2026 de Boostart Venture Studio. Invertí en startups de IA construidas desde cero en América Latina.',
  generator: 'Boostart',
  keywords: ['inversión', 'startups', 'IA', 'venture capital', 'ángeles inversionistas', 'América Latina', 'Boostart'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${gantari.variable} ${abel.variable}`}>
      <body className="font-sans">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
