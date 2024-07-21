export const metadata = {
  title: 'Home - Social Email Defender',
  description: 'Home Page of Social Email Defender',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{paddingBottom:30}}>
      <Newsletter />
      </div>
      <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
