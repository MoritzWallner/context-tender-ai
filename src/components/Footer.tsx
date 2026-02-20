"use client"

import { Link } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-100 pt-12 sm:pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo size="lg" />
            </Link>

            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              AI-powered B2B intelligence — tenders, suppliers, and products across Europe.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-all bg-gray-50"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-all bg-gray-50"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="sm:col-span-2 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h5 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Navigation</h5>
              <ul className="space-y-3 text-sm text-gray-500">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/tender-match', label: 'tender.match' },
                  { to: '/company-match', label: 'company.match' },
                  { to: '/why-alpx', label: 'Why AlpX' },
                  { to: '/about', label: 'About Us' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-blue-600 transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Contact</h5>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="tel:+436609919009" className="hover:text-blue-600 transition-colors">+43 660 9919 009</a></li>
                <li><a href="mailto:office@alpxtechnologies.com" className="hover:text-blue-600 transition-colors">office@alpxtechnologies.com</a></li>
                <li className="leading-relaxed">Schrammelgasse 79,<br />1170 Vienna, Austria</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Legal</h5>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link to="/imprint" className="hover:text-blue-600 transition-colors">Imprint</Link></li>
                <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © 2025 AlpX Technologies FlexCo. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-gray-400">
            <Link to="/imprint" className="hover:text-gray-700 transition-colors">Imprint</Link>
            <Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
