'use client';

import { BenefitsSection } from '@/components/ui/BenefitsSection';

export function CTA() {
  return (
    <div id="contact" className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center relative p-[1px] rounded-3xl overflow-hidden group
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
          after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
            group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] 
            transition-all duration-300 
            group-hover:-translate-y-1"
          >
            <h2 className="section-title mb-2">
              Ready to Transform Your Online Reviews?
            </h2>
            <p className="text-lg text-gray-600 mb-8"> {/* Added margin-bottom */}
              Join local businesses in your area who are using our platform to boost their reputation and attract more customers every day.
            </p>
            {/* Added CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/book" className="btn-primary text-base px-8 py-3">
                Start Your 14-Day Trial
              </a>
              <a href="/book" className="btn-secondary text-base px-8 py-3">
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        <BenefitsSection /> {/* Keep the benefits section */}
      </div>
    </div>
  );
}
