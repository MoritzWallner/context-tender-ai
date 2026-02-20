"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Globe, ArrowRight } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Link } from 'react-router-dom'

const getScoreColor = (score: number) => {
  if (score >= 90) return { bg: 'bg-emerald-50', text: 'text-emerald-700' }
  if (score >= 80) return { bg: 'bg-blue-50', text: 'text-blue-700' }
  if (score >= 70) return { bg: 'bg-amber-50', text: 'text-amber-700' }
  return { bg: 'bg-gray-50', text: 'text-gray-600' }
}

type CategoryId = 'tenders' | 'companies' | 'products' | 'projects'

interface CategoryConfig {
  id: CategoryId
  label: string
  placeholder: string
  hoverTitle: string
  hoverDesc: string
  results: { title: string; meta: string; score: number; flag: string }[]
}

const categories: Record<CategoryId, CategoryConfig> = {
  tenders: {
    id: 'tenders',
    label: 'Tender',
    placeholder: 'e.g., IT infrastructure modernization for municipal administration...',
    hoverTitle: 'Tender Discovery',
    hoverDesc: 'Search 2,000+ EU procurement portals in real time. Describe your ideal tender in plain language — our AI finds matches by context, not just keywords.',
    results: [
      { title: 'Digital Infrastructure Upgrade — Municipality of Vienna', meta: 'TED • €2.4M • Deadline: Mar 2026', score: 94, flag: '🇦🇹' },
      { title: 'Smart Building Management System — Canton Zurich', meta: 'SIMAP • CHF 1.8M • Deadline: Apr 2026', score: 87, flag: '🇨🇭' },
      { title: 'Cloud Migration Public Administration NRW', meta: 'bund.de • €3.1M • Deadline: Mar 2026', score: 82, flag: '🇩🇪' },
    ],
  },
  companies: {
    id: 'companies',
    label: 'Companies',
    placeholder: 'e.g., ISO 14001 certified environmental consulting firm in Austria...',
    hoverTitle: 'Company Intelligence',
    hoverDesc: 'Context-based search across 10M+ verified EU companies. Find suppliers, consortium partners, or subcontractors by capability, certification, and region.',
    results: [
      { title: 'EcoTech Solutions GmbH', meta: 'Vienna, AT • Environmental Consulting • ISO 14001', score: 96, flag: '🇦🇹' },
      { title: 'GreenBuild Engineering AG', meta: 'Zurich, CH • Sustainable Construction • ISO 9001', score: 91, flag: '🇨🇭' },
      { title: 'CleanAir Systems B.V.', meta: 'Amsterdam, NL • Air Quality Systems', score: 85, flag: '🇳🇱' },
    ],
  },
  products: {
    id: 'products',
    label: 'Product',
    placeholder: 'e.g., Industrial water filtration system, stainless steel, 500L/h...',
    hoverTitle: 'Product Search',
    hoverDesc: 'Describe what you need in natural language. We search millions of product catalogs across EU suppliers to find the best match — with specs and supplier info.',
    results: [
      { title: 'AquaPure X-500 Industrial Filter', meta: 'WaterTech GmbH • Stainless Steel • 600L/h', score: 95, flag: '🇩🇪' },
      { title: 'HydroClean Pro Series', meta: 'AquaSystems AG • Multi-stage • 500L/h', score: 89, flag: '🇨🇭' },
      { title: 'EcoFilter Industrial Line', meta: 'PureTech B.V. • Modular • 450L/h', score: 83, flag: '🇳🇱' },
    ],
  },
  projects: {
    id: 'projects',
    label: 'Projects',
    placeholder: 'e.g., Smart city infrastructure project in central Europe...',
    hoverTitle: 'Project Explorer',
    hoverDesc: 'Find similar completed EU projects and the companies that delivered them. Useful for benchmarking bids and identifying experienced consortium partners.',
    results: [
      { title: 'Vienna Smart Grid 2026', meta: 'City of Vienna • €12M • Active', score: 92, flag: '🇦🇹' },
      { title: 'Berlin Digital Campus', meta: 'Berlin Senate • €8.5M • Planning', score: 86, flag: '🇩🇪' },
      { title: 'Zurich GreenTech Hub', meta: 'Canton Zurich • CHF 5M • Active', score: 79, flag: '🇨🇭' },
    ],
  },
}

