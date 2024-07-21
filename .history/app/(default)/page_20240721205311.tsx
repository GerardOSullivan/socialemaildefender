export const metadata = {
  title: 'Home - Social Email Defender',
  description: 'Home Page of Social Email Defender',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      {/* <Hero />
      <Newsletter />
      <Features /> */}
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
