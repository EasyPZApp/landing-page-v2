import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-8">
          <h1 className="font-asap font-semibold text-3xl mb-8 text-almost-black">
            Frequently Asked Questions
          </h1>
          
          {/* Instead of accordions, using simple sections with clear headings */}
          <div className="space-y-8">
            <section>
              <h2 className="font-asap font-semibold text-xl mb-2 text-primary">
                What cities are you available in?
              </h2>
              <p className="font-mukta-vaani text-gray-700">
                We're currently available in Berlin and New York City. 
                We're working hard to expand to more cities soon!
              </p>
            </section>

            <section>
              <h2 className="font-asap font-semibold text-xl mb-2 text-primary">
                How do you find restrooms?
              </h2>
              <p className="font-mukta-vaani text-gray-700">
                We locate restrooms in various establishments including cafes, 
                restaurants, shopping centers, and public facilities. Our community 
                helps keep the information up to date.
              </p>
            </section>

            <section>
              <h2 className="font-asap font-semibold text-xl mb-2 text-primary">
                Is the app free?
              </h2>
              <p className="font-mukta-vaani text-gray-700">
                Yes! EasyPZ is completely free to download and use.
              </p>
            </section>

            <section>
              <h2 className="font-asap font-semibold text-xl mb-2 text-primary">
                How do you ensure restroom information is accurate?
              </h2>
              <p className="font-mukta-vaani text-gray-700">
                We rely on a combination of verified business data and community feedback. 
                Users can report any inaccuracies, and our team regularly reviews and 
                updates the information.
              </p>
            </section>

            <section>
              <h2 className="font-asap font-semibold text-xl mb-2 text-primary">
                Can I suggest a new restroom location?
              </h2>
              <p className="font-mukta-vaani text-gray-700">
                Absolutely! You can suggest new locations directly through the app. 
                Our team will verify the information before adding it to our database.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}