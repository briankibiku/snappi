import { Smartphone, UtensilsCrossed, CreditCard } from 'lucide-react'

const steps = [
  {
    title: 'Scan',
    description: 'Guests scan QR code at table',
    icon: Smartphone,
  },
  {
    title: 'Order',
    description: 'Browse menu and place order',
    icon: UtensilsCrossed,
  },
  {
    title: 'Pay',
    description: 'Complete payment instantly',
    icon: CreditCard,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-snappi-dark text-white py-24 overflow-hidden">
      <div className="section-container relative">
        <h2 className="section-title text-white">Get Started in 3 Simple Steps</h2>
        <p className="section-subtitle text-gray-100">
          The easiest way for your customers to order and pay.
        </p>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-12" />
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white text-snappi-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-snappi-accent text-white rounded-full flex items-center justify-center font-bold border-4 border-snappi-dark">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
