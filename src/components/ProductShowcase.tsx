"use client"

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Building2, RotateCcw, Users, Package, TrendingUp, Shield, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/ScrollReveal'

/* ─── tender.match Mini Visualization ─── */
const TenderMiniViz: React.FC = () => (
  <div className="relative w-full bg-gray-50 rounded-lg p-4 overflow-hidden h-44 border border-gray-100">
    <style>{`
      @keyframes tm-slide { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
    `}</style>
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Live Matching</p>
    <div className="space-y-2">
      {[
        { flag: '🇦🇹', name: 'Infrastructure Modernization Vienna', score: 94, delay: '0s' },
        { flag: '🇩🇪', name: 'Smart Building Systems NRW', score: 87, delay: '0.5s' },
        { flag: '🇨🇭', name: 'Digital Public Services Zurich', score: 79, delay: '1s' },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-md p-2.5 border border-gray-100 flex items-center gap-2.5 shadow-sm"
          style={{ animation: `tm-slide 4s ease-in-out infinite ${t.delay}` }}
        >
          <span className="text-sm">{t.flag}</span>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-medium text-gray-700 truncate">{t.name}</div>
            <div className="mt-1 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${t.score}%` }} />
            </div>
          </div>
          <span className="text-[11px] font-semibold text-blue-600 shrink-0">{t.score}%</span>
        </div>
      ))}
    </div>
  </div>
)

/* ─── company.match Mini Visualization ─── */
const CompanyMiniViz: React.FC = () => (
  <div className="relative w-full bg-gray-50 rounded-lg p-4 overflow-hidden h-44 border border-gray-100">
    <style>{`
      @keyframes cm-pulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.15); opacity: 0.2; } }
      @keyframes cm-orbit { 0% { transform: rotate(0deg) translateX(44px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(44px) rotate(-360deg); } }
    `}</style>
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Context Matching</p>
    <div className="flex items-center justify-center h-[calc(100%-24px)]">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div className="absolute w-20 h-20 rounded-full border border-emerald-200" style={{ animation: 'cm-pulse 3s ease-in-out infinite' }} />
        </div>
        {[
          { label: 'EP', color: 'bg-blue-500', delay: '0s' },
          { label: 'TC', color: 'bg-purple-500', delay: '-4s' },
          { label: 'LB', color: 'bg-amber-500', delay: '-8s' },
          { label: 'IS', color: 'bg-emerald-400', delay: '-2s' },
        ].map((node, i) => (
          <div key={i} className="absolute inset-0 flex items-center justify-center" style={{ animation: `cm-orbit 12s linear infinite ${node.delay}` }}>
            <div className={`w-6 h-6 rounded-md ${node.color} flex items-center justify-center shadow-sm text-[9px] font-bold text-white`}>
              {node.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
              Our Products
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Two Products. Complete Procurement Intelligence.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              From finding opportunities to building winning teams — everything your procurement needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* ─── tender.match ─── */}
          <ScrollReveal delay={0}>
            <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border-gray-200 h-full flex flex-col">
              <div className="h-0.5 bg-blue-600" />
              <CardContent className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Search className="h-4.5 w-4.5 text-blue-600" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">tender.match</h3>
                    <p className="text-xs font-medium text-blue-600">Tender Discovery & Monitoring</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Never miss a relevant tender again. AI-powered discovery across 2,000+ European procurement portals. Our matching engine understands your capabilities and finds opportunities that actually fit.
                </p>

                <TenderMiniViz />

                <div className="mt-5 space-y-2">
                  {[
                    { icon: TrendingUp, text: 'Semantic matching across 27 EU countries' },
                    { icon: Shield, text: 'Automated gap analysis for every opportunity' },
                    { icon: Clock, text: 'Real-time monitoring with instant alerts' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                        <f.icon className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">{f.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium" asChild>
                    <Link to="/tender-match" className="inline-flex items-center gap-1.5">
                      Explore tender.match
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* ─── company.match ─── */}
          <ScrollReveal delay={120}>
            <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border-gray-200 h-full flex flex-col">
              <div className="h-0.5 bg-emerald-500" />
              <CardContent className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <Building2 className="h-4.5 w-4.5 text-emerald-600" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">company.match</h3>
                    <p className="text-xs font-medium text-emerald-600">Context-Based B2B Intelligence</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Europe's first truly context-based B2B company database. 10M+ enriched company profiles. Find partners, suppliers, and collaborators — even companies that have never registered on any platform.
                </p>

                <CompanyMiniViz />

                <div className="mt-5 space-y-3">
                  {[
                    {
                      icon: RotateCcw,
                      title: 'Reverse Tendering',
                      desc: 'Post your needs — AI searches 10M+ companies, sends RFQs, compares 10–30 suppliers automatically.',
                      iconBg: 'bg-emerald-50 text-emerald-600',
                    },
                    {
                      icon: Users,
                      title: 'B2B Matching',
                      desc: 'Context-driven partner matching with customizable criteria. Describe your problem, we find who solves it.',
                      iconBg: 'bg-blue-50 text-blue-600',
                    },
                    {
                      icon: Package,
                      title: 'Product Match',
                      desc: 'Natural language product search across catalogs from 10M+ companies.',
                      iconBg: 'bg-purple-50 text-purple-600',
                    },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-md ${s.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <s.icon className="h-3 w-3" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800">{s.title}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-medium" asChild>
                    <Link to="/company-match" className="inline-flex items-center gap-1.5">
                      Explore company.match
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
