"use client"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ScanLine,
  CheckCircle2,
  BarChart3,
  FileText,
  RotateCcw,
  Handshake,
  Package,
  Database,
  Search,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/ScrollReveal'

/* ═══════════════════════════════════════════════════════
   Tab + Preview Panel (supports accent colors)
   ═══════════════════════════════════════════════════════ */

interface TabItem {
  id: string
  icon: React.ElementType
  label: string
  description: string
  headline: React.ReactNode
  preview: React.ReactNode
}

const TabPreviewPanel: React.FC<{
  tabs: TabItem[]
  activeId: string
  onTabChange: (id: string) => void
  accent?: 'blue' | 'indigo'
}> = ({ tabs, activeId, onTabChange, accent = 'blue' }) => {
  const activeTab = tabs.find(t => t.id === activeId)!

  const accentClasses = accent === 'indigo'
    ? { border: 'border-indigo-500', bg: 'bg-indigo-50/40', iconActive: 'bg-indigo-600 shadow-indigo-600/20', divider: 'border-indigo-100/40' }
    : { border: 'border-blue-500', bg: 'bg-blue-50/40', iconActive: 'bg-blue-600 shadow-blue-600/20', divider: 'border-blue-100/40' }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {/* Left: Tabs */}
      <div className={`lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r ${accentClasses.divider}`}>
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeId === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`group flex items-start gap-3 px-5 py-4 lg:py-5 text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 w-full border-b-2 lg:border-b-0 lg:border-l-2 ${
                isActive
                  ? `${accentClasses.border} ${accentClasses.bg}`
                  : 'border-transparent hover:bg-gray-50/60'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                isActive
                  ? `${accentClasses.iconActive} shadow-sm`
                  : 'bg-gray-100 group-hover:bg-gray-200/80'
              }`}>
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {tab.label}
                </div>
                <div className={`text-xs mt-1 leading-relaxed hidden lg:block ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                  {tab.description}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Right: Preview */}
      <div className="lg:col-span-7 p-5 lg:p-7">
        {activeTab.preview}
      </div>
    </div>
  )
}


/* ═══════════════════════════════════════════════════════
   tender.match Previews
   ═══════════════════════════════════════════════════════ */

const ScanPreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      Our AI continuously monitors over 2,000 procurement portals across all 27 EU member states — and matches new publications against your company profile in real time.
    </p>
    <div className="space-y-2">
      {[
        { portal: 'TED', region: 'EU-wide', count: '847', flag: '🇪🇺' },
        { portal: 'bund.de', region: 'Germany', count: '234', flag: '🇩🇪' },
        { portal: 'ANKÖ', region: 'Austria', count: '156', flag: '🇦🇹' },
        { portal: 'SIMAP', region: 'Switzerland', count: '89', flag: '🇨🇭' },
        { portal: 'TenderNed', region: 'Netherlands', count: '112', flag: '🇳🇱' },
      ].map((p, i) => (
        <div key={i} className="flex items-center gap-3 text-sm">
          <span className="text-base">{p.flag}</span>
          <span className="font-medium text-gray-700 w-24">{p.portal}</span>
          <span className="text-gray-400 flex-1">{p.region}</span>
          <span className="text-xs font-medium text-gray-500 tabular-nums">{p.count} new</span>
        </div>
      ))}
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
      <span className="text-xs text-gray-400">+ 2,142 more portals monitored</span>
      <div className="flex gap-1">
        {['🇫🇷', '🇮🇹', '🇪🇸', '🇵🇱', '🇨🇿', '🇸🇪', '🇧🇪'].map((f, i) => (
          <span key={i} className="text-xs">{f}</span>
        ))}
      </div>
    </div>
  </div>
)

const MatchPreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      Every tender is scored against your company profile — capabilities, certifications, track record, and regional presence. You only see opportunities where you have a real shot.
    </p>
    <div className="space-y-2.5">
      {[
        { title: 'Infrastructure Modernization Vienna', budget: '€2.4M', score: 94, flag: '🇦🇹', deadline: '14d' },
        { title: 'Smart Building Systems NRW', budget: '€3.1M', score: 87, flag: '🇩🇪', deadline: '21d' },
        { title: 'Digital Public Services Zurich', budget: 'CHF 1.8M', score: 82, flag: '🇨🇭', deadline: '28d' },
      ].map((m, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span className="text-base">{m.flag}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-800 truncate">{m.title}</div>
            <div className="text-xs text-gray-400 mt-0.5">{m.budget} · {m.deadline} left</div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${m.score}%` }} />
            </div>
            <span className="text-xs font-semibold text-blue-600 w-8 text-right">{m.score}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const AnalyzePreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      For every matched tender, the AI compares requirements against your profile and flags gaps — missing certifications, capacity issues, or regional constraints. Instantly, before you invest time.
    </p>
    <div className="space-y-2">
      {[
        { label: 'ISO 9001', met: true, note: 'Valid until 2027' },
        { label: 'ISO 27001', met: false, note: 'Required — not on file' },
        { label: 'Regional Presence (AT)', met: true, note: 'Vienna office' },
        { label: 'References (5+)', met: true, note: '12 projects found' },
        { label: 'Capacity (≥15 FTE)', met: null, note: '11 available — 4 short' },
      ].map((g, i) => (
        <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
            g.met === true ? 'bg-emerald-50 text-emerald-600' :
            g.met === false ? 'bg-red-50 text-red-500' :
            'bg-amber-50 text-amber-600'
          }`}>
            {g.met === true ? '✓' : g.met === false ? '✕' : '~'}
          </div>
          <span className="text-sm text-gray-700 flex-1">{g.label}</span>
          <span className={`text-xs ${
            g.met === true ? 'text-emerald-500' :
            g.met === false ? 'text-red-400' :
            'text-amber-500'
          }`}>{g.note}</span>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-400 mt-4">
      When gaps are found, the system searches our company database for consortium partners to close them.
    </p>
  </div>
)

const ReportPreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      Every match produces an AI-generated report — overall fit, risk assessment, recommended partners, and a concrete bid strategy. Decision-ready in minutes.
    </p>
    <div className="flex items-center gap-6 mb-5 pb-5 border-b border-gray-100">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">94%</div>
        <div className="text-[10px] text-gray-400 mt-0.5">Overall Fit</div>
      </div>
      <div className="h-8 w-px bg-gray-100" />
      <div className="text-center">
        <div className="text-2xl font-bold text-emerald-600">4/5</div>
        <div className="text-[10px] text-gray-400 mt-0.5">Requirements</div>
      </div>
      <div className="h-8 w-px bg-gray-100" />
      <div className="text-center">
        <div className="text-2xl font-bold text-amber-500">Low</div>
        <div className="text-[10px] text-gray-400 mt-0.5">Risk</div>
      </div>
    </div>
    <div className="space-y-2">
      {['Executive Summary', 'Requirement Mapping', 'Consortium Recommendation', 'Bid Strategy'].map((s, i) => (
        <div key={i} className="flex items-center gap-2.5 text-sm">
          <span className="w-5 h-5 rounded bg-gray-50 flex items-center justify-center text-[10px] font-semibold text-gray-400">{i + 1}</span>
          <span className="text-gray-600">{s}</span>
        </div>
      ))}
    </div>
  </div>
)


/* ═══════════════════════════════════════════════════════
   company.match Previews
   ═══════════════════════════════════════════════════════ */

const ReversePreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      Talk to our AI agent — it collects all the information it needs from you and creates a standardized tender automatically. Then it finds matching suppliers across Europe, sends out RFQs, and returns comparable offers.
    </p>
    <div className="flex items-center gap-2 mb-5">
      {['AI Interview', 'Auto-Tender', 'RFQ Sent', 'Offers'].map((s, i) => (
        <React.Fragment key={i}>
          <div className={`flex-1 py-2 px-3 rounded-lg text-center text-xs font-medium ${
            i === 3 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-gray-50 text-gray-600 border border-gray-100'
          }`}>{s}</div>
          {i < 3 && <ArrowRight className="h-3 w-3 text-gray-300 shrink-0" />}
        </React.Fragment>
      ))}
    </div>
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
      <div className="text-xs text-gray-400 mb-2">Example input</div>
      <p className="text-sm text-gray-600 leading-relaxed italic">
        "We need a certified partner for HVAC system installation across 3 office buildings in Vienna — KNX-compatible, energy class A, delivery by Q3 2026, budget around €400K."
      </p>
      <div className="mt-3 pt-3 border-t border-gray-200/60 flex items-center gap-4 text-xs text-gray-500">
        <span><span className="font-semibold text-gray-700">43</span> suppliers matched</span>
        <span><span className="font-semibold text-gray-700">16</span> offers received</span>
        <span><span className="font-semibold text-gray-700">72h</span> turnaround</span>
      </div>
    </div>
  </div>
)

const B2BPreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-4">
      Describe your challenge in your own words — our context engine matches against millions of company profiles, across 27 EU languages and all industries.
    </p>
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-4">
      <div className="text-xs text-gray-400 mb-1.5">Example input</div>
      <p className="text-sm text-gray-600 italic">
        "ISO 14001 certified environmental consulting firm with experience in Alpine construction projects and EIA reporting"
      </p>
    </div>
    <div className="space-y-2.5">
      {[
        { name: 'EcoTech Solutions GmbH', loc: 'Vienna, AT', tags: ['ISO 14001', 'ISO 9001'], score: 96, flag: '🇦🇹' },
        { name: 'AlpenGreen Consulting AG', loc: 'Innsbruck, AT', tags: ['ISO 14001', 'EMAS'], score: 93, flag: '🇦🇹' },
        { name: 'EnviroAssess GmbH', loc: 'Munich, DE', tags: ['ISO 14001'], score: 89, flag: '🇩🇪' },
      ].map((c, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <span className="text-base">{c.flag}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-800">{c.name}</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[10px] text-gray-400">{c.loc}</span>
              {c.tags.map((t, j) => (
                <span key={j} className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 font-medium">{t}</span>
              ))}
            </div>
          </div>
          <span className="text-xs font-semibold text-indigo-600">{c.score}%</span>
        </div>
      ))}
    </div>
    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
      Searching across DE, EN, FR, IT, ES, NL, PL + 20 more languages
    </div>
  </div>
)

const ProductPreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-4">
      Describe the component, material, or service you need — just like you'd explain it to a colleague. Our AI searches across millions of product catalogs from European suppliers.
    </p>
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-4">
      <div className="text-xs text-gray-400 mb-1.5">Example input</div>
      <p className="text-sm text-gray-600 italic">
        "Industrial water filtration system, min. 500m³/h throughput, stainless steel housing, modular design, suitable for wastewater treatment"
      </p>
    </div>
    <div className="space-y-2.5">
      {[
        { name: 'AquaPure Industrial Filter X-500', supplier: '🇩🇪 WaterTech GmbH', spec: '500m³/h · SS316L · Modular', score: 95 },
        { name: 'HydroClean Membrane System Pro', supplier: '🇦🇹 AquaSystems AG', spec: '480m³/h · SS304 · Compact', score: 89 },
        { name: 'EcoFilter Industrial RS-600', supplier: '🇳🇱 PureTech B.V.', spec: '600m³/h · SS316 · Heavy-duty', score: 83 },
      ].map((p, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-800">{p.name}</div>
            <div className="text-xs text-gray-400 mt-0.5">{p.supplier} · {p.spec}</div>
          </div>
          <span className="text-xs font-semibold text-indigo-600">{p.score}%</span>
        </div>
      ))}
    </div>
  </div>
)

const DatabasePreview = () => (
  <div>
    <p className="text-sm text-gray-500 leading-relaxed mb-5">
      Everything on this platform is powered by a database of over 10 million European companies — the vast majority of which have never registered on any marketplace. We index the real economy.
    </p>
    <div className="grid grid-cols-3 gap-4 mb-5">
      {[
        { value: '10M+', label: 'Companies' },
        { value: '27', label: 'Countries' },
        { value: '48M+', label: 'Products' },
      ].map((s, i) => (
        <div key={i} className="text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">{s.value}</div>
          <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
    <p className="text-xs text-gray-400 leading-relaxed">
      When you search, match, or post a tender — you reach into a market that's invisible on every other platform. Continuously enriched with certifications, financials, and project history.
    </p>
  </div>
)


/* ═══════════════════════════════════════════════════════
   Module Cards — visually distinct
   ═══════════════════════════════════════════════════════ */

const TenderModule: React.FC = () => {
  const tabs: TabItem[] = [
    { id: 'scan', icon: ScanLine, label: 'Scan', description: 'AI monitors 2,000+ portals across 27 EU countries — continuously, in context.', headline: <>Start scanning <span className="text-blue-600">tenders</span> today.</>, preview: <ScanPreview /> },
    { id: 'match', icon: CheckCircle2, label: 'Match', description: 'Every tender scored against your profile. Only opportunities you can win.', headline: <>Start matching <span className="text-blue-600">opportunities</span> today.</>, preview: <MatchPreview /> },
    { id: 'analyze', icon: BarChart3, label: 'Analyze', description: 'Automated gap analysis — requirements vs. your capabilities.', headline: <>Start analyzing <span className="text-blue-600">fit</span> today.</>, preview: <AnalyzePreview /> },
    { id: 'report', icon: FileText, label: 'Report', description: 'AI-generated fit reports with risk assessment and bid strategy.', headline: <>Start generating <span className="text-blue-600">reports</span> today.</>, preview: <ReportPreview /> },
  ]

  const [activeId, setActiveId] = useState(tabs[0].id)
  const activeTab = tabs.find(t => t.id === activeId)!

  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-blue-200/50 bg-white/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(59,130,246,0.06)] overflow-hidden">
        {/* Header with blue accent */}
        <div className="px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 border-b border-blue-100/50 bg-gradient-to-br from-blue-50/40 via-white to-white">
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3 py-1 text-[10px] font-semibold text-blue-700 uppercase tracking-wider">
              <Search className="h-3 w-3" />
              tender.match
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm px-4 shrink-0" asChild>
              <Link to="/tender-match" className="inline-flex items-center gap-1.5">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {activeTab.headline}
          </h3>
          <p className="text-sm text-gray-400 mt-2">AI-powered tender discovery across 2,000+ EU procurement portals</p>
        </div>
        <TabPreviewPanel tabs={tabs} activeId={activeId} onTabChange={setActiveId} accent="blue" />
      </div>
    </ScrollReveal>
  )
}

const CompanyModule: React.FC = () => {
  const tabs: TabItem[] = [
    { id: 'reverse', icon: RotateCcw, label: 'Reverse Tendering', description: 'Post your needs, receive 10–30 comparable offers automatically.', headline: <>Start matching <span className="text-indigo-600">suppliers</span> today.</>, preview: <ReversePreview /> },
    { id: 'b2b', icon: Handshake, label: 'B2B Matching', description: 'Context-based company search across 27 EU languages.', headline: <>Start matching <span className="text-indigo-600">partners</span> today.</>, preview: <B2BPreview /> },
    { id: 'product', icon: Package, label: 'Product Match', description: 'Natural language search across millions of product catalogs.', headline: <>Start matching <span className="text-indigo-600">products</span> today.</>, preview: <ProductPreview /> },
    { id: 'database', icon: Database, label: 'Company Database', description: '10M+ European companies — most never registered anywhere.', headline: <>Start discovering <span className="text-indigo-600">companies</span> today.</>, preview: <DatabasePreview /> },
  ]

  const [activeId, setActiveId] = useState(tabs[0].id)
  const activeTab = tabs.find(t => t.id === activeId)!

  return (
    <ScrollReveal delay={60}>
      <div className="rounded-2xl border border-indigo-200/50 bg-white/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(99,102,241,0.06)] overflow-hidden">
        {/* Header with indigo accent */}
        <div className="px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 border-b border-indigo-100/50 bg-gradient-to-br from-indigo-50/40 via-white to-white">
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-3 py-1 text-[10px] font-semibold text-indigo-700 uppercase tracking-wider">
              <Building2 className="h-3 w-3" />
              company.match
            </div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm px-4 shrink-0" asChild>
              <Link to="/company-match" className="inline-flex items-center gap-1.5">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {activeTab.headline}
          </h3>
          <p className="text-sm text-gray-400 mt-2">B2B intelligence across 10M+ European company profiles</p>
        </div>
        <TabPreviewPanel tabs={tabs} activeId={activeId} onTabChange={setActiveId} accent="indigo" />
      </div>
    </ScrollReveal>
  )
}


/* ═══════════════════════════════════════════════════════
   Main
   ═══════════════════════════════════════════════════════ */

const ProductModules: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-blue-600 tracking-[0.2em] uppercase text-xs font-semibold mb-3">
              Built for the full value chain
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Where Opportunities Meet<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">the Right Partners.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Two modules. Every step from discovery to deal — across borders, languages, and industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          <TenderModule />
          <CompanyModule />
        </div>
      </div>
    </section>
  )
}

export default ProductModules
