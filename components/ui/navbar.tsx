'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { 
    name: 'Solutions', 
    href: '#',
    items: [
      { name: 'Build Trust & Reputation', href: '/solutions/build-trust' },
      { name: 'Capture Every Lead', href: '/solutions/capture-leads' },
      { name: 'Automate Your Schedule', href: '/solutions/automate-schedule' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Features', href: '/features' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.items ? (
                <div 
                  className="relative group"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setTimeout(() => setSolutionsOpen(false), 500)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {solutionsOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200"
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setTimeout(() => setSolutionsOpen(false), 500)}
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link href="/book" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-3 space-y-1 border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.items ? (
                  <div className="py-2">
                    <div className="text-base font-medium text-gray-900 px-3">
                      {item.name}
                    </div>
                    <div className="mt-1 pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/book" 
              className="block w-full text-center mt-4 btn-primary py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
