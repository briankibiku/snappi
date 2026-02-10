import { motion } from 'framer-motion'

const menuItems = {
  delicacies: [
    {
      name: 'Nyama Choma',
      description: 'Succulent grilled goat meat served with kachumbari and a side of salt.',
      price: 'Ksh 1,200',
      image: '/images/menu/nyama_choma.png'
    },
    {
      name: 'Whole Fried Tilapia',
      description: 'Crispy whole tilapia served with Ugali and Sukuma Wiki.',
      price: 'Ksh 950',
      image: '/images/menu/ugali_tilapia.png'
    },
    {
      name: 'Beef Pilau',
      description: 'Fragrant Swahili-style beef pilau served with kachumbari.',
      price: 'Ksh 850',
      image: '/images/menu/pilau.png'
    }
  ],
  softDrinks: [
    {
      name: 'Stoney Tangawizi',
      description: 'Cold, refreshing Kenyan ginger beer with a kick.',
      price: 'Ksh 150',
      image: '/images/menu/stoney.png'
    },
    {
      name: 'Fresh Mango Juice',
      description: 'Thick, fresh yellow mango juice made from local mangos.',
      price: 'Ksh 250',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800'
    }
  ],
  alcoholic: [
    {
      name: 'Tusker Lager',
      description: 'Kenya\'s favorite premium lager beer.',
      price: 'Ksh 350',
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'White Cap Lager',
      description: 'Premium quality beer for the discerning palate.',
      price: 'Ksh 380',
      image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80&w=800'
    }
  ]
}

export default function Menu() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Menu Hero Section */}
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <img 
          src="/images/posters/service-efficiency.jpg" 
          alt="Menu Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="section-container text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black mb-6"
            >
              Our <span className="text-white">Digital Menu</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Experience the best of Kenyan hospitality with our curated selection of local delicacies and drinks.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="section-container">

        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} className="mb-24">
            <h2 className="text-3xl font-bold mb-12 capitalize border-l-4 border-snappi-primary pl-4">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-snappi-primary shadow-sm">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                    <a 
                      href="https://manhattan-snapi.web.app/order?qr=QR-001"
                      className="btn-primary w-full !py-3 block text-center"
                    >
                      Add to Order
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
