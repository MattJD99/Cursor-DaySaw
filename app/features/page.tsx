import { Features } from '@/components/ui/features';
import { LucideIcon, MessageSquare, Star, Share2, LayoutGrid, Repeat, Upload, Clock, Bot, Calendar, LineChart, BellRing } from 'lucide-react';

const features = [
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
interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

function BentoFeatures({ features }: { features: Feature[] }) {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 ${getBentoBoxStyle(index)}`}
          >
            <div className="mb-4 text-2xl">
              <feature.icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Placeholder for bento box styles - will be defined later
function getBentoBoxStyle(index: number): string {
    switch (index % 9) {
        case 0:
          return 'lg:col-span-2 lg:row-span-2'; // Large square
        case 1:
          return 'lg:col-span-1'; // Vertical rectangle
        case 2:
          return 'lg:col-span-1'; // Vertical rectangle
        case 3:
          return 'lg:col-span-1'; // Small square
        case 4:
          return 'lg:col-span-2 lg:row-span-2'; // Large square
        case 5:
          return 'lg:col-span-1'; // Small Square
        case 6:
          return 'lg:col-span-1'; // Small Square
        case 7:
          return 'lg:col-span-1'; // Small Square
        case 8:
            return 'lg:col-span-1'; // Small Square
        default:
          return '';
      }
}

export default function FeaturesPage() {
  return (
    <BentoFeatures features={features} />
  );
}
