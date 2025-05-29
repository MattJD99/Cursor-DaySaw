'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

// Counter animation function (adapted from old HTML)
function animateCounter(elementId: string, targetValue: number, duration: number) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const startValue = 0;
  // Calculate increment slightly differently to avoid potential division by zero if duration is very small
  const frameDuration = 1000 / 60; // 60 FPS
  const totalFrames = Math.round(duration / frameDuration);
  const increment = targetValue / totalFrames;
  let currentValue = startValue;
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    currentValue += increment;

    if (frame >= totalFrames) {
      clearInterval(timer);
      currentValue = targetValue; // Ensure it ends exactly at the target
    }

    element.textContent = Math.floor(currentValue).toLocaleString();
  }, frameDuration);
}


export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const typedRef = useRef(null);

  useEffect(() => {
    // Typed.js initialization
    let typedInstance: Typed | null = null;
    if (typedRef.current) {
      const options = {
        strings: [
          '5-Star Reviews',
          'Review Management',
          'Social Posts',
          'Online Reputation',
          'Leads'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
      };
      typedInstance = new Typed(typedRef.current, options);
    }

    // Counter animation initialization
    // Use Intersection Observer to trigger animation when the counter is visible
    const counterElement = document.getElementById('mealCounterHero');
    let observer: IntersectionObserver | null = null;

    if (counterElement) {
       observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start animation when the element enters the viewport
            animateCounter('mealCounterHero', 24871, 2000); // Use the target value from the HTML
            observer?.unobserve(entry.target); // Stop observing once animated
          }
        });
      }, { threshold: 0.1 }); // Trigger when 10% visible

      observer.observe(counterElement);
    }


    // Cleanup function
    return () => {
      typedInstance?.destroy();
      if (observer && counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative isolate bg-white min-h-[120vh]">
      {/* Background section with video */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[800px] bg-white">
        <div className="relative w-full h-full rounded-b-[80px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
          <video
            ref={videoRef}
            className="w-full h-full object-cover mt-16"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectPosition: '50% 40%' }}
          >
            <source src="/images/daysaw-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-32">
        {/* Headline - No background */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          More <span className="gradient-text">Reviews</span>, Less <span className="gradient-text">Effort</span>. It's That <span className="gradient-text">Simple</span>.
        </h1>

        {/* Subheading */}
        <div className="mb-8 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-700 inline-block bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3">
            Automatically request reviews through email & SMS without changing your routine. We handle the replies and social posting, plus, <span className="sparkle-text">every 5-star review helps us donate a meal.</span>
          </h2>
        </div>

        {/* Main Description - Small bubble (REMOVED) */}
        {/* Features List - Small bubble (REMOVED) */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Content removed as per request */}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="/book" className="btn-primary text-base px-8 py-3">
            Start Your 14-Day Trial
          </a>
          {/* Secondary CTA Button - Using btn-secondary style but matching primary size */}
          <a href="/book" className="btn-secondary text-base px-8 py-3">
            Book a Demo
          </a>
        </div>

        {/* Donation Counter Section */}
        <div className="mt-16 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Make a Difference With Every Review</h3>
            <p className="text-sm text-gray-600">For every review your business receives through DaySaw, we donate a meal via Feeding America.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text" id="mealCounterHero">24,871</div>
              <div className="text-xs text-gray-600">Meals Donated</div>
            </div>
            <img src="/images/feeding-america-logo.png" alt="Feeding America" className="h-10" /> {/* Ensure this image exists */}
          </div>
        </div>

      </div>
    </div>
  );
}
