import {
  Pipette,
  ThermometerSun,
  Fan,
  Siren,
  ClipboardCheck,
  CalendarClock,
} from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Pipette,
      title: 'Plumbing Repair',
      description: 'Leaks, burst pipes, faucet repairs, and drain cleaning.',
    },
    {
      icon: ThermometerSun,
      title: 'Water Heaters',
      description: 'Installation, repair, and maintenance of water heating systems.',
    },
    {
      icon: Fan,
      title: 'HVAC Services',
      description: 'Heating, cooling, and ventilation system services.',
    },
    {
      icon: Siren,
      title: 'Emergency Service',
      description: '24/7 emergency plumbing response for urgent issues.',
    },
    {
      icon: ClipboardCheck,
      title: 'Inspections',
      description: 'Professional plumbing and HVAC system inspections.',
    },
    {
      icon: CalendarClock,
      title: 'Maintenance Plans',
      description: 'Regular maintenance to prevent costly repairs.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plumbing and HVAC solutions for residential and commercial customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Your Free Quote
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
