'use client';

import { Calendar } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary">Book a Meeting</h1>
          <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-4xl font-bold tracking-tight sm:text-5xl">
            Schedule Your Free Consultation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose a time that works best for you, and we'll discuss how we can help grow your business with automated reviews.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 bg-white">
          <div className="p-8">
            {/* Calendar Placeholder - Replace with actual calendar component */}
            <div className="aspect-[4/3] rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-muted-foreground">
              <Calendar className="h-16 w-16 mb-4" />
              <p className="text-lg font-medium">Calendar Integration Coming Soon</p>
              <p className="mt-2 text-sm">This is where your booking calendar will appear</p>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Can't find a suitable time?</h3>
              <p className="mt-2 text-muted-foreground">
                Contact us directly and we'll find a time that works for you.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:contact@daysaw.agency"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 