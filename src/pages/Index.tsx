"use client"

import SearchHero from "@/components/SearchHero"
import SectionDivider from "@/components/SectionDivider"
import ProductModules from "@/components/ProductModules"
import MainCTA from "@/components/MainCTA"
import Footer from "@/components/Footer"
import Navbar from "@/components/NavbarNew"
import AnimatedBackground from "@/components/AnimatedBackground"

const Index = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <div id="alpx-hero-section">
            <SearchHero />
          </div>
          <SectionDivider label="Our Modules" />
          <div id="alpx-modules-section">
            <ProductModules />
          </div>
          <SectionDivider />
          <div id="alpx-cta-section">
            <MainCTA />
          </div>
        </main>
        <SectionDivider />
        <div id="alpx-footer-section">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Index
