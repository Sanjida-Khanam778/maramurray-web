"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo2.png";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full z-50 bg-[#E7E9DD]/60 backdrop-blur-md lg:rounded-b-full ${
        location.pathname === "/" ? "" : "absolute top-0 left-0"
      }`}
    >
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `font-bold transition-colors ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Search Bar and Dashboard Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dashboard Button */}
            <button className="flex items-center gap-2 bg-[#1D2915] text-white font-medium px-4 sm:px-12 py-4 rounded-full transition-colors whitespace-nowrap">
              <span className="hidden sm:inline">Download Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors py-2 px-2 ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
