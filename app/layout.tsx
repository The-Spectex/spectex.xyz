import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Space_Grotesk({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
