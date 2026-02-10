import { 
  QrCode, 
  Wallet, 
  Bell, 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Calendar, 
  Megaphone, 
  LineChart 
} from 'lucide-react'

const features = [
  {
    name: 'QR Code Menu Ordering',
    description: 'Beautiful digital menus with instant ordering capabilities.',
    icon: QrCode,
  },
  {
    name: 'M-Pesa & Card Integration',
    description: 'Local and international payment methods built-in.',
    icon: Wallet,
  },
  {
    name: 'Real-time Notifications',
    description: 'Instant alerts for staff when new orders or payments arrive.',
    icon: Bell,
  },
  {
    name: 'Live Dashboard',
    description: 'Monitor your restaurant performance in real-time from anywhere.',
    icon: LayoutDashboard,
  },
  {
    name: 'Staff Management',
    description: 'Track performance and manage shifts efficiently.',
    icon: Users,
  },
  {
    name: 'Customer Feedback',
    description: 'Collect reviews and feedback directly at the table.',
    icon: MessageSquare,
  },
  {
    name: 'Table Booking',
    description: 'Integrated reservation system for better floor management.',
    icon: Calendar,
  },
  {
    name: 'Marketing & Promotions',
    description: 'Run targeted campaigns to keep customers coming back.',
    icon: Megaphone,
  },
  {
    name: 'Analytics & Insights',
    description: 'Deep dive into your data to drive business growth.',
    icon: LineChart,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Everything You Need to Run a Modern Restaurant</h2>
        <p className="section-subtitle">
          Powerful features designed to simplify operations and increase your bottom line.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-8 rounded-2xl border border-gray-100 hover:border-snappi-primary/30 transition-colors group">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-snappi-light transition-colors">
                <feature.icon className="text-gray-600 group-hover:text-snappi-primary w-6 h-6 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Built for Local & International Markets</h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Whether it's M-Pesa, Credit Cards, or Apple Pay, Snappi integrates seamlessly with your favorite payment providers to ensure you never miss a sale.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-medium">M-Pesa Integration</div>
                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-medium">Global Card Support</div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img 
                src="/images/posters/payment-integration.jpg" 
                alt="Payment Integration" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
