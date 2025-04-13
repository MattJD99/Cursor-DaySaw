import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto py-8 px-4 pt-24">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm mb-4">LAST UPDATED: March 11, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>DaySaw.agency ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and services (collectively, the "Services"). By using our Services, you consent to the data practices described in this policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We collect various types of information to provide and improve our Services:</p>
        <ul className="list-disc list-inside ml-6">
            <li><strong>Personal Information:</strong> When you sign up, request information, or purchase our Services, we collect personal details such as your name, company name, email, phone number, and billing details.</li>
            <li><strong>Service Data:</strong> We collect content you upload, including emails, logos, descriptions, and user data within our CRM system.</li>
            <li><strong>Technical & Diagnostic Information:</strong> We may collect system logs, error reports, and other data for troubleshooting purposes.</li>
            <li><strong>Website Analytics:</strong> We use cookies and tracking technologies to collect information about your browser, IP address, pages visited, and actions taken on our website.</li>
            <li><strong>Geo-Location Data:</strong> We do not currently track real-time location but may request permission if this feature is introduced in the future.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc list-inside ml-6">
            <li>Provide and enhance our Services.</li>
            <li>Process transactions and send invoices.</li>
            <li>Improve customer support and troubleshoot issues.</li>
            <li>Send marketing emails and promotional materials (with an opt-out option).</li>
            <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
        <p>We do not sell or rent your personal data. However, we may share it with:</p>
          <ul className="list-disc list-inside ml-6">
            <li><strong>Third-Party Service Providers:</strong> For payment processing, email delivery, analytics, and security.</li>
            <li><strong>Legal Compliance:</strong> If required by law, court order, or to prevent fraud or security threats.</li>
            <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or asset sale, your data may be transferred.</li>
          </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. You are responsible for safeguarding account credentials.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights & Choices</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside ml-6">
          <li>Request access to or deletion of your data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Update or correct your information.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
        <p>We use cookies and similar technologies for analytics and functionality. You can manage cookie settings through your browser.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>We may update this policy periodically. Any significant changes will be notified via email or a website notice. Continued use of our Services indicates acceptance of the updated policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
        <p>For questions or data requests, contact us at: <a href="mailto:contactus@daysaw.agency">contactus@daysaw.agency</a>.</p>
      </section>

    </main>
  );
}
