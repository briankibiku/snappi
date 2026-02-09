import logo from '../assets/snappi.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Demo', 'System Status']
    },
    {
      title: 'Company',
      links: ['About Us', 'Contact', 'Careers', 'Press Kits']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'FAQ', 'Community']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="mb-8 block">
              <img src={logo} alt="Snappi Logo" className="h-10 md:h-12 w-auto rounded-lg" />
            </a>
            <p className="text-gray-500 max-w-sm mb-8">
              A customer-first CRM system that promotes service efficiency and business sustainability for modern hospitality businesses.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-snappi-light transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
          
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-gray-900 mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-snappi-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm">
            © {currentYear} Snappi IT Systems. All rights reserved by Waka Africa.
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <span>Built with ❤️ in Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
