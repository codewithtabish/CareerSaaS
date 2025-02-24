import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold mb-4">Terms of Service</h1>
          {/* <p className="text-lg text-gray-600">Effective Date: [Insert Effective Date]</p> */}
        </header>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to SaaSHire. These Terms of Service ("Terms") govern your access to and use of our platform and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our Services.
          </p>
          <p>
            Our Services include job scheduling, email notifications, and account management provided through integrations with third-party services such as Google, GitHub, and Inngest.
          </p>
        </section>

        {/* 2. Definitions */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">2. Definitions</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>User:</strong> any individual or entity that accesses or uses the Services.
            </li>
            <li>
              <strong>Account:</strong> the personal account you create to access the Services.
            </li>
            <li>
              <strong>Content:</strong> any data, text, images, or other materials you submit or receive through the Services.
            </li>
            <li>
              <strong>Third-Party Services:</strong> services provided by entities other than SaaSHire, including Google, GitHub, and Inngest.
            </li>
          </ul>
        </section>

        {/* 3. Account Registration and Security */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">3. Account Registration and Security</h2>
          <p className="mb-4">
            To access certain features of our Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information as needed.
          </p>
          <p>
            You are solely responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately if you suspect any unauthorized use of your account.
          </p>
        </section>

        {/* 4. Use of the Services */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">4. Use of the Services</h2>
          <p className="mb-4">
            SaaSHire grants you a limited, non-exclusive, and non-transferable right to use our Services for your internal business purposes, subject to these Terms.
          </p>
          <p className="mb-4">
            You agree not to misuse the Services or attempt to circumvent any security measures implemented by SaaSHire.
          </p>
          <ul className="list-disc list-inside">
            <li>Do not use the Services for any illegal or unauthorized purpose.</li>
            <li>Do not interfere with the proper functioning of the Services.</li>
          </ul>
        </section>

        {/* 5. Acceptable Use and Content Standards */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">5. Acceptable Use and Content Standards</h2>
          <p className="mb-4">
            You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use of the Services.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>You shall not submit or transmit any content that is unlawful, defamatory, or harmful.</li>
            <li>You shall not use the Services to distribute spam, malware, or other harmful software.</li>
            <li>You shall not infringe on the intellectual property rights of others.</li>
          </ul>
        </section>

        {/* 6. Third-Party Services and Integrations */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">6. Third-Party Services and Integrations</h2>
          <p className="mb-4">
            Our platform integrates with third-party services to enhance functionality:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Google and GitHub:</strong> for secure and seamless user authentication.
            </li>
            <li>
              <strong>Inngest:</strong> for managing job scheduling and email notifications efficiently.
            </li>
          </ul>
          <p>
            Your interactions with these third-party services are governed by their respective terms and policies. SaaSHire is not responsible for the practices of these external providers.
          </p>
        </section>

        {/* 7. Intellectual Property Rights */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">7. Intellectual Property Rights</h2>
          <p className="mb-4">
            All intellectual property rights in and to the Services, including all content, features, and functionality, are owned by SaaSHire or its licensors.
          </p>
          <p>
            You agree not to copy, modify, distribute, or create derivative works from any part of the Services without express written permission.
          </p>
        </section>

        {/* 8. Termination */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">8. Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, for any reason, including any violation of these Terms.
          </p>
          <p>
            Upon termination, your right to use the Services will immediately cease, and you must delete any information or content obtained through the Services.
          </p>
        </section>

        {/* 9. Disclaimer of Warranties */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">9. Disclaimer of Warranties</h2>
          <p className="mb-4">
            The Services are provided on an "as is" and "as available" basis without any warranties, either express or implied. SaaSHire does not guarantee that the Services will be uninterrupted, secure, or error-free.
          </p>
          <p>
            All liability for any defects or errors in the Services is disclaimed to the maximum extent permitted by law.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">10. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall SaaSHire, its affiliates, or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services.
          </p>
          <p>
            Our total liability to you for any claims arising from these Terms or the Services shall not exceed the amount, if any, paid by you to access the Services.
          </p>
        </section>

        {/* 11. Indemnification */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless SaaSHire, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of the Services or your breach of these Terms.
          </p>
        </section>

        {/* 12. Governing Law and Dispute Resolution */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">12. Governing Law and Dispute Resolution</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SaaSHire operates, without regard to conflict of laws principles.
          </p>
          <p>
            Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration in accordance with the applicable rules.
          </p>
        </section>

        {/* 13. Changes to These Terms */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">13. Changes to These Terms</h2>
          <p className="mb-4">
            SaaSHire reserves the right to modify or update these Terms at any time. Any changes will become effective immediately upon being posted on the Services.
          </p>
          <p>
            Your continued use of the Services after any such changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        {/* 14. Contact Information */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">14. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms, please contact us at:
          </p>
          <ul className="list-disc list-inside">
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

export default TermsOfServicePage;
