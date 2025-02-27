import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '49',
    priceDetails: 'per month',
    description: 'Perfect for small businesses',
    features: [
      'Up to 100 review requests per month',
      'Email & SMS review invitations',
      'Review monitoring',
      'Basic review analytics',
      'Email support',
    ],
    button: {
      text: 'Start Free Trial',
      href: '/book',
      variant: 'outline',
    }
  },
  {
    name: 'Professional',
    price: '99',
    priceDetails: 'per month',
    description: 'Best for growing businesses',
    recommended: true,
    features: [
      'Up to 500 review requests per month',
      'Email & SMS review invitations',
      'Review monitoring & alerts',
      'Advanced review analytics',
      'AI-powered review responses',
      'Multi-location support',
      'Priority email & chat support',
      'Review widgets for website',
    ],
    button: {
      text: 'Start Free Trial',
      href: '/book',
      variant: 'primary',
    }
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceDetails: 'contact us',
    description: 'For large organizations',
    features: [
      'Unlimited review requests',
      'Custom review campaigns',
      'White-label solution',
      'API access',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
      'Enterprise-grade security',
    ],
    button: {
      text: 'Contact Sales',
      href: '/#contact',
      variant: 'outline',
    }
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary">Pricing</h1>
          <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-4xl font-bold tracking-tight sm:text-5xl">
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
                'rounded-3xl p-8 ring-1 ring-gray-200',
                plan.recommended ? 'bg-gray-50 ring-2 ring-primary' : 'bg-white'
              )}
            >
              {plan.recommended && (
                <p className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600 ring-1 ring-inset ring-green-600/10">
                  Most Popular
                </p>
              )}
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{plan.description}</p>
              <div className="mt-8">
                <div className="flex items-baseline">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                      <span className="text-sm font-semibold leading-6 text-muted-foreground">/{plan.priceDetails}</span>
                    </>
                  )}
                </div>
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