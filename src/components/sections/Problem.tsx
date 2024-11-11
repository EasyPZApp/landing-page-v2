export default function Problem() {
    return (
      <section className="py-16 text-center">
        <span className="text-gray-600">The Problem</span>
        <h2 className="font-asap font-semibold text-3xl mt-2 mb-6">
          Need a toilet?
        </h2>
        <p className="font-mukta-vaani text-gray-700 max-w-2xl mx-auto">
          When you're in an unfamiliar location and suddenly need to use the restroom, 
          it can be a real challenge to find a clean, safe, and convenient option.
        </p>
        <div className="mt-8">
          <img 
            src="/images/person-searching.png" 
            alt="Person searching for restroom" 
            className="max-w-xs mx-auto"
          />
        </div>
      </section>
    )
  }