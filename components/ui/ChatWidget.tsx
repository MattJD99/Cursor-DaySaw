'use client';

import Script from 'next/script';

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 
          'location-id': string 
        }, 
        HTMLElement
      >;
    }
  }
}

export default function ChatWidget() {
  return (
    <>
      <Script 
        src="https://widgets.leadconnectorhq.com/loader.js" 
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        strategy="afterInteractive" 
      />
      <chat-widget location-id="9t09cacF3rpiFzrHm83k"></chat-widget>
    </>
  );
}
