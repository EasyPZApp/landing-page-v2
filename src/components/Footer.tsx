import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-white.png"
                alt="EasyPZ"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="font-mukta-vaani text-sm text-white/90">
              When nature calls, be ready for it.
            </p>
          </div>

          {/* Links and Social Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Social Media Section */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/easypz_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/easypz.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            {/* Links Section */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="/terms" className="hover:text-white/80 transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faq" className="hover:text-white/80 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/90">
          <p>© 2024 EasyPZ, created by "El Vagabundo"</p>
        </div>
      </div>
    </footer>
  );
}