"use client"

import React from 'react'

interface SectionDividerProps {
  label?: string
}

/**
 * Clean section divider — gradient line with optional centered label.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="relative w-full py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
          {label ? (
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest select-none shrink-0">
              {label}
            </span>
          ) : (
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <div className="w-1 h-1 rounded-full bg-gray-300" />
            </div>
          )}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default SectionDivider
