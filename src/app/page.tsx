import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollDownButton from '@/components/ScrollDownButton' 
import AnimationWrapper from '@/components/AnimationWrapper'

export default function Home() {
  return (
    <AnimationWrapper>
      <Navbar />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Section */}
        <section className="min-h-[80vh] py-16 flex flex-col justify-center text-center">
  <h1 className="hero-title opacity-0 font-raleway font-extrabold italic text-4xl sm:text-5xl mb-3 text-almost-black tracking-[0] leading-tight animate-slide-fade-in">
    "Hello,
    <br />
    This is nature."
  </h1>
  <p className="opacity-0 font-mukta-vaani text-xl text-gray-700 animate-fade-in-delayed-1">
    When nature calls, be ready for it.
  </p>
  <p className="opacity-0 font-mukta-vaani text-xl mb-4 text-gray-700 animate-fade-in-delayed-2">
    Out now in Berlin & NYC
  </p>
  <div className="opacity-0 flex justify-center gap-4 mb-12 animate-fade-in-delayed-3">
    <Link
      href="https://apps.apple.com/us/app/easypz/id6448388765"
      className="transform transition-transform active:scale-95"
    >
      <Image
        src="/images/store-ios.png"
        alt="Download on the App Store"
        width={150}
        height={44}
        className="h-11 w-auto"
      />
    </Link>
    <Link
      href="https://play.google.com/store/apps/details?id=com.beelphegor91.easypz"
      className="transform transition-transform active:scale-95"
    >
      <Image
        src="/images/store-android.png"
        alt="Get it on Google Play"
        width={150}
        height={44}
        className="h-11 w-auto"
      />
    </Link>
  </div>
  <div className="opacity-0 animate-fade-in-delayed-4">
    <Image
      src="/images/cat-toilet.png"
      alt="Cat on toilet paper"
      width={300}
      height={300}
      className="mx-auto"
    />
  </div>
</section>

        {/* Problem Section */}
        <section className="content-section py-16 text-center">
          <span className="text-primary inline-block opacity-0" data-animate>
            The Problem
          </span>
          <h2
            className="font-asap font-semibold text-3xl mt-2 mb-6 text-almost-black opacity-0"
            data-animate
          >
            Need a toilet?
          </h2>
          <p
            className="font-mukta-vaani text-lg max-w-2xl mx-auto text-gray-700 opacity-0"
            data-animate
          >
            When you're in an unfamiliar location and suddenly need to use the
            restroom, it can be a real challenge to find a clean, safe, and
            convenient option.
          </p>
          <div className="opacity-0" data-animate>
            <Image
              src="/images/problem.gif"
              alt="Person searching for restroom"
              width={300}
              height={300}
              className="mx-auto mt-8 animate-float"
            />
          </div>
        </section>

        {/* Solution Section */}
        <section className="content-section py-16 text-center">
          <span className="text-primary inline-block opacity-0" data-animate>
            The Solution
          </span>
          <h2
            className="font-asap font-semibold text-3xl mt-2 mb-6 text-almost-black opacity-0"
            data-animate
          >
            Meet Zima
          </h2>
          <p
            className="font-mukta-vaani text-lg max-w-2xl mx-auto text-gray-700 opacity-0"
            data-animate
          >
            A magical cat with extraordinary powers to locate the nearest and
            cleanest restrooms. Just open the app, and let Zima guide you to
            your destination.
          </p>
          <div className="space-y-8 mt-8">
            <div className="opacity-0" data-animate>
              <Image
                src="/images/zima-power.gif"
                alt="Zima the magical cat"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <div className="opacity-0" data-animate>
              <Image
                src="/images/app-demo.png"
                alt="EasyPZ app interface"
                width={300}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Ready to go Section */}
        <section className="content-section py-16 text-center">
          <h2
            className="font-asap font-semibold text-3xl mb-4 text-almost-black opacity-0"
            data-animate
          >
            Ready to go? 🚽
          </h2>
          <p
            className="font-mukta-vaani text-lg mb-8 text-gray-700 opacity-0"
            data-animate
          >
            Download EasyPZ now and never worry about finding a restroom again.
          </p>
          <div className="flex justify-center gap-4 opacity-0" data-animate>
            <Link
              href="https://apps.apple.com/us/app/easypz/id6448388765"
              className="transform transition-transform active:scale-95"
            >
              <Image
                src="/images/store-ios.png"
                alt="Download on the App Store"
                width={150}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.beelphegor91.easypz"
              className="transform transition-transform active:scale-95"
            >
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
      <ScrollDownButton />
      <Footer />
    </AnimationWrapper>
  );
}