/* Dot grid icon (3x2) */
const DotGridIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
    <circle cx="1.5" cy="1.5" r="1.2" />
    <circle cx="5" cy="1.5" r="1.2" />
    <circle cx="8.5" cy="1.5" r="1.2" />
    <circle cx="1.5" cy="6" r="1.2" />
    <circle cx="5" cy="6" r="1.2" />
    <circle cx="8.5" cy="6" r="1.2" />
  </svg>
)

interface ProductSearchBarProps {
  category: CategoryId
  accentColor?: 'blue' | 'indigo'
  /**
   * Which tabs to show.
   * - Pass a single-item array (e.g. ['tenders']) → single-tab mode: clicking navigates to that module page.
   * - Pass multiple tabs (e.g. all 4) → multi-tab mode: clicking switches the active tab IN PLACE, no navigation.
   */
  visibleTabs?: CategoryId[]
}

const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
  category,
  accentColor = 'blue',
  visibleTabs,
}) => {
  const tabsToShow: CategoryId[] = visibleTabs ?? [category]
  // Multi-tab mode: switching tabs stays on page
  const isMultiTabMode = tabsToShow.length > 1

  const [activeTab, setActiveTab] = useState<CategoryId>(category)
  const config = categories[activeTab]

  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [visibleResults, setVisibleResults] = useState<number[]>([])
  const [typedText, setTypedText] = useState('')
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isTyping = inputValue.length > 0
  const isIndigo = accentColor === 'indigo'

  // Reset animation when tab changes
  useEffect(() => {
    setInputValue('')
    setTypedText('')
    setShowResults(false)
    setVisibleResults([])
  }, [activeTab])

  useEffect(() => {
    if (isTyping) {
      if (typingRef.current) clearInterval(typingRef.current)
      setTypedText('')
      return
    }

    setTypedText('')
    setShowResults(false)
    setVisibleResults([])

    const target = config.placeholder
    let i = 0

    if (typingRef.current) clearInterval(typingRef.current)

    const delay = setTimeout(() => {
      typingRef.current = setInterval(() => {
        if (i < target.length) {
          setTypedText(target.slice(0, i + 1))
          i++
        } else {
          if (typingRef.current) clearInterval(typingRef.current)
          setTimeout(() => setShowResults(true), 500)
        }
      }, 22)
    }, 600)

    return () => {
      clearTimeout(delay)
      if (typingRef.current) clearInterval(typingRef.current)
    }
  }, [isTyping, config.placeholder])

  useEffect(() => {
    if (!showResults || isTyping) { setVisibleResults([]); return }
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let i = 0; i < 3; i++) {
      timers.push(setTimeout(() => setVisibleResults(prev => [...prev, i]), i * 180))
    }
    return () => timers.forEach(clearTimeout)
  }, [showResults, isTyping])

  const displayPlaceholder = !isTyping && !isFocused

  // Active tab color: faded blue (like hero text) instead of solid blue-600
  const activeTabClass = isIndigo
    ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
    : 'bg-blue-50 text-blue-600 border border-blue-200'

  return (
    <div className="w-full max-w-2xl mx-auto">
      <style>{`@keyframes psb-cursor-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }`}</style>

      {/* Search Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-4 sm:py-5">
          <Globe className="h-5 w-5 shrink-0 text-gray-400" />
          <div className="flex-1 min-w-0 h-6 flex items-center relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="absolute inset-0 w-full bg-transparent text-sm sm:text-base text-gray-800 outline-none placeholder-transparent"
              placeholder={config.placeholder}
              aria-label={`Search ${config.label}`}
            />
            {displayPlaceholder && (
              <span className="pointer-events-none absolute inset-0 flex items-center text-sm sm:text-base text-gray-400 truncate">
                {typedText}
                <span
                  className={`inline-block w-[2px] h-[18px] ml-0.5 align-middle shrink-0 ${
                    isIndigo ? 'bg-indigo-400' : 'bg-blue-400'
                  }`}
                  style={{ animation: 'psb-cursor-blink 1s step-end infinite' }}
                />
              </span>
            )}
          </div>
        </div>

        {/* Category Tabs + Submit */}
        <div className="border-t border-gray-100 px-3 sm:px-4 py-2.5 flex items-center gap-0.5 sm:gap-1">
          {tabsToShow.map((tabId, idx) => {
            const isActive = tabId === activeTab
            const cat = categories[tabId]

            // In multi-tab mode: all tabs switch in-place (no navigation)
            // In single-tab mode: only tenders/companies link to their page; products/projects = #
            const tabLink = isMultiTabMode
              ? '#'
              : (tabId === 'tenders' ? '/tender-match'
                : tabId === 'companies' ? '/company-match'
                : '#')

            return (
              <React.Fragment key={tabId}>
                {idx > 0 && <div className="w-px h-6 bg-gray-200 mx-1 shrink-0" />}
                <HoverCard openDelay={300} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      to={tabLink}
                      className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? activeTabClass
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                      }`}
                      onClick={e => {
                        // Always prevent navigation when multi-tab — just switch active tab
                        if (isMultiTabMode) {
                          e.preventDefault()
                          setActiveTab(tabId)
                        } else if (tabId === 'products' || tabId === 'projects') {
                          e.preventDefault()
                        }
                      }}
                    >
                      <DotGridIcon className={isActive ? (isIndigo ? 'text-indigo-400' : 'text-blue-400') : 'text-gray-400'} />
                      <span>{cat.label}</span>
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent side="bottom" sideOffset={10} className="w-60 p-3">
                    <div className="flex items-start gap-2.5">
                      <div className={`p-1.5 rounded-md shrink-0 mt-0.5 ${isIndigo ? 'bg-indigo-50' : 'bg-blue-50'}`}>
                        <svg className={`w-3 h-3 ${isIndigo ? 'text-indigo-500' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 mb-0.5">{cat.hoverTitle}</p>
                        <p className="text-[11px] text-gray-500 leading-relaxed">{cat.hoverDesc}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </React.Fragment>
            )
          })}
          {/* Submit arrow button */}
          <div className="ml-auto">
            <Link
              to="/waitlist"
              className={`inline-flex items-center justify-center w-11 h-10 rounded-xl text-white shadow-sm transition-all duration-200 hover:scale-105 ${
                isIndigo
                  ? 'bg-indigo-500 hover:bg-indigo-600'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Result preview */}
      {!isTyping && (
        <div className={`mt-2.5 transition-all duration-500 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden divide-y divide-gray-50">
            {config.results.map((result, i) => {
              const isRevealed = visibleResults.includes(i)
              const scoreColor = getScoreColor(result.score)
              return (
                <div key={i} className="transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                  {!isRevealed ? (
                    <div className="flex items-center gap-3 px-5 py-3.5">
                      <Skeleton className="h-6 w-6 rounded shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <Skeleton className="h-3 w-3/4" />
                        <Skeleton className="h-2.5 w-1/2" />
                      </div>
                      <Skeleton className="h-5 w-10 rounded-full" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50/50 cursor-pointer transition-colors group">
                      <span className="text-base shrink-0">{result.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium text-gray-800 truncate transition-colors ${
                          isIndigo ? 'group-hover:text-indigo-600' : 'group-hover:text-blue-600'
                        }`}>{result.title}</p>
                        <p className="text-xs text-gray-400 truncate mt-0.5">{result.meta}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${scoreColor.bg} ${scoreColor.text}`}>
                        {result.score}%
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
            <div className="px-5 py-2.5 flex items-center justify-between bg-gray-50/50 border-t border-gray-100">
              <span className="text-xs text-gray-400">AI-powered results — join to search for real</span>
              <Link
                to="/waitlist"
                className={`text-xs font-semibold flex items-center gap-1 ${
                  isIndigo ? 'text-indigo-600 hover:text-indigo-700' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                Try it free
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductSearchBar
