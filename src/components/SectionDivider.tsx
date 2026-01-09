import type React from "react"

interface SectionDividerProps {
  variant?: "dots" | "line" | "wave"
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = "dots" }) => {
  if (variant === "dots") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>
    )
  }

  if (variant === "line") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
    )
  }

  if (variant === "wave") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <svg className="w-full h-4 text-slate-200" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path
            d="M0 10 Q 150 0, 300 10 T 600 10 T 900 10 T 1200 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
    )
  }

  return null
}

export default SectionDivider
