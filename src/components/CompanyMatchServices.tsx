"use client"

import React, { useState } from 'react'
import { RotateCcw, Users, Package, MessageSquare, Zap, Send, Trophy, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

/* ─── Step Data for Reverse Tendering ─── */
const rtSteps = [
  {
    id: 'define',
    number: '01',
    label: 'Define',
    icon: MessageSquare,
    headline: 'Tell Our AI Agent',
    highlightedWord: 'What You Need.',
    description: 'Our AI procurement agent interviews you about your requirements — budget, timeline, specifications, certifications needed. It asks the right questions and automatically creates a standardized tender document from your answers. No templates, no forms — just a conversation.',
    features: [
      'Conversational requirement gathering',
      'Auto-generates standardized tender docs',
      'Covers all procurement-relevant criteria',
    ],
  },
  {
    id: 'match',
    number: '02',
    label: 'Match',
    icon: Zap,
    headline: 'AI Searches',
    highlightedWord: '10M+ Companies.',
    description: 'Our matching engine analyzes your requirements against 10M+ European company profiles. It evaluates capabilities, certifications, track records, geographic coverage, and capacity — ranking suppliers by how well they fit your specific needs. Not keywords. Context.',
    features: [
      'Semantic matching beyond keywords',
      'Evaluates certifications & track record',
      'Ranks by actual fit, not just availability',
    ],
  },
  {
    id: 'invite',
    number: '03',
    label: 'Invite',
    icon: Send,
    headline: 'Suppliers Bid',
    highlightedWord: 'Directly to You.',
    description: 'The top-matched suppliers receive your standardized tender and can submit their bids directly in company.match. Everything happens in one platform — no email chaos, no scattered spreadsheets. You see all bids side-by-side with structured, comparable data.',
    features: [
      'Automated supplier outreach',
      'Structured bid submissions',
      'All responses in one place',
    ],
  },
  {
    id: 'select',
    number: '04',
    label: 'Select',
    icon: Trophy,
    headline: 'Choose the',
    highlightedWord: 'Best Partner.',
    description: 'Our AI compares all bids across your criteria — price, quality, delivery time, certifications. The Bidding Agent can even negotiate prices automatically on your behalf. You make the final decision with complete transparency and data-backed confidence.',
    features: [
      'AI-powered bid comparison & ranking',
      'Bidding Agent auto-negotiates prices',
      'Full transparency on every criterion',
    ],
  },
]

/* ─── Step Visualizations ─── */
const StepViz: React.FC<{ stepId: string }> = ({ stepId }) => {
  if (stepId === 'define') return <DefineViz />
  if (stepId === 'match') return <MatchViz />
  if (stepId === 'invite') return <InviteViz />
  return <SelectViz />
}

const DefineViz: React.FC = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-5">
    <style>{`
      @keyframes chat-in-1 { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes chat-in-2 { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes typing-dot { 0%, 60%, 100% { opacity: 0.3; } 30% { opacity: 1; } }
    `}</style>
    {/* Chat bubbles */}
    <div className="w-full max-w-[240px] space-y-2.5">
      <div className="flex items-start gap-2" style={{ animation: 'chat-in-1 0.5s ease-out both' }}>
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0 text-[8px] font-bold text-white">AI</div>
        <div className="bg-indigo-50 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-700 leading-relaxed">What product or service are you looking to source?</div>
      </div>
      <div className="flex items-start gap-2 justify-end" style={{ animation: 'chat-in-2 0.5s ease-out 0.4s both' }}>
        <div className="bg-white border border-slate-200 rounded-xl rounded-tr-sm px-3 py-2 text-[10px] text-slate-600 leading-relaxed">Industrial water filtration, ISO 14001 certified, delivery within EU</div>
      </div>
      <div className="flex items-start gap-2" style={{ animation: 'chat-in-1 0.5s ease-out 0.8s both' }}>
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0 text-[8px] font-bold text-white">AI</div>
        <div className="bg-indigo-50 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-700 leading-relaxed">
          Got it. What's your budget range and preferred delivery timeline?
        </div>
      </div>
      <div className="flex items-start gap-2 justify-end" style={{ animation: 'chat-in-2 0.5s ease-out 1.2s both' }}>
        <div className="bg-white border border-slate-200 rounded-xl rounded-tr-sm px-3 py-2">
          <div className="flex items-center gap-1">
            {[0,1,2].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" style={{ animation: `typing-dot 1.2s ease-in-out infinite ${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MatchViz: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center relative p-5">
    <style>{`
      @keyframes scan-line { 0% { top: 10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 85%; opacity: 0; } }
      @keyframes match-pop { 0% { transform: scale(0); opacity: 0; } 50% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }
    `}</style>
    <div className="relative w-full max-w-[240px]">
      {/* Database rows */}
      <div className="space-y-1.5">
        {[
          { name: 'WaterTech GmbH', score: 96, delay: '0.3s' },
          { name: 'AquaSystems AG', score: 92, delay: '0.5s' },
          { name: 'PureTech B.V.', score: 88, delay: '0.7s' },
          { name: 'HydroClean SRL', score: 84, delay: '0.9s' },
          { name: 'EcoFilter KG', score: 79, delay: '1.1s' },
        ].map((c, i) => (
          <div key={i} className="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-3 py-2 shadow-sm" style={{ animation: `match-pop 0.4s ease-out ${c.delay} both` }}>
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-md text-[8px] font-bold text-white flex items-center justify-center ${
                c.score >= 90 ? 'bg-indigo-500' : c.score >= 85 ? 'bg-indigo-400' : 'bg-slate-400'
              }`}>{c.name.charAt(0)}</div>
              <span className="text-[10px] font-medium text-slate-700">{c.name}</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
              c.score >= 90 ? 'text-emerald-600 bg-emerald-50' : c.score >= 85 ? 'text-indigo-600 bg-indigo-50' : 'text-slate-500 bg-slate-50'
            }`}>{c.score}%</span>
          </div>
        ))}
      </div>
      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px bg-indigo-500/60 pointer-events-none" style={{ animation: 'scan-line 3s ease-in-out infinite', boxShadow: '0 0 8px rgba(99,102,241,0.4)' }} />
    </div>
  </div>
)

