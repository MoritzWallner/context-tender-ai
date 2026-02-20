"use client"

import type React from "react"
import ScrollReveal from "./ScrollReveal"
import { Globe, Search, Clock } from "lucide-react"

const CompanyMatchProblem: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-indigo-600 tracking-[0.3em] uppercase text-[10px] sm:text-xs font-extrabold mb-3 sm:mb-4 block">
              THE PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
              There Are 10 Million B2B Companies.<br className="hidden sm:block" />{' '}
              <span className="text-indigo-600">Do You Know Them All?</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
              The perfect supplier exists — you just can't find them. Not because they're hiding, but because the tools you use were never built to surface them.
            </p>
          </div>
        </ScrollReveal>

        {/* Problem Cards — 3 wide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1: You don't know what you don't know */}
          <ScrollReveal delay={0}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <Search className="h-5 w-5 text-indigo-600" />
              </div>
              {/* Visualization */}
              <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl mb-5 overflow-hidden relative flex items-center justify-center">
                <style>{`@keyframes cm-prob-pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.1); } }`}</style>
                <div className="grid grid-cols-5 gap-2 p-4 w-full">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-5 rounded-md ${i < 1 ? 'bg-indigo-500' : 'bg-slate-200'}`}
                      style={i >= 1 ? { animation: `cm-prob-pulse 2.5s ease-in-out infinite ${i * 0.12}s` } : {}}
                    />
                  ))}
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-[9px] text-slate-400 bg-white/80 px-2 py-0.5 rounded-full">1 known · 14 unknown</span>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">99%</div>
              <div className="text-xs text-slate-400 mb-3">of the market is invisible to you</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">You can't search for what you don't know</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                You can only find companies you already know exist. But the best supplier for your next project might be a company you've never heard of — and keyword searches won't surface them.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Cross-language / cross-border barrier */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <Globe className="h-5 w-5 text-indigo-600" />
              </div>
              {/* Visualization */}
              <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl mb-5 overflow-hidden relative flex items-center justify-center">
                <style>{`@keyframes cm-lang-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }`}</style>
                <div className="flex gap-3 items-end px-4">
                  {[
                    { flag: '🇩🇪', lang: 'DE', h: '80%' },
                    { flag: '🇵🇱', lang: 'PL', h: '55%' },
                    { flag: '🇷🇴', lang: 'RO', h: '40%' },
                    { flag: '🇧🇬', lang: 'BG', h: '30%' },
                    { flag: '🇭🇺', lang: 'HU', h: '25%' },
                    { flag: '🇸🇰', lang: 'SK', h: '20%' },
                  ].map((c, i) => (
                    <div key={i} className="flex flex-col items-center gap-1" style={{ animation: `cm-lang-bounce 3s ease-in-out infinite ${i * 0.4}s` }}>
                      <span className="text-sm">{c.flag}</span>
                      <div className="w-6 bg-indigo-200 rounded-t-sm" style={{ height: c.h, minHeight: '16px' }} />
                      <span className="text-[8px] text-slate-400">{c.lang}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">27 languages</div>
              <div className="text-xs text-slate-400 mb-3">across 27 EU countries</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cross-border search is nearly impossible</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                The best supplier for your project might be in Poland, Romania, or Slovakia — but searching in a foreign language, on foreign platforms, with unfamiliar company registries is an enormous manual effort. Most teams simply don't bother.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Weeks of manual work */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <Clock className="h-5 w-5 text-indigo-600" />
              </div>
              {/* Visualization */}
              <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-slate-50 rounded-xl mb-5 overflow-hidden relative flex items-center justify-center">
                <style>{`@keyframes week-fill { 0% { width: 0%; } 100% { width: var(--w); } }`}</style>
                <div className="w-full px-5 space-y-2.5">
                  {[
                    { label: 'Google Search', w: '25%' },
                    { label: 'Trade Shows', w: '45%' },
                    { label: 'Cold Outreach', w: '65%' },
                    { label: 'RFQ & Waiting', w: '90%' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[8px] text-slate-400 w-20 text-right shrink-0">{row.label}</span>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: row.w, animation: `week-fill 1s ease-out ${i * 0.2}s both` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">3–6 Weeks</div>
              <div className="text-xs text-slate-400 mb-3">average supplier search time</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Enormous manual effort, tiny result</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                Trade shows, cold calls, referrals, Google searches. Even after weeks of work, you've only seen 3–5 suppliers — a fraction of what's available. You then pick the best of a bad selection instead of the best of the market.
              </p>
            </div>
          </ScrollReveal>
        </div>



      </div>
    </section>
  )
}

export default CompanyMatchProblem
