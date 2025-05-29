'use client';

import Script from 'next/script';

export default function GhlFormEmbed() {
  return (
    <div className="ghl-form-container" style={{ position: 'relative', width: '100%' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/NSWE2pUVpGhgg3dRLGHi"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
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
