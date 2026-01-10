"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import FramedCard from "./FramedCard"
import SectionDivider from "./SectionDivider"
import ScrollReveal from "./ScrollReveal"

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-blue-600">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

interface StatProps {
  value: string
  label: string
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-blue-600">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
)

interface CheckItemProps {
  text: string
}

const CheckItem: React.FC<CheckItemProps> = ({ text }) => (
  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span className="text-slate-600">{text}</span>
  </div>
)

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
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes score-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Left: Input documents */}
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

      {/* Center: AI Brain */}
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

      {/* Right: Match scores */}
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

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <line x1="28%" y1="40%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="28%" y1="60%" x2="42%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="35%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="50%" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <line x1="58%" y1="50%" x2="72%" y2="65%" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
      </svg>

      {/* Accuracy badge */}
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
// ANIMATED VISUALIZATION: 24/7 Monitoring
// ============================================
const MonitoringVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative p-6 flex items-center justify-center rounded-2xl border border-slate-100">
      <style>{`
        @keyframes clock-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.2); }
        }
        @keyframes alert-pop {
          0% { transform: scale(0) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes float-alert {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      {/* Central clock */}
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30" style={{ animation: 'clock-pulse 3s ease-in-out infinite' }}>
        <div className="text-center">
          <svg className="w-10 h-10 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div className="text-white font-bold text-sm mt-1">24/7</div>
        </div>
      </div>

      {/* Floating alert cards */}
      <div className="absolute top-6 left-6 bg-white rounded-lg px-3 py-2 shadow-md border border-green-200" style={{ animation: 'alert-pop 0.5s ease-out 0.2s both, float-alert 3s ease-in-out infinite 0.7s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-medium text-slate-700">New Match!</span>
        </div>
      </div>

      <div className="absolute top-6 right-6 bg-white rounded-lg px-3 py-2 shadow-md border border-blue-200" style={{ animation: 'alert-pop 0.5s ease-out 0.4s both, float-alert 3s ease-in-out infinite 0.9s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-xs font-medium text-slate-700">Deadline Alert</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 bg-white rounded-lg px-3 py-2 shadow-md border border-amber-200" style={{ animation: 'alert-pop 0.5s ease-out 0.6s both, float-alert 3s ease-in-out infinite 1.1s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span className="text-xs font-medium text-slate-700">Update</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white rounded-lg px-3 py-2 shadow-md border border-purple-200" style={{ animation: 'alert-pop 0.5s ease-out 0.8s both, float-alert 3s ease-in-out infinite 1.3s' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span className="text-xs font-medium text-slate-700">Weekly Report</span>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
        Real-time Alerts
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Network Graph (Partner Matching)
// ============================================
const NetworkGraphVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden relative flex items-center justify-center rounded-2xl border border-slate-100">
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

      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
        {/* Connection Lines */}
        <g className="opacity-40">
          <line x1="200" y1="200" x2="80" y2="80" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite" }} />
          <line x1="200" y1="200" x2="320" y2="70" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.3s" }} />
          <line x1="200" y1="200" x2="60" y2="260" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.6s" }} />
          <line x1="200" y1="200" x2="340" y2="280" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 0.9s" }} />
          <line x1="200" y1="200" x2="130" y2="330" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 1.2s" }} />
          <line x1="200" y1="200" x2="280" y2="340" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" style={{ animation: "flow-line 2s linear infinite 1.5s" }} />
        </g>

        {/* Central Hub */}
        <g style={{ animation: "pulse-node 3s ease-in-out infinite" }}>
          <circle cx="200" cy="200" r="40" fill="url(#gradient-center)" className="drop-shadow-lg" />
          <text x="200" y="205" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI Hub</text>
        </g>

        {/* Company Nodes */}
        <g style={{ animation: "float-node 4s ease-in-out infinite" }}>
          <circle cx="80" cy="80" r="28" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="80" y="84" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">GmbH</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 0.5s" }}>
          <circle cx="320" cy="70" r="28" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="320" y="74" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">AG</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 1s" }}>
          <circle cx="60" cy="260" r="22" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="60" y="264" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">KG</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 1.5s" }}>
          <circle cx="340" cy="280" r="26" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="340" y="284" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="600">BV</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 2s" }}>
          <circle cx="130" cy="330" r="20" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="130" y="334" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">SRL</text>
        </g>
        <g style={{ animation: "float-node 4s ease-in-out infinite 2.5s" }}>
          <circle cx="280" cy="340" r="22" fill="white" stroke="#e2e8f0" strokeWidth="2" className="drop-shadow-sm" />
          <text x="280" y="344" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">SA</text>
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
        <span className="text-blue-600 font-bold text-sm">10M+</span>
        <span className="text-slate-500 text-xs ml-1">Companies</span>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Floating Cards (Company Database)
// ============================================
const FloatingCardsVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden relative rounded-2xl border border-slate-100">
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
        className="absolute top-8 left-8 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-36"
        style={{ animation: "float-card-1 6s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">TB</div>
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
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">GE</div>
          <div>
            <div className="text-xs font-semibold text-slate-800">GreenEnergy BV</div>
            <div className="text-[10px] text-slate-400">Amsterdam, NL</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" style={{ animation: "match-pulse 2s ease-in-out infinite 0.3s" }}>92% Match</div>
          <div className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">ISO 9001</div>
        </div>
      </div>

      {/* Card 3 - Bottom Center */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg border border-slate-100 p-3 w-44"
        style={{ animation: "float-card-3 7s ease-in-out infinite 1s" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">IN</div>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-bold">AI</span>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED VISUALIZATION: Matching Flow (Gap Coverage)
// ============================================
const MatchingFlowVisualization: React.FC = () => {
  return (
    <div className="aspect-square bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 overflow-hidden relative flex items-center justify-center rounded-2xl border border-slate-100">
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

      {/* Center AI Hub with rotating ring */}
      <div className="relative">
        <div
          className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full border-2 border-dashed border-blue-200"
          style={{ animation: "rotate-ring 20s linear infinite" }}
        />
        <div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center shadow-lg relative z-10"
          style={{ animation: "glow-center 3s ease-in-out infinite" }}
        >
          <span className="text-white text-[9px] font-bold">MATCH</span>
          <span className="text-blue-200 text-[7px]">ENGINE</span>
        </div>
      </div>

      {/* Right Side - Matched Partners */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-3">
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
        <div className="absolute top-1/2 left-[28%] w-[18%] h-0.5 bg-gradient-to-r from-slate-300 to-blue-400">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"
            style={{ animation: "particle-flow 2s ease-in-out infinite" }}
          />
        </div>
        <div className="absolute top-1/2 left-[54%] w-[18%] h-0.5 bg-gradient-to-r from-blue-400 to-green-400">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"
            style={{ animation: "particle-flow 2s ease-in-out infinite 1s" }}
          />
        </div>
      </div>
    </div>
  )
}

const ProductPage: React.FC = () => {
  const heroStats = [
    { value: 2000, suffix: "+", prefix: "", label: "EU Portals", desc: "Monitored 24/7" },
    { value: 27, suffix: "", prefix: "", label: "Countries", desc: "Full EU Coverage" },
    { value: 10, suffix: "M+", prefix: "", label: "Companies", desc: "In partner database" },
    { value: 24, suffix: "/7", prefix: "", label: "Monitoring", desc: "Real-time alerts" },
  ]

  return (
    <div className="pt-32 bg-white bg-dotted-pattern">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Product Features
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight max-w-4xl mx-auto">
              Everything You Need to Win European Tenders
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From intelligent discovery across 2,000+ portals to AI-powered partner matching. One platform, complete control, maximum results.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {heroStats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-slate-900 font-semibold mt-2">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Feature 1: Portal Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    2,000+ Portal Coverage
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Search All of Europe. Instantly.</p>
                  <p className="text-slate-500 leading-relaxed">
                    European procurement is fragmented across 2,000+ platforms in 27 countries. Our AI aggregates every major portal into one unified dashboard, monitors them 24/7, and delivers opportunities in 40+ languages—automatically translated and analyzed. One profile. All markets. Zero manual browsing.
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
              <div className="order-2 lg:order-1">
                <AIMatchingVisualization />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Semantic AI Matching
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Context, Not Just Keywords</p>
                  <p className="text-slate-500 leading-relaxed">
                    Traditional platforms spam you with irrelevant matches. Our semantic AI understands meaning and context—matching 'intelligent LED infrastructure' with your 'smart street lighting' expertise. Trained on 30 years of procurement data, it delivers 90%+ relevance and learns your preferences over time.
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
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Deep Gap Analysis
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Know Your Chances Before You Start</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our AI reads entire tender documents and compares them against your capabilities in minutes. Get a detailed match score, traffic-light requirement analysis, and consortium recommendations. See exactly what you can deliver, what's missing, and whether it's worth pursuing—before investing hours in a proposal.
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
              <div className="order-2 lg:order-1">
                <MonitoringVisualization />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    24/7 AI Monitoring
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Never Miss an Opportunity</p>
                  <p className="text-slate-500 leading-relaxed">
                    Our autonomous AI agents continuously scan all 2,000+ portals around the clock. New tenders are detected, analyzed, and matched to your profile within hours of publication—not days. Get instant alerts for high-priority opportunities and stay ahead of your competition.
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

      <SectionDivider variant="line" />

      {/* company.match Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ScrollReveal>
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            company.match
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto">
            Find Perfect Partners in Minutes
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Access Europe's largest B2G company database and build winning consortiums with AI-powered partner matching.
          </p>
        </ScrollReveal>
      </section>

      {/* Feature 5: AI-Powered Partner Matching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    AI-Powered Partner Matching
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Build Winning Consortiums</p>
                  <p className="text-slate-500 leading-relaxed">
                    When you can't meet all requirements alone, our AI finds the perfect consortium partners. We analyze complementary capabilities, past collaboration success, geographic coverage, and certifications to recommend partners who fill your gaps and maximize your win probability.
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

              <FloatingCardsVisualization />
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 6: 10M+ European Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <NetworkGraphVisualization />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    10M+ European Companies
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">The Complete B2G Ecosystem</p>
                  <p className="text-slate-500 leading-relaxed">
                    Access Europe's most comprehensive B2G company database. Every company is profiled with capabilities, certifications, past tender wins, geographic coverage, and contact information. Find partners, research competitors, or discover subcontractors—all in one place.
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
            </div>
          </div>
        </FramedCard>
        </ScrollReveal>
      </section>

      {/* Feature 7: Smart Gap Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
        <FramedCard>
          <div className="bg-white rounded-3xl border border-slate-100 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Feature</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Smart Gap Coverage
                  </h2>
                  <p className="text-lg text-slate-600 font-medium mb-2">Turn Weaknesses into Strengths</p>
                  <p className="text-slate-500 leading-relaxed">
                    Don't disqualify yourself from opportunities due to missing certifications or capabilities. Our AI identifies your gaps, suggests the fastest paths to compliance, and recommends partners who can cover requirements you can't meet alone.
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

    </div>
  )
}

export default ProductPage
