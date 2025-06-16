import { HeroHomepage } from '@/components/ui/HeroHomepage';
import { HomepageFAQ } from '@/components/ui/HomepageFAQ';
import { generalFAQs } from '@/lib/faqs';

export default function Home() {
  return (
    <main>
      <HeroHomepage />
      <HomepageFAQ faqs={generalFAQs.slice(0, 5)} />
    </main>
  );
}
