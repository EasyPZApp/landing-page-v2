import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | EasyPZ',
  description: 'Learn about how EasyPZ handles and protects your data. Our privacy policy outlines our commitment to user privacy and data protection.',
  openGraph: {
    title: 'Privacy Policy | EasyPZ',
    description: 'Learn about how EasyPZ handles and protects your data. Our privacy policy outlines our commitment to user privacy and data protection.',
    url: 'https://easypz.app/privacy',
    siteName: 'EasyPZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | EasyPZ',
    description: 'Learn about how EasyPZ handles and protects your data. Our privacy policy outlines our commitment to user privacy and data protection.',
  },
  alternates: {
    canonical: 'https://easypz.app/privacy'
  }
}

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="mt-24 mx-auto max-w-3xl px-4 sm:px-6 mb-16">
        <h1 className="font-raleway font-extrabold italic text-3xl mb-8 text-almost-black text-center">
          Privacy Policy
        </h1>

        <div className="space-y-12 text-gray-700 font-mukta-vaani">
          <section>
            <p className="mb-4">Last Updated: December 11, 2024</p>
            <p className="mb-4">At EasyPZ, we believe in both privacy and transparency. This Privacy Policy explains how we handle your information across our free and premium services, including our mobile application and website (collectively, "EasyPZ" or the "Service").</p>
          </section>

          <section>
          <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">1. Types of Users and Data Collection</h2>
            
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
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">2. How We Use Your Information</h2>
            
            <h3 className="font-asap font-semibold text-lg mb-3 text-almost-black">2.1 Basic Service</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide nearby facility locations and navigation</li>
              <li>To maintain and improve our core service</li>
              <li>To ensure service security and prevent abuse</li>
            </ul>

            <h3 className="font-asap font-semibold text-lg mb-3 mt-6 text-almost-black">2.2 Premium Features</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>To maintain your account and preferences</li>
              <li>To track and reward your EXP and achievements</li>
              <li>To provide access to exclusive locations and features</li>
              <li>To enable social features and community participation</li>
              <li>To personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">3. Location Data Handling</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Location data is only collected while the app is actively in use</li>
              <li>Anonymous users' location data is immediately discarded after each session</li>
              <li>Registered users can opt to save favorite locations</li>
              <li>You can disable location services at any time through your device settings</li>
              <li>Rough location data may be used for service improvement and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">4. Data Sharing and Disclosure</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="font-semibold">Service Providers:</span> For hosting, analytics, and support</li>
              <li><span className="font-semibold">Other Users:</span> Public reviews and ratings (registered users only)</li>
              <li><span className="font-semibold">Business Owners:</span> Aggregate usage statistics upon request</li>
              <li><span className="font-semibold">Legal Requirements:</span> When required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">5. Your Privacy Rights</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access or delete your account data</li>
              <li>Export your contribution history</li>
              <li>Modify your privacy settings</li>
              <li>Opt-out of optional features</li>
              <li>Request data deletion (subject to legal requirements)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">6. Data Security</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Industry-standard encryption for all data transmission</li>
              <li>Regular security audits and assessments</li>
              <li>Strict access controls for employee data access</li>
              <li>Automated threat detection and prevention</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">7. Content Moderation</h2>
            <p className="mb-4">For user-generated content (reviews, ratings, etc.), we:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use automated filters to prevent inappropriate content</li>
              <li>Review reported content within 24 hours</li>
              <li>Reserve the right to remove content that violates our guidelines</li>
              <li>May suspend accounts that repeatedly violate our policies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">8. Changes to This Policy</h2>
            <p className="mb-4">We'll notify you of material changes via:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>In-app notifications</li>
              <li>Email (for registered users)</li>
              <li>Website announcements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-asap font-semibold text-2xl mb-4 text-almost-black">9. Contact Us</h2>
            <p className="mb-4">For privacy-related inquiries:</p>
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