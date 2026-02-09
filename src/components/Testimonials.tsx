import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "Since implementing Snappi, our table turnover has increased by 40% and our wait staff is much happier.",
    author: "Jane Doe",
    role: "Proprietor, The Sizzling Grill",
    image: "https://i.pravatar.cc/150?u=jane"
  },
  {
    content: "The M-Pesa integration is a game-changer. No more chasing bills or dealing with unpaid orders.",
    author: "John Smith",
    role: "Manager, Coastal Delights",
    image: "https://i.pravatar.cc/150?u=john"
  },
  {
    content: "Our customers love the convenience of ordering from their phones. It feels like we're in the future.",
    author: "Alice Wambui",
    role: "Owner, Nairobi Bistro",
    image: "https://i.pravatar.cc/150?u=alice"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Trusted by Leading Restaurants</h2>
        <p className="section-subtitle">
          Join hundreds of restaurants already transforming their guest experience.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <Quote className="text-snappi-light w-12 h-12 mb-6" />
                <p className="text-lg text-gray-700 italic leading-relaxed mb-6">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t pt-6 border-gray-50">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all" />
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
