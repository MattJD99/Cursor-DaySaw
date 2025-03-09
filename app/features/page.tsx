'use client';

import React from 'react';
import { 
  MessageSquare, 
  Bot, 
  Share2, 
  LayoutGrid, 
  Calendar, 
  Repeat, 
  Upload, 
  LineChart, 
  BellRing,
  Zap,
  Heart,
  Users,
  BarChart
} from 'lucide-react';
import Image from 'next/image';
import { HeroHeadline } from '@/components/ui/HeroHeadline';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <div className="text-center mb-16">
        <HeroHeadline text="DaySaw Review Automation" />
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          Our comprehensive platform helps you collect, manage, and showcase reviews across all platforms, 
          saving you time and boosting your online reputation.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {/* Personalized Images */}
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Zap className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Personalized Images</h3>
              <p className="text-gradient text-4xl font-bold mb-2">100%</p>
              <p className="text-gray-700 text-sm mt-auto">
                Custom images with client names to increase engagement
              </p>
            </div>
          </div>
        </div>

        {/* Dual-Channel Outreach */}
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <MessageSquare className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Up to</h3>
              <p className="text-gradient text-4xl font-bold mb-2">40%</p>
              <p className="text-gray-700 text-sm mt-auto">
                Higher response rates with email and text messages
              </p>
            </div>
          </div>
        </div>

        {/* AI-Powered Responses */}
        <div className="col-span-12 sm:col-span-4 md:col-span-3">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Bot className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Up to</h3>
              <p className="text-gradient text-4xl font-bold mb-2">24/7</p>
              <p className="text-gray-700 text-sm mt-auto">
                Automatic review engagement that saves you time
              </p>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="col-span-12 sm:col-span-12 md:col-span-3">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Heart className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">One Meal</h3>
              <p className="text-gradient text-4xl font-bold mb-2">Donated</p>
              <p className="text-gray-700 text-sm mt-auto">
                For every review, supporting your local community
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reactivation */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Users className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Customer Reactivation</h3>
              <p className="text-gradient text-5xl font-bold mb-3">Unlimited</p>
              <p className="text-gray-700 mt-auto">
                Turn past customers into new reviews and referrals with our automated system
              </p>
            </div>
          </div>
        </div>

       {/* Central Feature - DaySaw Logo */}
        <div className="col-span-12 md:col-span-6 row-span-2">
          <div className="bg-white rounded-3xl p-8 h-full flex items-center justify-center group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Image 
                  src="/images/daysaw-logo-black-transp.png" 
                  alt="DaySaw Logo" 
                  width={200}
                  height={100}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 animate-gradient-flow">
                  Review Automation
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Seamless Integration */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Repeat className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Seamless Integration</h3>
              <p className="text-gradient text-4xl font-bold mb-2">One-Click</p>
              <p className="text-gray-700 mt-auto">
                Works with your existing CRM system for effortless setup
              </p>
            </div>
          </div>
        </div>

        {/* Hands-Off Management */}
        <div className="col-span-12 sm:col-span-4 md:col-span-4">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <Calendar className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Hands-Off</h3>
              <p className="text-gradient text-4xl font-bold mb-2">Management</p>
              <p className="text-gray-700 text-sm mt-auto">
                We handle the follow-up while you focus on business
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Monitoring */}
        <div className="col-span-12 sm:col-span-4 md:col-span-4">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <LineChart className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Real-Time</h3>
              <p className="text-gradient text-4xl font-bold mb-2">Monitoring</p>
              <p className="text-gray-700 text-sm mt-auto">
                Track review performance across all platforms
              </p>
            </div>
          </div>
        </div>

        {/* Results Driven */}
        <div className="col-span-12 sm:col-span-4 md:col-span-4">
          <div className="bg-gray-100 rounded-3xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 group-hover:animate-border-flow"></div>
            
            <div className="flex flex-col h-full">
              <BarChart className="h-10 w-10 mb-4 text-gray-800" />
              <h3 className="text-lg font-semibold mb-1">Results</h3>
              <p className="text-gradient text-4xl font-bold mb-2">Driven</p>
              <p className="text-gray-700 text-sm mt-auto">
                Measurable improvement in your online reputation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
