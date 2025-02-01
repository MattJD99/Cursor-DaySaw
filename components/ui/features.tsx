import { 
  MessageSquare, 
  Star, 
  Share2, 
  LayoutGrid, 
  Repeat, 
  Upload,
  Clock,
  Bot,
  LucideIcon,
  Calendar,
  LineChart,
  BellRing
} from 'lucide-react';
import Image from 'next/image';
import { DotsBackground } from "@/components/ui/DotsBackground";

interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    name: 'Automated Review Requests',
    description: 'Send personalized text and email requests with our automated system. Use client names on custom images to increase response rates.',
    icon: MessageSquare,
  },
  {
    name: 'AI-Powered Review Responses',
    description: "Respond to reviews instantly with AI that's always working for you. Handle positive reviews automatically and manage negative ones with care.",
    icon: Bot,
  },
  {
    name: 'Social Media Integration',
    description: 'Turn your 5-star reviews into engaging social media content automatically. Post to Facebook, Instagram, and Google with customized designs.',
    icon: Share2,
  },
  {
    name: 'Dynamic Review Widgets',
    description: 'Showcase your reviews on your website with beautiful, responsive widgets. Choose from list, grid, masonry, or carousel layouts.',
    icon: LayoutGrid,
  },
  {
    name: 'Smart Scheduling',
    description: 'Automatically schedule review requests at the perfect time.',
    icon: Calendar,
  },
  {
    name: 'CRM Integration',
    description: 'Seamlessly integrate with your existing CRM systems like Jobber, QuickBooks, and Calendly for automated review collection.',
    icon: Repeat,
  },
  {
    name: 'Bulk Contact Upload',
    description: 'Easily import your existing customer database and start collecting reviews from past clients immediately.',
    icon: Upload,
  },
  {
    name: 'Review Monitoring',
    description: 'Track and respond to reviews across all platforms.',
    icon: LineChart,
  },
  {
    name: 'Automated Follow-ups',
    description: 'Never miss a chance to get feedback from your customers.',
    icon: BellRing,
  },
];

export function Features() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title mb-6">
            Everything You Need to Manage Reviews
          </h2>
          <p className="section-description">
            Our comprehensive platform helps you collect, manage, and showcase reviews across all platforms, saving you time and boosting your online reputation.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-full bg-white rounded-3xl p-8">
                  <div className="relative flex items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-white shadow-md">
                      <feature.icon className="h-7 w-7 stroke-[1.5]" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold leading-7 text-foreground">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight gradient-text sm:text-4xl">
            Make a Difference With Every Review
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe in giving back to the community. For every review your business receives,
            we donate a meal to Feeding America. Your success helps feed those in need.
          </p>
          <div className="mt-8">
            <Image
              src="/images/feeding-america-logo.png"
              alt="Feeding America"
              width={500}
              height={200}
              className="h-48 w-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <DotsBackground />
    </div>
  );
} 