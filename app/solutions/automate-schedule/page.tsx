import { Metadata } from 'next';
import Image from 'next/image';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Total Automation | DaySaw',
  description: 'Your 24/7 Executive Assistant that handles calls, captures leads, and builds your reputation',
};

export default function TotalAutomationPage() {
  const faqs = [
    {
      question: 'How does the call answering service work?',
      answer: 'Your automated assistant answers calls 24/7 using a natural-sounding voice that handles common questions, screens for spam, and books appointments directly into your calendar.'
    },
    {
      question: 'What is included in Total Automation?',
      answer: 'You get all features from Presence Builder (reputation management) and Engage & Convert (lead capture), plus exclusive 24/7 call answering and appointment booking.'
    },
    {
      question: 'Can I customize the call handling flow?',
      answer: 'Yes, you can create custom call flows with different greetings, menu options, and routing rules tailored to your business.'
    },
    {
      question: 'How quickly can I set up my Executive Assistant?',
      answer: 'Most businesses are fully operational within 24 hours after providing their calendar access and basic business information.'
    }
  ];

  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="section-title">Total Automation: Hire Your 24/7 Executive Assistant</h1>
        <p className="section-description max-w-3xl mx-auto">
          Our ultimate solution for business owners who want to free up their time to focus on high-value work, 
          knowing that their reputation, lead capture, and administrative tasks are handled flawlessly 24/7.
        </p>
      </div>

      {/* Value Stack Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">The Ultimate Employee: Get Every Feature We Offer</h2>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-8">
          Total Automation includes all powerful tools from our <span className="font-semibold">Presence Builder</span> and 
          <span className="font-semibold"> Engage & Convert</span> packages, PLUS our exclusive call automation suite.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Presence Builder</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automated review requests</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>AI-powered review responses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Social media integration</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold mb-3">Engage & Convert</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 website chat assistant</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Social & SMS response</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Instant lead notifications</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-6 rounded-2xl border border-blue-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
              EXCLUSIVE
            </div>
            <h3 className="text-xl font-bold mb-3">Total Automation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 call answering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Live appointment booking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Premium 24/7 support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Exclusive Feature Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">PLUS: 24/7 Call Assist for Hands-Free Appointment Booking</h2>
          <p className="prose prose-lg text-gray-600 mb-6">
            This is what truly sets your Executive Assistant apart. You get a dedicated business phone number that works for you around the clock.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Automated Call Answering</h3>
                <p className="text-gray-600">Your assistant answers every call with a professional greeting, screens spam, and answers common questions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Live Appointment Booking</h3>
                <p className="text-gray-600">After qualifying callers, your assistant books them directly into your calendar based on real-time availability.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Wake Up to Booked Appointments</h3>
                <p className="text-gray-600">Start your day with a calendar full of qualified appointments booked while you slept.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-lg font-semibold mb-2">24/7 Executive Assistant Visualization</div>
              <p className="text-gray-600">Professional graphic showing assistant managing multiple tasks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefit Groups */}
      <div className="mb-20">
        <h2 className="section-title text-center mb-12">Complete Business Automation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Group 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">You'll Never Miss a Call Again</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 professional call answering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Advanced spam filtering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Custom call flows for different scenarios</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Multi-lingual support</span>
              </li>
            </ul>
          </div>
          
          {/* Group 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-green-600">You'll Capture Every Digital Lead</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 website chat assistant</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Instant response to texts and social DMs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Lead qualification and scoring</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automated contact saving</span>
              </li>
            </ul>
          </div>
          
          {/* Group 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">You'll Build a 5-Star Reputation</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automated review requests</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>AI-powered review responses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Social media testimonial sharing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Review analytics dashboard</span>
              </li>
            </ul>
          </div>
          
          {/* Group 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">You'll Maintain an Active Social Presence</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Multi-platform social scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Content repurposing from reviews</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Optimal posting time optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Performance analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Who Needs a 24/7 Executive Assistant?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Service businesses with high call volumes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Small teams with limited administrative staff</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Growth-focused companies scaling operations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Businesses with after-hours customer inquiries</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">You'll Benefit If You:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Miss calls during peak business hours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Struggle to keep up with social media</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Spend hours scheduling appointments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Want to improve online reputation systematically</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} title="Total Automation FAQs" />
    </div>
  );
}
