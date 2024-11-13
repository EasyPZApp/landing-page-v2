import type { Metadata } from 'next'
import { Raleway, Asap, Mukta_Vaani } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['800'],
  style: ['italic', 'normal'],
  variable: '--font-raleway',
  display: 'swap',
})

const asap = Asap({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-asap'
})

const muktaVaani = Mukta_Vaani({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mukta-vaani'
})

export const metadata: Metadata = {
  title: {
    template: '%s | EasyPZ',
    default: 'EasyPZ - Find Restrooms Quickly & Easily',
  },
  description: 'EasyPZ helps you find clean and accessible restrooms in Berlin & NYC. 5x faster than Google or Apple Maps.',
  icons: {
    icon: [
      {
        url: 'images/favicon.png',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-icon-192x192.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${asap.variable} ${muktaVaani.variable}`}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}