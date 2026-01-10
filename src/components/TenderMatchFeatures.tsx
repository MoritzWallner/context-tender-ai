"use client"

import type React from "react"
import FramedCard from "./FramedCard"

// ============================================
// ANIMATED VISUALIZATION: European Coverage
// Premium card-based design with subtle animations
// ============================================
const EuropeanCoverageVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6">
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Central hub with rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite 1s' }} />
          <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/30" style={{ animation: 'pulse-ring 3s ease-out infinite 2s' }} />

          {/* Center hub */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <div className="text-center">
              <div className="text-white font-bold text-lg">2,000+</div>
              <div className="text-blue-200 text-[10px]">Portals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating country cards */}
      <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm" style={{ background: 'linear-gradient(180deg, #000 33%, #dd0000 33%, #dd0000 66%, #ffcc00 66%)' }} />
          <span className="text-xs font-medium text-slate-700">Bund.de</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md border border-slate-100" style={{ animation: 'float-gentle 4s ease-in-out infinite 0.5s' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-3 rounded-sm bg-blue-900 flex items-center justify-center">
            <span className="text-[6px] text-yellow-400">★</span>
          </div>
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
          <div className="w-5 h-3 rounded-sm bg-red-600 flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">+</span>
          </div>
          <span className="text-xs font-medium text-slate-700">simap.ch</span>
        </div>
      </div>

      {/* Stats badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        27 EU Countries
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: AI Matching
// Clean, professional matching flow
// ============================================
const AIMatchingVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6">
      <style>{`
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes score-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes line-draw {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Left: Input documents */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-2">
        <div className="bg-white rounded-lg p-3 shadow-md border border-slate-100 w-28" style={{ animation: 'slide-in 0.5s ease-out both' }}>
          <div className="h-1.5 bg-slate-200 rounded w-full mb-1.5"></div>
          <div className="h-1.5 bg-slate-200 rounded w-3/4 mb-1.5"></div>
          <div className="h-1.5 bg-slate-200 rounded w-1/2"></div>
          <div className="text-[8px] text-slate-400 mt-2">Tender Doc</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-md border border-slate-100 w-28" style={{ animation: 'slide-in 0.5s ease-out 0.2s both' }}>
          <div className="h-1.5 bg-blue-200 rounded w-full mb-1.5"></div>
          <div className="h-1.5 bg-blue-200 rounded w-2/3 mb-1.5"></div>
          <div className="h-1.5 bg-blue-200 rounded w-4/5"></div>
          <div className="text-[8px] text-blue-500 mt-2">Your Profile</div>
        </div>
      </div>

      {/* Center: AI Brain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <div className="text-center">
            <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div className="text-white text-[9px] font-medium mt-1">AI Match</div>
          </div>
        </div>
      </div>

      {/* Right: Match scores */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
        <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-green-200" style={{ animation: 'score-pulse 2s ease-in-out infinite' }}>
          <div className="text-lg font-bold text-green-600">92%</div>
          <div className="text-[8px] text-slate-500">High Match</div>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-green-200" style={{ animation: 'score-pulse 2s ease-in-out infinite 0.3s' }}>
          <div className="text-lg font-bold text-green-600">87%</div>
          <div className="text-[8px] text-slate-500">Strong Fit</div>
        </div>
        <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-amber-200" style={{ animation: 'score-pulse 2s ease-in-out infinite 0.6s' }}>
          <div className="text-lg font-bold text-amber-600">75%</div>
          <div className="text-[8px] text-slate-500">Partial</div>
        </div>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <line x1="30%" y1="40%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="30%" y1="60%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="70%" y2="35%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="70%" y2="50%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="70%" y2="65%" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
      </svg>

      {/* Accuracy badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        70%+ Accuracy
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Gap Analysis
// Clean progress bars with check marks
// ============================================
const GapAnalysisVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center">
      <style>{`
        @keyframes bar-grow {
          0% { width: 0%; }
        }
        @keyframes check-pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes score-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 20px 4px rgba(34, 197, 94, 0.2); }
        }
      `}</style>

      <div className="w-full max-w-[300px] bg-white rounded-2xl p-5 shadow-lg border border-slate-100">
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
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: `${item.value}%`, animation: `bar-grow 1s ease-out ${i * 0.15}s both` }}
                />
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
// ANIMATED VISUALIZATION: Enterprise Tools
// Modern icon grid with floating animation
// ============================================
const EnterpriseToolsVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6">
      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes badge-pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div className="grid grid-cols-2 gap-3 h-full">
        {[
          { label: "Deadlines", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50", icon: "calendar", delay: 0 },
          { label: "Compliance", color: "from-green-500 to-green-600", bgColor: "bg-green-50", icon: "check", delay: 0.1 },
          { label: "Team", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50", icon: "users", delay: 0.2 },
          { label: "Security", color: "from-amber-500 to-amber-600", bgColor: "bg-amber-50", icon: "lock", delay: 0.3 },
        ].map((tool, i) => (
          <div
            key={i}
            className={`${tool.bgColor} rounded-xl p-4 flex flex-col items-center justify-center shadow-sm border border-white`}
            style={{ animation: `float-card 4s ease-in-out infinite ${tool.delay}s` }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md mb-2`}>
              {tool.icon === "calendar" && (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
              {tool.icon === "check" && (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {tool.icon === "users" && (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
              {tool.icon === "lock" && (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )}
            </div>
            <span className="text-xs font-semibold text-slate-700">{tool.label}</span>
          </div>
        ))}
      </div>

      {/* Notification badge */}
      <div
        className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
        style={{ animation: 'badge-pop 0.5s ease-out 1s both' }}
      >
        3
      </div>
    </div>
  )
}

