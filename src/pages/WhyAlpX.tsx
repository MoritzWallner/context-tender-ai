"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Navbar from "@/components/NavbarNew"
import Footer from "@/components/Footer"
import FramedCard from "@/components/FramedCard"
import SectionDivider from "@/components/SectionDivider"
import MainCTA from "@/components/MainCTA"
import AnimatedBackground from "@/components/AnimatedBackground"

// ============================================
// ANIMATED COUNTER (Apple Style)
// ============================================
const AnimatedCounter: React.FC<{ end: number; suffix?: string; prefix?: string; duration?: number }> = ({
  end,
  suffix = "",
  prefix = "",
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
      {prefix}{count}{suffix}
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
        className="relative w-full h-[420px] transition-all duration-700 cursor-pointer"
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
                <span>Hover to see the AlpX way</span>
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
                className="btn-shine inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-lg text-white text-sm font-semibold hover:bg-white/30 transition-colors"
              >
                Try it for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// FEATURE CARD COMPONENT
// ============================================
interface FeatureCardProps {
  icon: React.ReactNode
  color: string
  badge: string
  title: string
  desc: string
  bullets: string[]
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, color, badge, title, desc, bullets }) => (
  <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-5 shadow-sm`}>
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">{badge}</span>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
    <ul className="mt-auto space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          {b}
        </li>
      ))}
    </ul>
  </div>
)

// ============================================
// MAIN COMPONENT
// ============================================
const WhyAlpX: React.FC = () => {
  const heroStats = [
    { value: 20, suffix: "+", prefix: "", label: "Hours Saved Weekly", desc: "Per procurement manager" },
    { value: 2000, suffix: "+", prefix: "", label: "EU Portals", desc: "Monitored 24/7" },
    { value: 3, suffix: "x", prefix: "Up to ", label: "More Opportunities", desc: "Compared to manual search" },
    { value: 10, suffix: "M+", prefix: "", label: "Companies", desc: "In partner database" },
  ]

  const platformFeatures: FeatureCardProps[] = [
    {
      icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
      color: "bg-blue-100",
      badge: "tender.match",
      title: "Tender Discovery & Analysis",
      desc: "Monitor 2,000+ EU procurement portals simultaneously. Our AI reads tenders in any language and matches them to your exact profile — with a gap analysis and win score ready before you open a single document.",
      bullets: [
        "2,000+ portals monitored 24/7",
        "AI gap analysis per tender",
        "Win probability score",
        "Auto-translated from 40+ languages",
      ],
    },
    {
      icon: <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
      color: "bg-indigo-100",
      badge: "company.match",
      title: "B2B Partner & Supplier Search",
      desc: "Search 10M+ verified EU company profiles in seconds. Find consortium partners for specific tenders, source qualified suppliers, or post a Reverse Tender and let the right companies bid on your needs.",
      bullets: [
        "10M+ EU company profiles",
        "AI-matched by capability & cert",
        "Reverse Tendering (suppliers bid)",
        "Natural language product search",
      ],
    },
    {
      icon: <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
      color: "bg-emerald-100",
      badge: "Visibility",
      title: "Be Found by Others",
      desc: "Your company profile becomes an active presence in the EU B2B marketplace. Other businesses searching for your exact capabilities — for tenders, sourcing, or partnerships — discover and contact you directly.",
      bullets: [
        "Profile visible to 10M+ companies",
        "Inbound partner & client requests",
        "Capability matching across borders",
        "Verified certifications & track record",
      ],
    },
    {
      icon: <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
      color: "bg-orange-100",
      badge: "Intelligence",
      title: "AI-Powered Match Engine",
      desc: "Our semantic AI understands meaning — not just keywords. It maps tender requirements against your real capabilities, identifies gaps, and ranks every match by actual fit. No noise, only relevant opportunities.",
      bullets: [
        "Semantic search (not keyword)",
        "Context-aware capability matching",
        "Gap detection & recommendations",
        "Ranked by fit, not recency",
      ],
    },
    {
      icon: <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>,
      color: "bg-red-100",
      badge: "Monitoring",
      title: "24/7 Autonomous Monitoring",
      desc: "AI agents run around the clock — scanning portals, updating company profiles, and alerting you the moment something relevant happens. You're always informed, never playing catch-up.",
      bullets: [
        "Real-time tender alerts",
        "New supplier registrations",
        "Weekly intelligence digest",
        "Market change notifications",
      ],
    },
    {
      icon: <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      color: "bg-cyan-100",
      badge: "Pricing",
      title: "Enterprise Power, SME Price",
      desc: "Full access to tender.match and company.match — no hidden fees, no per-module upsells. Starting at €300/seat/month. Most customers see ROI within the first won tender or sourcing deal.",
      bullets: [
        "Both modules included",
        "From €300/seat/month",
        "No long-term contracts",
        "ROI typically within month 1",
      ],
    },
  ]

  const comparisons = [
    {
      category: "Tender Search",
      icon: <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
      color: "bg-blue-100",
      traditional: "Teams spend 8–15 hours per week manually checking dozens of portals in different languages. Opportunities are missed because of search limitations, outdated spreadsheets, and no cross-border visibility. Critical tenders slip through the cracks.",
      alpx: "AlpX monitors 2,000+ EU procurement portals simultaneously — in real time, in any language. One unified dashboard replaces hours of manual browsing. You see every relevant tender the moment it's published, scored and ranked by fit.",
    },
    {
      category: "Tender Analysis",
      icon: <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
      color: "bg-purple-100",
      traditional: "Reading through hundreds of pages of tender documents per opportunity takes hours. Teams make go/no-go decisions without knowing their real fit score. Viable tenders are dismissed simply because there's no time to analyze them properly.",
      alpx: "Our AI reads complete tender documents in minutes, extracts every requirement, and compares them against your company profile. You get a precise gap analysis and win probability score — before you invest a single hour in preparation.",
    },
    {
      category: "Match Quality",
      icon: <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-emerald-100",
      traditional: "Keyword alerts are either too broad (hundreds of irrelevant results) or too narrow (missed opportunities). Supplier searches return outdated directories. You're matching on surface-level terms, not actual capability fit.",
      alpx: "Semantic AI understands the real meaning behind tender requirements and company profiles — for both modules. Whether you're looking for tenders to bid on or suppliers to work with, AlpX surfaces only the matches where you have a genuine chance.",
    },
    {
      category: "Partner & Supplier Search",
      icon: <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
      color: "bg-orange-100",
      traditional: "Finding consortium partners or qualified suppliers means weeks of networking, cold outreach, and industry events. When a capability gap surfaces close to a tender deadline, there's rarely enough time. Many winnable contracts are lost before the bidding even starts.",
      alpx: "Search 10M+ verified EU company profiles in seconds. Our AI suggests the ideal consortium partners for specific tenders, surfaces qualified suppliers for your sourcing needs, and lets you post a Reverse Tender — so the right companies come to you.",
    },
    {
      category: "Being Found",
      icon: <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
      color: "bg-red-100",
      traditional: "Your company's capabilities, certifications, and track record are invisible to 99% of potential buyers and consortium partners across Europe. You only win business through personal networks — and you're always the one reaching out, never the one being discovered.",
      alpx: "Your company profile is active and searchable by 10M+ businesses across the EU. Other companies looking for your exact capabilities — for tenders, supplier sourcing, or project partnerships — can find and contact you directly through AlpX.",
    },
    {
      category: "Cost & ROI",
      icon: <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      color: "bg-cyan-100",
      traditional: "Enterprise tender aggregators cost €1,000–3,000/month and still require hours of manual analysis. Dedicated procurement staff runs €80,000–120,000/year. For SMEs, systematic tender monitoring and supplier discovery is simply not affordable.",
      alpx: "Full access to both tender.match and company.match — at SME-friendly pricing. Starting at €300/seat/month with full AI automation included. No hidden fees, no long-term contracts. Most customers see ROI within the first won tender or sourcing deal.",
    },
  ]

  const journey = [
    {
      step: "01",
      title: "Build Your Profile",
      desc: "Upload your company capabilities, certifications, past projects, and preferences — both what you're looking for and what you offer. Tell us which tenders fit you, which suppliers you need, and what kind of partners you want. Setup takes about 10 minutes.",
    },
    {
      step: "02",
      title: "AI Maps Your Position",
      desc: "Our semantic AI analyzes your profile to understand your strengths, ideal tender types, sourcing needs, and what makes you attractive to others. It identifies your capabilities, preferred contract sizes, geographic focus — and positions your company as findable in the B2B marketplace.",
    },
    {
      step: "03",
      title: "Matches Flow Both Ways",
      desc: "Get daily alerts for tenders with gap analysis and win probability. Receive matched suppliers, consortium partners, and products aligned to your needs. And crucially — other companies searching for your capabilities will find and approach you directly. You're not just searching. You're being found.",
    },
    {
      step: "04",
      title: "Win Tenders. Source Better. Grow Faster.",
      desc: "Build winning consortiums with AI-suggested partners. Use Reverse Tendering so suppliers bid on your requirements. Find specific products across 10M+ company catalogs. Track tenders, supplier relationships, and new inbound leads — all from one intelligent platform.",
    },
  ]

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Why Choose AlpX
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto" style={{ lineHeight: 1.1 }}>
              One Platform.<br />
              <span className="text-blue-600">Everything You Need to Win.</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              From tender discovery to supplier sourcing — and being found yourself. AlpX combines two AI modules into one intelligent B2B platform.
            </p>
          </div>

          {/* Animated Stats Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {heroStats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow min-w-[160px] md:min-w-[200px]">
                  <div className="relative">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none opacity-50"></div>
                  </div>
                  <div className="text-slate-900 font-semibold mt-2">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Platform Features — what the platform does */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What AlpX Does</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                All the Tools. One Platform.
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                AlpX brings together tender intelligence and company matching in a single, unified platform. Here's what you get.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Journey Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Your Journey</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                From Chaos to Control in 4 Steps
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"></div>

            <div className="space-y-12">
              {journey.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 200}>
                  <div className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Section */}
        <MainCTA />
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default WhyAlpX
