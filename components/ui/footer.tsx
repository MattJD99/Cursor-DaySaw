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
  // GHL form is now handling email submission

  return (
    <footer className="bg-[#FFF8E6] rounded-t-[80px]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] leading-[40px] font-normal text-[#202124] mb-4">Let's get in touch.</h2>
          <p className="text-[14px] leading-[20px] text-[#5f6368] mb-8">
            Let us help get you some reviews and grow online today.
          </p>
          <div className="max-w-md mx-auto">
            <div className="ghl-form-container" style={{ position: 'relative', width: '100%', height: '100px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/4GgEbS9rI61Q0FNTWfsQ"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0' }}
                id="inline-4GgEbS9rI61Q0FNTWfsQ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website simple email form"
                data-height="432"
                data-layout-iframe-id="inline-4GgEbS9rI61Q0FNTWfsQ"
                data-form-id="4GgEbS9rI61Q0FNTWfsQ"
                title="Website simple email form"
              >
              </iframe>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>

        {/* Dots with gradient background */}
        <div className="relative w-full overflow-hidden bg-transparent py-8">
          <DotsBackground className="w-full h-12" />
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center space-x-8">
          <Link href="/about" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">About</Link>
          <Link href="/features" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">Features</Link>
          <Link href="/contact" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">Contact</Link>
          <Link href="/privacy" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">Privacy Policy</Link>
          <Link href="/terms" className="text-[12px] leading-[16px] text-[#5f6368] hover:text-[#202124]">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
