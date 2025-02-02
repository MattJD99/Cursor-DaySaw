'use client';

import { Hero } from '@/components/ui/hero';
import { Features } from '@/components/ui/features';
import { Stats } from '@/components/ui/stats';
import { CTA } from '@/components/ui/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <CTA />
    </main>
  );
}