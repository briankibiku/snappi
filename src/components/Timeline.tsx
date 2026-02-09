export default function Timeline() {
  const steps = [
    { week: 'Week 1', title: 'Onboarding & Payment', description: 'Initial setup and account activation' },
    { week: 'Week 2', title: 'Integration & Training', description: 'Menu setup and staff training sessions' },
    { week: 'Week 3', title: 'Soft Launch & Optimization', description: 'Live testing and performance tuning' },
    { week: 'Week 4', title: 'Full Rollout', description: 'Your restaurant is now fully optimized' },
  ]

  return (
    <section className="py-24">
      <div className="section-container">
        <h2 className="section-title">Get Up and Running in 4 Weeks</h2>
        <p className="section-subtitle">
          Our expert team guides you through every step of the process.
        </p>
        
        <div className="relative mt-20">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-12" />
          
          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={step.week} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-snappi-primary text-snappi-primary rounded-full flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                  {index + 1}
                </div>
                <div className="text-snappi-primary font-bold mb-2 uppercase tracking-tighter text-sm">{step.week}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
