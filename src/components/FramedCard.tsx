import type React from "react"

interface FramedCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "compact" | "highlight"
}

const FramedCard: React.FC<FramedCardProps> = ({ children, className = "", variant = "default" }) => {
  const paddingClass = {
    default: "p-1.5",
    compact: "p-1",
    highlight: "p-2",
  }[variant]

  const borderClass = {
    default: "border-gray-300",
    compact: "border-gray-300",
    highlight: "border-blue-300",
  }[variant]

  return (
    <div className={`relative ${paddingClass}`}>
      {/* Outer dashed border */}
      <div className={`absolute inset-0 border border-dashed ${borderClass} rounded-[20px] pointer-events-none`} />

      {/* Corner markers */}
      <div className={`absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 ${borderClass}`} />
      <div className={`absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 ${borderClass}`} />
      <div className={`absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 ${borderClass}`} />
      <div className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 ${borderClass}`} />

      {/* Inner card */}
      <div className={`bg-white border border-dashed ${borderClass} rounded-2xl p-8 ${className}`}>{children}</div>
    </div>
  )
}

export default FramedCard
