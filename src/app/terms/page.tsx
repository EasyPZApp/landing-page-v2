import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | EasyPZ',
  description: 'Read the terms and conditions for using EasyPZ, the app that helps you find clean and accessible restrooms in Berlin & NYC.',
  openGraph: {
    title: 'Terms & Conditions | EasyPZ',
    description: 'Read the terms and conditions for using EasyPZ, the app that helps you find clean and accessible restrooms in Berlin & NYC.',
    url: 'https://easypz.app/terms',
    siteName: 'EasyPZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | EasyPZ',
    description: 'Read the terms and conditions for using EasyPZ, the app that helps you find clean and accessible restrooms in Berlin & NYC.',
  },
  alternates: {
    canonical: 'https://easypz.app/terms'
  }
}

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="mt-24 mx-auto max-w-3xl px-4 sm:px-6 mb-16">
        <h1 className="font-raleway font-extrabold italic text-3xl mb-8 text-almost-black text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-12 text-gray-700 font-mukta-vaani">
          <section>
            <p className="mb-4">Last Updated: December 11, 2024</p>
            <p className="mb-4">Welcome to EasyPZ. By using our service, you agree to these Terms & Conditions ("Terms"). Please read them carefully.</p>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">1. Service Description</h2>
            <h3 className="font-asap font-semibold text-lg mb-3 text-almost-black">1.1 Anonymous Users (Basic Service)</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Temporary location data for facility finding</li>
              <li>Basic device information</li>
              <li>Anonymous usage metrics</li>
              <li>View-only access to public restroom information</li>
            </ul>

            <h3 className="font-asap font-semibold text-lg mb-3 mt-6 text-almost-black">1.2 Registered Users (Full Features)</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="font-semibold">Account Information:</span> Email and password</li>
              <li><span className="font-semibold">Contribution Data:</span> 
                <ul className="list-disc ml-6 mt-2">
                  <li>New restroom submissions and locations</li>
                  <li>Reviews and ratings</li>
                  <li>Photos and facility descriptions</li>
                  <li>Updates to existing locations</li>
                </ul>
              </li>
              <li><span className="font-semibold">Profile Data:</span> Optional customization preferences</li>
              <li><span className="font-semibold">Experience Points (EXP):</span> Activity history and achievements</li>
              <li><span className="font-semibold">Saved Data:</span> Favorite locations and custom lists</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">2. Information Disclaimer</h2>
            <p className="mb-4">EasyPZ is an information platform that aggregates and shares publicly available information about restroom locations. Important disclaimers:</p>
            
            <ul className="list-disc ml-6 space-y-2">
              <li>All facility information is provided "as is" and for informational purposes only</li>
              <li>Listing of a facility does not imply any relationship with or endorsement by the facility owner</li>
              <li>We do not guarantee facility availability, condition, or accessibility</li>
              <li>Information accuracy may vary and is subject to change without notice</li>
              <li>Premium locations may have additional access requirements or restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">3. User Responsibilities</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>You are solely responsible for your interactions with facilities and their staff</li>
              <li>You must comply with all facility policies and local laws</li>
              <li>You agree not to abuse or misuse the service</li>
              <li>You will not share false or misleading information</li>
              <li>You will respect facility owners' rights and property</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">4. Business Relationships</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Businesses may request removal from our database</li>
              <li>We do not guarantee business hours or policies</li>
              <li>Premium location partnerships are separate agreements</li>
              <li>Business dispute resolution process is available</li>
            </ul>
          </section>

          <section>
          <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">5. Experience Points (EXP) and Rewards</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>EXP is earned through legitimate app usage and contribution</li>
              <li>Rewards are subject to availability and may change</li>
              <li>Premium access may require minimum EXP levels</li>
              <li>We reserve the right to adjust EXP systems and rewards</li>
              <li>EXP and rewards have no monetary value and cannot be transferred</li>
              <li>Attempts to manipulate the EXP system may result in account termination</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">6. User Content and Reviews</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>You retain ownership of your content but grant us a license to use it</li>
              <li>Reviews must be factual and based on personal experience</li>
              <li>No harassment, hate speech, or inappropriate content</li>
              <li>We may remove content that violates our guidelines</li>
              <li>False reviews may result in account termination</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">7. Liability and Disclaimers</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>EasyPZ is not responsible for:
                <ul className="list-disc ml-6 mt-2">
                  <li>Facility access disputes or denials</li>
                  <li>User interactions with businesses</li>
                  <li>Property damage or personal injury</li>
                  <li>Loss of EXP or rewards due to technical issues</li>
                  <li>Accuracy of user-submitted content</li>
                </ul>
              </li>
              <li>We do not guarantee:
                <ul className="list-disc ml-6 mt-2">
                  <li>Restroom availability or condition</li>
                  <li>Premium location access</li>
                  <li>Continuous service availability</li>
                  <li>Data accuracy or completeness</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">8. Account Termination</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>We may suspend or terminate accounts for:
                <ul className="list-disc ml-6 mt-2">
                  <li>Terms violations</li>
                  <li>Abusive behavior</li>
                  <li>False information</li>
                  <li>System manipulation</li>
                  <li>Extended inactivity</li>
                </ul>
              </li>
              <li>Upon termination:
                <ul className="list-disc ml-6 mt-2">
                  <li>All EXP and rewards are forfeited</li>
                  <li>User content remains in the system</li>
                  <li>Premium access is revoked</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">9. Dispute Resolution</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>All disputes will be resolved through arbitration</li>
              <li>Users waive rights to class action lawsuits</li>
              <li>Arbitration will be conducted online when possible</li>
              <li>Each party bears their own legal costs</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">10. Changes to Terms</h2>
            <p className="mb-4">We may modify these Terms at any time. Changes will be effective upon posting to the Service. Your continued use of EasyPZ after changes constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">11. Contact</h2>
            <p className="mb-4">For questions about these Terms, please contact us at:</p>
            <p><a href="mailto:support@easypz.app" className="text-primary hover:underline">support@easypz.app</a></p>
          </section>
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