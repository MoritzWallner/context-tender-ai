"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FramedCard from "@/components/FramedCard"
import SectionDivider from "@/components/SectionDivider"
import CTASection from "@/components/CTASection"

// ============================================
// ANIMATED COUNTER (Apple Style)
// ============================================
const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end,
  suffix = "",
  duration = 2000,
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  )
}

// ============================================
// SCROLL REVEAL COMPONENT
// ============================================
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  )
}

// ============================================
// COMPARISON CARD
// ============================================
interface ComparisonCardProps {
  category: string
  traditional: string
  alpx: string
  icon: React.ReactNode
  color: string
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
        className="relative w-full h-[380px] transition-all duration-700 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          <div className="h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-7 border border-slate-200 shadow-lg">
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 shadow-md`}>
              {icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">The Old Way</span>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{category}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{traditional}</p>
            <div className="absolute bottom-6 left-7 right-7">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <span>Hover to see AlpX way</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-7 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-5">
              <img src="/alpx-logo-symbol.png" alt="AlpX" className="h-7 w-7 object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2 block">The AlpX Way</span>
            <h3 className="text-xl font-bold text-white mb-3">{category}</h3>
            <p className="text-blue-100 leading-relaxed text-sm">{alpx}</p>
            <div className="absolute bottom-6 left-7 right-7">
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors"
              >
                Get Started
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
  const heroStats = [
    { value: 20, suffix: "+", label: "Hours Saved Weekly", desc: "Per procurement manager" },
    { value: 2000, suffix: "+", label: "EU Portals", desc: "Monitored 24/7" },
    { value: 90, suffix: "%", label: "Match Accuracy", desc: "Relevant opportunities" },
    { value: 10, suffix: "M+", label: "Companies", desc: "In partner database" },
  ]

  const comparisons = [
    {
      category: "Tender Search",
      icon: <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
      color: "bg-blue-100",
      traditional: "Endless browsing across portals. Screenshots, spreadsheets, guesswork.",
      alpx: "Instantly search 2,000+ European portals. AI understands context, not just keywords.",
    },
    {
      category: "Analysis",
      icon: <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
      color: "bg-purple-100",
      traditional: "Manual review of hundreds of pages. Hours checking requirements.",
      alpx: "AI analyzes full documents automatically. Detailed gap analysis in minutes.",
    },
    {
      category: "Matching",
      icon: <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-emerald-100",
      traditional: "Keyword-based alerts deliver noise. Too generic or too specific.",
      alpx: "Context-based semantic matching. Only opportunities you can win.",
    },
    {
      category: "Partners",
      icon: <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
      color: "bg-orange-100",
      traditional: "Weeks of networking and cold calls. Often too late.",
      alpx: "Automatic suggestions from 10M+ profiles. Find partners in minutes.",
    },
    {
      category: "Monitoring",
      icon: <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>,
      color: "bg-red-100",
      traditional: "Manual daily checks. Easy to miss opportunities.",
      alpx: "24/7 AI monitoring. Real-time alerts. Never miss a deadline.",
    },
    {
      category: "Cost",
      icon: <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-cyan-100",
      traditional: "€1,000+/month for aggregators or €100k+ for staff.",
      alpx: "Enterprise AI at SME prices. Starting €300/seat/month.",
    },
  ]

  const journey = [
    { step: "01", title: "Connect Profile", desc: "Upload capabilities and certifications. Takes 10 minutes.", icon: "🔗" },
    { step: "02", title: "AI Learns", desc: "Semantic AI analyzes your strengths and ideal matches.", icon: "🧠" },
    { step: "03", title: "Get Matches", desc: "Daily alerts with gap analysis and win probability.", icon: "📬" },
    { step: "04", title: "Win More", desc: "Build consortiums and submit stronger proposals.", icon: "🏆" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden bg-dotted-pattern">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section - Apple Style Numbers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Why Choose AlpX
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
              The Intelligent Way to Win<br />
              <span className="text-blue-600">Public Contracts</span>
            </h1>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {heroStats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <div className="text-slate-900 font-semibold mt-2">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider variant="dots" />

        {/* Comparison Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Compare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                The Old Way vs. AlpX
              </h2>
              <p className="text-slate-500">Hover to see the difference</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <ComparisonCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider variant="line" />

        {/* Journey Timeline with Scroll Animation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Your Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                From Chaos to Control
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <div className="relative">
                  {idx < journey.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-4"></div>
                  )}
                  <FramedCard variant="compact">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <span className="text-blue-600 font-bold text-3xl block mb-2">{item.step}</span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </FramedCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider variant="dots" />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default WhyAlpX
