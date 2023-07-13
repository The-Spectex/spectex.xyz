import Hero from '@/components/Hero/Hero'
import Hero2 from '@/components/Hero2/Hero2'
import Nav from '@/components/Nav/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-gradient-to-b from-blue-background-start via-blue-background-mid to-blue-background-stop'>
      <Nav/>
      <Hero/>
      <hr
  className="my-12 h-px border-t-0 bg-blue-button-primary shadow-button-glow" />
      <Hero2/>
    </main>
  )
}
