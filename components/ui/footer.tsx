'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { DotsBackground } from "@/components/ui/DotsBackground";

const navigation = {
  main: [
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
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
  // GHL form is now handling email submission

const GhlFormEmbed = dynamic(() => import('@/components/ui/GhlFormEmbed'), {
  ssr: false,
  loading: () => <div style={{ height: '100px', width: '100%', backgroundColor: '#f0f0f0' }} />, // Optional loading state
});

  return (
    <footer className="bg-[#FFF8E6] rounded-t-[80px]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Newsletter Section */}
<div className="text-center mb-12">
  <h2 className="text-[32px] leading-[40px] font-normal text-[#202124] mb-4">
    Put Your Business Growth on Autopilot.
  </h2>
  <p className="text-[14px] leading-[20px] text-[#5f6368] mb-8">
    Free up your time and never miss an opportunity again. Your automated assistant can handle lead capture, reputation management, and appointment booking for less than $1 an hour.
  </p>
          <div className="max-w-xl mx-auto">
            <GhlFormEmbed />
          </div>
        </div>

        {/* Dots with gradient background */}
        <div className="relative w-full overflow-hidden bg-transparent py-8">
          <DotsBackground className="w-full h-12" />
        </div>

        {/* Logo, Description, Social Links */}
        <div className="mt-12 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-col items-center md:items-start md:flex-1">
             {/* Assuming logo path is correct */}
            <img className="h-8 w-auto mb-4" src="/images/daysaw-logo-black-transp.png" alt="DaySaw Agency" />
            <p className="text-xs leading-5 text-gray-500 max-w-xs text-center md:text-left">
              DaySaw.agency provides your business with a 24/7 automated employee to build your reputation, capture every lead, and automate your schedule. For every 5-star review you earn, we donate a meal to someone in need.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center space-x-6 md:order-last">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links & Copyright */}
<div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 md:order-2">
    {navigation.main.map((item) => (
       <Link key={item.name} href={item.href} className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">
         {item.name}
       </Link>
    ))}
    {process.env.NODE_ENV === 'development' && (
      <Link href="/preview" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">
        Preview
      </Link>
    )}
  </div>
  <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
    &copy; {new Date().getFullYear()} DaySaw.agency. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
}
