import { Target, ChefHat, TrendingUp } from 'lucide-react'

const solutions = [
  {
    title: 'For Guests',
    icon: Target,
    image: '/images/posters/scan-order-pay.jpg',
    features: [
      'Scan QR code to view menu',
      'Order directly from table',
      'Pay via M-Pesa, Card, or Cash',
      'Track order status in real-time',
      'No more waiting for waiters',
      'Full bill transparency',
    ],
  },
  {
    title: 'For Wait Staff',
    icon: ChefHat,
    image: '/images/posters/staff-efficiency.jpg',
    features: [
      'Instant table notifications',
      'Clear visibility of all orders',
      'Focus on hospitality, not chasing bills',
      'Live payment status updates',
      'Reduced pressure during peak hours',
    ],
  },
  {
    title: 'For Management',
    icon: TrendingUp,
    image: '/images/posters/live-reporting.jpg',
    features: [
      'Live dashboard with real-time insights',
      'Staff performance tracking',
      'Menu and inventory control',
      'Theft prevention & reconciliation',
      'Customer feedback collection',
      'Data-driven decision making',
    ],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="section-container">
        <h2 className="section-title">One Platform, Three Experiences</h2>
        <p className="section-subtitle">
          Snappi connects everyone in your restaurant for a seamless operation.
        </p>
        <div className="grid lg:grid-cols-3 gap-12">
          {solutions.map((solution) => (
            <div key={solution.title} className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-snappi-primary text-white rounded-full flex items-center justify-center shrink-0">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-snappi-primary flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
