import { Metadata } from 'next';
import Image from 'next/image';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Capture Every Lead | DaySaw',
  description: 'Never miss a lead with our 24/7 automated lead capture system',
};

export default function CaptureLeadsPage() {
  const faqs = [
    {
      question: 'How does the AI learn about my business?',
      answer: 'We train your automated employee on your specific website content, service offerings, and FAQs. You can easily update its knowledge base anytime through your DaySaw dashboard.'
    },
    {
      question: 'What messaging platforms do you support?',
      answer: 'We support Facebook Messenger, Instagram DMs, WhatsApp, SMS, and website chat widgets. All conversations are centralized in your Contacts Hub.'
    },
    {
      question: 'How quickly does it respond to inquiries?',
      answer: 'Your lead capture specialist responds instantly - typically within 3-5 seconds of receiving a message.'
    },
    {
      question: 'Can I see the conversation history?',
      answer: 'Yes, all conversations are saved in your Contacts Hub where you can review, tag, and follow up with leads.'
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="section-title">Capture Every Lead</h1>
        <p className="section-description">
          Your 24/7 lead capture specialist responds instantly to every inquiry
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 rounded-2xl p-6 order-last md:order-first">
          <div className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden">
            <Image 
              src="/images/photo-2.jpg" 
              alt="Lead capture in action" 
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
        
        <div>
          <h2 className="text-3xl font-bold mb-6">Service Used: Instant Connect</h2>
          
          <div className="prose prose-lg text-gray-600">
            <p>
              This is your 24/7 lead capture specialist. It responds instantly to every Facebook message, 
              Instagram DM, website chat widget, and text message. We train it on your specific business 
              knowledge base so it understands your services and offerings.
            </p>
            
            <p className="mt-4">
              It asks qualifying questions and saves all contact information directly into your personal 
              <strong> Contacts Hub</strong>, ensuring you never miss a lead and can easily follow up. 
              DaySaw.agency takes care of all updates to keep your AI assistant current with your business.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How It Works</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>24/7 response to all incoming messages and chats</span>
              </li>
              <li className="flex items-start">
                <span className="mr极速快三">✓</span>
                <span>Intelligent conversation flow to qualify leads</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automatic saving to your centralized Contacts Hub</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Website chat widget included for your site</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} title="Lead Capture FAQs" />
    </div>
  );
}
