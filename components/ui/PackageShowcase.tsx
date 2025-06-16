import Link from 'next/link';

export default function PackageShowcase() {
  const packages = [
    {
      title: "Get More 5-Star Reviews",
      features: [
        "Automated review requests via SMS & email",
        "Personalized review responses",
        "Social media integration",
        "Website review widget"
      ],
      link: "/solutions/build-trust",
      buttonText: "Build Trust & Reputation"
    },
    {
      title: "Capture Every Lead",
      features: [
        "24/7 response to calls, texts, and chats",
        "Instant qualification of leads",
        "Contact information saved automatically",
        "No missed opportunities"
      ],
      link: "/solutions/capture-leads",
      buttonText: "Capture More Leads"
    },
    {
      title: "Automate Your Business",
      features: [
        "Live appointment booking",
        "Calendar integration",
        "Social media scheduling",
        "Full business automation"
      ],
      link: "/solutions/automate-schedule",
      buttonText: "Automate Scheduling"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How We Can Boost Your Business</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={pkg.link}
                  className="btn-primary w-full text-center block"
                >
                  {pkg.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
