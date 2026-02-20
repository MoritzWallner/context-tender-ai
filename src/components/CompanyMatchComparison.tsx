"use client"

import type React from "react"
import FramedCard from "./FramedCard"
import ScrollReveal from "./ScrollReveal"

interface ComparisonRow {
  icon: React.ReactNode
  iconBg: string
  hoverClass: string
  category: string
  traditional: string
  alpxWay: string
}

const rows: ComparisonRow[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    iconBg: "bg-indigo-100 text-indigo-600",
    hoverClass: "group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:border-indigo-200",
    category: "Supplier Discovery",
    traditional: "Weeks of networking, trade shows, cold calls, and personal referrals with limited reach across Europe.",
    alpxWay: "AI searches 10M+ company profiles instantly — finds perfect suppliers by capabilities, certifications, and track record.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    iconBg: "bg-purple-100 text-purple-600",
    hoverClass: "group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:border-purple-200",
    category: "RFQ Process",
    traditional: "Manual outreach to 3–5 known suppliers. Incomplete market view leads to overpaying or poor quality.",
    alpxWay: "Automated RFQ to 10, 20, 30+ qualified suppliers simultaneously. Standardized responses for fair comparison.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-100 text-emerald-600",
    hoverClass: "group-hover:bg-emerald-100 group-hover:text-emerald-600 group-hover:border-emerald-200",
    category: "Supplier Verification",
    traditional: "Weeks of reference checks, manual certification checks, limited historical performance data.",
    alpxWay: "Verified certifications, enriched company profiles, and historical track records — available instantly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
    ),
    iconBg: "bg-orange-100 text-orange-600",
    hoverClass: "group-hover:bg-orange-100 group-hover:text-orange-600 group-hover:border-orange-200",
    category: "Bid Comparison",
    traditional: "Manual evaluation in spreadsheets. Comparing 3 suppliers across multiple criteria takes days.",
    alpxWay: "AI-powered bid comparison across 30+ suppliers. Structured scoring, side-by-side analysis, instant ranking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-red-100 text-red-600",
    hoverClass: "group-hover:bg-red-100 group-hover:text-red-600 group-hover:border-red-200",
    category: "Market Coverage",
    traditional: "Your network = your market. 99% of European companies are invisible to you.",
    alpxWay: "10M+ European company profiles, including those not registered on any procurement platform.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-cyan-100 text-cyan-600",
    hoverClass: "group-hover:bg-cyan-100 group-hover:text-cyan-600 group-hover:border-cyan-200",
    category: "Sourcing Speed",
    traditional: "3–6 weeks to find, evaluate, and select a supplier. Reactive, not strategic.",
    alpxWay: "Results in 30 seconds. Full supplier shortlist with verified profiles in under an hour.",
  },
]

const CompanyMatchComparison: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-8">
            <div>
              <span className="tracking-[0.3em] uppercase mb-3 sm:mb-4 block text-xs sm:text-sm font-extrabold text-indigo-600">
                Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why company.match is the Smarter Way to Source Suppliers
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-500 max-w-sm leading-relaxed">
              See how AI-powered supplier discovery eliminates manual sourcing effort and gets better results.
            </p>
          </div>
        </ScrollReveal>

        <FramedCard>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            {rows.map((row, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                {/* Desktop Row */}
                <div className="hidden md:grid grid-cols-12 border-b border-slate-100 last:border-0 group hover:bg-slate-50/50 transition-colors">
                  <div className="col-span-3 p-4 sm:p-5 md:p-6 border-r border-slate-100 flex flex-col items-start gap-3 sm:gap-4 bg-slate-50/50">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 ${row.hoverClass} transition-all duration-300 flex-shrink-0`}>
                      {row.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{row.category}</h4>
                  </div>
                  <div className="col-span-4 p-4 sm:p-5 md:p-6 border-r border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 sm:mb-3 block">
                      The Manual Way
                    </span>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">{row.traditional}</p>
                  </div>
                  <div className="col-span-5 p-4 sm:p-5 md:p-6 bg-indigo-50/20">
                    <span className="uppercase tracking-widest mb-2 sm:mb-3 block flex items-center gap-2 text-indigo-600 font-extrabold text-[10px] sm:text-xs font-sans">
                      <img src="/alpx-logo-symbol.png" alt="AlpX" className="h-3 w-3 sm:h-4 sm:w-4 object-contain" />
                      The AlpX Way
                    </span>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">{row.alpxWay}</p>
                  </div>
                </div>

                {/* Mobile Row */}
                <div className="md:hidden p-4 border-b border-slate-100 last:border-b-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${row.iconBg} flex items-center justify-center`}>
                      {row.icon}
                    </div>
                    <span className="font-semibold text-sm text-slate-700">{row.category}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-400">Traditional: </span>{row.traditional}
                  </div>
                  <div className="text-xs text-indigo-700 bg-indigo-50/50 rounded-lg p-2">
                    <span className="font-semibold">AlpX: </span>{row.alpxWay}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default CompanyMatchComparison
