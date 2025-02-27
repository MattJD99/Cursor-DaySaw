'use client';

import { useState } from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { DotsBackground } from "@/components/ui/DotsBackground";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61560036661167",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/daysaw.agency/",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/daysaw-agency-612b16309/",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
  };

  return (
    <footer className="bg-[#FFF8E6]">
      <div className="w-full rounded-t-[80px] bg-[#FFF8E6] z-10">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          {/* Newsletter Section */}
          <div className="text-center mb-12">
            <h2 className="text-[32px] leading-[40px] font-normal text-[#202124] mb-4">
              Let's get in touch.
            </h2>
            <p className="text-[14px] leading-[20px] text-[#5f6368] mb-8">
              Let us help get you some reviews and grow online today.
            </p>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 text-[14px] leading-[20px] bg-white border-0 shadow-sm ring-1 ring-inset ring-[#dadce0] placeholder:text-[#5f6368] focus:ring-2 focus:ring-inset focus:ring-[#1a73e8]"
                required
              />
              <button
                type="submit"
                className="relative rounded-full px-6 py-3 overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 transition-all duration-300"
              >
                <span className="relative text-[14px] leading-[20px] font-medium z-10">
                  Subscribe
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
          <DotsBackground className="w-full h-12" />
          {/* Footer Links */}
          <div className="mt-8 flex justify-center space-x-8">
            <Link
              href="/about"
              className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
