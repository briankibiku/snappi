import { Clock, DollarSign, Users, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Delays & Lost Orders',
    description: 'Long wait times during peak hours and orders getting lost or confused.',
    icon: Clock,
  },
  {
    title: 'Cash Leakage',
    description: 'Low bill collection rates and revenue loss from unpaid orders.',
    icon: DollarSign,
  },
  {
    title: 'Staff Management',
    description: 'Lack of performance indicators and inefficient task allocation.',
    icon: Users,
  },
  {
    title: 'Poor Visibility',
    description: 'Improper information flow and no real-time business insights.',
    icon: BarChart3,
  },
]

export default function Problems() {
  return (
    <section id="problems" className="bg-gray-50 py-24">
      <div className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">The Challenges Modern Restaurants Face</h2>
          <p className="section-subtitle">
            Running a restaurant is hard. We help you solve the most common operational headaches.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-snappi-light rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="text-snappi-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
