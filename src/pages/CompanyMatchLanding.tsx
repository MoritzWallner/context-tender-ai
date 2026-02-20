"use client"

import CompanyMatchHero from "@/components/CompanyMatchHero"
import CompanyMatchServices from "@/components/CompanyMatchServices"
import CompanyMatchProblem from "@/components/CompanyMatchProblem"
import CompanyMatchComparison from "@/components/CompanyMatchComparison"
import MainCTA from "@/components/MainCTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavbarNew"
import SectionDivider from "@/components/SectionDivider"
import ProductSearchBar from "@/components/ProductSearchBar"
import AnimatedBackground from "@/components/AnimatedBackground"

const CompanyMatchLanding = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <CompanyMatchHero />
          {/* Filtered search bar — companies only */}
          <section className="py-10 sm:py-14 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Search in 10M+ companies in real time</h2>
                <p className="text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1.5 font-medium text-indigo-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                    AI-powered matches
                  </span>
                  {" "}— join to get more insights or use our services
                </p>
              </div>
              <ProductSearchBar category="companies" accentColor="indigo" visibleTabs={['companies']} />
            </div>
          </section>
          <SectionDivider />
          <CompanyMatchServices />
          <SectionDivider />
          <CompanyMatchProblem />
          <SectionDivider />
          <CompanyMatchComparison />
          <SectionDivider />
          <MainCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default CompanyMatchLanding
