"use client"

import Hero from "@/components/Hero"
import ProblemSection from "@/components/ProblemSection"
import SolutionSection from "@/components/SolutionSection"
import HowItWorks from "@/components/HowItWorks"
import BenefitsGrid from "@/components/BenefitsGrid"
import ComparisonTable from "@/components/ComparisonTable"
import SocialProof from "@/components/SocialProof"
import WaitlistForm from "@/components/WaitlistForm"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <BenefitsGrid />
        <ComparisonTable />
        <SocialProof />
        <WaitlistForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
