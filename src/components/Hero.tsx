import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Transform Your <span className="bg-[image:var(--background-image-gradient-snappi)] bg-clip-text text-transparent">Restaurant Experience</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Snappi IT Systems helps restaurants reduce wait times, increase revenue, and delight customers with seamless digital ordering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group h-14 px-10 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary h-14 px-10 text-lg">Watch Demo</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/posters/best-impression.jpg" 
                alt="Restaurant Experience" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-snappi-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}