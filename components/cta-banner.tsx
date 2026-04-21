export function CtaBanner() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to solve your plumbing problem?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free quote and fast, reliable service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <a href="#contact">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Get Free Quote
              </button>
            </a>
            <a href="tel:816-555-0123">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors w-full sm:w-auto">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