const InviteViz: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-5">
    <style>{`
      @keyframes invite-fly { 0% { transform: translateX(-20px) scale(0.8); opacity: 0; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
    `}</style>
    <div className="w-full max-w-[240px] space-y-2">
      {[
        { name: 'WaterTech GmbH', status: 'Bid received', statusColor: 'text-emerald-600 bg-emerald-50', delay: '0.2s' },
        { name: 'AquaSystems AG', status: 'Bid received', statusColor: 'text-emerald-600 bg-emerald-50', delay: '0.4s' },
        { name: 'PureTech B.V.', status: 'Reviewing...', statusColor: 'text-amber-600 bg-amber-50', delay: '0.6s' },
        { name: 'HydroClean SRL', status: 'Invited', statusColor: 'text-indigo-600 bg-indigo-50', delay: '0.8s' },
      ].map((s, i) => (
        <div key={i} className="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-3 py-2.5 shadow-sm" style={{ animation: `invite-fly 0.5s ease-out ${s.delay} both` }}>
          <div className="flex items-center gap-2">
            <Send className="h-3 w-3 text-indigo-400" />
            <span className="text-[10px] font-medium text-slate-700">{s.name}</span>
          </div>
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${s.statusColor}`}>{s.status}</span>
        </div>
      ))}
      <div className="text-center pt-1">
        <span className="text-[9px] text-slate-400">4 of 12 suppliers responded</span>
      </div>
    </div>
  </div>
)

const SelectViz: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-5">
    <style>{`
      @keyframes winner-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.2); } 50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } }
      @keyframes bar-grow { 0% { width: 0; } }
    `}</style>
    <div className="w-full max-w-[240px]">
      {/* Winner card */}
      <div className="bg-white border-2 border-emerald-200 rounded-xl px-3.5 py-3 shadow-sm mb-3" style={{ animation: 'winner-glow 2s ease-in-out infinite' }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-bold text-slate-800">WaterTech GmbH</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Best Bid</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: 'Price', value: '€42K' },
            { label: 'Quality', value: '96%' },
            { label: 'Delivery', value: '4 wks' },
          ].map((m, i) => (
            <div key={i} className="bg-slate-50 rounded-lg py-1.5">
              <div className="text-[10px] font-bold text-slate-800">{m.value}</div>
              <div className="text-[8px] text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Runner ups */}
      {[
        { name: 'AquaSystems AG', price: '€48K', score: 92 },
        { name: 'PureTech B.V.', price: '€45K', score: 88 },
      ].map((r, i) => (
        <div key={i} className="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-3 py-2 mb-1.5 shadow-sm">
          <span className="text-[10px] font-medium text-slate-600">{r.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-slate-400">{r.price}</span>
            <div className="w-10 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${r.score}%`, animation: `bar-grow 0.8s ease-out ${0.3 + i * 0.2}s both` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

