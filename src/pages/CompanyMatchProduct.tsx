"use client"

import CompanyMatchProductPage from "@/components/CompanyMatchProductPage"
import MainCTA from "@/components/MainCTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavbarNew"
import SectionDivider from "@/components/SectionDivider"
import AnimatedBackground from "@/components/AnimatedBackground"

const CompanyMatchProduct = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <CompanyMatchProductPage />
          <SectionDivider />
          <MainCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default CompanyMatchProduct
