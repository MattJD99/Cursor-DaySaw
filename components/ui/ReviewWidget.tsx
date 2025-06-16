'use client';

import Script from 'next/script';

export default function ReviewWidget() {
  return (
    <div className="mt-16 w-full">
      <Script 
        src="https://reputationhub.site/reputation/assets/review-widget.js" 
        strategy="afterInteractive" 
      />
      <iframe 
        className='lc_reviews_widget'
        src='https://reputationhub.site/reputation/widgets/review_widget/9t09cacF3rpiFzrHm83k'
        frameBorder='0'
        scrolling='no'
        style={{ minWidth: '100%', width: '100%', minHeight: '300px' }}
        title="Customer Reviews"
      />
    </div>
  );
}