/* ─── B2B Matching Mini Viz ─── */
const B2BMatchingViz: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-slate-50/80 to-indigo-50/30 rounded-2xl p-5 min-h-[220px] flex flex-col items-center justify-center relative overflow-hidden">
    <style>{`
      @keyframes b2b-search-type { 0% { width: 0; } 50% { width: 100%; } 100% { width: 100%; } }
      @keyframes b2b-scan-dots { 0%, 60%, 100% { opacity: 0.3; } 30% { opacity: 1; } }
      @keyframes b2b-result-slide { 0% { opacity: 0; transform: translateX(-12px); } 100% { opacity: 1; transform: translateX(0); } }
      @keyframes b2b-connect-line { 0% { stroke-dashoffset: 40; } 100% { stroke-dashoffset: 0; } }
    `}</style>
    {/* Search bar */}
    <div className="bg-white rounded-xl border border-slate-200/80 px-3.5 py-2.5 w-full max-w-[240px] flex items-center gap-2.5 mb-2 shadow-sm">
      <Zap className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
      <div className="text-[10px] text-slate-500 overflow-hidden whitespace-nowrap" style={{ animation: 'b2b-search-type 4s ease-in-out infinite' }}>
        ISO 14001 engineering partner
      </div>
    </div>
    {/* Scanning state */}
    <div className="flex items-center gap-1.5 mb-3">
      {[0,1,2].map(i => (
        <div key={i} className="w-1 h-1 rounded-full bg-indigo-500" style={{ animation: `b2b-scan-dots 1.2s ease-in-out infinite ${i * 0.2}s` }} />
      ))}
      <span className="text-[9px] text-slate-400 ml-1">Scanning 10M+ profiles...</span>
    </div>
    {/* Match results */}
    <div className="space-y-1.5 w-full max-w-[240px]">
      {[
        { name: 'EcoPartner GmbH', loc: 'Vienna, AT', score: 96, delay: '0.6s' },
        { name: 'LocalBuild Eng.', loc: 'Graz, AT', score: 93, delay: '0.9s' },
        { name: 'GreenTech Sol.', loc: 'Salzburg, AT', score: 88, delay: '1.2s' },
      ].map((c, i) => (
        <div key={i} className="flex items-center justify-between bg-white border border-slate-100 rounded-lg px-3 py-2 shadow-sm" style={{ animation: `b2b-result-slide 0.5s ease-out ${c.delay} both` }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-500 text-[8px] font-bold text-white flex items-center justify-center">{c.name.charAt(0)}</div>
            <div>
              <div className="text-[10px] font-semibold text-slate-700">{c.name}</div>
              <div className="text-[8px] text-slate-400">{c.loc}</div>
            </div>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md text-emerald-600 bg-emerald-50">{c.score}%</span>
        </div>
      ))}
    </div>
  </div>
)

