'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          '5-Star Reviews',
          'Social Posts',
          'Leads',
          'Free Time',
          'Interactions'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
      };
      const typed = new Typed(typedRef.current, options);
      return () => typed.destroy();
    }
  }, []);

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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          <span className="text-gray-900">Grow with More</span>{" "}
          <span ref={typedRef} className="gradient-text whitespace-nowrap"></span>
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Automate 5-Star Reviews, Boost Your Leads, and Give Back.
        </h2>

        {/* Main Description - Small bubble */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our automated follow-ups get you more 5-star reviews—without lifting a finger—and post them everywhere for maximum impact. For every review we collect, a meal is donated.
            </p>
          </div>

          {/* Features List - Small bubble */}
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
              <li className="flex items-center justify-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg"></span>
                <span>Automated texts & emails</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg"></span>
                <span>Auto-post to social platforms</span>
              </li>
              <li className="flex items-center justify-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg"></span>
                <span>Every review feeds someone</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="/book" className="btn-primary text-base px-8 py-3">
            Start Your 14-Day Trial
          </a>
          <div className="inline-block bg-white/40 backdrop-blur-sm rounded-xl px-3 py-1">
            <p className="text-sm text-gray-700">
              Get more reviews in days—or pay nothing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 