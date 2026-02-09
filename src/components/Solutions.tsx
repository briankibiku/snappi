import { Target, ChefHat, TrendingUp } from 'lucide-react'

const solutions = [
  {
    title: 'For Guests',
    icon: Target,
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
            <div key={solution.title} className="relative p-8 rounded-2xl border border-gray-100 bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-snappi-primary text-white rounded-full flex items-center justify-center">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{solution.title}</h3>
              </div>
              <ul className="space-y-4">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-snappi-primary flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
