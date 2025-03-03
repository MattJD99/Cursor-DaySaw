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
  BellRing 
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Automated Review Requests */}
        <div className="border rounded-lg p-6 lg:col-span-2 lg:row-span-2">
          <div className="mb-4 text-2xl">
            <MessageSquare />
          </div>
          <h3 className="text-xl font-semibold mb-2">Automated Review Requests</h3>
          <p className="text-gray-700">
            Send personalized text and email requests with our automated system. Use client names on custom images to increase response rates.
          </p>
        </div>

        {/* AI-Powered Review Responses */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <Bot />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Review Responses</h3>
          <p className="text-gray-700">
            Respond to reviews instantly with AI that's always working for you. Handle positive reviews automatically and manage negative ones with care.
          </p>
        </div>

        {/* Social Media Integration */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <Share2 />
          </div>
          <h3 className="text-xl font-semibold mb-2">Social Media Integration</h3>
          <p className="text-gray-700">
            Turn your 5-star reviews into engaging social media content automatically. Post to Facebook, Instagram, and Google with customized designs.
          </p>
        </div>

        {/* Dynamic Review Widgets */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <LayoutGrid />
          </div>
          <h3 className="text-xl font-semibold mb-2">Dynamic Review Widgets</h3>
          <p className="text-gray-700">
            Showcase your reviews on your website with beautiful responsive widgets. Choose from list, grid, masonry, or carousel layouts.
          </p>
        </div>

        {/* Smart Scheduling */}
        <div className="border rounded-lg p-6 lg:col-span-2 lg:row-span-2">
          <div className="mb-4 text-2xl">
            <Calendar />
          </div>
          <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
          <p className="text-gray-700">
            Automatically schedule review requests at the perfect time.
          </p>
        </div>

        {/* CRM Integration */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <Repeat />
          </div>
          <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
          <p className="text-gray-700">
            Seamlessly integrate with your existing CRM systems like Jobber, QuickBooks, and Calendly for automated review collection.
          </p>
        </div>

        {/* Bulk Contact Upload */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <Upload />
          </div>
          <h3 className="text-xl font-semibold mb-2">Bulk Contact Upload</h3>
          <p className="text-gray-700">
            Easily import your existing customer database and start collecting reviews from past clients immediately.
          </p>
        </div>

        {/* Review Monitoring */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <LineChart />
          </div>
          <h3 className="text-xl font-semibold mb-2">Review Monitoring</h3>
          <p className="text-gray-700">
            Track and respond to reviews across all platforms.
          </p>
        </div>

        {/* Automated Follow-ups */}
        <div className="border rounded-lg p-6 lg:col-span-1">
          <div className="mb-4 text-2xl">
            <BellRing />
          </div>
          <h3 className="text-xl font-semibold mb-2">Automated Follow-ups</h3>
          <p className="text-gray-700">
            Never miss a chance to get feedback from your customers.
          </p>
        </div>
      </div>
    </div>
  );
}
