import type React from "react"
import FramedCard from "./FramedCard"

interface ComparisonRowProps {
  category: string
  traditional: string
  alpx: string
  icon: React.ReactNode
}

const iconColors: Record<string, { light: string; dark: string }> = {
  "Tender Search": { light: "bg-blue-100", dark: "text-blue-600" },
  "Tender Analysis": { light: "bg-purple-100", dark: "text-purple-600" },
  "Matching Quality": { light: "bg-emerald-100", dark: "text-emerald-600" },
  "Consortium Partners": { light: "bg-orange-100", dark: "text-orange-600" },
  Monitoring: { light: "bg-red-100", dark: "text-red-600" },
  Cost: { light: "bg-cyan-100", dark: "text-cyan-600" },
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ category, traditional, alpx, icon }) => {
  const colors = iconColors[category] || { light: "bg-slate-100", dark: "text-slate-600" }

  return (
    <div
      id={`why-${category.toLowerCase().replace(/\s/g, "-")}`}
      className={`grid md:grid-cols-12 gap-0 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors`}
    >
      <div className="md:col-span-3 p-10 border-r border-slate-100 flex flex-col gap-6">
        <div
          className={`w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:${colors.light} group-hover:${colors.dark} group-hover:border-slate-200 transition-all duration-300`}
        >
          {icon}
        </div>
        <h4 className="text-lg font-bold text-slate-900 leading-tight">{category}</h4>
      </div>

      <div className="md:col-span-4 p-10 border-r border-slate-100">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">
          The Manual Way
        </span>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">{traditional}</p>
      </div>

      <div className="md:col-span-5 p-10 bg-slate-50/30">
        <span className="uppercase tracking-widest mb-4 block flex items-center gap-2 text-blue-600 font-extrabold text-xs font-sans">
          <img src="/alpx-logo-symbol.png" alt="AlpX" className="h-4 w-4 object-contain" />
          The AlpX Way
        </span>
        <p className="text-sm text-slate-900 font-semibold leading-relaxed">{alpx}</p>
      </div>
    </div>
  )
}

const ComparisonTable: React.FC = () => {
  const comparisons = [
    {
      category: "Tender Search",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      ),
      traditional:
        "Endless browsing across portals in different formats. Screenshots, spreadsheets, guesswork. Never sure if you've found everything.",
      alpx: "Instantly search 2,000+ European portals. AI understands context, not just keywords. One profile covers all of Europe in every language.",
    },
    {
      category: "Tender Analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      traditional:
        "Manual review of hundreds of pages. Hours checking requirements against your capabilities. No systematic approach.",
      alpx: "AI analyzes full tender documents automatically. Detailed gap analysis shows exactly what you can deliver and what capabilities are missing.",
    },
    {
      category: "Matching Quality",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      traditional:
        "Keyword-based alerts deliver noise. Too generic = false positives to read through. Too specific = missed opportunities.",
      alpx: "Context-based semantic matching with AI Agent Analysis that understands your company's actual capabilities. Matches exactly what fits. No more noise, only opportunities you can actually win.",
    },
    {
      category: "Consortium Partners",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      traditional: "Weeks of networking, cold calls, trade shows. Often too late to meet deadlines.",
      alpx: "Automatic partner suggestions from 10M+ company profiles. Find the perfect consortium member in minutes, not weeks.",
    },
    {
      category: "Monitoring",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
      ),
      traditional:
        "Manual daily checks across multiple portals and languages. Easy to miss deadlines and opportunities.",
      alpx: "24/7 AI monitoring across all portals. Real-time alerts when relevant opportunities appear. Never miss a deadline again.",
    },
    {
      category: "Cost",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      traditional:
        "€1,000+/month for aggregators that still require manual analysis, or €100,000+ annually for dedicated staff, or hire expensive agencies.",
      alpx: "Enterprise-grade AI quality at SME-friendly prices. Starting at €300/seat/month. No hidden fees, cancel anytime.",
    },
  ]

  return (
    <section id="why-alpx" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="tracking-[0.3em] uppercase mb-4 block text-sm font-extrabold text-blue-600">
              Comparison
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why tender.match is the Smarter Way to Find Public Contracts
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed">
            See how we replace guesswork with intelligent automation at every step.
          </p>
        </div>

        <FramedCard>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            {comparisons.map((item, idx) => (
              <ComparisonRow key={idx} {...item} />
            ))}
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default ComparisonTable
