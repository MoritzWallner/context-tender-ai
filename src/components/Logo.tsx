import type React from "react"

const Logo: React.FC<{ className?: string; iconOnly?: boolean; size?: "sm" | "md" | "lg" }> = ({
  className,
  iconOnly = false,
  size = "sm",
}) => {
  const sizeClass = {
    sm: "h-10",
    md: "h-16",
    lg: "h-20",
  }[size]

  const finalClassName = className || sizeClass

  return (
    <div className={`flex items-center ${finalClassName}`}>
      <img src="/alpx-logo.png" alt="AlpX Logo" className="w-auto h-12" />
    </div>
  )
}

export default Logo
