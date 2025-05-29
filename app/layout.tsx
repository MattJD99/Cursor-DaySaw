import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import "./globals.css";
import "./ghl-form-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaySaw.agency - Automated Review Management",
  description: "Boost your business reviews, get more leads, all without lifting a finger. Automated review management that saves you time.",
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: "DaySaw.agency - Automated Review Management",
    description: "Boost your business reviews, get more leads, all without lifting a finger. Automated review management that saves you time.",
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'DaySaw.agency Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "DaySaw.agency - Automated Review Management",
    description: "Boost your business reviews, get more leads, all without lifting a finger. Automated review management that saves you time.",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Enhanced Schema Markup with long-tail keywords */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DaySaw.agency",
              "url": "https://daysaw.agency",
              "logo": "https://daysaw.agency/images/logo.png",
              "description": "Automated Review Management for marketing agencies, AI automation, AAA, reputation management and more.",
              "keywords": "marketing agency, ai automation, AAA, ai automation agency, reputation management, automated review management software for small businesses, AI-powered review automation platform, affordable reputation management tool for agencies, automated review collection system, AI review management for local marketing, reputation management automation for small agencies, best AI reputation management solutions, AI automation for review collection, online reputation automation for businesses, marketing agency AI review automation",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61560036661167",
                "https://www.instagram.com/daysaw.agency/",
                "https://www.linkedin.com/in/daysaw-agency-612b16309/"
              ]
            })
          }}
        />
      </head>
      <body className="font-['Google_Sans']">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
