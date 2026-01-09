"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FramedCard from "@/components/FramedCard"

interface ComparisonCardProps {
  category: string
  traditional: string
  alpx: string
  icon: React.ReactNode
  color: string
  index: number
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ category, traditional, alpx, icon, color, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-[420px] transition-all duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side - Traditional Way */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow`}>
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-md`}>
              {icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              The Old Way
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{category}</h3>
            <p className="text-slate-500 leading-relaxed">{traditional}</p>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <span>Hover to see the AlpX way</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - AlpX Way */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
              <img src="/alpx-logo-symbol.png" alt="AlpX" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2 block">
              The AlpX Way
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
            <p className="text-blue-100 leading-relaxed">{alpx}</p>
            <div className="absolute bottom-8 left-8 right-8">
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhyAlpX: React.FC = () => {
  const comparisons = [
    {
      category: "Tender Search",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
      color: "bg-blue-100",
      traditional: "Endless browsing across portals in different formats. Screenshots, spreadsheets, guesswork. Never sure if you've found everything.",
      alpx: "Instantly search 2,000+ European portals. AI understands context, not just keywords. One profile covers all of Europe in every language.",
    },
    {
      category: "Tender Analysis",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      color: "bg-purple-100",
      traditional: "Manual review of hundreds of pages. Hours checking requirements against your capabilities. No systematic approach.",
      alpx: "AI analyzes full tender documents automatically. Detailed gap analysis shows exactly what you can deliver and what capabilities are missing.",
    },
    {
      category: "Matching Quality",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: "bg-emerald-100",
      traditional: "Keyword-based alerts deliver noise. Too generic = false positives to read through. Too specific = missed opportunities.",
      alpx: "Context-based semantic matching with AI Agent Analysis that understands your company's actual capabilities. Only opportunities you can actually win.",
    },
    {
      category: "Consortium Partners",
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      color: "bg-orange-100",
      traditional: "Weeks of networking, cold calls, trade shows. Often too late to meet deadlines.",
      alpx: "Automatic partner suggestions from 10M+ company profiles. Find the perfect consortium member in minutes, not weeks.",
    },
    {
      category: "Monitoring",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
      ),
      color: "bg-red-100",
      traditional: "Manual daily checks across multiple portals and languages. Easy to miss deadlines and opportunities.",
      alpx: "24/7 AI monitoring across all portals. Real-time alerts when relevant opportunities appear. Never miss a deadline again.",
    },
    {
      category: "Cost Efficiency",
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: "bg-cyan-100",
      traditional: "€1,000+/month for aggregators that still require manual analysis, or €100,000+ annually for dedicated staff.",
      alpx: "Enterprise-grade AI quality at SME-friendly prices. Starting at €300/seat/month. No hidden fees, cancel anytime.",
    },
  ]

  const stats = [
    { value: "2,000+", label: "Portals Covered", description: "European procurement platforms" },
    { value: "10M+", label: "Companies", description: "In our partner database" },
    { value: "90%+", label: "Match Accuracy", description: "Relevant opportunities" },
    { value: "20hrs", label: "Time Saved", description: "Per month per user" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Why Choose AlpX
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
            The Intelligent Way to Win Public Contracts
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            See how AI-powered procurement transforms every step of your workflow. Hover over each card to discover the difference.
          </p>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <FramedCard>
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-200 font-semibold mb-1">{stat.label}</div>
                    <div className="text-blue-300 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </FramedCard>
        </section>

        {/* Comparison Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisons.map((item, idx) => (
              <ComparisonCard key={idx} {...item} index={idx} />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              From Chaos to Control in 4 Steps
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"></div>

            <div className="space-y-12">
              {[
                { step: "01", title: "Connect Your Profile", desc: "Upload your company capabilities, certifications, and past experience. Takes 10 minutes." },
                { step: "02", title: "AI Learns Your Needs", desc: "Our semantic AI analyzes your strengths and identifies ideal tender matches across Europe." },
                { step: "03", title: "Receive Smart Matches", desc: "Get daily alerts for relevant opportunities with detailed gap analysis and win probability." },
                { step: "04", title: "Win More Contracts", desc: "Build winning consortiums with AI-suggested partners and submit stronger proposals." },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <FramedCard variant="compact">
                      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-blue-600 font-bold text-4xl mb-4 block">{item.step}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500">{item.desc}</p>
                      </div>
                    </FramedCard>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center font-bold shadow-lg z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FramedCard>
            <div className="bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px"
                }}></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Ready to Transform Your Procurement?
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                  Join leading European companies already winning more public contracts with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/waitlist"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Join Waitlist
                  </Link>
                  <a
                    href="mailto:office@alpx.at?subject=Talk to Founders"
                    className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                  >
                    Talk to Founders
                  </a>
                </div>
              </div>
            </div>
          </FramedCard>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default WhyAlpX
