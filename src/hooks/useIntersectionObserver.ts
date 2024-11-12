'use client';

import { useEffect } from 'react';

export function useIntersectionObserver() {
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const targets = document.querySelectorAll('.animate-fade-in-scroll');
    targets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}