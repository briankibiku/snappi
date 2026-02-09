import { Check } from 'lucide-react'

const features = [
  'QR Code Menu System',
  'M-Pesa Integration',
  'Wait Staff Notifications',
  'Manager Dashboard',
  'Live Reporting',
  'Staff Training',
  'Launch Support',
  'Ongoing Marketing Updates',
  'WhatsApp Support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Everything you need to get started with no hidden fees.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-snappi-primary/20">
            <div className="bg-snappi-primary p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Gold Package</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-medium">Ksh</span>
                <span className="text-6xl font-black">10,000</span>
                <span className="text-xl font-medium opacity-80">/month</span>
              </div>
              <p className="mt-4 text-white/90">
                Setup fee: Ksh 40,000 (one-time)
              </p>
            </div>
            
            <div className="p-12">
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-snappi-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-snappi-primary" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <button className="btn-primary w-full sm:w-auto">
                  Start Your Free Trial
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
