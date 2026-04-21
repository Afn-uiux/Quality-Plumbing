'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blogs', href: '#blogs' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/quality-plumbing-logo.jpg" 
              alt="Quality Plumbing" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:opacity-80 transition-opacity text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:opacity-80 transition-opacity"
              aria-expanded="false"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full mt-2 bg-white text-primary hover:bg-gray-100"
              >
                Get Free Quote
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
