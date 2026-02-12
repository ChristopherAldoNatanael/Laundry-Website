import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { WhyUs } from '@/components/why-us'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { Gallery } from '@/components/gallery'
import { FAQ } from '@/components/faq'
import { ContactForm } from '@/components/contact-form'
import { FloatingChat } from '@/components/floating-chat'
import { Toaster } from '@/components/ui/toaster'
import { DevWarningBanner } from '@/components/dev-warning-banner'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
      <FloatingChat />
      <Toaster />
      <DevWarningBanner />
    </main>
  )
}
