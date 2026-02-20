"use client"

import React from 'react'
import { Globe, Building2, FileText, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import ScrollReveal from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/ProductPageUtils'

const stats = [
  {
    icon: Globe,
    value: 2000,
    suffix: '+',
    label: 'Procurement Portals',
    color: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Building2,
    value: 10000000,
    suffix: '+',
    label: 'Company Profiles',
    color: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: FileText,
    value: 500000,
    suffix: '+',
    label: 'Active Tenders',
    color: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    icon: MapPin,
    value: 27,
    suffix: '',
    label: 'EU Countries',
    color: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
]

const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-5">
                    <div className={`w-9 h-9 rounded-lg ${stat.iconBg} flex items-center justify-center mb-3`}>
                      <Icon className={`h-4.5 w-4.5 ${stat.color}`} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-0.5`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
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

export default StatsCounter
