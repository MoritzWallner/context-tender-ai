"use client"

import type React from "react"
import FramedCard from "./FramedCard"

// ============================================
// OPTION A: Animated Network Graph
// ============================================
const NetworkGraphVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-indigo-50 overflow-hidden relative flex items-center justify-center">
      <style>{`
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes flow-line {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes float-node {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      <svg className="w-full h-full" viewBox="0 0 400 250" fill="none">
        {/* Connection Lines */}
        <g className="opacity-40">
          <line x1="200" y1="125" x2="80" y2="60" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite" }} />
          <line x1="200" y1="125" x2="320" y2="50" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.3s" }} />
          <line x1="200" y1="125" x2="60" y2="180" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.6s" }} />
          <line x1="200" y1="125" x2="340" y2="190" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.9s" }} />
          <line x1="200" y1="125" x2="130" y2="200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 1.2s" }} />
          <line x1="200" y1="125" x2="280" y2="210" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 1.5s" }} />
        </g>

        {/* Central Hub */}
        <g style={{ animation: "pulse-node 3s ease-in-out infinite" }}>
          <circle cx="200" cy="125" r="35" fill="url(#gradient-center)" className="drop-shadow-lg" />
          <text x="200" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">AI Hub</text>
        </g>

        {/* Company Nodes */}
        <g style={{ animation: "float-node 4s ease-in-out infinite" }}>
          <circle cx="80" cy="60" r="22" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="80" y="64" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600">GmbH</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 0.5s" }}>
          <circle cx="320" cy="50" r="22" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="320" y="54" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600">AG</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 1s" }}>
          <circle cx="60" cy="180" r="18" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="60" y="183" textAnchor="middle" fill="#475569" fontSize="7" fontWeight="600">KG</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 1.5s" }}>
          <circle cx="340" cy="190" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="340" y="194" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600">BV</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 2s" }}>
          <circle cx="130" cy="200" r="16" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="130" y="203" textAnchor="middle" fill="#475569" fontSize="7" fontWeight="600">SRL</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 2.5s" }}>
          <circle cx="280" cy="210" r="17" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="280" y="213" textAnchor="middle" fill="#475569" fontSize="7" fontWeight="600">SA</text>
        </g>

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stats Badge */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-slate-100">
        <span className="text-indigo-600 font-bold text-sm">10M+</span>
        <span className="text-slate-500 text-xs ml-1">Companies</span>
      </div>
    </div>
  )
}

// ============================================
// OPTION B: Floating Company Cards
// ============================================
const FloatingCardsVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-indigo-50 to-slate-50 overflow-hidden relative">
      <style>{`
        @keyframes float-card-1 {
          0%, 100% { transform: translate(0, 0) rotate(-2deg); }
          50% { transform: translate(5px, -8px) rotate(0deg); }
        }
        @keyframes float-card-2 {
          0%, 100% { transform: translate(0, 0) rotate(3deg); }
          50% { transform: translate(-8px, -5px) rotate(1deg); }
        }
        @keyframes float-card-3 {
          0%, 100% { transform: translate(0, 0) rotate(-1deg); }
          50% { transform: translate(3px, -10px) rotate(2deg); }
        }
        @keyframes match-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
        }
      `}</style>

      {/* Card 1 - Top Left */}
      <div
        className="absolute top-6 left-8 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-36"
        style={{ animation: "float-card-1 6s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">TB</div>
          <div>
            <div className="text-xs font-semibold text-slate-800">TechBuild AG</div>
            <div className="text-[10px] text-slate-400">Munich, DE</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse 2s ease-in-out infinite" }}>96% Match</div>
        </div>
      </div>

      {/* Card 2 - Center Right */}
      <div
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-40"
        style={{ animation: "float-card-2 5s ease-in-out infinite 0.5s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">GE</div>
          <div>
            <div className="text-xs font-semibold text-slate-800">GreenEnergy BV</div>
            <div className="text-[10px] text-slate-400">Amsterdam, NL</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse 2s ease-in-out infinite 0.3s" }}>92% Match</div>
          <div className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded">ISO 9001</div>
        </div>
      </div>

      {/* Card 3 - Bottom Center */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-44"
        style={{ animation: "float-card-3 7s ease-in-out infinite 1s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">IN</div>
          <div>
            <div className="text-xs font-semibold text-slate-800">InfraSolutions SRL</div>
            <div className="text-[10px] text-slate-400">Vienna, AT</div>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse 2s ease-in-out infinite 0.6s" }}>89% Match</div>
          <div className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Fills Gap</div>
        </div>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Center AI Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-bold">AI</span>
      </div>
    </div>
  )
}

// ============================================
// OPTION C: Matching Flow Animation
// ============================================
const MatchingFlowVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-50 overflow-hidden relative flex items-center justify-center">
      <style>{`
        @keyframes particle-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes glow-center {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
        }
        @keyframes rotate-ring {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* Left Side - Companies */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-3">
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

      {/* Center AI Hub with rotating ring */}
      <div className="relative">
        <div
          className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full border-2 border-dashed border-indigo-200"
          style={{ animation: "rotate-ring 20s linear infinite" }}
        />
        <div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex flex-col items-center justify-center shadow-lg relative z-10"
          style={{ animation: "glow-center 3s ease-in-out infinite" }}
        >
          <span className="text-white text-[10px] font-bold">MATCH</span>
          <span className="text-indigo-200 text-[8px]">ENGINE</span>
        </div>
      </div>

      {/* Right Side - Matched Partners */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 space-y-3">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-green-200">
          <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">✓</div>
          <div>
            <span className="text-xs text-slate-700 font-medium block">EcoPartner GmbH</span>
            <span className="text-[9px] text-green-600">Has ISO 14001</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-green-200">
          <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">✓</div>
          <div>
            <span className="text-xs text-slate-700 font-medium block">LocalBuild AG</span>
            <span className="text-[9px] text-green-600">Vienna Region</span>
          </div>
        </div>
      </div>

      {/* Particle Flow Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left to Center */}
        <div className="absolute top-1/2 left-[30%] w-[20%] h-0.5 bg-gradient-to-r from-slate-300 to-indigo-400">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500"
            style={{ animation: "particle-flow 2s ease-in-out infinite" }}
          />
        </div>
        {/* Center to Right */}
        <div className="absolute top-1/2 left-[50%] w-[20%] h-0.5 bg-gradient-to-r from-indigo-400 to-green-400">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"
            style={{ animation: "particle-flow 2s ease-in-out infinite 1s" }}
          />
        </div>
      </div>
    </div>
  )
}

