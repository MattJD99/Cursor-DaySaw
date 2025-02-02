import React from 'react';
import { Star } from 'lucide-react';

const benefits = [
  {
    title: "Seamless Bulk Import",
    description: "Quickly add all your past customers at once.",
  },
  {
    title: "Friendly Automated Outreach",
    description: "We handle emails & texts, so you never miss a review.",
  },
  {
    title: "Instant Visibility",
    description: "Each new 5-star rating posts to Google and social channels automatically.",
  },
  {
    title: "Give Back",
    description: "Every 5-star review triggers a donated meal in your community.",
  },
  {
    title: "Hands-Free Management",
    description: "Our system does the follow-up and posting while you focus on business.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="section-title mb-12">
          Local businesses just like yours are already seeing real results — be the next success story.
        </h2>
        
        {/* Container with gradient border */}
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600">
          <div className="relative bg-white rounded-3xl p-8">
            {/* 3D Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
                    hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] 
                    transition-all duration-300 
                    hover:-translate-y-2 
                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-transparent before:to-blue-500/5 before:opacity-0 before:transition-opacity hover:before:opacity-100
                    after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.1)] after:transition-shadow hover:after:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]"
                >
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 scale-150"></div>
                    <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-10 w-10 text-yellow-500 drop-shadow-[0_4px_8px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_8px_16px_rgba(234,179,8,0.4)]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 relative z-10 transform group-hover:scale-105 transition-transform duration-300">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 relative z-10">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 