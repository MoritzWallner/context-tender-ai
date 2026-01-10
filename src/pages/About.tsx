"use client"

import AboutUs from "@/components/AboutUs"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionDivider from "@/components/SectionDivider"

const About = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />
      <main>
        <AboutUs />
        <SectionDivider variant="line" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default About
