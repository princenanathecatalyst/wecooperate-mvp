import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold">WeCooperate</span>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              Building Collective Prosperity for Nigerians through Structured Digital Collaboration.
            </p>
            <div className="mt-4 text-xs text-primary-200">
              Promoted by<br />
              <span className="font-semibold">Bizbridges Universal Limited</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-primary-100 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-primary-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-primary-100 hover:text-white transition-colors">
                  Leadership Structure
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-100 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-primary-100 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">info@wecooperate.ng</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">+234 800 000 0000</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-200 text-sm text-center md:text-left">
              &copy; {currentYear} WeCooperate. All rights reserved. Promoted by Bizbridges Universal Limited.
            </p>
            <div className="text-xs text-primary-300 text-center md:text-right max-w-md">
              WeCooperate is a digital membership network. Not a registered cooperative society, bank, or investment company.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
