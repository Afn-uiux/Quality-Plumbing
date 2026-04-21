import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content:
        'Quality Plumbing fixed our burst pipe in no time. The technician was professional, on time, and the price was exactly what he quoted. I&apos;m recommending them to all my neighbors!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Restaurant Owner',
      content:
        'We have emergency plumbing needs at our commercial kitchen. These guys are reliable, fast, and always available. They&apos;ve been our trusted partner for 3 years.',
      rating: 5,
    },
    {
      name: 'Jennifer Davis',
      role: 'Homeowner',
      content:
        'They installed our new water heater and did it exactly on schedule. Very clean work, and they explained everything thoroughly. Best service we&apos;ve experienced.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Kansas City.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
