import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Pricing from '../components/Pricing'
import Timeline from '../components/Timeline'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import CTA from '../components/CTA'
import Experience from '../components/Experience'

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Features />
      <Benefits />
      <Timeline />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </>
  )
}
