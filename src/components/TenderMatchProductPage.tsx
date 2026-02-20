"use client"

import type React from "react"
import FramedCard from "./FramedCard"
import SectionDivider from "./SectionDivider"
import ScrollReveal from "./ScrollReveal"
import { AnimatedCounter, Stat, CheckItem } from "./ProductPageUtils"

// ============================================
// ANIMATED VISUALIZATION: European Coverage
// ============================================
const EuropeanCoverageVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 rounded-2xl border border-slate-100">
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite 1s' }} />
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite 2s' }} />
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <div className="text-center">
              <div className="text-white font-bold text-lg">2,000+</div>
              <div className="text-blue-200 text-[10px]">Portals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm" style={{ background: 'linear-gradient(180deg, #000 33%, #dd0000 33%, #dd0000 66%, #ffcc00 66%)' }} />
          <span className="text-xs font-medium text-slate-700">Bund.de</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite 0.5s' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm bg-blue-900 flex items-center justify-center"><span className="text-[6px] text-yellow-400">★</span></div>
          <span className="text-xs font-medium text-slate-700">TED.europa</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite 1s' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm" style={{ background: 'linear-gradient(180deg, #ed2939 33%, #fff 33%, #fff 66%, #ed2939 66%)' }} />
          <span className="text-xs font-medium text-slate-700">Auftrag.at</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite 1.5s' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm bg-red-600 flex items-center justify-center"><span className="text-[8px] text-white font-bold">+</span></div>
          <span className="text-xs font-medium text-slate-700">simap.ch</span>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        27 EU Countries
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: AI Matching
// ============================================
const AIMatchingVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 rounded-2xl border border-slate-100">
      <style>{`
        @keyframes slide-in { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes score-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-2">
        <div className="bg-white rounded-lg p-3 shadow-md border border-slate-100 w-24" style={{ animation: 'slide-in 0.5s ease-out both' }}>
          <div className="h-1.5 bg-slate-200 rounded w-full mb-1.5"></div>
          <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1.5"></div>
          <div className="h-1.5 bg-slate-200 rounded w-1/2"></div>
          <div className="text-[8px] text-slate-400 mt-2">Tender Doc</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-md border border-slate-100 w-24" style={{ animation: 'slide-in 0.5s ease-out 0.2s both' }}>
          <div className="h-1.5 bg-blue-200 rounded w-full mb-1.5"></div>
          <div className="h-1.5 bg-blue-200 rounded w-2/3 mb-1.5"></div>
          <div className="h-1.5 bg-blue-200 rounded w-4/5"></div>
          <div className="text-[8px] text-blue-500 mt-2">Your Profile</div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <div className="text-center">
            <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div className="text-white text-[8px] font-medium mt-0.5">AI Match</div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
        <div className="bg-white rounded-lg px-3 py-2 shadow-md border border-green-200" style={{ animation: 'score-pulse 2s ease-in-out infinite' }}>
          <div className="text-lg font-bold text-green-600">92%</div>
          <div className="text-[8px] text-slate-500">High Match</div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 shadow-md border border-green-200" style={{ animation: 'score-pulse 2s ease-in-out infinite 0.3s' }}>
          <div className="text-lg font-bold text-green-600">87%</div>
          <div className="text-[8px] text-slate-500">Strong Fit</div>
        </div>
        <div className="bg-white rounded-lg px-3 py-2 shadow-md border border-amber-200" style={{ animation: 'score-pulse 2s ease-in-out infinite 0.6s' }}>
          <div className="text-lg font-bold text-amber-600">75%</div>
          <div className="text-[8px] text-slate-500">Partial</div>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <line x1="28%" y1="40%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="28%" y1="60%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="35%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="50%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="65%" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
      </svg>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        90%+ Accuracy
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Gap Analysis
// ============================================
const GapAnalysisVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes bar-grow { 0% { width: 0%; } }
        @keyframes check-pop { 0% { transform: scale(0); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }
        @keyframes score-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); } 50% { box-shadow: 0 0 20px 4px rgba(34, 197, 94, 0.2); } }
      `}</style>

      <div className="w-full max-w-[280px] bg-white rounded-2xl p-5 shadow-lg border border-slate-100">
        <div className="text-sm font-semibold text-slate-700 mb-4">Requirement Analysis</div>
        <div className="space-y-3">
          {[
            { label: "Technical Fit", value: 95, color: "bg-green-500" },
            { label: "Certifications", value: 100, color: "bg-green-500" },
            { label: "Capacity", value: 80, color: "bg-amber-500" },
            { label: "Experience", value: 90, color: "bg-green-500" },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">{item.label}</span>
                <span className={`font-semibold ${item.value >= 90 ? 'text-green-600' : 'text-amber-600'}`}>{item.value}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%`, animation: `bar-grow 1s ease-out ${i * 0.15}s both` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between" style={{ animation: 'score-glow 2s ease-in-out infinite' }}>
          <div>
            <div className="text-xs text-slate-500">Overall Score</div>
            <div className="text-2xl font-bold text-green-600">91%</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center" style={{ animation: 'check-pop 0.5s ease-out 0.8s both' }}>
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: 24/7 Monitoring
// ============================================
const MonitoringVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes clock-pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); } 50% { transform: scale(1.02); box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.2); } }
        @keyframes alert-pop { 0% { transform: scale(0) translateY(10px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        @keyframes float-alert { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>

      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30" style={{ animation: 'clock-pulse 3s ease-in-out infinite' }}>
        <div className="text-center">
          <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div className="text-white font-bold text-sm mt-1">24/7</div>
        </div>
      </div>

      <div className="absolute top-6 left-6 bg-white rounded-lg px-3 py-2 shadow-md border border-green-200" style={{ animation: 'alert-pop 0.5s ease-out 0.2s both, float-alert 3s ease-in-out infinite 0.7s' }}>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-xs font-medium text-slate-700">New Match!</span></div>
      </div>
      <div className="absolute top-6 right-6 bg-white rounded-lg px-3 py-2 shadow-md border border-blue-200" style={{ animation: 'alert-pop 0.5s ease-out 0.4s both, float-alert 3s ease-in-out infinite 0.9s' }}>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-xs font-medium text-slate-700">Deadline Alert</span></div>
      </div>
      <div className="absolute bottom-6 left-6 bg-white rounded-lg px-3 py-2 shadow-md border border-amber-200" style={{ animation: 'alert-pop 0.5s ease-out 0.6s both, float-alert 3s ease-in-out infinite 1.1s' }}>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div><span className="text-xs font-medium text-slate-700">Update</span></div>
      </div>
      <div className="absolute bottom-6 right-6 bg-white rounded-lg px-3 py-2 shadow-md border border-purple-200" style={{ animation: 'alert-pop 0.5s ease-out 0.8s both, float-alert 3s ease-in-out infinite 1.3s' }}>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-xs font-medium text-slate-700">Weekly Report</span></div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        Real-time Alerts
      </div>
    </div>
  )
}

// ============================================
// MAIN COMPONENT
// ============================================
const TenderMatchProductPage: React.FC = () => {
  const heroStats = [
    { value: 2000, suffix: "+", prefix: "", label: "EU Portals", desc: "Monitored 24/7" },
    { value: 27, suffix: "", prefix: "", label: "Countries", desc: "Full EU Coverage" },
    { value: 24, suffix: "/7", prefix: "", label: "Monitoring", desc: "Real-time alerts" },
    { value: 90, suffix: "%+", prefix: "", label: "Accuracy", desc: "Match relevance" },
  ]

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">
              tender.match Features
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight max-w-4xl mx-auto px-2">
              Everything You Need to Win European Tenders
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-2">
              From intelligent discovery across 2,000+ portals to AI-powered gap analysis. One platform, complete control, maximum results.
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

      {/* Feature 1: Portal Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-4 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">2,000+ Portal Coverage</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Search All of Europe. Instantly.</p>
                  <p className="text-slate-500 leading-relaxed">
                    European procurement is fragmented across 2,000+ platforms in 27 countries. Our AI aggregates every major portal into one unified dashboard, monitors them 24/7, and delivers opportunities in 40+ languages—automatically translated and analyzed.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="2,000+" label="Procurement Portals" />
                  <Stat value="27+" label="EU Countries Covered" />
                  <Stat value="40+" label="Languages Supported" />
                  <Stat value="€2.5T" label="Annual Volume" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Complete market visibility across all EU member states" />
                  <CheckItem text="Real-time updates within hours of publication" />
                  <CheckItem text="Automatic translation and semantic understanding" />
                  <CheckItem text="No need to create accounts on individual portals" />
                </div>
              </div>
              <EuropeanCoverageVisualization />
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 2: Semantic AI Matching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1"><AIMatchingVisualization /></div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Semantic AI Matching</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Context, Not Just Keywords</p>
                  <p className="text-slate-500 leading-relaxed">
                    Traditional platforms spam you with irrelevant matches. Our semantic AI understands meaning and context—matching 'intelligent LED infrastructure' with your 'smart street lighting' expertise. Trained on 30 years of procurement data, it delivers 90%+ relevance.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="90%+" label="Relevance Rate" />
                  <Stat value="-85%" label="False Positives" />
                  <Stat value="30 Years" label="Training Data" />
                  <Stat value="20hrs/mo" label="Time Saved" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Only see opportunities you can actually win" />
                  <CheckItem text="No more keyword noise or missed synonyms" />
                  <CheckItem text="Industry-specific intelligence across all sectors" />
                  <CheckItem text="Continuous learning adapts to your preferences" />
                </div>
              </div>
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 3: Deep Gap Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Deep Gap Analysis</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Know Your Chances Before You Start</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our AI reads entire tender documents and compares them against your capabilities in minutes. Get a detailed match score, traffic-light requirement analysis, and consortium recommendations.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="2 min" label="Analysis Time" />
                  <Stat value="95%" label="Match Accuracy" />
                  <Stat value="4.5hrs" label="Time Saved" />
                  <Stat value="+40%" label="Win Rate" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Multi-dimensional analysis: technical, certifications, geography, capacity" />
                  <CheckItem text="Clear go/no-go recommendations with win probability" />
                  <CheckItem text="Automatic consortium partner suggestions for gaps" />
                  <CheckItem text="Stop wasting time on tenders you can't win" />
                </div>
              </div>
              <GapAnalysisVisualization />
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 4: 24/7 AI Monitoring */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1"><MonitoringVisualization /></div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">24/7 AI Monitoring</h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Never Miss an Opportunity</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our autonomous AI agents continuously scan all 2,000+ portals around the clock. New tenders are detected, analyzed, and matched to your profile within hours of publication—not days.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <Stat value="24/7" label="Continuous Monitoring" />
                  <Stat value="<4hrs" label="Detection Time" />
                  <Stat value="100%" label="Portal Coverage" />
                  <Stat value="Real-time" label="Instant Alerts" />
                </div>
                <div className="space-y-3 pt-4">
                  <CheckItem text="Autonomous AI agents work while you sleep" />
                  <CheckItem text="Priority alerts for high-match opportunities" />
                  <CheckItem text="Never miss a deadline or early-bird advantage" />
                  <CheckItem text="Weekly digest reports with market insights" />
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

export default TenderMatchProductPage
