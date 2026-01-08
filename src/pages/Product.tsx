"use client"

import ProductPage from "@/components/ProductPage"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Product = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <ProductPage />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Product
