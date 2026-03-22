import React from "react";
import logo from "../../assets/logo.png";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className=" px-6 py-12 md:p-24">
        {/* 5 Column Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="AppVerse Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AppVerse
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover, install, and manage your favorite apps effortlessly.
              Your one-stop destination for app exploration.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/apps" className="hover:text-white transition-colors">
                  All Apps
                </a>
              </li>
              <li>
                <a
                  href="/installation"
                  className="hover:text-white transition-colors"
                >
                  My Installation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Developer API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:support@appverse.com"
                  className="hover:text-white transition-colors"
                >
                  support@appverse.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                <span>123 App Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter / Stay Updated */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm">
              Get the latest app news and updates.
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-md transition-all text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} AppVerse. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
