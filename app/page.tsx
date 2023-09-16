import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Mid from '@/components/Mid/Mid'

export const metadata: Metadata = {
  metadataBase: new URL('https://spectex.xyz'),
  title: 'Spectex - Home | Building a better future',
  description: 'Spectex is a company that is building a better future. We provide services to help you & your business grow, such as web development, graphic design, & more',
  keywords: ['Spectex', 'IT', 'Software', 'Internet', 'IT Company', 'Web Development', 'Web Developer', 'Software Development', 'SEO', 'Graphics Designing', 'Software', 'IT Solutions'],
  authors: [{ name: 'Spectex', url: 'https://spectex.xyz' }],
  publisher: 'Spectex',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spectex.xyz',
    title: 'Spectex | Building a better future',
    siteName: 'Spectex',
    description: 'Spectex is a company that is building a better future for everyone. We provide various services to help you and your business grow. Such as web development, graphic design, and more.',
    images: [
      {
        url: 'https://cdn.spectex.xyz/images/web/og.png',
        width: 1200,
        height: 630,
        alt: 'Spectex | Building a better future',
      },
    ],
    countryName: 'Bangladesh',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  twitter: {
    card: 'summary_large_image',
    title: 'Spectex | Building a better future',
    description: 'Spectex is a company that is building a better future for everyone. We provide various services to help you and your business grow. Such as web development, graphic design, and more.',
    creator: '@spectexofficial',
    creatorId: '',
    images: ['https://cdn.spectex.xyz/images/web/og.png'],
  },
  category: 'technology',
  robots: 'index, follow',
}

export default function Home() {
  return (
    <main className='bg-blue-bg'>
      <Nav />
      <Hero />
      <hr />
      <Mid/>
    </main>
  )
}
