import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";
import AnimationWrapper from "@/components/AnimationWrapper";
import InteractiveZima from "@/components/InteractiveZima";
import StoreButtons from "@/components/StoreButtons";

export default function Home() {
  return (
    <AnimationWrapper>
      <Navbar />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Section */}
        <section className="min-h-[80vh] py-8 flex flex-col justify-center text-center">
          <div className="mb-4">
            <Image
              src="/images/marker-primary.png"
              alt=""
              width={24}
              height={24}
              className="mx-auto"
            />
          </div>
          <h1 className="hero-title opacity-0 font-raleway font-extrabold italic text-4xl sm:text-5xl mb-3 text-almost-black tracking-[0] leading-tight animate-slide-fade-in">
            "Hello.
            <br />
            This is nature."
          </h1>
          <p className="opacity-0 font-mukta-vaani text-xl text-gray-700 animate-fade-in-delayed-1">
            When nature calls, be ready for it.
          </p>
          <p className="opacity-0 font-mukta-vaani text-xl mb-4 text-gray-700 animate-fade-in-delayed-2">
            Out now in Berlin & NYC
          </p>
          <StoreButtons
            className="mb-6"
            animationClass="opacity-0 animate-fade-in-delayed-3"
          />
          <div className="opacity-0 animate-fade-in-delayed-4">
            <Image
              src="/images/cat-toilet.gif"
              alt="Cat on toilet paper"
              width={400}
              height={400}
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
            className="font-raleway font-extrabold italic text-2xl sm:text-3xl mb-4 text-almost-black opacity-0"
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
            className="font-raleway font-extrabold italic text-2xl sm:text-3xl mb-4 text-almost-black opacity-0"
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
          <div className="mt-8">
            <div className="opacity-0" data-animate>
              <InteractiveZima />
            </div>
          </div>
        </section>
        {/* App Demo Section */}
        <section className="content-section min-h-[80vh] text-center">
          <div className="opacity-0" data-animate>
            <div className="relative w-full max-w-xs mx-auto h-[80vh]">
              <Image
                src="/images/app-demo.gif"
                alt="EasyPZ app interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Ready to go Section */}
        <section className="content-section py-16 pb-32 text-center">
          <h2
            className="font-raleway font-extrabold italic text-2xl sm:text-3xl mb-4 text-almost-black opacity-0"
            data-animate
          >
            Ready to go? 🚽
          </h2>
          <p
            className="font-mukta-vaani text-lg mb-8 text-gray-700 opacity-0"
            data-animate
          >
            EasyPZ is up to 5x faster than Google or Apple Maps.<br></br>
            Download today and never worry about finding a restroom.<br></br>
            It's completely free and no sign-up required!
          </p>
          <div className="opacity-0" data-animate>
            <StoreButtons className="mb-6" />
          </div>
        </section>
      </main>
      <ScrollDownButton />
      <Footer />
    </AnimationWrapper>
  );
}
