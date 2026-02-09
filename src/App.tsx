import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  )
}

export default App