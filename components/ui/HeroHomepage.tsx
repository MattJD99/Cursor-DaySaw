'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ROICalculator from './ROICalculator';

export function HeroHomepage() {
  return (
    <div className="relative isolate min-h-[100vh]">
      {/* Background section with video */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[800px] bg-white">
        <div className="relative w-full h-full rounded-b-[80px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
          <video
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

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* New headline */}
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Finally, a Team Member Who <span className="gradient-text">Never Sleeps</span>
        </motion.h1>
        
        {/* New sub-headline */}
        <motion.p 
          className="text-xl sm:text-2xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          DaySaw.agency provides your business with a dedicated employee to manage your Google reviews, capture leads, and book appointments, all on autopilot.
        </motion.p>

        {/* "Employee" Introduction */}
        <motion.div 
          className="mb-10 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Imagine hiring one employee who could:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Instantly answer every phone call, text, Facebook message, Instagram DM, and website chat</span>
              </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">✓</span>
              <span>Book appointments directly into your calendar from phone calls, text, social media, and website visitors</span>
            </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">✓</span>
                <span>Turn your happy customers into 5-star reviews and post them to your social accounts</span>
              </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1">✓</span>
              <span>Work 24/7 without taking a break</span>
            </li>
          </ul>
          <p className="mt-4 text-lg font-semibold">That's what we set up for you.</p>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ROICalculator />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/book" className="btn-primary px-8 py-3">
            Start Your 14-Day Free Trial
          </Link>
          <Link href="/pricing" className="btn-secondary px-8 py-3">
            View Pricing
          </Link>
        </motion.div>

        {/* Donation Counter Section (preserved) */}
        <div className="mt-16 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Make a Difference With Every Review</h3>
            <p className="text-sm text-gray-600">For every review your business receives through DaySaw, we donate a meal via Feeding America.</p>
          </div>
          <img src="/images/feeding-america-logo.png" alt="Feeding America" className="h-10" />
        </div>
      </div>
    </div>
  );
}
