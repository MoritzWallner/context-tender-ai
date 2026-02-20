"use client"

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/ScrollReveal'

const MainCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-sm px-6 sm:px-14 py-14 sm:py-18 text-center">
            {/* Subtle accent glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-blue-500/[0.04] blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-5">
                Get Started
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Test it for free.
              </h2>
              <p className="text-base text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
                See what AlpX finds for your business — tenders, suppliers, and partners you'd never discover on your own. No credit card. No commitment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="default" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm px-6 h-11" asChild>
                  <Link to="/waitlist" className="inline-flex items-center gap-2">
                    Try it for free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="default" className="border-gray-200 text-gray-600 hover:bg-gray-50 font-medium px-6 h-11" asChild>
                  <Link to="/waitlist">
                    Book a Demo
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
                <span>No credit card required</span>
                <span className="w-px h-3 bg-gray-200 hidden sm:block" />
                <span>50 free searches</span>
                <span className="w-px h-3 bg-gray-200 hidden sm:block" />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default MainCTA
