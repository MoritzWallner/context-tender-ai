"use client"

import type React from "react"
import { Users, CheckCircle, ArrowRight, Handshake, ShieldCheck, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import ScrollReveal from "@/components/ScrollReveal"

/* ─── Consortium Formation Mini Viz ─── */
const ConsortiumViz: React.FC = () => (
  <div className="w-full bg-gray-50 rounded-lg p-4 h-44 border border-gray-100 relative overflow-hidden">
    <style>{`
      @keyframes csm-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-4px); } }
      @keyframes csm-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3); } 50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); } }
      @keyframes csm-line { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
    `}</style>
    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Consortium Formation</p>
    <div className="flex items-center justify-center h-[calc(100%-20px)] gap-3">
      {/* Your company */}
      <div className="flex flex-col items-center gap-1" style={{ animation: 'csm-float 3s ease-in-out infinite' }}>
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-md" style={{ animation: 'csm-pulse 2s ease-in-out infinite' }}>
          You
        </div>
        <span className="text-[8px] text-gray-500">Lead</span>
      </div>

      {/* Connecting lines */}
      <div className="flex flex-col gap-2">
        {[
          { label: 'ISO 14001', color: 'bg-emerald-500', code: 'EP', delay: '0s' },
          { label: 'Regional AT', color: 'bg-purple-500', code: 'LB', delay: '0.4s' },
          { label: 'Certified', color: 'bg-amber-500', code: 'TC', delay: '0.8s' },
        ].map((p, i) => (
          <div key={i} className="flex items-center gap-1.5" style={{ animation: `csm-float ${3.5 + i * 0.3}s ease-in-out infinite ${p.delay}` }}>
            <div className="w-px h-4 bg-blue-200" />
            <div className={`w-7 h-7 rounded-md ${p.color} flex items-center justify-center text-white text-[8px] font-bold shadow-sm`}>{p.code}</div>
            <span className="text-[8px] text-gray-400 bg-white rounded px-1 py-0.5 border border-gray-100">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const features = [
  {
    icon: Users,
    title: "AI-Optimized Consortium Composition",
    description: "Gap analysis shows exactly which partner capabilities you're missing for each tender. AI finds the perfect complementary companies from 10M+ European profiles.",
    color: "blue" as const,
  },
  {
    icon: ShieldCheck,
    title: "Verified Track Records",
    description: "30 years of European tender data. See win rates, reliability scores, and certification status for every potential consortium partner before you reach out.",
    color: "blue" as const,
  },
  {
    icon: Handshake,
    title: "Rapid Team Assembly",
    description: "From gap identification to consortium ready in days, not weeks. Never miss a tender deadline because you couldn't find the right partner in time.",
    color: "blue" as const,
  },
]

const colorStyles = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
}

const ConsortiumBuilder: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
              Consortium Building
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Win Bigger Tenders with AI-Built Teams
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Many high-value tenders require capabilities you don't have alone. tender.match identifies your gaps and finds the right consortium partners — automatically.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Feature cards */}
          <div className="space-y-4">
            {features.map((feature, i) => {
              const Icon = feature.icon
              const c = colorStyles[feature.color]
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`h-5 w-5 ${c.text}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}

            <ScrollReveal delay={350}>
              <div className="flex items-center gap-3 pt-2">
                <Button size="default" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm" asChild>
                  <Link to="/waitlist">
                    Find Partners Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Trophy className="h-4 w-4 text-blue-600" />
                  <span>Avg. 3× higher win rate in consortiums</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Visualization + stats */}
          <ScrollReveal delay={150}>
            <div className="space-y-4">
              <Card className="border-gray-200 shadow-sm overflow-hidden">
                <div className="h-0.5 bg-blue-600" />
                <CardContent className="p-6">
                  <ConsortiumViz />

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      { value: '10M+', label: 'Partner profiles' },
                      { value: '27', label: 'EU countries' },
                      { value: '<48h', label: 'Team assembled' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <div className="text-base font-bold text-blue-600">{stat.value}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comparison callout */}
              <Card className="border-gray-200 shadow-sm bg-blue-50/40">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Traditional vs. AlpX consortium building</p>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="space-y-1.5">
                          <p className="text-gray-400 font-medium">Traditional</p>
                          <p className="text-gray-500">3–6 weeks to find partners</p>
                          <p className="text-gray-500">Limited to your network</p>
                          <p className="text-gray-500">Guesswork on capability fit</p>
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-blue-600 font-medium">With tender.match</p>
                          <p className="text-gray-700">&lt;48 hours to full team</p>
                          <p className="text-gray-700">10M+ verified companies</p>
                          <p className="text-gray-700">AI-verified gap coverage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ConsortiumBuilder
