'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(false);  // Start as invisible
  const [isAtBottom, setIsAtBottom] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    // Initial delay to match hero animation sequence
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Adjust this timing to match when your hero section is fully loaded

    const handleScroll = () => {
      // Hide button on scroll
      setIsVisible(false);

      // Clear existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Check if we're at the bottom
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(isBottom);

      // Set new timeout to show button after 2 seconds of no scrolling
      if (!isBottom) {
        scrollTimeout = setTimeout(() => {
          setIsVisible(true);
        }, 2000);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      clearTimeout(initialTimeout);
    };
  }, []);

  const scrollDown = () => {
    const currentScroll = window.scrollY;
    const targetScroll = currentScroll + window.innerHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  if (isAtBottom) return null;

  return (
    <button
      onClick={scrollDown}
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 
        flex flex-col items-center 
        text-gray-600 hover:text-primary 
        transition-all duration-300 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      aria-label="Scroll down"
    >
      <span className="text-sm mb-2 font-mukta-vaani">Scroll down</span>
      <ChevronDown size={24} className="animate-bounce-gentle" />
    </button>
  );
}