import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { WhyUs } from '@/components/why-us'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
