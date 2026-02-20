"use client"

import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import ComparisonTable from "@/components/ComparisonTable"
import TenderMatchFeatures from "@/components/TenderMatchFeatures"
import ConsortiumBuilder from "@/components/ConsortiumBuilder"
import IndustryFeatures from "@/components/IndustryFeatures"
import MainCTA from "@/components/MainCTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavbarNew"
import SectionDivider from "@/components/SectionDivider"
import ProductSearchBar from "@/components/ProductSearchBar"
import AnimatedBackground from "@/components/AnimatedBackground"

const TenderMatchLanding = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          {/* Filtered search bar — tenders only */}
          <section className="py-10 sm:py-14 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500">Try searching for a tender right now — powered by the same AI engine</p>
              </div>
              <ProductSearchBar category="tenders" accentColor="blue" visibleTabs={['tenders']} />
            </div>
          </section>
          <SectionDivider />
          <ProblemSection />
          <SectionDivider />
          <ComparisonTable />
          <SectionDivider />
          <TenderMatchFeatures />
          <SectionDivider />
          <ConsortiumBuilder />
          <SectionDivider />
          <IndustryFeatures />
          <SectionDivider />
          <MainCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default TenderMatchLanding
