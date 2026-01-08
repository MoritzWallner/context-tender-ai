"use client"

import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import ComparisonTable from "@/components/ComparisonTable"
import TenderMatchFeatures from "@/components/TenderMatchFeatures"
import CompanyMatchFeatures from "@/components/CompanyMatchFeatures"
import IndustryFeatures from "@/components/IndustryFeatures"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ComparisonTable />
        <TenderMatchFeatures />
        <CompanyMatchFeatures />
        <IndustryFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
