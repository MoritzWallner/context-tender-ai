"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const NavbarNew = () => {
  const location = useLocation()
  const currentPage = location.pathname
  const [sheetOpen, setSheetOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSheetOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">

          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/" onClick={handleNavClick} className="hover:opacity-80 transition-opacity shrink-0">
              <Logo className="h-7" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* tender.match — kein Icon */}
              <Link
                to="/tender-match"
                onClick={handleNavClick}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  currentPage.startsWith("/tender-match")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                tender.match
              </Link>

              {/* company.match — kein Icon */}
              <Link
                to="/company-match"
                onClick={handleNavClick}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  currentPage.startsWith("/company-match")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                company.match
              </Link>

              <div className="w-px h-4 bg-gray-200 mx-1" />

              <Link
                to="/why-alpx"
                onClick={handleNavClick}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  currentPage === "/why-alpx" ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Why AlpX
              </Link>

              <Link
                to="/about"
                onClick={handleNavClick}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  currentPage === "/about" ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop: ein einziger CTA-Button */}
          <div className="hidden sm:flex items-center">
            <Button
              size="sm"
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-sm shadow-blue-500/25 px-5"
            >
              <Link to="/waitlist" onClick={handleNavClick}>Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 text-gray-600"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-10">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo className="h-6" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-0.5 mt-6">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === "/" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/tender-match"
                  onClick={handleNavClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPage.startsWith("/tender-match") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  tender.match
                </Link>
                <Link
                  to="/company-match"
                  onClick={handleNavClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPage.startsWith("/company-match") ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  company.match
                </Link>

                <Link
                  to="/why-alpx"
                  onClick={handleNavClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === "/why-alpx" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Why AlpX
                </Link>
                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === "/about" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  About
                </Link>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-sm font-semibold" asChild>
                    <Link to="/waitlist" onClick={handleNavClick}>Get started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default NavbarNew
