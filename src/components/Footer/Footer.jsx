import React from 'react';
import footer from '../../assets/images/footerBG.png';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full text-[#1F2D16] bg-gradient-to-b from-gray-50 to-gray-100 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${footer})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={logo} alt="" />
            <p className="leading-relaxed max-w-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros ut nunc luctus consectetur vel ac justo.
            </p>
          </div>

          {/* Quick Links */}
          <div className='place-items-center'>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 font-semibold">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className=" transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='place-items-center'>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-semibold">
              <li className="flex items-center gap-3 ">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+211444222" className="hover:text-green-600 transition-colors duration-200">
                  +211444222
                </a>
              </li>
              <li className="flex items-center gap-3 ">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:your@garden.com" className="transition-colors duration-200">
                  your@garden.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-semibold">
          <p>© 2022 PlantLove. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/terms-conditions"
              className="transition-colors duration-200"
            >
              Terms & Condition
            </Link>
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}