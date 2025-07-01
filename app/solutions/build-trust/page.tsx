import { Metadata } from 'next';
import Image from 'next/image';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Build Trust & Reputation | DaySaw',
  description: 'Turn happy customers into 5-star reviews with our automated reputation management',
};

export default function BuildTrustPage() {
  const howItWorksSteps = [
    { title: 'Customer Interaction', description: 'Your customer completes a purchase or service.' },
    { title: 'Automated Request', description: 'We send a personalized review email and text request automatically for you.' },
    { title: 'Review Collection', description: 'Customer leaves a review on Google after you provide a product or service.' },
    { title: 'AI Response', description: 'Our AI instantly responds to the review.' },
    { title: 'Social Amplification', description: 'Positive reviews are shared on all of your social media channels.' }
  ];

  const reviewStats = [
    { value: '90%', label: 'Of customers read reviews' },
    { value: '45%', label: 'Of map pack clicks' },
    { value: '31%', label: 'Increase in conversion rate' },
    { value: '88%', label: 'Trust reviews as much as recommendations' }
  ];

  const features = [
    { title: 'Automated Review Requests', description: 'Send personalized text and email requests with our automated system.' },
    { title: 'AI-Powered Review Responses', description: 'Respond to reviews instantly with AI that\'s always working for you.' },
    { title: 'Social Media Integration', description: 'Turn your 5-star reviews into engaging social media content automatically.' },
    { title: 'Dynamic Review Widgets', description: 'Showcase your reviews on your website with beautiful, responsive widgets.' },
    { title: 'CRM Integration', description: 'Seamlessly integrate with your existing CRM systems.' },
    { title: 'Bulk Contact Upload', description: 'Easily import your existing customer database.' },
    { title: 'Review Monitoring', description: 'Track and respond to reviews across all platforms.' },
    { title: 'Automated Follow-ups', description: 'Never miss a chance to get feedback from your customers.' }
  ];

  const benefits = [
    { title: 'Seamless Bulk Import', description: 'Quickly add all your past customers at once.' },
    { title: 'Friendly Automated Outreach', description: 'We handle emails & texts, so you never miss a review.' },
    { title: 'Instant Visibility', description: 'Each new 5-star rating posts to Google and social channels automatically.' },
    { title: 'Give Back', description: 'Every 5-star review triggers a donated meal in your community.' },
    { title: 'Hands-Free Management', description: 'Our system does the follow-up and posting while you focus on business.' }
  ];

  const faqs = [
    { question: 'How quickly will I start seeing results?', answer: 'Most businesses see an increase in reviews within the first 2 weeks.' },
    { question: 'Can I customize the review request messages?', answer: 'Yes, you can fully customize the messages to match your brand voice.' },
    { question: 'What platforms do you integrate with for social sharing?', answer: 'We support Facebook, Instagram, Twitter, LinkedIn, and Google.' }
  ];

  return (
    <div className="container py-16">
      {/* Hero Section - Centered */}
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          More <span className="gradient-text">Reviews</span>, Less <span className="gradient-text">Effort</span>. 
          It's That <span className="gradient-text">Simple</span>.
        </h1>
        <div className="prose prose-lg text-gray-600 max-w-2xl mx-auto mb-12">
          <p>
            Automatically request reviews through email & SMS without changing your routine. 
            We handle the replies and social posting, plus, every 5-star review helps us donate a meal.
          </p>
        </div>
      </div>

      {/* How It Works + Media */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <div className="relative isolate py-4">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="section-title gradient-text">How It Works</h2>
              <p className="section-description">Our streamlined process makes getting reviews and amplifying them effortless.</p>
            </div>
<div className="mt-8 max-w-xl mx-auto">
  <div className="relative">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-indigo-600 z-0" style={{ marginLeft: '1.5rem' }}></div>
    <div className="space-y-12 lg:space-y-16">
      {howItWorksSteps.map((step, index) => (
        <div key={index} className="how-it-works-step relative flex items-start space-x-4 sm:space-x-6 is-visible">
          <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-white font-bold text-lg shadow-md z-10">
            {index + 1}
          </div>
          <div className="pt-1">
            <h3 className="text-xl font-semibold leading-7 text-foreground mb-1">{step.title}</h3>
            <p className="text-base leading-7 text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
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

      {/* Why Google Reviews Matter */}
      <div className="my-20">
        <h2 className="section-title gradient-text text-center mb-4">Why Google Reviews Matter</h2>
        <p className="section-description text-center max-w-2xl mx-auto mb-12">
          Google reviews are crucial for your business success. They influence your local search rankings and directly impact customer decisions.
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
  {reviewStats.map((stat, index) => {
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

      {/* Features */}
      <div className="my-20">
        <h2 className="section-title gradient-text text-center mb-12">Everything You Need to Manage Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300
              before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 
              after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
              <div className="relative h-full bg-white rounded-3xl p-8 group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Make a Difference Section */}
      <div className="text-center mt-24 mb-20">
        <h2 className="section-title gradient-text mb-4">Make a Difference With Every Review</h2>
        <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          We believe in giving back to the community. For every review your business receives, we donate a meal to Feeding America. Your success helps feed those in need.
        </p>
        <div className="flex justify-center mb-12">
          <Image 
            src="/images/feeding-america-logo.png" 
            alt="Feeding America Logo" 
            width={160}
            height={80}
            className="h-32 w-auto sm:h-40"
          />
        </div>
        <div className="relative">
          <div className="w-full bg-[url('/images/googlefi-dots.webp')] bg-repeat-x bg-contain h-12"></div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="my-20">
        <h2 className="section-title gradient-text text-center mb-12">
          Local businesses just like yours are already seeing real results — be the next success story.
        </h2>
        <div className="relative bg-white rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-2 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-transparent before:to-blue-500/5 before:opacity-0 before:transition-opacity hover:before:opacity-100 after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.1)] after:transition-shadow hover:after:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.3)]">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 scale-150"></div>
                  <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star h-10 w-10 text-yellow-500 drop-shadow-[0_4px_8px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_8px_16px_rgba(234,179,8,0.4)]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 relative z-10 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transform CTA Section */}
      <div className="relative isolate my-20">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center relative p-[1px] rounded-3xl overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/25 before:via-blue-400/25 before:to-indigo-600/25 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-600/10 after:via-blue-400/10 after:to-indigo-600/10 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group-hover:-translate-y-1">
              <h2 className="section-title gradient-text mb-2">Ready to Transform Your Online Reviews?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join local businesses in your area who are using our platform to boost their reputation and attract more customers every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/book" className="btn-primary text-base px-8 py-3">Start Your 14-Day Trial</a>
                <a href="/book" className="btn-secondary text-base px-8 py-3">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} title="Trust Builder FAQs" />
    </div>
  );
}
