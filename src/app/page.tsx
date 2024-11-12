import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <h1 className="font-asap font-semibold text-4xl sm:text-5xl mb-4 text-almost-black">
            "Hello,<br/>This is nature."
          </h1>
          <p className="font-mukta-vaani text-xl mb-8 text-gray-700">
            When nature calls, be ready for it.<br/>
            Out now in Berlin & NYC
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link href="https://apps.apple.com/us/app/easypz/id6448388765">
              <Image
                src="/images/store-ios.png"
                alt="Download on the App Store"
                width={150}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.beelphegor91.easypz">
              <Image
                src="/images/store-android.png"
                alt="Get it on Google Play"
                width={150}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
          </div>
          <Image
            src="/images/cat-toilet.png"
            alt="Cat on toilet paper"
            width={300}
            height={300}
            className="mx-auto"
          />
        </section>

        {/* Problem Section */}
        <section className="py-16 text-center">
          <span className="text-primary">The Problem</span>
          <h2 className="font-asap font-semibold text-3xl mt-2 mb-6 text-almost-black">
            Need a toilet?
          </h2>
          <p className="font-mukta-vaani text-lg max-w-2xl mx-auto text-gray-700">
            When you're in an unfamiliar location and suddenly need to use the restroom, 
            it can be a real challenge to find a clean, safe, and convenient option.
          </p>
          <Image 
            src="/images/problem.gif"
            alt="Person searching for restroom"
            width={300}
            height={300}
            className="mx-auto mt-8"
          />
        </section>

        {/* Solution Section */}
        <section className="py-16 text-center">
          <span className="text-primary">The Solution</span>
          <h2 className="font-asap font-semibold text-3xl mt-2 mb-6 text-almost-black">
            Meet Zima
          </h2>
          <p className="font-mukta-vaani text-lg max-w-2xl mx-auto text-gray-700">
            A magical cat with extraordinary powers to locate the nearest and cleanest restrooms. 
            Just open the app, and let Zima guide you to your destination.
          </p>
          <div className="space-y-8 mt-8">
            <Image 
              src="/images/zima-power.gif"
              alt="Zima the magical cat"
              width={300}
              height={300}
              className="mx-auto"
            />
            <Image 
              src="/images/app-demo.png"
              alt="EasyPZ app interface"
              width={300}
              height={600}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Ready to go Section */}
        <section className="py-16 text-center">
          <h2 className="font-asap font-semibold text-3xl mb-4 text-almost-black">
            Ready to go? 🚽
          </h2>
          <p className="font-mukta-vaani text-lg mb-8 text-gray-700">
            Download EasyPZ now and never worry about finding a restroom again.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://apps.apple.com/us/app/easypz/id6448388765">
              <Image
                src="/images/store-ios.png"
                alt="Download on the App Store"
                width={150}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.beelphegor91.easypz">
              <Image
                src="/images/store-android.png"
                alt="Get it on Google Play"
                width={150}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}