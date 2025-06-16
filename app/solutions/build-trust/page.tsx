import { Metadata } from 'next';
import Image from 'next/image';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Build Trust & Reputation | DaySaw',
  description: 'Turn happy customers into 5-star reviews with our automated reputation management',
};

export default function BuildTrustPage() {
  const howItWorksSteps = [
    {
      title: 'Customer Interaction',
      description: 'Your customer completes a purchase or service.'
    },
    {
      title: 'Automated Request',
      description: 'We send a personalized review email and text request automatically for you.'
    },
    {
      title: 'Review Collection',
      description: 'Customer leaves a review on Google after you provide a product or service.'
    },
    {
      title: 'AI Response',
      description: 'Our AI instantly responds to the review.'
    },
    {
      title: 'Social Amplification',
      description: 'Positive reviews are shared on all of your social media channels.'
    }
  ];

  const reviewStats = [
    { value: '90%', label: 'Of customers read reviews' },
    { value: '45%', label: 'Of map pack clicks' },
    { value: '31%', label: 'Increase in conversion rate' },
    { value: '88%', label: 'Trust reviews as much as recommendations' }
  ];

  const features = [
    {
      title: 'Automated Review Requests',
      description: 'Send personalized text and email requests with our automated system. Use client names on custom images to increase response rates.'
    },
    {
      title: 'AI-Powered Review Responses',
      description: 'Respond to reviews instantly with AI that\'s always working for you. Handle positive reviews automatically and manage negative ones with care.'
    },
    {
      title: 'Social Media Integration',
      description: 'Turn your 5-star reviews into engaging social media content automatically. Post to Facebook, Instagram, and Google with customized designs.'
    },
    {
      title: 'Dynamic Review Widgets',
      description: 'Showcase your reviews on your website with beautiful, responsive widgets. Choose from list, grid, masonry, or carousel layouts.'
    },
    {
      title: 'CRM Integration',
      description: 'Seamlessly integrate with your existing CRM systems like Jobber, QuickBooks, and Calendly for automated review collection.'
    },
    {
      title: 'Bulk Contact Upload',
      description: 'Easily import your existing customer database and start collecting reviews from past clients immediately.'
    },
    {
      title: 'Review Monitoring',
      description: 'Track and respond to reviews across all platforms.'
    },
    {
      title: 'Automated Follow-ups',
      description: 'Never miss a chance to get feedback from your customers.'
    }
  ];

  const testimonials = [
    {
      quote: 'DaySaw has transformed how we manage our online reputation. The automated system saves us hours each week!',
      author: 'Sarah Johnson',
      role: 'Marketing Director, Tech Solutions Inc'
    },
    {
      quote: 'Since implementing Trust Builder, our Google reviews have increased by 40% and our conversion rate improved significantly.',
      author: 'Michael Chen',
      role: 'Owner, Premier Services Co'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I start seeing results?',
      answer: 'Most businesses see an increase in reviews within the first 2 weeks of using our service. The full impact on your reputation and conversions typically becomes noticeable after 1-2 months.'
    },
    {
      question: 'Can I customize the review request messages?',
      answer: 'Yes, you can fully customize the messages to match your brand voice. Our platform also provides templates you can use as a starting point.'
    },
    {
      question: 'What platforms do you integrate with for social sharing?',
      answer: 'We support Facebook, Instagram, Twitter, LinkedIn, and Google Business Profile. You can schedule and publish posts to all platforms simultaneously.'
    }
  ];

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="section-title">Build Trust & Reputation</h1>
        <p className="section-description">
          Your automated reputation assistant works 24/7 to gather reviews and boost your online presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">How Your Reputation Assistant Works</h2>
          
          <div className="prose prose-lg text-gray-600">
            <p>
              Our streamlined process makes getting reviews and amplifying them effortless. 
              Your automated assistant turns satisfied customers into powerful social proof 
              that builds trust and drives business growth.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full h-10 w-10 flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden">
            <Image 
              src="/images/photo-1.jpg" 
              alt="Trust Builder in action" 
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Reviews Matter</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reviewStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Manage Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-16">
        <a href="/book" className="btn-primary inline-block px-8 py-4">
          Start Your Free Trial
        </a>
      </div>

      <FAQAccordion faqs={faqs} title="Trust Builder FAQs" />
    </div>
  );
}