// ============================================
// OPTION D: Track Record Visualization
// ============================================
const TrackRecordVisualization: React.FC = () => {
  return (
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center">
      <style>{`
        @keyframes bar-grow-track {
          0% { width: 0%; }
        }
        @keyframes star-appear {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes count-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="w-full max-w-[320px] bg-white rounded-2xl p-5 shadow-lg border border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold text-slate-700">Company Track Record</div>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-4 h-4 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ animation: `star-appear 0.3s ease-out ${i * 0.1}s both` }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Win Rate", value: 78, color: "bg-green-500" },
            { label: "On-Time Delivery", value: 95, color: "bg-indigo-500" },
            { label: "Client Retention", value: 88, color: "bg-indigo-400" },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">{item.label}</span>
                <span className="font-semibold text-slate-700">{item.value}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: `${item.value}%`, animation: `bar-grow-track 1s ease-out ${i * 0.2}s both` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center" style={{ animation: 'count-up 0.5s ease-out 0.8s both' }}>
          <div>
            <div className="text-lg font-bold text-slate-800">142</div>
            <div className="text-[10px] text-slate-500">Projects</div>
          </div>
          <div>
            <div className="text-lg font-bold text-slate-800">30</div>
            <div className="text-[10px] text-slate-500">Years Data</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">A+</div>
            <div className="text-[10px] text-slate-500">Rating</div>
          </div>
        </div>
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
  image?: string
  visualization?: React.ReactNode
  href: string
}> = ({ title, description, image, visualization, href }) => (
  <FramedCard variant="default">
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 overflow-hidden">
      {visualization ? (
        visualization
      ) : (
        <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div className="p-5 sm:p-7 md:p-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">{description}</p>
        <a
          href={href}
          className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 group/btn transition-colors"
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
const CompanyMatchFeatures: React.FC = () => {
  return (
    <section id="company-match-features" className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24 px-2">
          <span className="text-indigo-600 tracking-[0.3em] uppercase mb-3 sm:mb-4 block text-xs sm:text-sm font-extrabold">Ecosystem</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
            Complete company.match ecosystem
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Find the perfect consortium partner in minutes, not weeks. Turn complex tenders into collaborative
            opportunities and win projects you couldn't tackle alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Card 1: Option A - Network Graph */}
          <FeatureCard
            title="10M+ European Companies"
            visualization={<NetworkGraphVisualization />}
            description="Built from 30 years of tender outcomes, trade register data, website analysis, and real-time updates. The most comprehensive B2B database for European public procurement. Find partners you never knew existed."
            href="/company-match/product#company-database"
          />

          {/* Card 2: Option B - Floating Cards */}
          <FeatureCard
            title="AI-Powered Partner Matching"
            visualization={<FloatingCardsVisualization />}
            description="Our AI identifies perfect consortium partners based on complementary capabilities, proven track record, and geographic coverage. Find partners in minutes, not weeks of networking. Win tenders worth millions."
            href="/company-match/product#partner-matching"
          />

          {/* Card 3: Option C - Matching Flow */}
          <FeatureCard
            title="Automatic Gap Coverage"
            visualization={<MatchingFlowVisualization />}
            description="See exactly which capabilities you're missing to win a tender. Our AI automatically suggests partners who can close those gaps. Turn 'we can't do this' into 'we found the perfect partner' in seconds."
            href="/company-match/product#gap-coverage"
          />

          {/* Card 4: Track Records Animation */}
          <FeatureCard
            title="Proven Track Records"
            visualization={<TrackRecordVisualization />}
            description="See past tender success rates, reliability scores, and expertise areas. Partner with companies that have proven track records in your specific sector. Based on 30 years of actual tender outcomes, not just claims."
            href="/company-match/product#track-record"
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyMatchFeatures
