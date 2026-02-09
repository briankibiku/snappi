import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How does the QR code system work?",
    answer: "Every table gets a unique QR code. When guests scan it, they see your digital menu on their phone. They can add items to their cart, place the order, and it goes directly to your kitchen and wait staff dashboard."
  },
  {
    question: "What payment methods are supported?",
    answer: "We support M-Pesa, all major Credit/Debit cards, and cash payments. Payments are processed securely and updated in real-time."
  },
  {
    question: "How long does implementation take?",
    answer: "We typically have you up and running in 4 weeks. This includes system setup, menu digitization, and comprehensive staff training."
  },
  {
    question: "Is training provided?",
    answer: "Yes, we provide hands-on training for your entire team—wait staff, kitchen crew, and management—to ensure everyone is comfortable with the system."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 WhatsApp support and on-site assistance if needed. Your success is our priority."
  },
  {
    question: "Can we customize the menu?",
    answer: "Absolutely! You have full control over your menu. You can add items, change prices, and mark items as 'sold out' instantly from your dashboard."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about Snappi.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-snappi-primary/30 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                {openIndex === i ? <Minus className="text-snappi-primary" /> : <Plus className="text-snappi-primary" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
