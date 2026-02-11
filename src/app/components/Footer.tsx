import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Copyright */}
          <div className="flex items-center">
            <p className="text-sm">© 2025 Stay On Vacation. All Rights Reserved</p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Right - Social Media */}
          <div className="flex justify-end gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Brand Line */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            Exceptional stays, made simple. Book verified hotels and private villas with secure payments, transparent pricing, and global accessibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
