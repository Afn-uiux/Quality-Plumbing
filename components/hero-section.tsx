import { Phone, Clock } from 'lucide-react'
import { QuoteForm } from './quote-form'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary text-white overflow-hidden">
      {/* Background Image - positioned to show face */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_20%] opacity-100"
        style={{
          backgroundImage: 'url(/images/hero-plumber.jpg)',
        }}
      />

      {/* Overlay Gradient - Lighter on right side for content */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[500px]">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Stress-free plumbing here
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              From leaks to installs, our licensed professionals show up on time and leave your place clean. Serving Kansas City for over 40 years.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: 816-555-0123
            </a>
          </div>

          {/* Right Content - Quote Form */}
          <div className="flex justify-center lg:justify-end">
            <QuoteForm />
          </div>
        </div>
      </div>

      {/* Quick Info Strip at Bottom */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm opacity-80">Emergency Call</p>
                <a href="tel:816-555-0123" className="text-lg font-bold hover:opacity-80 transition-opacity">
                  816-555-0123
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm opacity-80">Working Hours</p>
                <p className="text-lg font-bold">7am-9pm Every Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
