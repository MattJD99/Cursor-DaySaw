import { Metadata } from 'next';
import Image from 'next/image';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Automate Your Schedule | DaySaw',
  description: 'Never answer a robocall or book an appointment manually again',
};

export default function AutomateSchedulePage() {
  const faqs = [
    {
      question: 'How does the call answering service work?',
      answer: 'Your automated assistant answers calls using a natural-sounding voice that can handle common questions, take messages, and book appointments directly into your calendar.'
    },
    {
      question: 'Can I customize the call handling flow?',
      answer: 'Yes, you can create custom call flows based on your business needs. Set different greetings, menu options, and routing rules for different scenarios.'
    },
    {
      question: 'What social media platforms does PostFlow support?',
      answer: 'We support Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube. You can manage all platforms from one centralized calendar.'
    },
    {
      question: 'How does the review widget work?',
      answer: 'The review widget automatically displays your latest positive reviews on your website, helping build trust with visitors and improving conversion rates.'
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="section-title">Automate Your Schedule</h1>
        <p className="section-description">
          Your assistant frees up your time by handling calls and booking appointments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Services Used: 24/7 Call Assist & PostFlow</h2>
          
          <div className="prose prose-lg text-gray-600">
            <p>
              Your assistant frees up your time by handling your schedule. It answers your phone calls, 
              qualifies callers, and books appointments directly into your calendar. 
            </p>
            
            <p className="mt-4">
              It also includes our powerful <strong>social media scheduler</strong> that allows you to:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>Plan months of content in minutes</li>
              <li>Post to all your social accounts from one central dashboard</li>
              <li>Repurpose positive reviews as social content</li>
              <li>Schedule posts at optimal times for engagement</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How It Works</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 phone answering service with natural conversation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automatic appointment booking based on your calendar</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Caller qualification to filter out spam and robocalls</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Centralized social media scheduling for all platforms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Review widget to showcase testimonials on your website</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden">
            <Image 
              src="/images/photo-3.jpg" 
              alt="Schedule automation" 
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mt-6 text-center">
            <a href="/book" className="btn-primary inline-block">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} title="Scheduling Automation FAQs" />
    </div>
  );
}
