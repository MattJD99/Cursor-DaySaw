'use client';

import { Hero } from '@/components/ui/hero';
import { Features } from '@/components/ui/features';
import { Stats } from '@/components/ui/stats';
import { Cta } from '@/components/ui/cta'; // Corrected casing for import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Cta />
    </main>
  );
}
