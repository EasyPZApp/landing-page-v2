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
              continuously expanding our database, so stay tuned for updates
              on new locations. You can follow us on X or Instagram in the meantime.
            </p>
            <br></br>
            <p className="text-gray-700 font-mukta-vaani">
              Are you a municipal representative that wants EasyPZ in your
              city? Please contact us at support@easypz.app.
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
              If you'd like to share restroom locations (or lists) please write
              us a message at support@easypz.app. This feature will be
              restricted in order to protect the quality of the database.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Where are you getting the data from?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Our data comes from recently updated government databases and
              reliable crowdsourced entries.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              What makes EasyPZ different from other apps?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ was carefully designed around "toilet emergencies." We are
              a service dedicated to finding you the best intel on nearby
              toilets, wherever you may be. The service has been simplified to
              the maximum, meaning we are already better and 5x faster than
              Google or Apple Maps (at least within our coverage area). Other
              apps don't have a good user experience and/or the data integrity
              seems compromised. EasyPZ intends on becoming the world's leading
              authority on restroom data.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              Is my personal information secure?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ does not collect personal information, and users are not
              required to register to access the service. To improve user
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
              El Vagabundo is a world traveler who loves exploring cities on his
              skateboard. Along the way, he noticed how restroom access varies
              widely across different places and saw that finding a restroom can
              be a challenge everywhere. He decided to take action, believing
              that improving restroom access globally could make a real
              difference and elevate the current state of society.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              How can I contact you?
            </h2>
            <p className="text-gray-700 font-mukta-vaani">support@easypz.app</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
