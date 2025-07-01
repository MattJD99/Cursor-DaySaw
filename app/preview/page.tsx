import { HeroPreview } from '@/components/ui/HeroPreview';
import { HomepageFAQ } from '@/components/ui/HomepageFAQ';
import PackageShowcase from '@/components/ui/PackageShowcase';
import { generalFAQs } from '@/lib/faqs';

export default function PreviewPage() {
  return (
    <main>
      <HeroPreview />
      <PackageShowcase />
      <HomepageFAQ faqs={generalFAQs.slice(0, 5)} />
    </main>
  );
}
