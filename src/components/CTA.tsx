export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-snappi-dark rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-snappi-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-snappi-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join hundreds of restaurants already using Snappi to increase efficiency and delight their guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-12 py-5 text-lg">
                Get Started Now
              </button>
              <button className="btn-secondary px-12 py-5 text-lg !bg-transparent !text-white !border-white hover:!bg-white hover:!text-snappi-dark">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
