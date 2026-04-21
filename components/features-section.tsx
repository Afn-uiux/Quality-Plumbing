import {
  BadgeCheck,
  Timer,
  Receipt,
  ShieldCheck,
  HardHat,
  PhoneCall,
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: BadgeCheck,
      title: 'Licensed & Insured',
      description: 'All technicians are fully licensed, insured, and background-checked.',
    },
    {
      icon: Timer,
      title: 'On-Time Service',
      description: 'We respect your time with guaranteed arrival windows.',
    },
    {
      icon: Receipt,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges or upsells.',
    },
    {
      icon: ShieldCheck,
      title: 'Work Warranty',
      description: '1-year warranty on all workmanship and repairs.',
    },
    {
      icon: HardHat,
      title: 'Expert Team',
      description: 'Highly trained professionals with 40+ years of combined experience.',
    },
    {
      icon: PhoneCall,
      title: '24/7 Emergency',
      description: 'Available around the clock for urgent plumbing emergencies.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Quality Plumbing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional service with honesty and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
