"use client"

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductSearchBar from '@/components/ProductSearchBar'

/* ─── Animated Counter Hook ─── */
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = Date.now()
        const tick = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        tick()
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return { count, ref }
}

const StatBadge: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({ value, suffix, label, delay }) => {
  const { count, ref } = useCountUp(value, 1800)
  const formatNumber = (n: number) => {
    if (value >= 1000000) return `${(n / 1000000).toFixed(n >= value ? 0 : 1)}M`
    if (value >= 1000) return `${(n / 1000).toFixed(n >= value ? 0 : 1)}K`
    return n.toLocaleString()
  }
  return (
    <div ref={ref} className="text-center" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        {formatNumber(count)}{suffix}
      </div>
      <div className="text-[11px] text-gray-400 font-medium mt-0.5">{label}</div>
    </div>
  )
}

const SearchHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative z-10 w-full max-w-3xl">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Badge */}
          <Link
            to="/waitlist"
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 text-blue-700 text-xs font-semibold hover:bg-blue-100 hover:border-blue-300 transition-all shadow-sm backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
            Try it for free
            <ArrowRight className="h-3 w-3" />
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold text-gray-900 tracking-tight leading-[1.06] mb-5">
            Turn Your Needs{' '}<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">Into the Right Matches.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Discover public tenders across 2,000+ EU portals, find the right suppliers from 10M+ company profiles, and close deals faster — all in one platform.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-6">
          <StatBadge value={2000} suffix="+" label="EU Portals" delay={0} />
          <div className="w-px h-8 bg-gray-200" />
          <StatBadge value={10000000} suffix="+" label="Companies" delay={100} />
          <div className="w-px h-8 bg-gray-200" />
          <StatBadge value={500000} suffix="+" label="Tenders" delay={200} />
          <div className="w-px h-8 bg-gray-200 hidden sm:block" />
          <div className="hidden sm:block">
            <StatBadge value={27} suffix="" label="Countries" delay={300} />
          </div>
        </div>

        {/* Search bar — alle 4 Tabs */}
        <ProductSearchBar
          category="tenders"
          accentColor="blue"
          visibleTabs={['tenders', 'companies', 'products', 'projects']}
        />
      </div>
    </section>
  )
}

export default SearchHero
