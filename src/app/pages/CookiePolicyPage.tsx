import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronRight } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 dark:text-white">Cookie Policy</span>
          </div>

          <h1 className="text-3xl font-bold mb-6">Cookie Policy for Stay On Vacation</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 8, 2026</p>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and accessibility.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Login sessions</li>
                <li>Security tokens</li>
                <li>Form submissions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how you use our website, helping us improve performance and user experience.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Page load times</li>
                <li>Error tracking</li>
                <li>Traffic analytics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
              <p className="mb-4">
                These cookies remember your choices and preferences to provide enhanced features.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Language preferences</li>
                <li>Currency selection</li>
                <li>Theme settings (light/dark mode)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
              <p className="mb-4">
                These cookies track your browsing habits to deliver relevant advertisements and offers.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Personalized deals</li>
                <li>Retargeting ads</li>
                <li>Campaign effectiveness</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Stay On Vacation uses cookies to improve your experience. This policy explains what cookies are and how we use them.</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Faster login and checkout</li>
                <li>Remembering your search preferences</li>
                <li>Personalized property recommendations</li>
                <li>Relevant deals and promotions</li>
                <li>Better customer support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Managing Cookie Preferences</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>

              <h3 className="text-xl font-semibold mb-3">Browser Controls</h3>
              <p className="mb-4">
                Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies (may impact functionality)</li>
                <li>Clear cookies when closing browser</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Cookie Consent</h3>
              <p className="mb-4">
                When you first visit our site, you can choose which categories of cookies to accept. You can change your preferences at any time through our cookie settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
              <p className="mb-4">
                We work with trusted third-party services that may place cookies on your device:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Google Analytics (website analytics)</li>
                <li>Facebook Pixel (advertising)</li>
                <li>Payment gateway providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us at:
              </p>
              <p className="mb-2"><strong>Email:</strong> cookies@stayonvacation.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91 1800-123-4567</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
