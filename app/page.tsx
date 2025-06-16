import { HeroHomepage } from '@/components/ui/HeroHomepage';
import { HomepageFAQ } from '@/components/ui/HomepageFAQ';
import PackageShowcase from '@/components/ui/PackageShowcase';
import { generalFAQs } from '@/lib/faqs';

export default function Home() {
  return (
    <main>
      <HeroHomepage />
      <PackageShowcase />
      <HomepageFAQ faqs={generalFAQs.slice(0, 5)} />
    </main>
  );
}
