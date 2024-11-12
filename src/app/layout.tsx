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