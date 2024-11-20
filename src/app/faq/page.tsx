import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | EasyPZ',
  description: 'Get answers to common questions about EasyPZ - the app that helps you find clean and accessible restrooms in Berlin & NYC.',
  openGraph: {
    title: 'Frequently Asked Questions | EasyPZ',
    description: 'Get answers to common questions about EasyPZ - the app that helps you find clean and accessible restrooms in Berlin & NYC.',
    url: 'https://easypz.app/faq',
    siteName: 'EasyPZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | EasyPZ',
    description: 'Get answers to common questions about EasyPZ - the app that helps you find clean and accessible restrooms in Berlin & NYC.',
  },
  alternates: {
    canonical: 'https://easypz.app/faq'
  }
}

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main className="mt-24 mx-auto max-w-3xl px-4 sm:px-6 mb-16">
        <h1 className="font-raleway font-extrabold italic text-3xl mb-12 text-almost-black text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {/* Each FAQ item */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              What is EasyPZ?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ is a free-to-use mobile app that helps you find nearby
              restrooms quickly and easily. It does its best to provide detailed
              information about restroom locations, its features, ratings,
              accessibility, and more.
            </p>
            <br></br>
            <p className="text-gray-700 font-mukta-vaani">
              #dignity #freedom #adventure
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              How does EasyPZ work?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Simply open the app, share your location, press the button to call
              Zima, and he will show you the way. It's real easy peasy.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Is EasyPZ available in my city?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ is currently available in select cities, starting with{" "}
              <span className="font-semibold">Berlin</span> and{" "}
              <span className="font-semibold">New York City</span>. We are
              continuously expanding our database, so stay tuned for updates on
              new locations. You can follow us on X or Instagram in the
              meantime.
            </p>
            <br></br>
            <p className="text-gray-700 font-mukta-vaani">
              Are you a municipal representative that wants EasyPZ in your city?
              Please contact us at support@easypz.app.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Do you only show public restrooms?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              No, in addition to public restrooms provided by municipalities, we
              are also adding cafes, restaurants, museums, libraries, stores,
              and anything that may have an accessible restroom. We kindly
              remind our users to be mindful of each business's policies. EasyPZ
              is purely for informational purposes and we will do our best to
              forewarn you if you will be expected to pay to access a restroom.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Are the restroom listings accurate and up to date?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Despite careful examination, we cannot guarantee the correctness
              nor completeness of the information provided in our app. However,
              each entry is carefully examined by the creator and cleaned up
              prior to being released for public use. This is why your feedback
              matters a lot. Within the app, there will be new ways to share
              your feedback with us. We will take your contributions to improve
              the database and the experience overall.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Can I add locations?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              In order to protect the integrity of the data, only the creator
              and a few selected members will have this feature enabled (for
              now). If you'd like to become a member, please do not hesitate to
              contact us below.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Where are you getting the data from?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Our restroom data is sourced from a combination of publicly
              available information, open data platforms, and contributions from
              our user community. We continuously work to verify and update this
              data to ensure it’s accurate and reliable for everyone. If you
              know of a restroom that’s not in our app, please get in contact!
              At a later date we will allow you to add it directly in the app.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              What makes EasyPZ different from other apps?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ is designed to be the fastest and most convenient solution
              for “toilet emergencies.” Our app delivers reliable information on
              nearby restrooms, wherever you are. With a streamlined interface,
              EasyPZ is up to 5x faster than Google or Apple Maps (within our
              coverage areas) with better results. Unlike other apps that often
              lack a user-friendly experience or suffer from outdated data,
              EasyPZ stands out with intuitive design and a vibrant community
              that actively contributes to our growing, high-quality restroom
              database.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Is my personal information secure?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ does not collect personal information, and users are not
              required to register to access the main service. To improve user
              experience, we use anonymized identifiers to track interactions
              within the app solely for research purposes. For registered users,
              our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                privacy policy
              </Link>{" "}
              provides full transparency on data usage.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Who created EasyPZ, and why?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              El Vagabundo is a traveler who values dignity, freedom, and adventure above all else. 
              Through his journeys across civilizations, he asked himself, "What came first: civilization or the toilet?" and he decided that it was the latter. After all, every advanced society—no matter how imperfect—found a way to answer humanity’s oldest, most practical question: “Where should I go?”
            </p>
            <br></br>
            <p className="text-gray-700 font-mukta-vaani">
            Even today, our world struggles to answer this question. As a result, our dignity is often unprotected. El Vagabundo believes that for a society to call itself civilized, it must treat restrooms as a non-negotiable right. Without them, there’s no true civilization—just the illusion of one. Driven by this conviction, he created EasyPZ—not just for the world, but for himself. El Vagabundo stubbornly believes in the right to find a restroom within 5 minutes and that it’s the responsibility of society to guarantee it. Through EasyPZ, he aims to elevate the global standard for how we navigate our modern world—one restroom emergency at a time.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              How can I contact you?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              <a
                href="mailto:support@easypz.app"
                className="text-primary hover:underline"
              >
                support@easypz.app
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
