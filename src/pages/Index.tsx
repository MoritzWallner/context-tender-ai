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
import SectionDivider from "@/components/SectionDivider"

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="line" />
        <ProblemSection />
        <SectionDivider variant="dots" />
        <ComparisonTable />
        <SectionDivider variant="line" />
        <TenderMatchFeatures />
        <SectionDivider variant="dots" />
        <CompanyMatchFeatures />
        <SectionDivider variant="line" />
        <IndustryFeatures />
        <SectionDivider variant="dots" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
