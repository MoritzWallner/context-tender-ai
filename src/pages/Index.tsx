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
    <div className="min-h-screen bg-dotted-pattern text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="line" />
        <ProblemSection />
        <SectionDivider variant="line" />
        <ComparisonTable />
        <SectionDivider variant="line" />
        <TenderMatchFeatures />
        <SectionDivider variant="line" />
        <CompanyMatchFeatures />
        <SectionDivider variant="line" />
        <IndustryFeatures />
        <SectionDivider variant="line" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
