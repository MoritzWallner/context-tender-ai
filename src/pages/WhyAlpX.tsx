"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FramedCard from "@/components/FramedCard"

// ============================================
// ANIMATED BENEFIT CARD
// ============================================
interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => (
  <div
    className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
    {/* Subtle hover glow */}
    <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
)

// ============================================
// COMPARISON CARD (FLIP)
// ============================================
interface ComparisonCardProps {
  category: string
  traditional: string
  alpx: string
  icon: React.ReactNode
  color: string
  index: number
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ category, traditional, alpx, icon, color }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-[420px] transition-all duration-700 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          <div className="h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg">
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 shadow-md`}>
              {icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">The Old Way</span>
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

        {/* Back Side */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-6">
              <img src="/alpx-logo-symbol.png" alt="AlpX" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2 block">The AlpX Way</span>
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

// ============================================
// MAIN COMPONENT
// ============================================
const WhyAlpX: React.FC = () => {
  const benefits = [
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "Save 20+ Hours Weekly",
      description: "Stop manual searching. AI handles discovery across all portals automatically.",
    },
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "High Match Quality",
      description: "Semantic AI understands context. Only see opportunities you can actually win.",
    },
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "Significant Cost Savings",
      description: "Replace expensive consultants with AI-powered intelligence at a fraction of the cost.",
    },
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>,
      title: "More Opportunities",
      description: "Discover tenders you would have missed. Expand into new markets effortlessly.",
    },
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>,
      title: "Fully Automatic",
      description: "24/7 AI monitoring. Get alerts instantly when matching opportunities appear.",
    },
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "2,000+ EU Portals",
      description: "One search covers all major European procurement platforms. 27 countries, 40+ languages.",
    },
  ]

  const comparisons = [
    {
      category: "Tender Search",
      icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
      color: "bg-blue-100",
      traditional: "Endless browsing across portals in different formats. Screenshots, spreadsheets, guesswork.",
      alpx: "Instantly search 2,000+ European portals. AI understands context, not just keywords.",
    },
    {
      category: "Tender Analysis",
      icon: <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
      color: "bg-purple-100",
      traditional: "Manual review of hundreds of pages. Hours checking requirements against capabilities.",
      alpx: "AI analyzes full tender documents automatically. Detailed gap analysis in minutes.",
    },
    {
      category: "Matching Quality",
      icon: <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-emerald-100",
      traditional: "Keyword-based alerts deliver noise. Too generic or too specific—never right.",
      alpx: "Context-based semantic matching. Only opportunities you can actually win.",
    },
    {
      category: "Consortium Partners",
      icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
      color: "bg-orange-100",
      traditional: "Weeks of networking, cold calls. Often too late to meet deadlines.",
      alpx: "Automatic partner suggestions from 10M+ profiles. Find partners in minutes.",
    },
    {
      category: "Monitoring",
      icon: <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>,
      color: "bg-red-100",
      traditional: "Manual daily checks across multiple portals. Easy to miss opportunities.",
      alpx: "24/7 AI monitoring. Real-time alerts. Never miss a deadline again.",
    },
    {
      category: "Cost Efficiency",
      icon: <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-cyan-100",
      traditional: "€1,000+/month for aggregators, or €100,000+ annually for dedicated staff.",
      alpx: "Enterprise-grade AI at SME prices. Starting at €300/seat/month.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-float-subtle { animation: float-subtle 6s ease-in-out infinite; }
      `}</style>

      <main className="pt-32 pb-20">
        {/* Hero Section - NEW DESIGN */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block animate-fade-in-up">
              Why Choose AlpX
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              The Intelligent Way to Win<br />
              <span className="text-blue-600">Public Contracts</span>
            </h1>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Transform your procurement workflow with AI-powered intelligence
            </p>
          </div>

          {/* Benefits Grid - Bento Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-scale-in" style={{ animationDelay: "300ms" }}>
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} delay={idx * 100} />
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          </div>
        </div>

        {/* Comparison Cards Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Compare
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              The Old Way vs. The AlpX Way
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Hover over each card to see how AI transforms every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisons.map((item, idx) => (
              <ComparisonCard key={idx} {...item} index={idx} />
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              From Chaos to Control in 4 Steps
            </h2>
          </div>

          <div className="relative">
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
            <div className="bg-slate-900 rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px"
                }}></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Ready to Transform Your Procurement?
                </h2>
                <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                  Join leading European companies already winning more public contracts with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/waitlist"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
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
