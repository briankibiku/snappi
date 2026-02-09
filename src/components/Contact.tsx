export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="bg-snappi-primary p-12 lg:w-2/5 text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="mb-12 text-white/90 leading-relaxed">
              Have questions about Snappi? Our team is here to help you transform your restaurant operations.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full opacity-20" />
                </div>
                <div>
                  <div className="font-bold">Location</div>
                  <div className="text-white/80">Nairobi, Kenya</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full opacity-20" />
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-white/80">hello@snappi.africa</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12 lg:w-3/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-snappi-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-snappi-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-snappi-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-snappi-primary focus:border-transparent outline-none transition-all" placeholder="Tell us more about your restaurant..."></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
