"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Building2, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const useCountUp = (end: number, duration = 1800) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
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
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

const CompanyMatchHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-14">
      <style>{`
        @keyframes cm-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes cm-scan { 0% { top: 0%; } 50% { top: 90%; } 51% { top: 90%; } 100% { top: 0%; } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-56px)] flex items-center py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

            {/* Left Content */}
            <div className="max-w-xl">
              <Badge className="mb-6 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-100 border border-indigo-200 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse mr-2 inline-block" />
                company.match — B2B Intelligence Platform
              </Badge>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-5 tracking-tight"
                style={{ lineHeight: 1.1 }}
              >
                10 Million Companies.{' '}
                <span className="text-blue-600">Your Perfect Match, Instantly.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 mb-8 leading-relaxed">
                Europe's first context-based B2B company database. Describe what you need — and discover partners, suppliers, and collaborators that no other platform can find.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="default" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg px-6 border-0" asChild>
                  <Link to="/waitlist">
                    Try it for free
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="default" className="font-medium border-slate-200 text-slate-700 hover:bg-slate-50 px-6" asChild>
                  <a href="mailto:office@alpxtechnologies.com?subject=Talk to Founders">
                    Talk to Founders
                  </a>
                </Button>
              </div>

              {/* Trust strip — animated counters */}
              <AnimatedStats />
            </div>

            {/* Right: Interactive Company Database Visual */}
            <div className="hidden lg:block relative">
              <CompanyMatchDemoVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AnimatedStats: React.FC = () => {
  const { count: companies, ref: companiesRef } = useCountUp(10, 1800)
  const { count: countries, ref: countriesRef } = useCountUp(27, 1400)
  const { count: searchTime, ref: searchRef } = useCountUp(30, 1200)

  return (
    <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
      <div ref={companiesRef}>
        <div className="text-xl font-bold text-blue-600">{companies}M+</div>
        <div className="text-xs text-slate-400 mt-0.5">Companies</div>
      </div>
      <div ref={countriesRef}>
        <div className="text-xl font-bold text-blue-600">{countries}</div>
        <div className="text-xs text-slate-400 mt-0.5">EU Countries</div>
      </div>
      <div ref={searchRef}>
        <div className="text-xl font-bold text-blue-600">{searchTime}s</div>
        <div className="text-xs text-slate-400 mt-0.5">Search Time</div>
      </div>
    </div>
  )
}

const CompanyMatchDemoVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      {/* Main card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="flex-1 bg-slate-50 rounded-md px-3 py-1.5 ml-2 flex items-center gap-2 border border-slate-100">
            <Globe className="h-3 w-3 text-indigo-500" />
            <span className="text-xs text-slate-400">company.match / intelligent-search</span>
          </div>
        </div>

        {/* Search query */}
        <div className="bg-indigo-50 rounded-lg p-3 mb-4 border border-indigo-100 flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
          <span className="text-xs text-slate-600 italic">"ISO 14001 certified engineering partner in Austria with public sector experience"</span>
        </div>

        {/* Scanning indicator */}
        <div className="relative mb-4 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden" style={{ height: '32px' }}>
          <div className="flex items-center gap-2 px-3 h-full">
            <div className="flex gap-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-indigo-500" style={{ animation: `cm-float ${1.2 + i * 0.2}s ease-in-out infinite ${i * 0.15}s` }} />
              ))}
            </div>
            <span className="text-[10px] text-slate-400">Scanning 10,000,000 company profiles...</span>
            <span className="ml-auto text-[10px] text-indigo-600 font-medium">342ms</span>
          </div>
          <div className="absolute left-0 right-0 h-px bg-indigo-400/40" style={{ animation: 'cm-scan 2.5s linear infinite', top: '0%' }} />
        </div>

        {/* Results */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Top Matches</span>
            <span className="text-[10px] text-indigo-600">3 of 847 results</span>
          </div>
          {[
            { name: "EcoPartner GmbH", location: "Vienna, AT", match: 96, badge: "ISO 14001", color: "bg-indigo-500", initials: "EP" },
            { name: "LocalBuild Engineering", location: "Graz, AT", match: 93, badge: "Public Sector", color: "bg-indigo-600", initials: "LB" },
            { name: "GreenTech Solutions", location: "Salzburg, AT", match: 88, badge: "ISO 9001", color: "bg-indigo-400", initials: "GT" },
          ].map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-slate-50 rounded-lg border border-slate-100 p-2.5 hover:border-indigo-200 transition-colors"
              style={{ animation: `cm-float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg ${company.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                  {company.initials}
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">{company.name}</div>
                  <div className="text-[10px] text-slate-400">{company.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">{company.badge}</span>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-semibold border border-indigo-100">
                  {company.match}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-[10px] text-slate-400">Context-based, not keyword-based</span>
          </div>
          <span className="text-[10px] text-indigo-600 font-medium">company.match</span>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg"
        style={{ animation: 'cm-float 3s ease-in-out infinite' }}
      >
        10M+ Companies
      </div>
    </div>
  )
}

export default CompanyMatchHero
