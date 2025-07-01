"use client";

import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { MessageSquare, Inbox, Bell, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CaptureLeadsPage() {
  // Statistics data
  const stats = [
    { value: "391%", label: "Increase in conversions when responding in the first minute" },
    { value: "78%", label: "Of customers buy from the first business that responds" },
    { value: "82%", label: "Of consumers expect a response in under 10 minutes" },
    { value: "89%", label: "Customer retention for businesses using omnichannel engagement" },
  ];

  // Features data with icons
  const features = [
    { 
      title: "24/7 Website Chat", 
      description: "Engages visitors on your website, answers common questions like your hours or services, and captures their contact info to turn anonymous traffic into qualified leads.",
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />
    },
    { 
      title: "Social & SMS Answering", 
      description: "Instantly replies to every Facebook DM, Instagram DM, and incoming text, ensuring no lead ever feels ignored, even after hours.",
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />
    },
    { 
      title: "Unified Conversation Hub", 
      description: "Ends the chaos of checking multiple apps. All messages from every channel are organized into one simple inbox for you to review anytime.",
      icon: <Inbox className="h-8 w-8 text-blue-600" />
    },
    { 
      title: "Instant Lead Notifications", 
      description: "The moment a lead is captured, your team gets an instant SMS and email alert with their details so you can follow up while the lead is still hot.",
      icon: <Bell className="h-8 w-8 text-blue-600" />
    },
  ];

  // Onboarding steps
  const steps = [
    { 
      step: 1,
      title: "Sign Up & Schedule", 
      description: "Choose your package and provide your details on our secure sign-up page. Then, book the quick Discovery Call on our calendar." 
    },
    { 
      step: 2,
      title: "Connect on a Discovery Call", 
      description: "On this brief setup call, we'll help you securely connect your social media accounts and get your business information to train your new assistant." 
    },
    { 
      step: 3,
      title: "Launch & Go Live!", 
      description: "Our team configures your system, which usually takes 24-48 hours. Your 14-day free trial officially begins the moment we notify you that it's live." 
    },
  ];

  // FAQs
  const faqs = [
    { 
      question: "How does the 24/7 chat work?", 
      answer: "We install an intelligent chat widget on your site. We train it on your specific business data (hours, services, etc.). It can answer common questions and is programmed to ask for a visitor's name, email, and phone number to turn them into a lead." 
    },
    { 
      question: "What social media platforms can you connect to?", 
      answer: "The Instant Connect feature for lead capture is focused on messaging apps like Facebook Messenger DMs, Instagram DMs, and SMS. This package also includes our PostFlow Social Media Planner, which allows you to schedule posts to a wider range of platforms including Facebook, Instagram, LinkedIn, Google Business Profile, TikTok, and YouTube from one calendar." 
    },
    { 
      question: "Can I jump into a conversation myself?", 
      answer: "Absolutely. The automated assistant handles the initial, instant reply to capture the lead. All conversations appear in your Unified Conversation Hub, and you can take over and reply personally at any time." 
    },
  ];

  // State for onboarding animation
  const [visibleSteps, setVisibleSteps] = useState([false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps sequentially
            visibleSteps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleSteps(prev => {
                  const newVisible = [...prev];
                  newVisible[i] = true;
                  return newVisible;
                });
              }, i * 500);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Never Miss a Lead</span> Again.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Column */}
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300
                    before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
                    after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
              <div className="relative h-full bg-white rounded-3xl p-6 group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3">Every Missed Message is Lost Revenue.</h3>
                <p className="text-base">
                  In the time it takes to find a DM from last night, your next customer has already found a competitor. 
                  Instant engagement isn't a luxury—it's how you win business today.
                </p>
              </div>
            </div>
            
            {/* Solution Column */}
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300
                    before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
                    after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
              <div className="relative h-full bg-white rounded-3xl p-6 flex flex-col group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3">Hire Your 24/7 Lead Capture Specialist.</h3>
                <p className="text-base mb-6">
                  Your automated employee works around the clock to instantly reply to every website visitor, social media DM, 
                  and text message, capturing their contact details so you can follow up.
                </p>
<Button className="btn-primary self-start">
  Start My 14-Day Free Trial
</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Why <span className="gradient-text">Every Second</span> Matters
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              // Set different animation delays for each card
              const delays = ["0s", "0.5s", "1.2s", "0.2s"];
              const durations = ["5s", "5.5s", "4.5s", "6s"];
              
              return (
                <div key={index} className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300
                        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
                        after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
                  <div className="relative h-full bg-white rounded-3xl p-6 flex flex-col items-center justify-center">
                    <dd 
                      className="text-4xl font-semibold tracking-tight gradient-text mb-3 animate-float"
                      style={{
                        animationDelay: delays[index],
                        animationDuration: durations[index]
                      }}
                    >
                      {stat.value}
                    </dd>
                    <dt className="text-base leading-7 text-muted-foreground text-center">{stat.label}</dt>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            What Your <span className="gradient-text">Lead Capture</span> Specialist Does <span className="gradient-text">24/7</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300
                    before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
                    after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
                <div className="relative h-full bg-white rounded-3xl p-8 group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="w-full py-16 md:py-24 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Your White-Glove</span> Onboarding Process
          </h2>
          <p className="text-base md:text-lg text-center mt-2 mb-12">We handle the heavy lifting so you can enjoy the benefits from day one.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 relative min-h-[300px]">
            {/* Horizontal connectors for desktop */}
            {visibleSteps[0] && visibleSteps[1] && (
              <div className="hidden md:block absolute top-1/4 left-1/3 w-1/3 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 animate-connectLine"></div>
            )}
            {visibleSteps[1] && visibleSteps[2] && (
              <div className="hidden md:block absolute top-1/4 left-2/3 w-1/3 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 animate-connectLine" style={{ animationDelay: '0.5s' }}></div>
            )}
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg flex-1 max-w-md mx-auto transition-all duration-500 ${
                  visibleSteps[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate my-12 md:my-20">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center relative p-[1px] rounded-3xl overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Ready to Turn Missed Opportunities Into New Customers?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Start your no-risk, 14-day free trial and see how your new automated employee can grow your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<Button className="btn-primary">
  Claim My 14-Day Free Trial Now
</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Lead Capture FAQs</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
