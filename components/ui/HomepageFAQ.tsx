'use client';

import { FAQAccordion } from './FAQAccordion';
import { FAQItem } from './FAQAccordion';

interface HomepageFAQProps {
  faqs?: FAQItem[];
}

export function HomepageFAQ({ faqs }: HomepageFAQProps) {
  const defaultFaqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'You get full access to all features of your chosen package during the trial period. We handle the setup so you can experience the full benefits immediately, with no credit card required upfront.'
    },
    {
      question: 'What happens after my trial ends?',
      answer: 'We\'ll notify you before your trial ends. You only pay if you choose to continue using DaySaw. There are no automatic charges.'
    },
    {
      question: 'How do you handle sensitive business data?',
      answer: 'We use enterprise-grade security protocols and never store your passwords. You connect accounts directly through secure OAuth authentication.'
    },
    {
      question: 'Can I use my existing business phone number?',
      answer: 'Yes! We provide a dedicated business number, but you can easily forward your existing number to it without changing marketing materials.'
    },
    {
      question: 'How quickly can I get started?',
      answer: 'Most businesses are fully set up within 24 hours. Our team works quickly to configure your automated employee based on your business needs.'
    }
  ];

  const displayFaqs = faqs || defaultFaqs;

  return (
    <div className="bg-gray-50 py-24">
      <div className="container">
        <FAQAccordion faqs={displayFaqs} title="Common Questions About DaySaw" />
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Still have questions? Our team is ready to help you understand how DaySaw can transform your business.
          </p>
          <a href="/book" className="btn-primary inline-block px-8 py-3">
            Book a Personalized Demo
          </a>
        </div>
      </div>
    </div>
  );
}
