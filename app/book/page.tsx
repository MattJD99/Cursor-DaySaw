'use client';

import { Calendar } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="bg-background pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-primary">Book a Meeting</h1>
          <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 text-4xl font-bold tracking-tight sm:text-5xl">
            Schedule Your Free Consultation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose a time that works best for you, and we'll discuss how we can help save your time with automated reviews, appointment bookings, and respond to every DM, text, and comment.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 bg-white">
<div className="p-8">
  <div className="div-ghl-form-container mt-8 max-w-4xl mx-auto">
    <div id="inline-AUUB1ZzUhU4so5baekk9" className="ghl-form-container" style={{position: 'relative', width: '100%', display: 'block'}}>
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/AUUB1ZzUhU4so5baekk9" 
        style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        id="AUUB1ZzUhU4so5baekk9_1750191832068"
      ></iframe>
    </div>
  </div>
  <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Can't find a suitable time?</h3>
              <p className="mt-2 text-muted-foreground">
                Contact us directly and we'll find a time that works for you.
              </p>
              <div className="mt-4">
                <a
                  href="mailto:contactus@daysaw.agency"
                  className="btn-primary"
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
