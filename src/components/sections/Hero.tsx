export default function Hero() {
    return (
      <section className="pt-24 pb-16 text-center">
        <h1 className="font-asap font-semibold text-4xl lg:text-5xl mb-4">
          "Hello?<br/>This is nature."
        </h1>
        <p className="font-mukta-vaani text-lg mb-8">
          When nature calls, be ready for it.<br/>
          Out now in Berlin & NYC
        </p>
        {/* App store buttons */}
        <div className="mt-8">
          <img 
            src="/images/cat-toilet.png" 
            alt="Cat on toilet paper" 
            className="max-w-xs mx-auto"
          />
        </div>
      </section>
    )
  }