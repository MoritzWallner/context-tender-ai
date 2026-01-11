"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
  const location = useLocation()
  const currentPage = location.pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex gap-5 my-0 items-center border-0">
            <Link to="/" onClick={handleNavClick} className="hover:opacity-80 transition-opacity">
              <Logo className="h-7 sm:h-8" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                to="/"
                onClick={handleNavClick}
                className={`transition-colors leading-7 font-bold text-base lg:text-lg ${currentPage === "/" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Home
              </Link>
              <Link
                to="/product"
                onClick={handleNavClick}
                className={`transition-colors font-bold text-base lg:text-lg ${currentPage === "/product" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Product
              </Link>
              <Link
                to="/why-alpx"
                onClick={handleNavClick}
                className={`transition-colors text-base lg:text-lg font-bold ${currentPage === "/why-alpx" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Why AlpX
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={`transition-colors text-base lg:text-lg font-bold ${currentPage === "/about" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <Link
              to="/waitlist"
              className="px-3 lg:px-4 py-2 font-semibold text-slate-700 hover:text-blue-600 transition-colors text-sm lg:text-base"
            >
              Login
            </Link>
            <Link
              to="/waitlist"
              className="px-4 lg:px-5 py-2 lg:py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-lg font-semibold text-base transition-colors ${currentPage === "/" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Home
            </Link>
            <Link
              to="/product"
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-lg font-semibold text-base transition-colors ${currentPage === "/product" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Product
            </Link>
            <Link
              to="/why-alpx"
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-lg font-semibold text-base transition-colors ${currentPage === "/why-alpx" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-50"}`}
            >
              Why AlpX
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-lg font-semibold text-base transition-colors ${currentPage === "/about" ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-50"}`}
            >
              About Us
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/waitlist"
                onClick={handleNavClick}
                className="block w-full text-center py-3 px-4 font-semibold text-slate-700 hover:text-blue-600 transition-colors rounded-lg border border-slate-200"
              >
                Login
              </Link>
              <Link
                to="/waitlist"
                onClick={handleNavClick}
                className="block w-full text-center py-3 px-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
