import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Presence Builder',
    price: '147',
    effectiveRate: '~$0.20/hour',
    description: 'Your 24/7 reputation assistant',
    features: [
      'Builds trust by automatically gathering reviews',
      'Keeps your social media active',
      'Turns happy customers into 5-star reviews',
      'Posts best reviews to social media',
      'Basic review analytics'
    ],
    button: {
      text: 'Start Free Trial',
      href: '/book',
      variant: 'outline',
    }
  },
  {
    name: 'Engage & Convert',
    price: '297',
    effectiveRate: '~$0.41/hour',
    description: 'Your 24/7 lead capture specialist',
    recommended: true,
    features: [
      'Responds instantly to every text, DM and website chat',
      'Asks qualifying questions',
      'Saves contact info to your Contact Hub',
      'Works 24/7 to capture every lead',
      'Advanced lead tracking'
    ],
    button: {
      text: 'Start Free Trial',
      href: '/book',
      variant: 'primary',
    }
  },
  {
    name: 'Total Automation',
    price: '497',
    effectiveRate: '~$0.69/hour',
    description: 'Your complete 24/7 assistant',
    features: [
      'Answers phone calls and books appointments',
      'Qualifies callers automatically',
      'Integrates with your calendar',
      'Captures leads from all channels',
      'Builds your reputation',
      'Premium 24/7 support'
    ],
    button: {
      text: 'Start Free Trial',
      href: '/book',
      variant: 'outline',
    },
    foundingOffer: {
      price: '149.10',
      effectiveRate: '~$0.21/hour',
      text: 'FOUNDING MEMBER OFFER'
    }
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-4xl font-bold sm:text-5xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-3xl p-8 ring-1 ring-gray-200 relative',
                plan.recommended ? 'bg-gray-50 ring-2 ring-primary' : 'bg-white'
              )}
            >
              {plan.recommended && (
                <p className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600 ring-1 ring-inset ring-green-600/10">
                  Most Popular
                </p>
              )}
              
              {plan.foundingOffer && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-center py-2 rounded-t-3xl">
                  <span className="font-bold text-black">LIMITED TIME: {plan.foundingOffer.text}</span>
                </div>
              )}
              
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{plan.description}</p>
              
              <div className="mt-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Effective rate: {plan.effectiveRate}
                </div>
                
                {plan.foundingOffer && (
                  <div className="mt-4 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold tracking-tight text-gray-900">${plan.foundingOffer.price}</span>
                      <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Effective rate: {plan.foundingOffer.effectiveRate}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      For life! Setup fee waived. Limited to first 20 businesses.
                    </div>
                  </div>
                )}
              </div>
              
              <ul role="list" className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" />
                    <span className="text-sm leading-6 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.button.href}
                className={cn(
                  'mt-8 block rounded-full px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  plan.button.variant === 'primary'
                    ? 'bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary'
                    : 'ring-1 ring-inset ring-gray-200 hover:ring-gray-300 text-primary'
                )}
              >
                {plan.button.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
