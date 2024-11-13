'use client';

import { useEffect } from 'react';

export default function AnimationWrapper({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Hero section animations
    const animateHero = () => {
      const title = document.querySelector('.hero-title');
      const subtitle = document.querySelector('.hero-subtitle');
      const storeButtons = document.querySelector('.hero-buttons');
      const heroImage = document.querySelector('.hero-image');

      // Sequence the hero animations
      setTimeout(() => {
        title?.classList.remove('opacity-0');
        title?.classList.add('animate-fade-in');
      }, 100);

      setTimeout(() => {
        subtitle?.classList.remove('opacity-0');
        subtitle?.classList.add('animate-fade-in');
      }, 600);

      setTimeout(() => {
        storeButtons?.classList.remove('opacity-0');
        storeButtons?.classList.add('animate-fade-in');
      }, 1000);

      setTimeout(() => {
        heroImage?.classList.remove('opacity-0');
        heroImage?.classList.add('animate-fade-in');
      }, 1400);
    };

    // Call hero animation immediately
    animateHero();

    // Scroll-based animations for other sections
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          const section = entry.target;
          const elements = section.querySelectorAll('[data-animate]');
          
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.remove('opacity-0');
              element.classList.add('animate-fade-in');
            }, index * 250);
          });

          // Stop observing once animation is triggered
          observer.unobserve(section);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: [0, 0.35, 0.75], // Multiple thresholds for more precise triggering
      rootMargin: '-10% 0px' // Starts animation slightly before element comes into view
    });

    // Observe all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}