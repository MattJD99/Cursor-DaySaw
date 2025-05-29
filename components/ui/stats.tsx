'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const stats = [
  { id: 1, name: 'Of customers read reviews', value: '90%' },
  { id: 2, name: 'Of map pack clicks', value: '45%' },
  { id: 3, name: 'Increase in conversion rate', value: '31%' },
  { id: 4, name: 'Trust reviews as much as recommendations', value: '88%' },
];

const stepsData = [
  { step: 1, title: 'Customer Interaction', description: 'Your customer completes a purchase or service.' },
  { step: 2, title: 'Automated Request', description: 'We send a personalized review email and text request automatically for you.' },
  { step: 3, title: 'Review Collection', description: 'Customer leaves a review on Google after you provide a product or service.' },
  { step: 4, title: 'AI Response', description: 'Our AI instantly responds to the review.' },
  { step: 5, title: 'Social Amplification', description: 'Positive reviews are shared on all of your social media channels.' },
];

export function Stats() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Unobserve after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: '0px 0px -50px 0px' // Optional: adjust trigger point
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="relative isolate bg-background">
      {/* How It Works Section */}
      <div className="pt-8 sm:pt-12 pb-16 sm:pb-20"> {/* Reduced top padding, kept bottom padding */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-10 sm:mt-12 lg:mt-16"> {/* Reduced top margin significantly */}
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <h2 className="section-title mb-6">
                How It Works
              </h2>
              <p className="section-description">
                Our streamlined process makes getting reviews and amplifying them effortless.
              </p>
            </div>

            {/* Vertical "How It Works" Layout */}
            <div className="relative mt-16 max-w-xl mx-auto lg:max-w-2xl">
              {/* Vertical connecting line - adjusted for new layout */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-indigo-600 hidden sm:block" 
                style={{ marginLeft: '1.5rem' }} // Aligns with the center of the 12-width step number circle
              ></div>

              <div className="space-y-12 lg:space-y-16">
                {stepsData.map((item, index) => (
                  // Each step will be a ref target for Intersection Observer
                  <div 
                    key={item.step} 
                    ref={(el: HTMLDivElement | null) => {
                      if (el) stepRefs.current[index] = el;
                    }} 
                    className="how-it-works-step relative flex items-start space-x-4 sm:space-x-6"
                  >
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-white font-bold text-lg shadow-md z-10">
                      {item.step}
                    </div>
                    <div className="pt-1"> {/* Minor padding for text alignment */}
                      <h3 className="text-xl font-semibold leading-7 text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Google Reviews Matter Section */}
      <div className="bg-background pt-0 pb-8 sm:pt-0 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title mb-4">
              Why Google Reviews Matter
            </h2>
            <p className="section-description">
              Google reviews are crucial for your business success. They influence your local search rankings and directly impact customer decisions.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-16 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[160px]">
                  <dd className="text-4xl font-semibold tracking-tight gradient-text mb-3">
                    {stat.value}
                  </dd>
                  <dt className="text-base leading-7 text-muted-foreground">
                    {stat.name}
                  </dt>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-4">
        <div className="w-full h-8 bg-[url('/images/googlefi-dots.webp')] bg-repeat-x bg-contain" />
      </div>
    </div>
  );
}
