"use client"

import type React from "react"
import FramedCard from "./FramedCard"

// ============================================
// ANIMATED VISUALIZATION: European Coverage
// ============================================
const EuropeanCoverageVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden relative">
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-portal {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes data-flow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
        {/* Europe map simplified outline */}
        <ellipse cx="200" cy="125" rx="120" ry="80" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />
        <ellipse cx="200" cy="125" rx="80" ry="55" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />
        <ellipse cx="200" cy="125" rx="40" ry="28" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />

        {/* Radar sweep */}
        <g style={{ transformOrigin: "200px 125px", animation: "radar-sweep 8s linear infinite" }}>
          <line x1="200" y1="125" x2="320" y2="125" stroke="url(#radar-gradient)" strokeWidth="2" />
        </g>

        {/* Portal dots - scattered across Europe */}
        <g>
          {[
            { cx: 180, cy: 80, delay: 0 }, { cx: 220, cy: 70, delay: 0.3 },
            { cx: 260, cy: 90, delay: 0.6 }, { cx: 150, cy: 100, delay: 0.9 },
            { cx: 240, cy: 110, delay: 1.2 }, { cx: 170, cy: 130, delay: 1.5 },
            { cx: 200, cy: 140, delay: 1.8 }, { cx: 230, cy: 150, delay: 2.1 },
            { cx: 140, cy: 140, delay: 2.4 }, { cx: 260, cy: 130, delay: 2.7 },
            { cx: 190, cy: 170, delay: 3.0 }, { cx: 210, cy: 180, delay: 3.3 },
          ].map((dot, i) => (
            <circle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="4"
              fill="#3b82f6"
              style={{ animation: `ping-portal 2s ease-in-out infinite`, animationDelay: `${dot.delay}s` }}
            />
          ))}
        </g>

        {/* Central hub */}
        <circle cx="200" cy="125" r="20" fill="url(#hub-gradient)" className="drop-shadow-lg" />
        <text x="200" y="129" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">2,000+</text>

        <defs>
          <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hub-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-slate-100">
        <span className="text-blue-600 font-bold text-sm">27</span>
        <span className="text-slate-500 text-xs ml-1">EU Countries</span>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: AI Matching
// ============================================
const AIMatchingVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative">
      <style>{`
        @keyframes neural-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes score-appear {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes match-line {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
        {/* Neural network nodes */}
        <g className="opacity-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={80} cy={30 + i * 40} r="8" fill="#94a3b8" style={{ animation: `neural-pulse 2s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
          ))}
          {[1, 2, 3, 4].map((i) => (
            <circle key={i} cx={160} cy={50 + i * 45} r="10" fill="#64748b" style={{ animation: `neural-pulse 2s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
          ))}
        </g>

        {/* Central AI Brain */}
        <g>
          <circle cx="200" cy="125" r="35" fill="url(#ai-gradient)" className="drop-shadow-lg" />
          <text x="200" y="120" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
          <text x="200" y="132" textAnchor="middle" fill="#bfdbfe" fontSize="7">MATCHING</text>
        </g>

        {/* Match results */}
        {[
          { x: 300, y: 60, score: "92%", color: "#22c55e" },
          { x: 320, y: 125, score: "87%", color: "#22c55e" },
          { x: 300, y: 190, score: "75%", color: "#f59e0b" },
        ].map((match, i) => (
          <g key={i}>
            <line x1="235" y1="125" x2={match.x - 25} y2={match.y} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: `match-line 2s ease-out infinite`, animationDelay: `${i * 0.5}s` }} />
            <rect x={match.x - 25} y={match.y - 15} width="50" height="30" rx="8" fill="white" stroke={match.color} strokeWidth="2" />
            <text x={match.x} y={match.y + 5} textAnchor="middle" fill={match.color} fontSize="12" fontWeight="bold">{match.score}</text>
          </g>
        ))}

        <defs>
          <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-slate-100">
        <span className="text-green-600 font-bold text-sm">70%+</span>
        <span className="text-slate-500 text-xs ml-1">Accuracy</span>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Gap Analysis
// ============================================
const GapAnalysisVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden relative flex items-center justify-center p-6">
      <style>{`
        @keyframes check-appear {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes bar-fill {
          0% { width: 0%; }
          100% { width: var(--target-width); }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
        }
      `}</style>

      <div className="w-full max-w-[320px] space-y-4">
        {/* Requirement bars */}
        {[
          { label: "Technical Fit", value: 95, color: "#22c55e" },
          { label: "Certifications", value: 100, color: "#22c55e" },
          { label: "Capacity", value: 80, color: "#f59e0b" },
          { label: "Experience", value: 90, color: "#22c55e" },
        ].map((req, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-600 font-medium">{req.label}</span>
              <span className="font-bold" style={{ color: req.color }}>{req.value}%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${req.value}%`,
                  backgroundColor: req.color,
                  animation: `bar-fill 1.5s ease-out`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            </div>
          </div>
        ))}

        {/* Overall Score */}
        <div className="mt-6 p-4 bg-white rounded-xl border border-green-200 shadow-sm" style={{ animation: "pulse-soft 2s ease-in-out infinite" }}>
          <div className="flex items-center justify-between">
            <span className="text-slate-700 font-semibold">Match Score</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">91%</span>
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" style={{ animation: "check-appear 0.5s ease-out", animationDelay: "1s", animationFillMode: "both" }}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Enterprise Tools
// ============================================
const EnterpriseToolsVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative">
      <style>{`
        @keyframes float-tool {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes notification-pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div className="absolute inset-0 p-6 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
          {[
            { icon: "📅", label: "Deadlines", color: "bg-blue-100", delay: 0 },
            { icon: "✅", label: "Compliance", color: "bg-green-100", delay: 0.2 },
            { icon: "👥", label: "Team", color: "bg-purple-100", delay: 0.4 },
            { icon: "🔒", label: "Security", color: "bg-amber-100", delay: 0.6 },
          ].map((tool, i) => (
            <div
              key={i}
              className={`${tool.color} rounded-xl p-4 flex flex-col items-center justify-center shadow-sm border border-white`}
              style={{ animation: `float-tool 4s ease-in-out infinite`, animationDelay: `${tool.delay}s` }}
            >
              <span className="text-3xl mb-2">{tool.icon}</span>
              <span className="text-xs font-semibold text-slate-700">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notification badges */}
      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg" style={{ animation: "notification-pop 0.5s ease-out", animationDelay: "1s", animationFillMode: "both" }}>
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
