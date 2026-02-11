import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronRight } from 'lucide-react';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 dark:text-white">Terms of Service</span>
          </div>

          <h1 className="text-3xl font-bold mb-6">Terms of Service for Stay On Vacation</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 8, 2026</p>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Stay On Vacation's hotel and villa booking platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <h3 className="text-xl font-semibold mb-3">Account Creation</h3>
              <p className="mb-4">
                To make bookings, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Keep your account credentials secure</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Account Suspension</h3>
              <p className="mb-4">
                We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Booking & Payments</h2>

              <h3 className="text-xl font-semibold mb-3">Booking Confirmation</h3>
              <p className="mb-4">
                A booking is confirmed only after payment is processed and you receive a confirmation email with a booking reference number.
              </p>

              <h3 className="text-xl font-semibold mb-3">Pricing & Taxes</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>All prices are displayed in the selected currency</li>
                <li>Prices include applicable taxes unless stated otherwise</li>
                <li>Prices are subject to change until booking is confirmed</li>
                <li>Additional charges may apply for extra services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Payment Methods</h3>
              <p className="mb-4">
                We accept credit/debit cards, UPI, net banking, and digital wallets. All payments are processed through secure, PCI-compliant gateways.
              </p>

              <h3 className="text-xl font-semibold mb-3">Cancellation & Refunds</h3>
              <p className="mb-4">
                Cancellation policies vary by property. Please review the specific property's cancellation policy before booking.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Free cancellation: Full refund if cancelled within the allowed time</li>
                <li>Partial refund: Cancellation fees apply after the free cancellation period</li>
                <li>Non-refundable: No refund for cancellations</li>
              </ul>
              <p className="mb-4">
                Refunds are processed within 7-10 business days to the original payment method.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Platform Responsibilities</h2>

              <h3 className="text-xl font-semibold mb-3">Listing Accuracy</h3>
              <p className="mb-4">
                While we strive to ensure accurate property information, we do not guarantee the accuracy, completeness, or reliability of content provided by property owners.
              </p>

              <h3 className="text-xl font-semibold mb-3">Service Availability</h3>
              <p className="mb-4">
                We aim to provide uninterrupted service but do not guarantee that our platform will always be available or error-free.
              </p>

              <h3 className="text-xl font-semibold mb-3">Third-Party Properties</h3>
              <p className="mb-4">
                Stay On Vacation acts as an intermediary between guests and property owners. The property owner is responsible for the actual accommodation and services provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>

              <h3 className="text-xl font-semibold mb-3">Proper Usage</h3>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Use the platform only for lawful purposes</li>
                <li>Provide accurate booking information</li>
                <li>Respect property rules and local laws</li>
                <li>Not engage in fraudulent activities</li>
                <li>Not misuse or abuse our services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Prohibited Activities</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Making false or fraudulent bookings</li>
                <li>Hacking or unauthorized access attempts</li>
                <li>Posting inappropriate content or reviews</li>
                <li>Interfering with platform operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                All content on the Stay On Vacation platform, including logos, text, images, and software, is owned by Stay On Vacation or its licensors and is protected by copyright and trademark laws.
              </p>
              <p className="mb-4">
                You may not reproduce, distribute, or create derivative works without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, Stay On Vacation shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Service interruptions or technical issues</li>
                <li>Actions or omissions of property owners</li>
                <li>Loss of data or unauthorized access</li>
                <li>Indirect, consequential, or punitive damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Stay On Vacation from any claims, damages, or expenses arising from your use of the platform or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="mb-2"><strong>Email:</strong> legal@stayonvacation.com</p>
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
