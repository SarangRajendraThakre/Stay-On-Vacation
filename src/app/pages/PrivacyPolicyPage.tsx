import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronRight } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 dark:text-white">Privacy Policy</span>
          </div>

          <h1 className="text-3xl font-bold mb-6">Privacy Policy for Stay On Vacation</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 8, 2026</p>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Stay On Vacation, we value your privacy. This policy outlines how we collect, use, and protect your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our hotel and villa booking platform.
              </p>
              <p className="mb-4">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and payment information</li>
                <li>Booking and transaction history</li>
                <li>Profile picture and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Location & Device Data</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and geolocation</li>
                <li>Device type and browser information</li>
                <li>Usage patterns and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Cookies & Usage Data</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Session cookies for login and security</li>
                <li>Analytics cookies to improve our service</li>
                <li>Marketing cookies for personalized offers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Information</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Processing bookings and payments</li>
                <li>Providing customer support</li>
                <li>Sending booking confirmations and updates</li>
                <li>Personalizing recommendations</li>
                <li>Fraud prevention and security</li>
                <li>Improving our services</li>
                <li>Marketing and promotional communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing & Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Property Owners:</strong> To facilitate your booking</li>
                <li><strong>Payment Gateways:</strong> To process transactions securely</li>
                <li><strong>Service Providers:</strong> For analytics, email, and customer support</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mb-4">
                We do <strong>NOT</strong> sell your personal data to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication</li>
                <li>PCI DSS compliance for payment data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal data</li>
                <li>Update or correct your information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal data for as long as necessary to provide our services and comply with legal obligations. Booking records are retained for 7 years for tax and legal purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Policy Updates</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-2"><strong>Email:</strong> privacy@stayonvacation.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91 1800-123-4567</p>
              <p className="mb-2"><strong>Address:</strong> Stay On Vacation HQ, Mumbai, India</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
