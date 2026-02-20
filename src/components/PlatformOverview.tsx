"use client"

import React from 'react'
import { Search, Zap, Handshake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'Search tenders, companies, products, and projects across Europe. Our AI understands context — describe what you need in your own words.',
    color: 'blue' as const,
  },
  {
    icon: Zap,
    number: '02',
    title: 'Analyze',
    description: 'Automated gap analysis, capability matching, and fit scoring. Know exactly which opportunities you can win — and what it takes.',
    color: 'purple' as const,
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Win',
    description: 'Data-driven partner matching for winning consortiums. From discovery to partnership in minutes, not months.',
    color: 'emerald' as const,
  },
]

const colorStyles = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
  emerald:{ bg: 'bg-emerald-50',text: 'text-emerald-600',badge: 'bg-emerald-100 text-emerald-700' },
}

const PlatformOverview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-blue-600 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              One Platform. Three Steps.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              From finding opportunities to building winning teams — everything in one workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connection lines (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] h-px bg-gray-200 border-t border-dashed border-gray-200" />

          {steps.map((step, i) => {
            const Icon = step.icon
            const c = colorStyles[step.color]
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <Card className="relative border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white text-center group">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`inline-flex items-center justify-center h-5 px-2.5 rounded-full text-[10px] font-semibold tracking-wider ${c.badge}`}>
                      {step.number}
                    </span>
                  </div>
                  <CardContent className="p-6 pt-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${c.bg} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className={`h-5 w-5 ${c.text}`} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview
