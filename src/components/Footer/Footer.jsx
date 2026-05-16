import footer from "../../assets/footerBg.png";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

export default function Footer() {

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer
      className="w-full text-[#1F2D16] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-end">
          {/* Brand Section */}
          <div className="space-y-8">
            <img src={logo} alt="" />
            <p className="leading-relaxed max-w-sm font-semibold">
              Discover the joy of gardening with expert tips, accurate plant identification, and design tools tailored to help your green space thrive.
            </p>
          </div>
          <div></div>
          <div className="w-fit">
            {/* Quick Links */}
            <div className="place-items-start mb-8">
              <h4 className="text-lg font-semibold mb-4 underline">
                Quick Links
              </h4>
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
            <div className="place-items-start">
              <h4 className="text-lg font-semibold mb-4 underline">
                Get in touch
              </h4>
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:your@garden.com"
                    className="transition-colors duration-200"
                  >
                    customerservice@florle.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-semibold">
          <p>© 2026 PlantLover. All rights reserved.</p>
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
