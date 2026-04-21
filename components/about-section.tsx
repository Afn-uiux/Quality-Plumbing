export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide mb-2">WHO WE ARE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Licensed, background-checked <span className="text-gray-400">pros delivering clean,</span>{' '}
            <span className="text-gray-400">on-time repairs across Kansas City, with honest</span>{' '}
            <span className="text-gray-400">pricing—no surprises.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Quality Plumbing has been serving Kansas City families and businesses since 1983. We&apos;re proud to set the standard in the home repair industry with a commitment to quality, reliability, and honest pricing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every technician on our team is fully licensed, background-checked, and trained to handle everything from emergency leaks to complex installations. We arrive on time, respect your home, and clean up after ourselves.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our customers trust us because we don&apos;t surprise them with unexpected costs or aggressive upselling. We assess your needs, explain your options, and provide honest recommendations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <p className="text-gray-700 font-medium">Years in Service</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-700 font-medium">Satisfied Customers</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-700 font-medium">Licensed & Insured</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-700 font-medium">Emergency Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
