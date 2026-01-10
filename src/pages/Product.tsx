"use client"

import ProductPage from "@/components/ProductPage"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionDivider from "@/components/SectionDivider"

const Product = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />
      <main>
        <ProductPage />
        <SectionDivider variant="line" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Product
