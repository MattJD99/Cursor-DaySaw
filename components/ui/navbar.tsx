'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav
        className="container flex items-center justify-between py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="DaySaw Agency"
            width={180}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/book" className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
}
