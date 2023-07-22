import Head from 'next/head'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'


const inter = Space_Grotesk({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-FCYDXC21DV' strategy='afterInteractive'/>
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-FCYDXC21DV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
