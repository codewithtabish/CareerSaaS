import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold mb-4">Privacy Policy</h1>
          {/* <p className="text-lg text-gray-600">Effective Date: [Insert Effective Date]</p> */}
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to SaaSHire, your comprehensive platform for creating, scheduling, and managing jobs as well as email notifications using our SaaS solution. We value your privacy and are committed to protecting your personal data while providing a secure and efficient service.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our services, including features like third-party authentication via Google and GitHub, and job/email scheduling powered by Inngest.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            To provide and continuously improve our services, we collect various types of information, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Personal Information:</strong> such as your name, email address, and contact details when you register or sign in.
            </li>
            <li>
              <strong>Authentication Data:</strong> information obtained through third-party login providers like Google and GitHub.
            </li>
            <li>
              <strong>Usage Data:</strong> details about how you interact with SaaSHire, including job creation, scheduling activities, and email notifications.
            </li>
            <li>
              <strong>Job and Scheduling Data:</strong> information related to job scheduling and email scheduling processes, managed through our integration with Inngest.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>To provide, maintain, and enhance our services.</li>
            <li>To authenticate and manage your account securely with Google and GitHub.</li>
            <li>
              To schedule and manage jobs as well as email notifications via our integration with Inngest, ensuring efficient and timely task execution.
            </li>
            <li>To communicate with you regarding updates, new features, or important service notifications.</li>
            <li>To analyze usage trends and improve user experience and platform functionality.</li>
          </ul>
        </section>

        {/* Third-Party Service Providers */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Third-Party Service Providers</h2>
          <p className="mb-4">
            We utilize the services of several trusted third-party providers to power key aspects of SaaSHire:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Google and GitHub:</strong> for secure and convenient user authentication.
            </li>
            <li>
              <strong>Inngest:</strong> for efficient job scheduling and email notifications, ensuring smooth operational workflows.
            </li>
          </ul>
          <p>
            We encourage you to review the privacy policies of these providers to understand how they handle your information.
          </p>
        </section>

        {/* Data Protection and Security */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Data Protection and Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. Despite our best efforts, no security system is completely impenetrable.
          </p>
          <p>
            We continually assess and improve our security practices to ensure the highest level of data protection.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or request deletion of your personal information. Should you wish to exercise these rights or have any questions regarding your data, please contact us using the details provided below.
          </p>
          <p>
            We will respond to your requests in compliance with applicable data protection laws.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. All changes will be posted on this page along with an updated effective date.
          </p>
          <p>
            We encourage you to review this policy regularly to stay informed about how we are safeguarding your data.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy, please do not hesitate to reach out:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Developer:</strong> Talha Tabish
            </li>
            <li>
              <strong>Email:</strong> 
              <a href="mailto:tabish169000@gmail.com" className="text-blue-500 hover:underline ml-1">
                tabish169000@gmail.com
              </a>
            </li>
            <li>
              <strong>App Name:</strong> SaaSHire
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>&copy; 2025 SaaSHire. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
