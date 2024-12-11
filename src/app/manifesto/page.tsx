import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Restroom Manifesto | EasyPZ',
  description: 'Our vision for a world with accessible, clean, and dignified restrooms for all. Join the Restroom Revolution.',
  openGraph: {
    title: 'The Restroom Manifesto | EasyPZ',
    description: 'Our vision for a world with accessible, clean, and dignified restrooms for all. Join the Restroom Revolution.',
    url: 'https://easypz.app/manifesto',
    siteName: 'EasyPZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Restroom Manifesto | EasyPZ',
    description: 'Our vision for a world with accessible, clean, and dignified restrooms for all. Join the Restroom Revolution.',
  },
  alternates: {
    canonical: 'https://easypz.app/manifesto'
  }
}

export default function Manifesto() {
  return (
    <>
      <Navbar />
      <main className="mt-24 mx-auto max-w-3xl px-4 sm:px-6 mb-16">
        <h1 className="font-raleway font-extrabold italic text-3xl mb-6 text-almost-black text-center">
          The Restroom Manifesto
        </h1>

        <p className="text-center font-mukta-vaani text-gray-700 italic mb-12">
          "Dignity, Freedom, Adventure"
        </p>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              1. Brief
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Access to clean, safe, and dignified restrooms is not a luxury —
              it is a human right. No one should feel anxious, uncomfortable, or
              trapped simply because they need to relieve themselves. Restrooms
              are not mere facilities; they are checkpoints that allow people to
              reset and restore their dignity, freedom, and well-being.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ believes that public restroom access is essential to human
              dignity, health, and social equity. Everyone, regardless of age,
              gender, ability, or social status, should have access to safe,
              clean, and free restrooms wherever they go.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              2. The Problem
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Our world has a restroom crisis. The current system is broken, and
              here's why:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 font-mukta-vaani">
              <li>
                Inaccessibility: Too often, restrooms are hidden, locked, or
                limited to "customers only."
              </li>
              <li>
                Uncertainty: People waste valuable time searching for nearby
                restrooms, especially in unfamiliar cities.
              </li>
              <li>
                Exclusion: Wheelchair users, parents with infants, and
                gender-nonconforming individuals are often neglected in restroom
                design.
              </li>
              <li>
                Hygiene & Safety: Many public restrooms are dirty, unsafe, or
                poorly maintained, forcing people to "hold it" far longer than
                they should.
              </li>
            </ul>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              Certain groups face the harshest consequences: pregnant
              individuals, seniors, people with medical conditions, travelers,
              and parents with young children. For them, every trip outside
              becomes a calculated mission to locate a restroom. Public
              restrooms are often closed, broken, or inaccessible, forcing
              people to rely on private businesses — an unfair burden on both
              the public and the private sector.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              3. Our Vision
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ envisions a world where:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 font-mukta-vaani">
              <li>
                Restrooms Are Everywhere: Public and private restrooms are
                mapped, listed, and discoverable in real time.
              </li>
              <li>
                Restrooms Are For Everyone: Inclusive design ensures access for
                wheelchair users, parents, and people of all genders.
              </li>
              <li>
                Restrooms Are Dignified Spaces: Clean, safe, and accessible
                facilities are the norm, not the exception.
              </li>
            </ul>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              Our vision is clear: No more restroom anxiety. No more searching.
              No more holding it in. No more fear of embarrassment. EasyPZ aims
              to empower every person, everywhere, with the freedom to leave
              home without fear of restroom uncertainty.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              4. Our Call to Action
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              This is not just a manifesto. This is a call to arms. Change
              doesn't happen without action. Here's what we demand and
              encourage:
            </p>
            <br />
            <h3 className="font-asap font-semibold text-lg mb-2 text-almost-black">
              For Governments & Cities
            </h3>
            <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700 font-mukta-vaani">
              <li>Build more public restrooms.</li>
              <li>Enforce cleanliness and safety standards.</li>
              <li>
                Ensure all restrooms are wheelchair-accessible, unisex, and
                family-friendly.
              </li>
              <li>
                Explore new policies that will incentivize the private sector to
                share the burden.
              </li>
              <li>
                Allow partners like EasyPZ to provide you with insights so that
                you can enact data-driven policies.
              </li>
            </ul>
            <h3 className="font-asap font-semibold text-lg mb-2 text-almost-black">
              For Businesses
            </h3>
            <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700 font-mukta-vaani">
              <li>Open your doors to the public, not just "customers only."</li>
              <li>
                Join restroom access networks like EasyPZ, helping people locate
                your facilities, and discover your offerings.
              </li>
              <li>Design inclusive restrooms that are accessible for all.</li>
            </ul>
            <h3 className="font-asap font-semibold text-lg mb-2 text-almost-black">
              For Everyday People
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 font-mukta-vaani">
              <li>
                Never feel ashamed for asking to use a restroom — it's your
                right.
              </li>
              <li>
                Support businesses, apps, and movements that promote restroom
                access.
              </li>
              <li>
                Contribute to platforms and apps that crowdsource restroom
                information for the benefit of others.
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              5. Our Solution
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              Information is power. Technology has the potential to solve the
              restroom crisis. By leveraging maps, crowdsourcing, and real-time
              updates, we can create a global network of accessible, clean, and
              safe restrooms everywhere.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              This is why EasyPZ exists. We are committed to providing the
              fastest, simplest, and most intuitive way to find a restroom near
              you — anytime, anywhere. Our mission is to make restroom access as
              easy as breathing, both of which are categorized as fundamental
              human needs.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ might be an app that helps users find restrooms, but in
              reality, it's a time-saver that protects people's dignity, their
              freedom, and their right to adventure without limits.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              6. Our Commitment
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              EasyPZ pledges to be the voice for restroom accessibility. We will
              advocate, innovate, and partner with like-minded organizations to
              build a world where every person can find a clean, safe restroom —
              wherever they go.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              We pledge to treat every user with respect, regardless of status,
              gender, or ability. We pledge to prioritize dignity, health, and
              inclusivity.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              Our fight will never end until restroom dignity is a global
              guarantee.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="font-asap font-semibold text-xl mb-3 text-almost-black">
              7. Join Us
            </h2>
            <p className="text-gray-700 font-mukta-vaani">
              If you believe in dignity, freedom, and adventure — join our
              cause. If you believe that finding a restroom shouldn't feel like
              a quest — stand with us.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              Every tap, every search, every review brings us closer to a world
              where no one is left without a restroom.
            </p>
            <br />
            <p className="text-gray-700 font-mukta-vaani">
              This is a movement for dignity, for freedom, and for our right to
              adventure. <br />
              Join us today!
            </p>
            <br />
            <div className="flex mb-6">
              <img
                src="/images/vagabundo.png"
                alt="El Vagabundo"
                className="rounded-lg max-w-[150px] h-auto"
              />
            </div>
            <p className="text-gray-700 font-mukta-vaani italic">
              Yours truly,
              <br />
              "El Vagabundo"
              <br />
              Creator of EasyPZ
              <br />
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="font-mukta-vaani px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm"
          >
            Go back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}