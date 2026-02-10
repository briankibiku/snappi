import { motion } from 'framer-motion'

const posters = [
  {
    url: '/images/posters/lasting-experience.jpg',
    title: 'Create Lasting Experiences',
    description: 'We help you focus on hospitality while we handle the tech.',
  },
  {
    url: '/images/posters/guest-focus.jpg',
    title: 'Guest-Centric Approach',
    description: 'Let your guests focus on what brought them to your restaurant.',
  },
  {
    url: '/images/posters/easy-payment.jpg',
    title: 'Seamless Payments',
    description: 'Hassle-free billing and payments for a better customer journey.',
  },
  {
    url: '/images/posters/intuitive-reporting.jpg',
    title: 'Data-Driven Insights',
    description: 'Power your decisions with real-time reporting and analytics.',
  },
]

export default function Experience() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience the Snappi Difference</h2>
          <p className="section-subtitle">
            More than just an ordering system, we're your partner in restaurant excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posters.map((poster, index) => (
            <motion.div
              key={poster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-4">
                <img 
                  src={poster.url} 
                  alt={poster.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{poster.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{poster.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
