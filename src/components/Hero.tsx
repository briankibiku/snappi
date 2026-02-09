import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Transform Your <span className="bg-[image:var(--background-image-gradient-snappi)] bg-clip-text text-transparent">Restaurant Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Snappi IT Systems helps restaurants reduce wait times, increase revenue, and delight customers with seamless digital ordering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary group h-14 px-10">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary h-14 px-10">Watch Demo</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}