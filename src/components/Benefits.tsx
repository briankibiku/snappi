import { Zap, TrendingUp, Heart, ShieldCheck } from 'lucide-react'

const stats = [
  { label: 'Faster Service', value: '60%', icon: Zap },
  { label: 'Revenue Increase', value: '30%', icon: TrendingUp },
  { label: 'Customer Satisfaction', value: '95%', icon: Heart },
  { label: 'Zero Cash Leakage', value: '100%', icon: ShieldCheck },
]

export default function Benefits() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/posters/data-driven-system.jpg" 
          alt="Data driven system" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-snappi-primary/90" />
      </div>
      <div className="section-container relative z-10">
        <h2 className="section-title text-white">Why Restaurants Choose Snappi</h2>
        <p className="section-subtitle text-white/90">
          Proven results that transform your business from day one.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <stat.icon className="text-snappi-primary w-8 h-8" />
              </div>
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
