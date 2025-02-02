'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { HeroHeadline } from './HeroHeadline';

export function Hero() {
  const typedRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const options = {
      strings: [
        'Reviews',
        'Social Posts',
        'Interactions',
        'Free Time',
        'Sales',
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 3500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    };

    const typed = new Typed(typedRef.current, options);

    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 0.75;
    }

    return () => {
      typed.destroy();
    };
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
        <h1 className="section-title mb-6">
          Let's get your reviews rolling!
        </h1>

        {/* Subheading */}
        <h2 className="section-title mb-8">
          We're ready to boost your business with glowing reviews!
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