import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Gold',
    price: '10,000',
    setup: '40,000',
    description: 'Perfect for small cafes and restaurants starting their digital journey.',
    features: [
      'QR Code Menu System',
      'M-Pesa Integration',
      'Wait Staff Notifications',
      'Manager Dashboard',
      'Live Reporting',
      'Basic Staff Training',
      'Standard Launch Support',
    ],
    highlight: false,
  },
  {
    name: 'Platinum',
    price: '15,000',
    setup: '50,000',
    description: 'Ideal for busy restaurants looking for better growth and insights.',
    features: [
      'Everything in Gold',
      'Advanced Analytics',
      'Customer Feedback System',
      'Marketing Updates',
      'Priority Launch Support',
      'Business Hours Support',
      'WhatsApp Integration',
    ],
    highlight: true,
  },
  {
    name: 'Diamond',
    price: '20,000',
    setup: '60,000',
    description: 'Comprehensive solution for high-volume or multi-location venues.',
    features: [
      'Everything in Platinum',
      'Table Booking System',
      'Multi-location Management',
      'Inventory Integration',
      'Custom Branding',
      '24/7 Dedicated Support',
      'Marketing Strategy',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your restaurant's needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-[2.5rem] shadow-xl overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col ${
                tier.highlight 
                  ? 'border-snappi-primary ring-4 ring-snappi-primary/10 scale-105 z-10' 
                  : 'border-gray-100 hover:border-snappi-primary/50'
              }`}
            >
              <div className={`p-10 text-center ${tier.highlight ? 'bg-snappi-primary text-white' : 'bg-white text-gray-900 border-b border-gray-50'}`}>
                {tier.highlight && (
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block backdrop-blur-sm border border-white/30 uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.name} Package</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xl font-medium opacity-80">Ksh</span>
                  <span className="text-5xl font-black">{tier.price}</span>
                  <span className="text-sm font-medium opacity-80">/month</span>
                </div>
                <p className={`mt-4 text-sm font-medium ${tier.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                  Setup fee: Ksh {tier.setup} (one-time)
                </p>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  {tier.description}
                </p>
                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-snappi-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-snappi-primary" />
                      </div>
                      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                    tier.highlight 
                      ? 'bg-snappi-primary text-white hover:bg-snappi-primary/90 shadow-lg shadow-snappi-primary/30' 
                      : 'border-2 border-snappi-primary text-snappi-primary hover:bg-snappi-primary hover:text-white'
                  }`}>
                    {tier.name === 'Diamond' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                  <p className="mt-4 text-xs text-gray-400 font-medium">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
