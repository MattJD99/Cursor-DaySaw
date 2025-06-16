import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features | DaySaw',
  description: 'Discover our complete suite of automation solutions',
};

export default function FeaturesPage() {
  const solutions = [
    {
      name: 'Build Trust & Reputation',
      icon: '⭐',
      description: 'Automatically collect and showcase customer reviews',
      features: [
        'Automated review requests',
        'AI-powered responses',
        'Social media integration',
        'Review widgets for your website',
        'Analytics dashboard'
      ],
      link: '/solutions/build-trust'
    },
    {
      name: 'Capture Every Lead',
      icon: '💬',
      description: 'Never miss an inquiry with 24/7 automated responses',
      features: [
        'Website chat widget',
        'Social media DM responses',
        'Text message automation',
        'Lead qualification',
        'Centralized Contacts Hub'
      ],
      link: '/solutions/capture-leads'
    },
    {
      name: 'Automate Your Schedule',
      icon: '📅',
      description: 'Effortless appointment booking and social media management',
      features: [
        '24/7 call answering',
        'Calendar integration',
        'Robocall filtering',
        'Social media scheduler',
        'PostFlow content planning'
      ],
      link: '/solutions/automate-schedule'
    }
  ];

  const allFeatures = [
    { name: 'Automated Review Requests', available: [true, true, true] },
    { name: 'AI-Powered Responses', available: [true, true, true] },
    { name: 'Website Chat Widget', available: [false, true, true] },
    { name: 'Social Media Integration', available: [true, false, true] },
    { name: '24/7 Call Answering', available: [false, false, true] },
    { name: 'Appointment Booking', available: [false, false, true] },
    { name: 'Contacts Hub', available: [false, true, true] },
    { name: 'Social Media Scheduler', available: [false, false, true] }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="section-title">Complete Business Automation</h1>
        <p className="section-description">
          Our integrated solutions work together to automate your business operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{solution.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{solution.name}</h3>
            <p className="text-gray-600 mb-5">{solution.description}</p>
            
            <ul className="space-y-2 mb-6">
              {solution.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href={solution.link} className="text-blue-600 font-medium hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b">Feature</th>
                <th className="text-center p-4 border-b">Presence Builder</th>
                <th className="text-center p-4 border-b">Engage & Convert</th>
                <th className="text-center p-4 border-b">Total Automation</th>
              </tr>
            </thead>
            <tbody>
              {/* Presence Builder Features */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Automated Review Requests (via Email & SMS)</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium">Personalized Review Responses</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Social Media Integration</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium">Contacts Hub</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Website Review Widget</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium">Dedicated Business Phone Number (SMS)</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              
              {/* Engage & Convert Features */}
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Social Media Scheduler</td>
                <td className="text-center p-4 border-b"></td>
                <td className="text-center p-4 border-b">✓</td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              
              {/* Total Automation Features */}
              <tr>
                <td className="p-4 border-b font-medium">Live, Automated Appointment Booking</td>
                <td className="text-center p-4 border-b"></td>
                <td className="text-center p-4 border-b"></td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 border-b font-medium">Dedicated Business Phone Number (SMS/Voice)</td>
                <td className="text-center p-4 border-b"></td>
                <td className="text-center p-4 border-b"></td>
                <td className="text-center p-4 border-b">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <Link href="/pricing" className="btn-primary px-8 py-3 inline-block">
          Compare Pricing Plans
        </Link>
      </div>
    </div>
  );
}
