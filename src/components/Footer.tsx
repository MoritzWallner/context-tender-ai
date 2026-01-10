"use client"

import { Link } from "react-router-dom"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 relative overflow-hidden pb-1.5 pt-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 my-0">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="block hover:opacity-80 transition-opacity">
              <Logo size="lg" />
            </Link>

            <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
              Intelligent tender discovery for European markets
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-slate-50/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all bg-slate-50/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Navigation</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/why-alpx"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Why AlpX
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/waitlist"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Contact</h5>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+436609919009" className="hover:text-blue-600 transition-colors text-slate-500">
                    +43 660 9919 009
                  </a>
                </li>
                <li>
                  <a href="mailto:office@alpx.at" className="hover:text-blue-600 transition-colors text-slate-500">
                    office@alpx.at
                  </a>
                </li>
                <li className="text-slate-500">
                  Schrammelgasse 79,
                  <br />
                  1170 Vienna, Austria
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Legal</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link
                    to="/imprint"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Imprint
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-400 tracking-wide">
            © 2025 AlpX Technologies GmbH. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium text-slate-400">
            <Link to="/imprint" className="hover:text-slate-900 transition-colors">
              Imprint
            </Link>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[-5rem] left-0 right-0 flex justify-center opacity-[0.03] select-none pointer-events-none -z-10">
          <span className="text-[20rem] font-black tracking-tighter uppercase leading-none">tender</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
