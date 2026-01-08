"use client"

import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
  const location = useLocation()
  const currentPage = location.pathname

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex gap-5 my-0 items-center border-0">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <Logo className="h-8" />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`transition-colors leading-7 font-bold text-lg ${currentPage === "/" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Home
              </Link>
              <Link
                to="/product"
                className={`transition-colors font-bold text-lg ${currentPage === "/product" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Product
              </Link>
              <Link
                to="/about"
                className={`transition-colors text-lg font-bold ${currentPage === "/about" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className={`transition-colors text-lg font-bold ${currentPage === "/blog" ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
              >
                Blogs
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-base">
              Login
            </button>
            <button className="px-5 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-md hover:shadow-lg text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