// ============================================
// FEATURE CARD COMPONENT
// ============================================
const FeatureCard: React.FC<{
  title: string
  description: string
  visualization: React.ReactNode
  href: string
}> = ({ title, description, visualization, href }) => (
  <FramedCard variant="default">
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden">
      {visualization}
      <div className="p-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
        <a
          href={href}
          className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn transition-colors"
        >
          Discover details
          <svg
            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </FramedCard>
)

// ============================================
// MAIN COMPONENT
// ============================================
const TenderMatchFeatures: React.FC = () => {
  return (
    <section id="tender-match-features" className="bg-slate-50/50 relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-blue-600 tracking-[0.3em] uppercase mb-4 block text-sm font-extrabold">Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            All-in-one tender.match engine
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From intelligent discovery across 2,000+ European portals to AI-powered gap analysis, tender.match automates
            your entire procurement workflow with surgical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard
            title="European Market Coverage"
            visualization={<EuropeanCoverageVisualization />}
            description="Monitor 2,000+ procurement portals across 27 EU countries in real-time. Our AI scans every portal 24/7, aggregates opportunities in one dashboard, and alerts you instantly when relevant tenders appear."
            href="/product#portal-coverage"
          />
          <FeatureCard
            title="AI-Powered Matching"
            visualization={<AIMatchingVisualization />}
            description="Automatic capability matching with 70%+ accuracy. Our AI identifies opportunities you can win based on your expertise, experience, and qualifications—no manual screening required."
            href="/product#semantic-matching"
          />
          <FeatureCard
            title="Deep Gap Analysis"
            visualization={<GapAnalysisVisualization />}
            description="See exactly what you can deliver and what's missing. AI-powered analysis with 95% accuracy shows which subcontractors or partners you need for each opportunity."
            href="/product#gap-analysis"
          />
          <FeatureCard
            title="Enterprise-Grade Tools"
            visualization={<EnterpriseToolsVisualization />}
            description="Deadline management, compliance checks, team collaboration, and role-based access. Everything you need to manage tenders efficiently in one platform."
            href="/product#tools"
          />
        </div>
      </div>
    </section>
  )
}

export default TenderMatchFeatures
