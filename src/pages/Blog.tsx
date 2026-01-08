"use client"

import BlogPage from "@/components/BlogPage"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <BlogPage />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Blog
