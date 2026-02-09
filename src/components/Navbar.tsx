import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/snappi.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            <img src={logo} alt="Snappi Logo" className="h-40 sm:h-42 md:h-42 lg:h-44 w-auto rounded-lg object-contain" />
            {/* <span className="bg-[image:var(--background-image-gradient-snappi)] bg-clip-text text-transparent">SNAPPI</span> */}
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            {links.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-snappi-primary transition-colors">
                {link.name}
              </a>
            ))}
            <button className="btn-primary !py-2.5 !px-6 text-sm">Get Started</button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden pb-4">
            {links.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2">
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  )
}