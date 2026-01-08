"use client"

import AboutUs from "@/components/AboutUs"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const About = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <AboutUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default About
