import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quality Plumbing</h3>
            <p className="text-gray-400 leading-relaxed">
              Licensed, insured plumbing and HVAC services for Kansas City since 1983.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Plumbing Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Water Heaters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  HVAC Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:816-555-0123" className="hover:text-white transition-colors">
                  816-555-0123
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kansas City, MO</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>7am - 9pm Daily</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@qualityplumbing.com" className="hover:text-white transition-colors">
                  info@qualityplumbing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} Quality Plumbing. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary font-bold">✓</span> Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary font-bold">✓</span> 40+ Years in Business
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary font-bold">✓</span> 24/7 Emergency Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