/* ─── Product Match Mini Viz ─── */
const ProductMatchViz: React.FC = () => (
  <div className="w-full bg-gradient-to-br from-slate-50/80 to-indigo-50/20 rounded-2xl p-5 min-h-[220px] flex flex-col items-center justify-center relative overflow-hidden">
    <style>{`
      @keyframes pm-appear { 0% { opacity: 0; transform: translateY(6px); } 100% { opacity: 1; transform: translateY(0); } }
      @keyframes pm-analyzing { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
    `}</style>
    {/* Chat-like interface */}
    <div className="w-full max-w-[240px] space-y-2.5 mb-3">
      {/* User query */}
      <div className="flex items-start gap-2 justify-end" style={{ animation: 'pm-appear 0.4s ease-out both' }}>
        <div className="bg-white border border-slate-200 rounded-xl rounded-tr-sm px-3 py-2 text-[10px] text-slate-600 leading-relaxed">
          Industrial water filtration system, capacity 500L/h, stainless steel
        </div>
      </div>
      {/* AI analyzing */}
      <div className="flex items-start gap-2" style={{ animation: 'pm-appear 0.4s ease-out 0.3s both' }}>
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0 text-[7px] font-bold text-white">AI</div>
        <div className="bg-indigo-50 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-600">
          Found <span className="font-bold text-indigo-600">3 products</span> matching your specs:
        </div>
      </div>
    </div>
    {/* Product results */}
    <div className="space-y-1.5 w-full max-w-[240px]">
      {[
        { name: 'AquaPure X-500', supplier: 'WaterTech GmbH', score: 95, delay: '0.6s' },
        { name: 'HydroClean Pro', supplier: 'AquaSystems AG', score: 89, delay: '0.8s' },
        { name: 'EcoFilter Series', supplier: 'PureTech B.V.', score: 83, delay: '1.0s' },
      ].map((r, i) => (
        <div key={i} className="flex items-center justify-between bg-white rounded-xl border border-slate-100 px-3 py-2 shadow-sm" style={{ animation: `pm-appear 0.5s ease-out ${r.delay} both` }}>
          <div className="flex items-center gap-2">
            <Package className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
            <div>
              <div className="text-[10px] font-semibold text-slate-700">{r.name}</div>
              <div className="text-[8px] text-slate-400">{r.supplier}</div>
            </div>
          </div>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
            r.score >= 90 ? 'text-emerald-600 bg-emerald-50' : r.score >= 85 ? 'text-indigo-600 bg-indigo-50' : 'text-amber-600 bg-amber-50'
          }`}>{r.score}%</span>
        </div>
      ))}
    </div>
  </div>
)

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */
const CompanyMatchServices: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const step = rtSteps[activeStep]
  const StepIcon = step.icon

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ─── */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/60 mb-5">
              <Sparkles className="h-3 w-3 text-indigo-500" />
              <span className="text-indigo-600 tracking-wide uppercase text-[10px] sm:text-xs font-bold">
                Three Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              One Database, 3 Services<br className="hidden sm:block" /> To Find What You Need.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether you're sourcing suppliers, building partnerships, or finding products — company.match has you covered.
            </p>
          </div>
        </ScrollReveal>

        {/* ═══ Reverse Tendering — Interactive 4-Step Flow ═══ */}
        <ScrollReveal>
          <div className="mb-12">
            {/* RT Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <RotateCcw className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-400">Featured Service</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Reverse Tendering</h3>
              </div>
            </div>

            {/* Step Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2">
              {rtSteps.map((s, i) => {
                const isActive = activeStep === i
                const Icon = s.icon
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600'
                    }`}
                  >
                    <span className={`text-xs font-bold ${isActive ? 'text-indigo-200' : 'text-slate-300'}`}>{s.number}</span>
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{s.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Step Content — Text left, Viz right */}
            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
                {/* Left: Text */}
                <div className="p-7 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center">
                      <StepIcon className="h-4.5 w-4.5 text-indigo-600" style={{ width: '18px', height: '18px' }} />
                    </div>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Step {step.number}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                    {step.headline}{' '}
                    <span className="text-indigo-600">{step.highlightedWord}</span>
                  </h4>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2.5">
                    {step.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Visualization */}
                <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 border-t lg:border-t-0 lg:border-l border-slate-100 flex items-center justify-center min-h-[300px]">
                  <StepViz stepId={step.id} />
                </div>
              </div>

              {/* Progress bar at bottom */}
              <div className="flex">
                {rtSteps.map((_, i) => (
                  <div key={i} className="flex-1 h-1">
                    <div className={`h-full transition-all duration-500 ${
                      i <= activeStep ? 'bg-indigo-500' : 'bg-slate-100'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ B2B Matching + Product Match — Two Column ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              icon: Users,
              title: 'B2B Matching',
              subtitle: 'Context-driven supplier search',
              description: 'Find long-term suppliers and subcontractors across 10M+ European companies. Set your criteria priorities — certifications, location, capacity, track record — and let AI find the perfect match.',
              viz: <B2BMatchingViz />,
              features: ['Customizable matching criteria', 'Problem-based plain-language search', 'Verified supplier profiles'],
            },
            {
              icon: Package,
              title: 'Product Match',
              subtitle: 'Natural language product search',
              description: 'Describe what you need in your own words. Our AI searches product catalogs across 10M+ company profiles to find exact matches. From industrial equipment to specialized software — if someone makes it, we find it.',
              viz: <ProductMatchViz />,
              features: ['Natural language queries', 'Cross-catalog search', 'Supplier comparison'],
            },
          ].map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-100/60 flex items-center justify-center shrink-0 group-hover:shadow-md group-hover:shadow-indigo-100 transition-shadow duration-300">
                        <Icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                        <p className="text-[11px] font-semibold text-indigo-500">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>
                    <div className="mb-5">{service.viz}</div>
                    <div className="mt-auto space-y-2">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span className="text-xs text-slate-600">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <a href="/company-match/product" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group/link">
                        Learn more
                        <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                      <a href="/waitlist" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-lg shadow-sm transition-colors">
                        Try it for free
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompanyMatchServices
