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
        <h1 className="font-asap font-semibold text-3xl mb-8 text-almost-black">
          Privacy Policy
        </h1>

        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">Effective Date: 23 February 2023</p>

          <p>
            This privacy notice explains how EasyPZ ("we", "us", "our")
            collects, uses, and discloses personal information. Personal
            information means information that identifies, relates to,
            describes, is capable of being associated with, or could reasonably
            be linked, directly or indirectly, with a particular individual or
            household.
          </p>

          <h2 className="font-asap font-semibold text-2xl mt-8 mb-4 text-almost-black">
            Information We Collect
          </h2>
          <p>We collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Registration information: When you sign up for an EasyPZ account,
              we collect your name, email address, and a password that you
              choose.
            </li>
            <li>
              Location information: When you use the EasyPZ app, we collect your
              device's location information in order to provide you with nearby
              public toilets.
            </li>
            <li>
              User content: You may choose to provide additional personal
              information, such as ratings and reviews of public toilets, or you
              may choose to connect your EasyPZ account with your social media
              accounts.
            </li>
            <li>
              Usage information: We collect information about how you use the
              EasyPZ app, including which features you use, how often you use
              them, and how long you use them for.
            </li>
          </ul>

          <p>How We Use Your Information</p>
          <p> We use your personal information for the following purposes:</p>
          <p>
            <ul>
              <li>
                To provide you with the EasyPZ app and its features, including
                finding nearby public toilets, saving your favorite toilets, and
                receiving alerts about newly added toilets.
              </li>
              <li>
                To improve the EasyPZ app and its features, including by
                analyzing usage patterns and user feedback.
              </li>
              <li>
                To communicate with you about the EasyPZ app, including updates,
                maintenance, and customer service inquiries.
              </li>
              <li>
                To personalize your experience with the EasyPZ app, including by
                providing recommendations based on your usage patterns and user
                content.
              </li>
              <li>
                To comply with legal requirements, such as responding to court
                orders or other legal process, or to establish or exercise our
                legal rights or defend against legal claims.
              </li>
            </ul>
          </p>
          <p></p>
          <p>How We Share Your Information</p>
          <p>
            We may share your personal information in the following
            circumstances:
          </p>
          <p>
            <ul>
              <li>
                With third-party service providers that we engage to provide
                services on our behalf, such as hosting and maintenance,
                analytics, marketing, and customer support.
              </li>
              <li>
                With other users of the EasyPZ app, such as through ratings and
                reviews of public toilets.
              </li>
              <li>
                With our business partners, such as local governments that
                provide public toilets or related services.
              </li>
              <li>
                In connection with a corporate transaction, such as a merger,
                acquisition, or sale of assets.
              </li>
              <li>
                To comply with legal requirements, such as responding to court
                orders or other legal process, or to establish or exercise our
                legal rights or defend against legal claims.
              </li>
            </ul>
          </p>
          <p></p>
          <p>Your Choices</p>
          <p>
            You can choose not to provide certain personal information, although
            this may limit your ability to use certain features of the EasyPZ
            app.
          </p>
          <p>
            You can also choose to disable location services on your device,
            although this will limit the functionality of the EasyPZ app.
          </p>
          <p>
            You can opt out of receiving marketing communications from us at any
            time by following the instructions in the communication.
          </p>
          <p></p>
          <p>Security</p>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or destruction, including by
            using encryption, firewalls, and other security measures.
          </p>
          <p></p>
          <p>International Transfers</p>
          <p>
            Your personal information may be transferred to and processed in
            countries other than the country in which you are located. These
            countries may have different data protection laws than your country
            of residence. By using the EasyPZ app, you consent to such
            transfers.
          </p>
          <p></p>
          <p>Children's Privacy</p>
          <p>
            EasyPZ does not knowingly collect or solicit any information from
            anyone under the age of 13 or knowingly allow such persons to use
            the Services. The Services and their content are not directed at
            children under the age of 13. In the event that we learn that we
            have collected personal information from a child under age 13
            without parental consent, we will delete that information as quickly
            as possible. If you believe that we might have any information from
            or about a child under 13, please contact us at support@easypz.app.
          </p>
          <p></p>
          <p>International Users</p>
          <p>
            If you are accessing the Services from outside the United States,
            please be aware that information collected through the Services may
            be transferred to, processed, stored, and used in the United States.
            Data protection and privacy regulations in the United States may not
            be equivalent to those in your country of residence. By using the
            Services, you consent to the transfer of your information to the
            United States and the use of your information in accordance with
            this Privacy Policy.
          </p>
          <p></p>
          <p>Changes to Our Privacy Policy</p>
          <p>
            EasyPZ may modify or update this Privacy Policy from time to time to
            reflect the changes in our business and practices, and so you should
            review this page periodically. When we change the policy in a
            material manner, we will notify you by updating the “Last Updated”
            date at the top of this page and/or by other means as required by
            law.
          </p>
          <p></p>
          <p>Contact Us</p>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at support@easypz.app
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
