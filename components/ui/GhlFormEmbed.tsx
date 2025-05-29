'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function GhlFormEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Function to enforce width attribute
    const enforceWidthAttribute = () => {
      if (iframe.getAttribute('width') !== '100%') {
        iframe.setAttribute('width', '100%');
      }
    };

    // Initial enforcement
    enforceWidthAttribute();

    // Periodically enforce the width attribute
    const intervalId = setInterval(enforceWidthAttribute, 100); // Check every 100ms

    return () => {
      clearInterval(intervalId); // Clean up interval
    };
  }, []); // Run once on mount

  return (
    <div className="ghl-form-container" style={{ position: 'relative', width: '100%' }}>
      <iframe
        ref={iframeRef}
        src="https://api.leadconnectorhq.com/widget/form/NSWE2pUVpGhgg3dRLGHi"
        style={{ height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-NSWE2pUVpGhgg3dRLGHi"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Contact Us Form"
        data-height="408"
        data-layout-iframe-id="inline-NSWE2pUVpGhgg3dRLGHi"
        data-form-id="NSWE2pUVpGhgg3dRLGHi"
        title="Website Contact Us Form"
      >
      </iframe>
      {/* It's generally better to load external scripts that might manipulate the DOM 
          or rely on browser APIs using next/script for better performance and control.
          However, the original script was placed directly. If issues persist,
          consider using next/script with an appropriate strategy.
          For now, keeping it as is to minimize changes from original.
      */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
