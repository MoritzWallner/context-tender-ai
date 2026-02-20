"use client"

import type React from "react"
import FramedCard from "./FramedCard"
import SectionDivider from "./SectionDivider"
import ScrollReveal from "./ScrollReveal"
import { AnimatedCounter, Stat, CheckItem } from "./ProductPageUtils"

// ============================================
// VISUALIZATION: Network Graph (Company Database)
// ============================================
const NetworkGraphVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 to-indigo-50 overflow-hidden relative flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes pulse-node-cm { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; } }
        @keyframes flow-line-cm { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
        @keyframes float-node-cm { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      `}</style>
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        <g className="opacity-40">
          <line x1="200" y1="200" x2="80" y2="80" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite" }} />
          <line x1="200" y1="200" x2="320" y2="70" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite 0.3s" }} />
          <line x1="200" y1="200" x2="60" y2="260" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite 0.6s" }} />
          <line x1="200" y1="200" x2="340" y2="280" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite 0.9s" }} />
          <line x1="200" y1="200" x2="130" y2="330" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite 1.2s" }} />
          <line x1="200" y1="200" x2="280" y2="340" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line-cm 2s linear infinite 1.5s" }} />
        </g>
        <g style={{ animation: "pulse-node-cm 3s ease-in-out infinite" }}>
          <circle cx="200" cy="200" r="40" fill="url(#gradient-center-cm)" className="drop-shadow-lg" />
          <text x="200" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI Hub</text>
        </g>
        {[
          { cx: 80, cy: 80, r: 28, label: "GmbH" },
          { cx: 320, cy: 70, r: 28, label: "AG" },
          { cx: 60, cy: 260, r: 22, label: "KG" },
          { cx: 340, cy: 280, r: 26, label: "BV" },
          { cx: 130, cy: 330, r: 20, label: "SRL" },
          { cx: 280, cy: 340, r: 22, label: "SA" },
        ].map((node, i) => (
          <g key={i} style={{ animation: `float-node-cm 4s ease-in-out infinite ${i * 0.5}s` }}>
            <circle cx={node.cx} cy={node.cy} r={node.r} fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
            <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#475569" fontSize={node.r > 24 ? "10" : "9"} fontWeight="600">{node.label}</text>
          </g>
        ))}
        <defs>
          <linearGradient id="gradient-center-cm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-slate-100">
        <span className="text-indigo-600 font-bold text-sm">10M+</span>
        <span className="text-slate-500 text-xs ml-1">Companies</span>
      </div>
    </div>
  )
}

// ============================================
// VISUALIZATION: Floating Cards (Partner Matching)
// ============================================
const FloatingCardsVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-indigo-50 to-slate-50 overflow-hidden relative rounded-2xl border border-slate-100">
      <style>{`
        @keyframes float-card-cm-1 { 0%, 100% { transform: translate(0, 0) rotate(-2deg); } 50% { transform: translate(5px, -8px) rotate(0deg); } }
        @keyframes float-card-cm-2 { 0%, 100% { transform: translate(0, 0) rotate(3deg); } 50% { transform: translate(-8px, -5px) rotate(1deg); } }
        @keyframes float-card-cm-3 { 0%, 100% { transform: translate(0, 0) rotate(-1deg); } 50% { transform: translate(3px, -10px) rotate(2deg); } }
        @keyframes match-pulse-cm { 0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); } }
      `}</style>
      <div className="absolute top-8 left-8 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-36" style={{ animation: "float-card-cm-1 6s ease-in-out infinite" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">TB</div>
          <div><div className="text-xs font-semibold text-slate-800">TechBuild AG</div><div className="text-[10px] text-slate-400">Munich, DE</div></div>
        </div>
        <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium inline-block" style={{ animation: "match-pulse-cm 2s ease-in-out infinite" }}>96% Match</div>
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-40" style={{ animation: "float-card-cm-2 5s ease-in-out infinite 0.5s" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">GE</div>
          <div><div className="text-xs font-semibold text-slate-800">GreenEnergy BV</div><div className="text-[10px] text-slate-400">Amsterdam, NL</div></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse-cm 2s ease-in-out infinite 0.3s" }}>92% Match</div>
          <div className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded">ISO 9001</div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-44" style={{ animation: "float-card-cm-3 7s ease-in-out infinite 1s" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">IN</div>
          <div><div className="text-xs font-semibold text-slate-800">InfraSolutions SRL</div><div className="text-[10px] text-slate-400">Vienna, AT</div></div>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse-cm 2s ease-in-out infinite 0.6s" }}>89% Match</div>
          <div className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Fills Gap</div>
        </div>
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-bold">AI</span>
      </div>
    </div>
  )
}

// ============================================
// VISUALIZATION: Matching Flow (Gap Coverage)
// ============================================
const MatchingFlowVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-50 overflow-hidden relative flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes particle-flow-cm { 0% { transform: translateX(-100%); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(100%); opacity: 0; } }
        @keyframes glow-center-cm { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); } 50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); } }
        @keyframes rotate-ring-cm { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100">
          <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">A</div>
          <span className="text-xs text-slate-600 font-medium">Your Company</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100 ml-4 opacity-60">
          <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center text-[9px] font-bold text-red-600">!</div>
          <span className="text-[10px] text-slate-500">Missing: ISO 14001</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100 ml-4 opacity-60">
          <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center text-[9px] font-bold text-red-600">!</div>
          <span className="text-[10px] text-slate-500">Missing: Local Partner</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full border-2 border-dashed border-indigo-200" style={{ animation: "rotate-ring-cm 20s linear infinite" }} />
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex flex-col items-center justify-center shadow-lg relative z-10" style={{ animation: "glow-center-cm 3s ease-in-out infinite" }}>
          <span className="text-white text-[9px] font-bold">MATCH</span>
          <span className="text-indigo-200 text-[7px]">ENGINE</span>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-green-200">
          <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">✓</div>
          <div><span className="text-xs text-slate-700 font-medium block">EcoPartner GmbH</span><span className="text-[9px] text-green-600">Has ISO 14001</span></div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-green-200">
          <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">✓</div>
          <div><span className="text-xs text-slate-700 font-medium block">LocalBuild AG</span><span className="text-[9px] text-green-600">Vienna Region</span></div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[28%] w-[18%] h-0.5 bg-gradient-to-r from-slate-300 to-indigo-400">
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500" style={{ animation: "particle-flow-cm 2s ease-in-out infinite" }} />
        </div>
        <div className="absolute top-1/2 left-[54%] w-[18%] h-0.5 bg-gradient-to-r from-indigo-400 to-green-400">
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500" style={{ animation: "particle-flow-cm 2s ease-in-out infinite 1s" }} />
        </div>
      </div>
    </div>
  )
}

// ============================================
// VISUALIZATION: Reverse Tendering
// ============================================
const ReverseTenderingVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes reverse-flow { 0% { transform: translateX(100%); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateX(-100%); opacity: 0; } }
        @keyframes glow-reverse { 0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); } 50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.5); } }
      `}</style>
      {/* Right Side - Tenders */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-indigo-200">
          <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">T</div>
          <div><span className="text-xs text-slate-700 font-medium block">IT Infrastructure</span><span className="text-[9px] text-indigo-600">€2.5M | DE</span></div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-indigo-200">
          <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">T</div>
          <div><span className="text-xs text-slate-700 font-medium block">Cloud Migration</span><span className="text-[9px] text-indigo-600">€1.8M | AT</span></div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-indigo-200">
          <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">T</div>
          <div><span className="text-xs text-slate-700 font-medium block">Smart City</span><span className="text-[9px] text-indigo-600">€3.2M | EU</span></div>
        </div>
      </div>
      {/* Center - AI Engine */}
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex flex-col items-center justify-center shadow-lg relative z-10" style={{ animation: "glow-reverse 3s ease-in-out infinite" }}>
          <span className="text-white text-[8px] font-bold">REVERSE</span>
          <span className="text-emerald-200 text-[7px]">MATCH</span>
        </div>
      </div>
      {/* Left Side - Your Capabilities */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-emerald-200">
          <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-600">★</div>
          <span className="text-xs text-slate-600 font-medium">Your Profile</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100 ml-4">
          <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-[9px] font-bold text-emerald-600">✓</div>
          <span className="text-[10px] text-slate-500">Cloud Expert</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100 ml-4">
          <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-[9px] font-bold text-emerald-600">✓</div>
          <span className="text-[10px] text-slate-500">ISO 27001</span>
        </div>
      </div>
      {/* Flow particles (right to left) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[54%] w-[18%] h-0.5 bg-gradient-to-l from-indigo-400 to-emerald-400">
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500" style={{ animation: "reverse-flow 2s ease-in-out infinite" }} />
        </div>
        <div className="absolute top-1/2 left-[28%] w-[18%] h-0.5 bg-gradient-to-l from-emerald-400 to-emerald-300">
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500" style={{ animation: "reverse-flow 2s ease-in-out infinite 1s" }} />
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================
const CompanyMatchProductPage: React.FC = () => {
  const heroStats = [
    { value: 10, suffix: "M+", prefix: "", label: "Companies", desc: "European Database" },
    { value: 27, suffix: "", prefix: "", label: "Countries", desc: "Full EU Coverage" },
    { value: 500, suffix: "+", prefix: "", label: "Sectors", desc: "Industry Coverage" },
    { value: 30, suffix: "", prefix: "", label: "Years Data", desc: "Track Record History" },
  ]

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">
              company.match Features
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight max-w-4xl mx-auto px-2">
              Build Winning Consortiums with AI-Powered Matching
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-2">
              From intelligent partner discovery across 10M+ companies to automated gap coverage. Find the perfect partner for every tender.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {heroStats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-slate-900 font-semibold mt-1 sm:mt-2 text-sm sm:text-base">{stat.label}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Feature 1: 10M+ European Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-4 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">10M+ European Companies</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">The Complete B2G Ecosystem</p>
                  <p className="text-slate-500 leading-relaxed">
                    Access Europe's most comprehensive B2G company database. Every company is profiled with capabilities, certifications, past tender wins, geographic coverage, and contact information.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="10M+" label="Companies Indexed" />
                  <Stat value="27" label="EU Countries" />
                  <Stat value="500+" label="Industry Sectors" />
                  <Stat value="Daily" label="Data Updates" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Comprehensive company profiles with capabilities" />
                  <CheckItem text="Historical tender participation and win rates" />
                  <CheckItem text="Certification and compliance verification" />
                  <CheckItem text="Direct contact information and outreach tools" />
                </div>
              </div>
              <NetworkGraphVisualization />
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 2: AI-Powered Partner Matching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1"><FloatingCardsVisualization /></div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">AI-Powered Partner Matching</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Build Winning Consortiums</p>
                  <p className="text-slate-500 leading-relaxed">
                    When you can't meet all requirements alone, our AI finds the perfect consortium partners. We analyze complementary capabilities, past collaboration success, and certifications to recommend the best matches.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="10M+" label="Companies Indexed" />
                  <Stat value="95%" label="Match Accuracy" />
                  <Stat value="30 sec" label="Partner Search" />
                  <Stat value="+60%" label="Consortium Win Rate" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="AI identifies capability gaps and suggests partners" />
                  <CheckItem text="Verified company profiles with track records" />
                  <CheckItem text="Direct contact and collaboration tools" />
                  <CheckItem text="Success-based partner recommendations" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 3: Smart Gap Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Smart Gap Coverage</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Turn Weaknesses into Strengths</p>
                  <p className="text-slate-500 leading-relaxed">
                    Don't disqualify yourself from opportunities due to missing certifications or capabilities. Our AI identifies your gaps and recommends partners who can cover them.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="100%" label="Requirement Analysis" />
                  <Stat value="AI" label="Gap Detection" />
                  <Stat value="Instant" label="Partner Suggestions" />
                  <Stat value="+35%" label="Qualification Rate" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Automatic capability gap identification" />
                  <CheckItem text="Certification pathway recommendations" />
                  <CheckItem text="Partner matching for gap coverage" />
                  <CheckItem text="Bid/no-bid decision support" />
                </div>
              </div>
              <MatchingFlowVisualization />
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 4: Reverse Tendering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1"><ReverseTenderingVisualization /></div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Reverse Tendering</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Let Tenders Find You</p>
                  <p className="text-slate-500 leading-relaxed">
                    Instead of searching for tenders, present your capabilities and let our AI match you to relevant opportunities. Get notified when tenders match your expertise—before your competitors even know about them.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="24/7" label="Continuous Matching" />
                  <Stat value="<1hr" label="Alert Time" />
                  <Stat value="Zero" label="Manual Search" />
                  <Stat value="+50%" label="More Opportunities" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Profile your capabilities once, get matched continuously" />
                  <CheckItem text="Proactive notifications for high-match tenders" />
                  <CheckItem text="Early-bird advantage on new opportunities" />
                  <CheckItem text="Focus on bidding, not searching" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default CompanyMatchProductPage
