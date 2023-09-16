'use client'
import Head from 'next/head'
import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const myFont = localFont({ src: '../fonts/Mona-Sans.ttf' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();
  }
  , []);
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={myFont.className}>
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
